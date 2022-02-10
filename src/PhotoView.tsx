import type React from 'react';
import { Children, cloneElement, useContext, useEffect, useRef, useState } from 'react';
import useInitial from './hooks/useInitial';
import useMethods from './hooks/useMethods';
import type { PhotoContextType } from './photo-context';
import PhotoContext from './photo-context';
import isTouchDevice from './utils/isTouchDevice';

export interface PhotoViewProps {
  /**
   * 图片地址
   */
  src?: string;
  /**
   * 自定义渲染，优先级比 src 低
   */
  render?: (props: Partial<React.HTMLAttributes<HTMLElement>>) => React.ReactNode;
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

const PhotoView: React.FC<PhotoViewProps> = ({ src, render, width, height, children }) => {
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

  const fn = useMethods({
    render(props: Partial<React.HTMLAttributes<HTMLElement>>) {
      if (render) {
        return render(props);
      }
      return undefined;
    },
    touchStart(e: React.TouchEvent) {
      const { clientX, clientY } = e.touches[0];
      updatePosition({
        clientX,
        clientY,
      });
      if (children) {
        const { onTouchStart } = children.props;
        if (onTouchStart) {
          onTouchStart(e);
        }
      }
    },
    touchEnd(e: React.TouchEvent) {
      const { clientX, clientY } = e.changedTouches[0];
      if (position.clientX === clientX && position.clientY === clientY) {
        photoContext.show(key);
      }
      if (children) {
        const { onTouchEnd } = children.props;
        if (onTouchEnd) {
          onTouchEnd(e);
        }
      }
    },
    click(e: React.MouseEvent) {
      photoContext.show(key);
      if (children) {
        const { onClick } = children.props;
        if (onClick) {
          onClick(e);
        }
      }
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
