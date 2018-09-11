import React from 'react';
import PhotoContext, {
  onShowType,
  addItemType,
  removeItemType,
} from './photo-context';
import PhotoSlider from './PhotoSlider';
import { dataType } from './types';

interface IPhotoProvider {
  children: React.ReactNode;
  // className
  className?: string;
  // 遮罩 className
  maskClassName?: string;
  // 图片容器 className
  viewClassName?: string;
  // 图片 className
  imageClassName?: string;
}

type PhotoProviderState = {
  data: dataType[];
  visible: boolean;
  index: number;
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
};

export default class PhotoProvider extends React.Component<
  IPhotoProvider,
  PhotoProviderState
> {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      visible: false,
      index: 0,
      addItem: this.handleAddItem,
      removeItem: this.handleRemoveItem,
      onShow: this.handleShow,
    };
  }

  handleAddItem = (dataKey: string, src: string) => {
    this.setState(prev => ({
      data: prev.data.concat({
        dataKey,
        src,
      }),
    }));
  }

  handleRemoveItem = (dataKey: string) => {
    this.setState(({ data, index }) => {
      const nextData = data.filter(item => item.dataKey !== dataKey);
      const nextEndIndex = nextData.length - 1;
      return {
        data: nextData,
        index: Math.min(nextEndIndex, index),
      };
    });
  }

  handleShow = (dataKey: string) => {
    const { data } = this.state;
    this.setState({
      visible: true,
      index: data.findIndex(item => item.dataKey === dataKey),
    });
  }

  handleClose = () => {
    this.setState({
      visible: false,
    });
  }

  handleIndexChange = (index: number) => {
    this.setState({
      index,
    });
  }

  render() {
    const {
      className,
      maskClassName,
      viewClassName,
      imageClassName,
      children,
    } = this.props;
    const { data, visible, index } = this.state;

    return (
      <PhotoContext.Provider value={this.state}>
        {children}
        <PhotoSlider
          images={data}
          visible={visible}
          index={index}
          onIndexChange={this.handleIndexChange}
          onClose={this.handleClose}
          className={className}
          maskClassName={maskClassName}
          viewClassName={viewClassName}
          imageClassName={imageClassName}
        />
      </PhotoContext.Provider>
    );
  }
}
