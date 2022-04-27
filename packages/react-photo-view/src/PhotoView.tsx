import type React from 'react';
import { Children, cloneElement, useContext, useEffect, useRef } from 'react';
import useInitial from './hooks/useInitial';
import useMethods from './hooks/useMethods';
import type { PhotoContextType } from './photo-context';
import PhotoContext from './photo-context';
import type { PhotoRenderParams } from './types';

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
   * 自定义覆盖节点
   */
  overlay?: React.ReactNode;
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
}

const PhotoView: React.FC<PhotoViewProps> = ({ src, render, overlay, width, height, children }) => {
  const photoContext = useContext<PhotoContextType>(PhotoContext);
  const key = useInitial(() => photoContext.nextId());
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
    click(e: React.MouseEvent) {
      photoContext.show(key);
      invokeChildrenFn('onClick', e);
    },
  });

  useEffect(() => {
    photoContext.update({
      key,
      src,
      originRef,
      render: fn.render,
      overlay,
      width,
      height,
    });
  }, [src]);

  if (children) {
    return Children.only(cloneElement(children, { onClick: fn.click, ref: originRef }));
  }
  return null;
};

export default PhotoView;
