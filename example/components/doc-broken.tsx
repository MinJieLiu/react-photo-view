import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';
import defaultPhoto from '../images/default-photo.svg';

export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider>
        <PhotoView src="/error.png">
          <Button>无默认图</Button>
        </PhotoView>
      </PhotoProvider>
      <PhotoProvider brokenElement={<img className="w-32 h-32" src={defaultPhoto.src} alt="" />}>
        <PhotoView src="/error.png">
          <Button>自定义默认图</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  );
}
