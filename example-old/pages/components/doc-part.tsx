import React from 'react';
import { PhotoView, PhotoProvider } from '../../../src';
import { ImageList, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < 2 ? <ViewBox viewImage={item} /> : undefined}
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
