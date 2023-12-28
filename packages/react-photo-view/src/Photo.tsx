import React from 'react';
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
  webpSrc?: string;
  loaded: boolean;
  broken: boolean;
  onPhotoLoad: (params: IPhotoLoadedParams) => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
}

export default function Photo({
  src,
  webpSrc,
  loaded,
  broken,
  className,
  onPhotoLoad,
  loadingElement,
  brokenElement,
  ...restProps
}: IPhotoProps) {
  const mountedRef = useMountedRef();

  function handleImageLoaded(e: React.SyntheticEvent<HTMLImageElement>) {
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

  if (src && !broken) {
    return (
      <>
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp"/>}
          <img
            className={`PhotoView__Photo${className ? ` ${className}` : ''}`}
            src={src}
            onLoad={handleImageLoaded}
            onError={handleImageBroken}
            alt=""
            {...restProps}
          />
        </picture>
        {!loaded &&
          (<span className="PhotoView__icon">{loadingElement}</span> || <Spinner className="PhotoView__icon"/>)}
      </>
    );
  }

  if (brokenElement) {
    return (
      <span className="PhotoView__icon">
        {typeof brokenElement === 'function' ? brokenElement({ src }) : brokenElement}
      </span>
    );
  }

  return null;
}
