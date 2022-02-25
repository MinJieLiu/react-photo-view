import React from 'react';
import { PhotoProvider, PhotoView } from '../../../src';
import { ImageList } from './doc-components';
import photo2 from '../images/2.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo2}>
          <img src={photo2} style={{ objectFit: 'cover', width: 150, height: 150 }} alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
