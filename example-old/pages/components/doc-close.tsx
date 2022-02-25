import React from 'react';
import { PhotoProvider, PhotoView } from '../../../src';
import { ImageList } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false}>
      <ImageList>
        <PhotoView src={photo4}>
          <img src={photo4} alt="" style={{ objectFit: 'contain', width: 200, height: 200 }} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
