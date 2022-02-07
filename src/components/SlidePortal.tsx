import React from 'react';
import { createPortal } from 'react-dom';
import useInitial from '../hooks/useInitial';
import './SlidePortal.less';

const SlidePortal: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...restProps }) => {
  const dialogNode = useInitial(() => document.createElement('section'));

  React.useEffect(() => {
    document.body.appendChild(dialogNode);
    return () => {
      document.body.removeChild(dialogNode);
    };
  }, []);

  return createPortal(
    <div
      className={`PhotoView-SlidePortal${className ? ` ${className}` : ''}`}
      role="dialog"
      id="PhotoView_Slider"
      {...restProps}
    >
      {children}
    </div>,
    dialogNode,
  );
};

export default SlidePortal;
