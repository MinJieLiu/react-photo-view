import React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './SlideWrap.less';

const SlideWrap: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...restProps }) => {
  const dialogNode = React.useRef<HTMLElement>(document.createElement('section'));
  const originalOverflowCallback = React.useRef('');

  React.useEffect(() => {
    document.body.appendChild(dialogNode.current);
    const { style } = document.body;
    originalOverflowCallback.current = style.overflow;
    style.overflow = 'hidden';

    return () => {
      style.overflow = originalOverflowCallback.current;
      // 清除容器
      document.body.removeChild(dialogNode.current);
    };
  }, []);

  return createPortal(
    <div className={classNames('PhotoView-SlideWrap', className)} {...restProps}>
      {children}
    </div>,
    dialogNode.current,
  );
};

SlideWrap.displayName = 'SlideWrap';

export default SlideWrap;
