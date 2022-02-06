import React from 'react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import { Button, ImageList, photoImages } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider loop={false} maskOpacity={0.5}>
      <ImageList>
        <PhotoConsumer src={photoImages[3]}>
          <Button>打开预览</Button>
        </PhotoConsumer>
      </ImageList>
    </PhotoProvider>
  );
}
