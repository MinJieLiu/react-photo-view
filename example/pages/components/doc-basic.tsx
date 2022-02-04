import React from 'react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import { ImageList, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <ViewBox viewImage={item} />
          </PhotoConsumer>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
