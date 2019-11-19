import React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './SlideWrap.less';

const SlideWrap: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  const dialogNode = React.useMemo(
    () => {
      // 容器
      const dialogNode = document.createElement('section');
      document.body.appendChild(dialogNode);
      return dialogNode;
    },
    [] as readonly [],
  );
  const originalOverflowCallback = React.useRef('');

  React.useEffect(
    () => {
      const { style } = document.body;
      originalOverflowCallback.current = style.overflow;
      style.overflow = 'hidden';

      return () => {
        const { style } = document.body;
        style.overflow = originalOverflowCallback.current;
        // 清除容器
        document.body.removeChild(dialogNode);
      };
    },
    [] as readonly [],
  );

  return createPortal(
    <div className={classNames('PhotoView-SlideWrap', className)}>
      {children}
    </div>,
    dialogNode,
  );
};

SlideWrap.displayName = 'SlideWrap';

export default SlideWrap;
