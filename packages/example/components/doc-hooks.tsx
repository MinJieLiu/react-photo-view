import React from 'react';
import {PhotoProvider, PhotoView, usePhotoView} from 'react-photo-view';
import {ImageList, photoImages, Image} from './doc-components';
import {OverlayRenderProps} from "../../react-photo-view/src/types";

const Component = () => {
  const {open} = usePhotoView();
  const handleOpen = (index: number) => (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    open(photoImages.map(v => ({
      key: v,
      src: v,
      thumbnail: v,
      originRef: {
        current: e.currentTarget
      }
    })), index);
  }
  return (
    <ImageList>
      {photoImages.map((item, index) => (
        <Image src={item} onClick={handleOpen(index)}/>
      ))}
    </ImageList>
  )
}


export default function DocHooks() {
  return (
    <PhotoProvider maskOpacity={0.6}>
      <Component/>
    </PhotoProvider>
  );
}
