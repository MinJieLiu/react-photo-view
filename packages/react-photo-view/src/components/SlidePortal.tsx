import React from 'react';
import { createPortal } from 'react-dom';
import './SlidePortal.less';

const SlidePortal: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return createPortal(<div {...props} />, document.body);
};

export default SlidePortal;
