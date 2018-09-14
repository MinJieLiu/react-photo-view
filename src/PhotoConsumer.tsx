import React from 'react';
import uniqueId from 'lodash.uniqueid';
import PhotoContext, {
  onShowType,
  addItemType,
  removeItemType,
} from './photo-context';

interface IPhotoViewItem {
  src: string;
  intro?: React.ReactNode;
  children?: React.ReactElement<any>;
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
}

class PhotoViewItem extends React.Component<IPhotoViewItem> {
  private key: string = uniqueId();

  componentDidMount() {
    const { addItem, src, intro } = this.props;
    addItem(this.key, src, intro);
  }

  componentWillUnmount() {
    const { removeItem } = this.props;
    removeItem(this.key);
  }

  handleShow = (e) => {
    const { onShow, children } = this.props;
    onShow(this.key);

    if (children) {
      const { onClick } = children.props;
      if (onClick) {
        onClick(e);
      }
    }
  }

  render() {
    const { src, children } = this.props;
    if (children) {
      return React.cloneElement(children, {
        onClick: this.handleShow,
        // 子节点若不传 src 则覆盖
        ...children.props.src === undefined
          ? { src }
          : undefined,
      });
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
      <PhotoViewItem
        {...value}
        {...restProps}
        src={src}
        intro={intro}
      >
        {children}
      </PhotoViewItem>
    )}
  </PhotoContext.Consumer>
);

export default PhotoConsumer;
