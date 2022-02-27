import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, Image } from './doc-components';
import photo5 from '../images/5.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
      <ImageList>
        <PhotoView src={photo5.src}>
          <Image src={photo5.src} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
