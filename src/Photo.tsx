import React from 'react';
import classNames from 'classnames';
import Spinner from './components/Spinner';
import getSuitableImageSize from './utils/getSuitableImageSize';
import useMountedState from './utils/useMountedState';
import './Photo.less';

export interface IPhotoProps extends React.HTMLAttributes<any> {
  src: string;
  loaded: boolean;
  broken: boolean;
  width: number;
  height: number;
  className?: string;
  onImageLoad: (PhotoParams, callback?: Function) => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element;
}

const Photo: React.FC<IPhotoProps> = ({
  src,
  loaded,
  broken,
  width,
  height,
  className,
  onImageLoad,
  loadingElement,
  brokenElement,
  ...restProps
}) => {
  const isMounted = useMountedState();

  function handleImageLoaded(e) {
    const { naturalWidth, naturalHeight } = e.target;
    if (isMounted()) {
      onImageLoad({
        loaded: true,
        naturalWidth,
        naturalHeight,
        ...getSuitableImageSize(naturalWidth, naturalHeight),
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
  return brokenElement || null;
};

Photo.displayName = 'Photo';

export default Photo;
