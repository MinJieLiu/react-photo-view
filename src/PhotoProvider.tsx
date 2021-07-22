import React from 'react';
import PhotoContext, { onShowType, addItemType, removeItemType } from './photo-context';
import PhotoSlider from './PhotoSlider';
import { dataType, IPhotoProviderBase } from './types';

export interface IPhotoProvider extends IPhotoProviderBase {
  children: React.ReactNode;
  afterIndexChange: (arg0: number, arg1: PhotoProviderState) => void;
  afterShow: (arg0: number, arg1: PhotoProviderState) => void;
  afterClose: (arg0: number, arg1: PhotoProviderState) => void;
}

type PhotoProviderState = {
  images: dataType[];
  visible: boolean;
  index: number;
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
};

export default class PhotoProvider extends React.Component<IPhotoProvider, PhotoProviderState> {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      visible: false,
      index: 0,
      addItem: this.handleAddItem,
      removeItem: this.handleRemoveItem,
      onShow: this.handleShow,
    };
  }

  handleAddItem: addItemType = (imageItem) => {
    this.setState((prev) => ({
      images: prev.images.concat(imageItem),
    }));
  };

  handleRemoveItem = (key: string) => {
    this.setState(({ images, index }) => {
      const nextImages = images.filter((item) => item.key !== key);
      const nextEndIndex = nextImages.length - 1;
      return {
        images: nextImages,
        index: Math.min(nextEndIndex, index),
      };
    });
  };

  handleShow = (key: string) => {
    const { images } = this.state;
    this.setState({
      visible: true,
      index: images.findIndex((item) => item.key === key),
    });

    if (this.props.afterShow && typeof this.props.afterShow === 'function') {
      this.props.afterShow(this.state.index, this.state);
    }
  };

  handleClose = () => {
    this.setState({
      visible: false,
    });

    if (this.props.afterClose && typeof this.props.afterClose === 'function') {
      this.props.afterClose(this.state.index, this.state);
    }
  };

  handleIndexChange = (index: number) => {
    this.setState({
      index,
    });

    if (this.props.afterIndexChange && typeof this.props.afterIndexChange === 'function') {
      this.props.afterIndexChange(this.state.index, this.state);
    }
  };

  render() {
    const { children, ...restProps } = this.props;
    const { images, visible, index } = this.state;

    return (
      <PhotoContext.Provider value={this.state}>
        {children}
        <PhotoSlider
          images={images}
          visible={visible}
          index={index}
          onIndexChange={this.handleIndexChange}
          onClose={this.handleClose}
          {...restProps}
        />
      </PhotoContext.Provider>
    );
  }
}
