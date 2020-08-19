import React from 'react';
import classNames from 'classnames';
import Spinner from './components/Spinner';
import getSuitableImageSize from './utils/getSuitableImageSize';
import useMountedState from './utils/useMountedState';
import './Photo.less';
import { brokenElementDataType } from './types';

export interface IPhotoProps extends React.HTMLAttributes<any> {
  src: string;
  intro?: React.ReactNode;
  loaded: boolean;
  broken: boolean;
  width: number;
  height: number;
  rotate: number;
  className?: string;
  onImageLoad: (PhotoParams, callback?: Function) => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element | ((photoProps: brokenElementDataType) => JSX.Element);
}

const Photo: React.FC<IPhotoProps> = props => {
  const {
    src,
    intro,
    loaded,
    broken,
    width,
    height,
    rotate,
    className,
    onImageLoad,
    loadingElement,
    brokenElement,
    ...restProps
  } = props;

  const isMounted = useMountedState();

  function handleImageLoaded(e) {
    const { naturalWidth, naturalHeight } = e.target;
    if (isMounted()) {
      onImageLoad({
        loaded: true,
        naturalWidth,
        naturalHeight,
        ...getSuitableImageSize(naturalWidth, naturalHeight, rotate),
      });
    }
  }

  function handleImageBroken() {
    if (isMounted()) {
      onImageLoad({
        broken: true,
      });
    }
  }

  React.useEffect(() => {
    const currPhoto = new Image();
    currPhoto.onload = handleImageLoaded;
    currPhoto.onerror = handleImageBroken;
    currPhoto.src = src;
  }, []);

  if (src && !broken) {
    if (loaded) {
      return (
        <img
          className={classNames('PhotoView__Photo', className)}
          src={src}
          width={width}
          height={height}
          alt=""
          {...restProps}
        />
      );
    }
    return loadingElement || <Spinner />;
  }
  if (brokenElement) {
    if (typeof brokenElement === 'function') {
      return brokenElement({
        src,
        intro,
      });
    }
    return brokenElement;
  }
  return null;
};

Photo.displayName = 'Photo';

export default Photo;
