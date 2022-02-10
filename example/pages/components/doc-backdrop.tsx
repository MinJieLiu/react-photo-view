import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList, ViewBox } from './doc-components';
import photo2 from '../images/2.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo2}>
          <ViewBox viewImage={photo2} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
