import React from 'react';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import Backdrop from './components/Backdrop';
import { dataType } from './types';
import { maxMoveOffset, defaultOpacity } from './variables';

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
  // 自定义容器
  overlay?: React.ReactNode;
  // className
  className?: string;
  // 遮罩 className
  maskClassName?: string;
  // 图片容器 className
  viewClassName?: string;
  // 图片 className
  imageClassName?: string;
}

type PhotoSliderState = {
  // 偏移量
  translateX: number;
  // 图片当前的 index
  photoIndex: number;

  // 图片处于触摸的状态
  touched: boolean,
  // Reach 开始时 x 坐标
  lastPageX: number | undefined;
  // Reach 开始时 y 坐标
  lastPageY: number | undefined;
  // 背景透明度
  backdropOpacity: number;
  // 缩放度
  photoScale: number;
};

export default class PhotoSlider extends React.Component<
  IPhotoSliderProps,
  PhotoSliderState
> {
  static displayName = 'PhotoSlider';

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.index !== undefined && nextProps.index !== prevState.photoIndex) {
      return {
        photoIndex: nextProps.index,
        translateX: -window.innerWidth * nextProps.index,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const { index = 0 } = props;
    this.state = {
      translateX: index * -window.innerWidth,
      photoIndex: index,
      touched: false,

      lastPageX: undefined,
      lastPageY: undefined,
      backdropOpacity: defaultOpacity,
      photoScale: 1,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { innerWidth } = window;
    this.setState(({ photoIndex }) => {
      return {
        translateX: -innerWidth * photoIndex,
        lastPageX: undefined,
        lastPageY: undefined,
      };
    });
  }

  handleReachVerticalMove = (pageX, pageY) => {
    this.setState(({ lastPageY, backdropOpacity }) => {
      if (lastPageY === undefined) {
        return {
          touched: true,
          lastPageY: pageY,
          backdropOpacity,
          photoScale: 1,
        };
      }
      const offsetPageY = Math.abs(pageY - lastPageY);
      return {
        touched: true,
        lastPageY,
        backdropOpacity: Math.max(
          Math.min(defaultOpacity, defaultOpacity - (offsetPageY / 100 / 2)),
          defaultOpacity / 6,
        ),
        photoScale: Math.max(
          Math.min(1, 1 - (offsetPageY / 100 / 10)),
          0.6,
        ),
      };
    });
  }

  handleReachHorizontalMove = (pageX) => {
    const { innerWidth } = window;
    this.setState(({ lastPageX, translateX, photoIndex }) => {
      if (lastPageX === undefined) {
        return {
          touched: true,
          lastPageX: pageX,
          translateX,
        };
      }
      const offsetPageX = pageX - lastPageX;
      return {
        touched: true,
        lastPageX: lastPageX,
        translateX: -innerWidth * photoIndex + offsetPageX,
      };
    });
  }

  handleReachUp = (pageX, pageY) => {
    const { innerWidth, innerHeight } = window;
    const { images, onIndexChange, onClose } = this.props;
    const { lastPageX = pageX, lastPageY = pageY, photoIndex } = this.state;

    const offsetPageX = pageX - lastPageX;
    const offsetPageY = pageY - lastPageY;

    if (Math.abs(offsetPageY) > innerHeight * 0.14) {
      onClose();
      return;
    }
    // 当前偏移
    let currentTranslateX = -innerWidth * photoIndex;
    let currentPhotoIndex = photoIndex;
    // 下一张
    if (offsetPageX < - maxMoveOffset && photoIndex < images.length - 1) {
      currentPhotoIndex = photoIndex + 1;
      currentTranslateX = -innerWidth * currentPhotoIndex;
      if (onIndexChange) {
        onIndexChange(currentPhotoIndex);
      }
      // 上一张
    } else if (offsetPageX > maxMoveOffset && photoIndex > 0) {
      currentPhotoIndex = photoIndex - 1;
      currentTranslateX = -innerWidth * currentPhotoIndex;
      if (onIndexChange) {
        onIndexChange(currentPhotoIndex);
      }
    }
    this.setState({
      touched: false,
      translateX: currentTranslateX,
      photoIndex: currentPhotoIndex,
      lastPageX: undefined,
      lastPageY: undefined,
      backdropOpacity: defaultOpacity,
      photoScale: 1,
    });
  }

  render() {
    const { innerWidth } = window;
    const {
      images,
      visible,
      overlay,
      className,
      maskClassName,
      viewClassName,
      imageClassName,
    } = this.props;
    const {
      translateX,
      touched,
      photoIndex,
      backdropOpacity,
      photoScale,
    } = this.state;
    const transform = `translate3d(${translateX}px, 0px, 0)`;

    if (visible) {
      return (
        <SlideWrap className={className}>
          <Backdrop
            className={maskClassName}
            style={{ background: `rgba(0, 0, 0, ${backdropOpacity})` }}
          />
          {images.map((src, index) => {
            return (
              <PhotoView
                key={src + index}
                src={src}
                onReachTopMove={this.handleReachVerticalMove}
                onReachBottomMove={this.handleReachVerticalMove}
                onReachRightMove={index < images.length - 1
                  ? this.handleReachHorizontalMove
                  : undefined}
                onReachLeftMove={index > 0 ? this.handleReachHorizontalMove : undefined}
                onReachUp={this.handleReachUp}
                photoScale={photoIndex === index ? photoScale : 1}
                wrapClassName={viewClassName}
                className={imageClassName}
                style={{
                  left: `${innerWidth * index}px`,
                  WebkitTransform: transform,
                  transform,
                  transition: touched
                    ? undefined
                    : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
              />
            );
          })}
          {overlay}
        </SlideWrap>
      );
    }
    return null;
  }
}
