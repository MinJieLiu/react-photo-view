import React from 'react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import { Button, DefaultImage, ImageList } from './doc-components';
import defaultPhoto from '../images/default-photo.svg';

export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider>
        <PhotoConsumer src="">
          <Button>无默认图</Button>
        </PhotoConsumer>
      </PhotoProvider>
      <PhotoProvider brokenElement={<DefaultImage src={defaultPhoto} />}>
        <PhotoConsumer src="">
          <Button>自定义默认图</Button>
        </PhotoConsumer>
      </PhotoProvider>
    </ImageList>
  );
}
