import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

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
};

const Image = styled.img<ImageProps>`
  opacity: ${props => +props.loaded};
  transition: opacity 0.4s ease-out;
`;

export default class Photo extends React.Component<IPhotoProps, PhotoState> {
  static displayName = 'Photo';

  readonly state = {
    loaded: false,
    broken: false,
  };

  handleImageLoaded = () => {
    this.setState({
      loaded: true,
    });
  }

  handleImageBroken = () => {
    this.setState({
      broken: true,
    });
  }

  render() {
    const { src, loadingElement, brokenElement, ...restProps } = this.props;
    const { loaded, broken } = this.state;

    return src && !broken ? (
      <React.Fragment>
        {loaded ? undefined : loadingElement || <Spinner fill="white" />}
        <Image
          src={src}
          {...restProps}
          loaded={loaded}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageBroken}
        />
      </React.Fragment>
    ) : brokenElement || null;
  }
}
