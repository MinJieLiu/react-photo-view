import React from 'react';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import Backdrop from './components/Backdrop';

export interface IPhotoSliderProps {
  // 图片列表
  images: string[];
  // 图片当前索引
  index?: number;
  // 可见
  visible: boolean;
  // 关闭事件
  onClose: Function;
  // 索引改变回调
  onIndexChange?: Function;
}

type PhotoSliderState = {
};

export default class PhotoSlider extends React.Component<
  IPhotoSliderProps,
  PhotoSliderState
> {
  static displayName = 'PhotoSlider';

  readonly state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleReachTopMove = () => {
  }

  handleReachLeftMove = () => {
  }

  handleReachRightMove = () => {
  }

  render() {
    const { images, visible } = this.props;

    if (visible) {
      return (
        <SlideWrap>
          <Backdrop />
          {images.map((src, index) => (
            <PhotoView
              key={src + index}
              src={src}
              onReachTopMove={this.handleReachTopMove}
              onReachRightMove={index < images.length
                ? this.handleReachRightMove
                : undefined}
              onReachLeftMove={index > 0 ? this.handleReachLeftMove : undefined}
            />
          ))}
        </SlideWrap>
      );
    }
    return null;
  }
}
