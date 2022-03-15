import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';
import photo4 from '../images/4.jpg';
import photo5 from '../images/5.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4.src}>
          <Button primary>Click</Button>
        </PhotoView>
        <PhotoView src={photo5.src}>
          <Button secondary>
            <a href="/" target="_blank">react-photo-view</a> is an awesome library!
          </Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
