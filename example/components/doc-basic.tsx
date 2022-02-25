import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList } from './doc-components';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <div className="m-2">
          <PhotoView src={photo4.src}>
            <img src={photo4.src} className="h-72" alt="" />
          </PhotoView>
        </div>

        <div className="flex flex-col">
          <PhotoView src={photo2.src}>
            <img src={photo2.src} className="m-2 h-36" alt="" />
          </PhotoView>

          <PhotoView src={photo3.src}>
            <img src={photo3.src} className="m-2 h-32" alt="" />
          </PhotoView>
        </div>
      </ImageList>
    </PhotoProvider>
  );
}
