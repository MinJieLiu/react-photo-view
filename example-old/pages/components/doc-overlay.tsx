import React from 'react';
import { PhotoView, PhotoProvider } from '../../../src';
import { ImageList, Overlay, photoImages, ViewBox } from './doc-components';

export default function DocDemo() {
  return (
    <PhotoProvider
      overlayRender={({ rotate, onRotate, scale, index }) => {
        return (
          <Overlay>
            <div>
              <div>
                <a onClick={() => onRotate(rotate + 90)}>旋转</a>
              </div>
              旋转角度 {rotate}
            </div>
            <div>缩放：{scale}</div>
            <div>描述：{photoImages[index]}</div>
          </Overlay>
        );
      }}
    >
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            <ViewBox viewImage={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
