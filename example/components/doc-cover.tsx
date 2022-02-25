import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList } from './doc-components';
import photo6 from '../images/6.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo6.src}>
          <img src={photo6.src} className="block w-64 h-64 object-cover" alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
