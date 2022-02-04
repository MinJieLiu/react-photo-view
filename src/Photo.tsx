import React, { useEffect } from 'react';
import Spinner from './components/Spinner';
import useMountedRef from './hooks/useMountedRef';
import type { BrokenElementParams } from './types';
import './Photo.less';

export interface IPhotoLoadedParams {
  loaded?: boolean;
  naturalWidth?: number;
  naturalHeight?: number;
  broken?: boolean;
}

export interface IPhotoProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  loaded: boolean;
  broken: boolean;
  width: number;
  height: number;
  onPhotoLoad: (params: IPhotoLoadedParams) => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
}

export default function Photo({
  src,
  loaded,
  broken,
  width,
  height,
  className,
  onPhotoLoad,
  loadingElement,
  brokenElement,
  ...restProps
}: IPhotoProps) {
  const mountedRef = useMountedRef();

  function handleImageLoaded(e: Event) {
    const { naturalWidth, naturalHeight } = e.target as HTMLImageElement;
    if (mountedRef.current) {
      onPhotoLoad({
        loaded: true,
        naturalWidth,
        naturalHeight,
      });
    }
  }

  function handleImageBroken() {
    if (mountedRef.current) {
      onPhotoLoad({
        broken: true,
      });
    }
  }

  useEffect(() => {
    const currPhoto = new Image();
    currPhoto.onload = handleImageLoaded;
    currPhoto.onerror = handleImageBroken;
    currPhoto.src = src;
  }, []);

  if (src && !broken) {
    return loaded ? (
      <img
        className={`PhotoView__Photo${className ? ` ${className}` : ''}`}
        src={src}
        width={width}
        height={height}
        alt=""
        {...restProps}
      />
    ) : (
      loadingElement || <Spinner />
    );
  }

  if (brokenElement) {
    return typeof brokenElement === 'function'
      ? brokenElement({
          src,
        })
      : brokenElement;
  }

  return null;
}
