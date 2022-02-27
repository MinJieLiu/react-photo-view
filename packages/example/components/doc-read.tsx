import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, Image } from './doc-components';
import photo7 from '../images/7.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo7.src}>
          <Image src={photo7.src} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
