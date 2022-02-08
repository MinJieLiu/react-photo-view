import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList, photoImages } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider loop={false} maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photoImages[3]}>
          <Button>打开预览</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
