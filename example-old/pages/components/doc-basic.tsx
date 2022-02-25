import React from 'react';
import { PhotoProvider, PhotoView } from '../../../src';
import { ImageList, photoImages } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img style={{ width: 200 }} src={item} alt="" />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
