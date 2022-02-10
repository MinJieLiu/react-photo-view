import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false} loop={false}>
      <ImageList>
        <PhotoView src={photo4}>
          <ViewBox viewImage={photo4} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
