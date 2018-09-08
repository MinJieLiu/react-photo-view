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
  translateX: number;
  photoIndex: number;
};

export default class PhotoSlider extends React.Component<
  IPhotoSliderProps,
  PhotoSliderState
> {
  static displayName = 'PhotoSlider';

  readonly state = {
    translateX: 0,
    photoIndex: 0,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleReachTopMove = () => {
  }

  handleReachLeftMove = () => {
    this.setState({
      photoIndex: 0,
    });
  }

  handleReachRightMove = () => {
    this.setState({
      photoIndex: 1,
    });
  }

  render() {
    const { images, visible } = this.props;
    const { photoIndex } = this.state;
    const { innerWidth } = window;

    if (visible) {
      return (
        <SlideWrap>
          <Backdrop />
          {images.map((src, index) => {
            const transform = `translate3d(-${photoIndex * innerWidth}px, 0px, 0)`;
            return (
              <PhotoView
                key={src + index}
                src={src}
                onReachTopMove={this.handleReachTopMove}
                onReachRightMove={index < images.length - 1
                  ? this.handleReachRightMove
                  : undefined}
                onReachLeftMove={index > 0 ? this.handleReachLeftMove : undefined}
                style={{
                  left: `${innerWidth * index}px`,
                  WebkitTransform: transform,
                  transform,
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
              />
            );
          })}
        </SlideWrap>
      );
    }
    return null;
  }
}
