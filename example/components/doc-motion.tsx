import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList } from './doc-components';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider motionTime={800} motionFn="cubic-bezier(0.65, 0, 0.35, 1)">
      <ImageList>
        <div>
          <PhotoView src={photo3.src}>
            <img src={photo3.src} className="h-32" alt="" />
          </PhotoView>

          <PhotoView src={photo4.src} />
        </div>
      </ImageList>
    </PhotoProvider>
  );
}
