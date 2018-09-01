import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import { getSuitableImageSize } from './utils';

export interface IPhotoProps extends React.HTMLAttributes<any> {
  src: string;
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
  cursor: -webkit-grab;

  &:active {
    cursor: -webkit-grabbing;
  }
`;

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

  handleImageLoaded = e => {
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
