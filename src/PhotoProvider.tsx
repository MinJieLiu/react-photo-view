import React, { useMemo, useRef } from 'react';
import type { DataType, IPhotoProviderBase } from './types';
import useMethods from './hooks/useMethods';
import useSetState from './hooks/useSetState';
import PhotoContext from './photo-context';
import PhotoSlider from './PhotoSlider';

export interface IPhotoProvider extends IPhotoProviderBase {
  children: React.ReactNode;
  onIndexChange?: (index: number, state: PhotoProviderState) => void;
  onVisibleChange?: (visible: boolean, index: number, state: PhotoProviderState) => void;
}

type PhotoProviderState = {
  images: DataType[];
  visible: boolean;
  index: number;
};

const initialState: PhotoProviderState = {
  images: [],
  visible: false,
  index: 0,
};

export default function PhotoProvider({ children, onIndexChange, onVisibleChange, ...restProps }: IPhotoProvider) {
  const [state, updateState] = useSetState(initialState);
  const uniqueIdRef = useRef(0);
  const { images, visible, index } = state;

  const methods = useMethods({
    uniqueId() {
      return (uniqueIdRef.current += 1);
    },
    updateItem(imageItem: DataType) {
      const currentIndex = images.findIndex((n) => n.key === imageItem.key);
      if (currentIndex > -1) {
        const nextImages = [...images].splice(currentIndex, 1, imageItem);
        updateState({
          images: nextImages,
        });
        return;
      }
      updateState((prev) => ({
        images: prev.images.concat(imageItem),
      }));
    },
    removeItem(key: number) {
      const nextImages = images.filter((item) => item.key !== key);
      const nextEndIndex = nextImages.length - 1;
      updateState({
        images: nextImages,
        index: Math.min(nextEndIndex, index),
      });
    },
    onShow(key: number) {
      const currentIndex = images.findIndex((item) => item.key === key);
      updateState({
        visible: true,
        index: currentIndex,
      });
      if (typeof onVisibleChange === 'function') {
        onVisibleChange(true, currentIndex, state);
      }
    },
  });

  const fn = useMethods({
    close() {
      updateState({
        visible: false,
      });

      if (typeof onVisibleChange === 'function') {
        onVisibleChange(false, index, state);
      }
    },
    changeIndex(nextIndex: number) {
      updateState({
        index: nextIndex,
      });

      if (typeof onIndexChange === 'function') {
        onIndexChange(nextIndex, state);
      }
    },
  });

  const value = useMemo(() => ({ ...state, ...methods }), [state, methods]);

  return (
    <PhotoContext.Provider value={value}>
      {children}
      <PhotoSlider
        images={images}
        visible={visible}
        index={index}
        onIndexChange={fn.changeIndex}
        onClose={fn.close}
        {...restProps}
      />
    </PhotoContext.Provider>
  );
}
