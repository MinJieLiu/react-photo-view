import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, Image } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false}>
      <ImageList>
        <PhotoView src={photo4.src}>
          <Image src={photo4.src} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
