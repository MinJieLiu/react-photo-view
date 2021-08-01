import React from 'react';
import uniqueId from 'lodash.uniqueid';
import isTouchDevice from './utils/isTouchDevice';
import PhotoContext, { PhotoContextType } from './photo-context';

export interface IPhotoConsumer {
  src: string;
  intro?: React.ReactNode;
  children?: React.ReactElement;
}

const PhotoConsumer: React.FC<IPhotoConsumer> = ({ src, intro, children }) => {
  const photoContext = React.useContext<PhotoContextType>(PhotoContext);
  const key = React.useMemo<string>(() => uniqueId(), []);
  const [position, updatePosition] = React.useState<{
    clientX: number | undefined;
    clientY: number | undefined;
  }>({
    clientX: undefined,
    clientY: undefined,
  });
  const photoTriggerRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    return () => {
      photoContext.removeItem(key);
    };
  }, []);

  React.useEffect(() => {
    photoContext.updateItem({
      key,
      src,
      originRef: photoTriggerRef.current,
      intro,
    });
  }, [src, intro])

  function handleTouchStart(e) {
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

  function handleTouchEnd(e) {
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

  function handleClick(e) {
    photoContext.onShow(key);
    if (children) {
      const { onClick } = children.props;
      if (onClick) {
        onClick(e);
      }
    }
  }

  if (children) {
    return React.Children.only(
      React.cloneElement(
        children,
        isTouchDevice
          ? {
              onTouchStart: handleTouchStart,
              onTouchEnd: handleTouchEnd,
              ref: photoTriggerRef,
            }
          : { onClick: handleClick, ref: photoTriggerRef },
      ),
    );
  }
  return null;
};

export default PhotoConsumer;
