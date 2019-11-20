import React from 'react';
import classNames from 'classnames';
import throttle from './utils/throttle';
import Spinner from './components/Spinner';
import getSuitableImageSize from './utils/getSuitableImageSize';
import './Photo.less';

export interface IPhotoProps extends React.HTMLAttributes<any> {
  src: string;
  loaded: boolean;
  naturalWidth: number;
  naturalHeight: number;
  width: number;
  height: number;
  className?: string;
  onPhotoResize?: () => void;
  onImageLoad: (PhotoParams, callback?: Function) => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element;
}

type PhotoState = {
  broken: boolean;
};

export default class Photo extends React.PureComponent<
  IPhotoProps,
  PhotoState
> {
  static displayName = 'Photo';

  readonly state = {
    broken: false,
  };

  private isMount = true;

  constructor(props: IPhotoProps) {
    super(props);
    this.handleResize = throttle(this.handleResize, 8);
  }

  componentDidMount() {
    const { src } = this.props;
    const currPhoto = new Image();
    currPhoto.onload = this.handleImageLoaded;
    currPhoto.onerror = this.handleImageBroken;
    currPhoto.src = src;

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.isMount = false;
    window.removeEventListener('resize', this.handleResize);
  }

  handleImageLoaded = e => {
    const { naturalWidth, naturalHeight } = e.target;
    if (this.isMount) {
      const { onImageLoad } = this.props;
      onImageLoad({
        loaded: true,
        naturalWidth,
        naturalHeight,
        ...getSuitableImageSize(naturalWidth, naturalHeight),
      });
    }
  };

  handleImageBroken = () => {
    if (this.isMount) {
      this.setState({
        broken: true,
      });
    }
  };

  handleResize = () => {
    const { loaded, naturalWidth, naturalHeight } = this.props;
    if (loaded && this.isMount) {
      const { onImageLoad, onPhotoResize } = this.props;
      onImageLoad(getSuitableImageSize(naturalWidth, naturalHeight));

      if (onPhotoResize) {
        onPhotoResize();
      }
    }
  };

  render() {
    const {
      src,
      loaded,
      width,
      height,
      className,
      loadingElement,
      brokenElement,
      // ignore
      naturalWidth,
      naturalHeight,
      onPhotoResize,
      onImageLoad,
      ...restProps
    } = this.props;
    const { broken } = this.state;

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
  }
}
