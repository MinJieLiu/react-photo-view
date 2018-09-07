import React from 'react';
import PhotoView from './PhotoView';

export interface IPhotoSliderProps {
  // 图片数组
  imageList: string[];
  // 图片当前索引
  index: number;
  // 索引改变回调
  onIndexChange: Function;
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
    const { imageList } = this.props;

    return (
      <div>
        {imageList.map((src, index) => (
          <PhotoView
            key={index}
            src={src}
            onReachTopMove={this.handleReachTopMove}
            onReachRightMove={index < imageList.length
              ? this.handleReachRightMove
              : undefined}
            onReachLeftMove={index > 0 ? this.handleReachLeftMove : undefined}
          />
        ))}
      </div>
    );
  }
}
