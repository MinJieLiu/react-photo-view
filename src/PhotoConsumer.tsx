import React from 'react';
import uniqueId from 'lodash.uniqueid';
import isMobile from './utils/isMobile';
import PhotoContext, {
  onShowType,
  addItemType,
  removeItemType,
} from './photo-context';

export interface IPhotoViewItem {
  src: string;
  intro?: React.ReactNode;
  children?: React.ReactElement<any>;
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
}

type PhotoViewState = {
  clientX: number | undefined;
  clientY: number | undefined;
};

class PhotoViewItem extends React.Component<IPhotoViewItem, PhotoViewState> {
  readonly state = {
    clientX: undefined,
    clientY: undefined,
  };

  private key: string = uniqueId();

  componentDidMount() {
    const { addItem, src, intro } = this.props;
    addItem(this.key, src, intro);
  }

  componentWillUnmount() {
    const { removeItem } = this.props;
    removeItem(this.key);
  }

  handleTouchStart = e => {
    const { clientX, clientY } = e.touches[0];
    this.setState({
      clientX,
      clientY,
    });
    const { children } = this.props;
    if (children) {
      const { onTouchStart } = children.props;
      if (onTouchStart) {
        onTouchStart(e);
      }
    }
  };

  handleTouchEnd = e => {
    const { onShow, children } = this.props;
    const { clientX: newClientX, clientY: newClientY } = e.changedTouches[0];
    const { clientX, clientY } = this.state;
    if (clientX === newClientX && clientY === newClientY) {
      onShow(this.key);
    }
    if (children) {
      const { onTouchEnd } = children.props;
      if (onTouchEnd) {
        onTouchEnd(e);
      }
    }
  };

  handleClick = e => {
    const { onShow, children } = this.props;
    onShow(this.key);
    if (children) {
      const { onClick } = children.props;
      if (onClick) {
        onClick(e);
      }
    }
  };

  render() {
    const { children } = this.props;
    if (children) {
      return React.Children.only(
        React.cloneElement(
          children,
          isMobile
            ? {
                onTouchStart: this.handleTouchStart,
                onTouchEnd: this.handleTouchEnd,
              }
            : { onClick: this.handleClick },
        ),
      );
    }
    return null;
  }
}

export interface IPhotoConsumer {
  src: string;
  intro?: React.ReactNode;
  children?: React.ReactElement<any>;
}

const PhotoConsumer: React.SFC<IPhotoConsumer> = ({
  src,
  intro,
  children,
  ...restProps
}) => (
  <PhotoContext.Consumer>
    {value => (
      <PhotoViewItem {...value} {...restProps} src={src} intro={intro}>
        {children}
      </PhotoViewItem>
    )}
  </PhotoContext.Consumer>
);

export default PhotoConsumer;
