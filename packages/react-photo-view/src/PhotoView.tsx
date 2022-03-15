import type React from 'react';
import { Children, cloneElement, useContext, useEffect, useRef, useState } from 'react';
import useInitial from './hooks/useInitial';
import useMethods from './hooks/useMethods';
import type { PhotoContextType } from './photo-context';
import PhotoContext from './photo-context';
import type { PhotoRenderParams } from './types';
import isTouchDevice from './utils/isTouchDevice';
import findAncestor from './utils/findAncestor';

export interface PhotoViewProps {
  /**
   * 图片地址
   */
  src?: string;
  /**
   * 自定义渲染，优先级比 src 低
   */
  render?: (props: PhotoRenderParams) => React.ReactNode;
  /**
   * 自定义渲染节点宽度
   */
  width?: number;
  /**
   * 自定义渲染节点高度
   */
  height?: number;
  /**
   * 子节点，一般为缩略图
   */
  children?: React.ReactElement;
  /**
   * 点击内容时是否打开预览
   */
  shouldOpenSlider?: (e: (React.TouchEvent | React.MouseEvent)) => boolean;
}

const defaultShouldOpenSlider = (e: React.TouchEvent | React.MouseEvent) => {
  return findAncestor(e.target as HTMLElement, element => element.tagName === 'A') === null;
};

const PhotoView: React.FC<PhotoViewProps> = ({ src, render, width, height, children, shouldOpenSlider = defaultShouldOpenSlider }) => {
  const photoContext = useContext<PhotoContextType>(PhotoContext);
  const key = useInitial(() => photoContext.nextId());
  const [position, updatePosition] = useState({
    clientX: undefined as number | undefined,
    clientY: undefined as number | undefined,
  });
  const originRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      photoContext.remove(key);
    };
  }, []);

  function invokeChildrenFn(eventName: string, e: React.SyntheticEvent) {
    if (children) {
      const eventFn = children.props[eventName];
      if (eventFn) {
        eventFn(e);
      }
    }
  }

  const fn = useMethods({
    render(props: PhotoRenderParams) {
      return render && render(props);
    },
    touchStart(e: React.TouchEvent) {
      const { clientX, clientY } = e.touches[0];
      updatePosition({
        clientX,
        clientY,
      });
      invokeChildrenFn('onTouchStart', e);
    },
    touchEnd(e: React.TouchEvent) {
      const { clientX, clientY } = e.changedTouches[0];
      if (position.clientX === clientX && position.clientY === clientY) {
        if (shouldOpenSlider(e)) {
          photoContext.show(key);
        }
      }
      invokeChildrenFn('onTouchEnd', e);
    },
    click(e: React.MouseEvent) {
      if (shouldOpenSlider(e)) {
        photoContext.show(key);
      }
      invokeChildrenFn('onClick', e);
    },
  });

  useEffect(() => {
    photoContext.update({
      key,
      src,
      originRef,
      render: fn.render,
      width,
      height,
    });
  }, [src]);

  if (children) {
    return Children.only(
      cloneElement(
        children,
        isTouchDevice
          ? {
              onTouchStart: fn.touchStart,
              onTouchEnd: fn.touchEnd,
              ref: originRef,
            }
          : { onClick: fn.click, ref: originRef },
      ),
    );
  }
  return null;
};

export default PhotoView;
