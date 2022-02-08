import type React from 'react';
import { Children, cloneElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { PhotoContextType } from './photo-context';
import PhotoContext from './photo-context';
import isTouchDevice from './utils/isTouchDevice';

export interface IPhotoConsumer {
  src: string;
  children?: React.ReactElement;
}

const PhotoConsumer: React.FC<IPhotoConsumer> = ({ src, children }) => {
  const photoContext = useContext<PhotoContextType>(PhotoContext);
  const key = useMemo(() => photoContext.uniqueId(), []);
  const [position, updatePosition] = useState<{
    clientX: number | undefined;
    clientY: number | undefined;
  }>({
    clientX: undefined,
    clientY: undefined,
  });
  const originRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      photoContext.removeItem(key);
    };
  }, []);

  useEffect(() => {
    photoContext.updateItem({
      key,
      src,
      originRef,
    });
  }, [src]);

  function handleTouchStart(e: React.TouchEvent) {
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
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const { clientX, clientY } = e.changedTouches[0];
    if (position.clientX === clientX && position.clientY === clientY) {
      photoContext.onShow(key);
    }
    if (children) {
      const { onTouchEnd } = children.props;
      if (onTouchEnd) {
        onTouchEnd(e);
      }
    }
  }

  function handleClick(e: React.MouseEvent) {
    photoContext.onShow(key);
    if (children) {
      const { onClick } = children.props;
      if (onClick) {
        onClick(e);
      }
    }
  }

  if (children) {
    return Children.only(
      cloneElement(
        children,
        isTouchDevice
          ? {
              onTouchStart: handleTouchStart,
              onTouchEnd: handleTouchEnd,
              ref: originRef,
            }
          : { onClick: handleClick, ref: originRef },
      ),
    );
  }
  return null;
};

export default PhotoConsumer;
