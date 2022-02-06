import React from 'react';
import { PhotoConsumer, PhotoProvider } from 'react-photo-view';
import { ImageList, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider loop={false}>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item}>
            {index < 2 ? <ViewBox viewImage={item} /> : undefined}
          </PhotoConsumer>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
