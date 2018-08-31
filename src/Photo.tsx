import React from 'react';
import Spinner from './Spinner';
import { getSuitableImageSize } from './util';

export interface IPhotoProps {
  src: string;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element;
}

type ImageProps = {
  loaded: boolean;
};

type PhotoState = ImageProps & {
  broken: boolean;
  naturalWidth: number;
  naturalHeight: number;
  width: number;
  height: number;
};

export default class Photo extends React.Component<IPhotoProps, PhotoState> {
  static displayName = 'Photo';

  readonly state = {
    loaded: false,
    broken: false,
    naturalWidth: 0,
    naturalHeight: 0,
    width: 0,
    height: 0,
  };

  constructor(props) {
    super(props);

    const currPhoto = new Image();
    currPhoto.src = props.src;
    currPhoto.onload = this.handleImageLoaded;
    currPhoto.onerror = this.handleImageBroken;
  }

  handleImageLoaded = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    this.setState({
      loaded: true,
      naturalWidth,
      naturalHeight,
      ...getSuitableImageSize(naturalWidth, naturalHeight),
    });
  }

  handleImageBroken = () => {
    this.setState({
      broken: true,
    });
  }

  render() {
    const { src, loadingElement, brokenElement, ...restProps } = this.props;
    const { loaded, broken, width, height } = this.state;

    if (src && !broken) {
      if (loaded) {
        return (
          <img
            src={src}
            width={width}
            height={height}
            {...restProps}
          />
        );
      }
      return loadingElement || <Spinner />;
    }
    return brokenElement || null;
  }
}
