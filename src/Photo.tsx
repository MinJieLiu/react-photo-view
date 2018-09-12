import React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import Spinner from './components/Spinner';
import getSuitableImageSize from './utils/getSuitableImageSize';

interface IPhotoProps extends React.HTMLAttributes<any> {
  src: string;
  onPhotoResize: () => void;
  loadingElement?: JSX.Element;
  brokenElement?: JSX.Element;
}

type PhotoState = {
  loaded: boolean;
  broken: boolean;
  naturalWidth: number;
  naturalHeight: number;
  width: number;
  height: number;
};

const PhotoImage = styled.img`
  will-change: transform;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export default class Photo extends React.Component<IPhotoProps, PhotoState> {
  static displayName = 'Photo';

  readonly state = {
    loaded: false,
    broken: false,
    naturalWidth: 1,
    naturalHeight: 1,
    width: 1,
    height: 1,
  };

  private isMount = true;

  constructor(props) {
    super(props);
    this.handleResize = throttle(this.handleResize, 8);
  }

  componentDidMount() {
    const currPhoto = new Image();
    currPhoto.src = this.props.src;
    currPhoto.onload = this.handleImageLoaded;
    currPhoto.onerror = this.handleImageBroken;

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.isMount = false;
    window.removeEventListener('resize', this.handleResize);
  }

  handleImageLoaded = e => {
    const { naturalWidth, naturalHeight } = e.target;
    if (this.isMount) {
      this.setState({
        loaded: true,
        naturalWidth,
        naturalHeight,
        ...getSuitableImageSize(naturalWidth, naturalHeight),
      });
    }
  }

  handleImageBroken = () => {
    if (this.isMount) {
      this.setState({
        broken: true,
      });
    }
  }

  handleResize = () => {
    const { loaded, naturalWidth, naturalHeight } = this.state;
    if (loaded && this.isMount) {
      this.setState(
        getSuitableImageSize(naturalWidth, naturalHeight),
        this.props.onPhotoResize,
      );
    }
  }

  render() {
    const {
      src,
      loadingElement,
      brokenElement,
      ...restProps
    } = this.props;
    const { loaded, broken, width, height } = this.state;

    if (src && !broken) {
      if (loaded) {
        return (
          <PhotoImage
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
