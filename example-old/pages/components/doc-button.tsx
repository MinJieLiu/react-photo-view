import React from 'react';
import { PhotoProvider, PhotoView } from '../../../src';
import { Button, ImageList } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4}>
          <Button primary>点击预览</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
