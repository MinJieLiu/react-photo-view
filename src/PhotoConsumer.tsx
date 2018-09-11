import React from 'react';
import uniqueId from 'lodash.uniqueid';
import PhotoContext, {
  onShowType,
  addItemType,
  removeItemType,
} from './photo-context';

export interface IPhotoViewItem {
  src: string;
  children?: React.ReactElement<any>;
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
}

class PhotoViewItem extends React.Component<IPhotoViewItem> {
  private dataKey: string = uniqueId();

  componentDidMount() {
    const { src, addItem } = this.props;
    addItem(this.dataKey, src);
  }

  componentWillUnmount() {
    const { removeItem } = this.props;
    removeItem(this.dataKey);
  }

  handleShow = (e) => {
    const { onShow, children } = this.props;
    onShow(this.dataKey);

    if (children) {
      const { onClick } = children.props;
      if (onClick) {
        onClick(e);
      }
    }
  }

  render() {
    const { children } = this.props;
    if (children) {
      return React.cloneElement(children, {
        onClick: this.handleShow,
      });
    }
    return null;
  }
}

export interface IPhotoConsumer {
  src: string;
  children?: React.ReactElement<any>;
}

const PhotoConsumer: React.SFC<IPhotoConsumer> = ({
  src,
  children,
  ...restProps
}) => (
  <PhotoContext.Consumer>
    {value => (
      <PhotoViewItem
        {...value}
        {...restProps}
        src={src}
      >
        {children}
      </PhotoViewItem>
    )}
  </PhotoContext.Consumer>
);

export default PhotoConsumer;
