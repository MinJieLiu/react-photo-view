import React from 'react';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import Backdrop from './components/Backdrop';
import { Close, Counter, TopBar } from './components/TopWrap';
import { dataType, TouchTypeEnum } from './types';
import { defaultOpacity, horizontalOffset, maxMoveOffset } from './variables';

interface IPhotoSliderProps {
  // 图片列表
  images: (string | dataType)[];
  // 图片当前索引
  index?: number;
  // 可见
  visible: boolean;
  // 关闭事件
  onClose: (evt?: React.MouseEvent) => void;
  // 索引改变回调
  onIndexChange?: Function;
  // 背景可点击关闭，默认 true
  maskClosable?: boolean;
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
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element;
}

type PhotoSliderState = {
  // 偏移量
  translateX: number;
  // 图片当前的 index
  photoIndex: number;

  // 图片处于触摸的状态
  touched: boolean;
  // Reach 开始时 x 坐标
  lastClientX: number | undefined;
  // Reach 开始时 y 坐标
  lastClientY: number | undefined;
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
    if (
      nextProps.index !== undefined &&
      nextProps.index !== prevState.photoIndex
    ) {
      return {
        photoIndex: nextProps.index,
        translateX: -(window.innerWidth + horizontalOffset) * nextProps.index,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      translateX: 0,
      photoIndex: 0,
      touched: false,

      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      photoScale: 1,
    };
  }

  componentDidMount() {
    const { index = 0 } = this.props;
    this.setState({
      translateX: index * -(window.innerWidth + horizontalOffset),
      photoIndex: index,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { innerWidth } = window;
    this.setState(({ photoIndex }) => {
      return {
        translateX: -(innerWidth + horizontalOffset) * photoIndex,
        lastClientX: undefined,
        lastClientY: undefined,
      };
    });
  }

  handleReachVerticalMove = (clientX, clientY) => {
    this.setState(({ lastClientY, backdropOpacity }) => {
      if (lastClientY === undefined) {
        return {
          touched: true,
          lastClientY: clientY,
          backdropOpacity,
          photoScale: 1,
        };
      }
      const offsetClientY = Math.abs(clientY - lastClientY);
      return {
        touched: true,
        lastClientY,
        backdropOpacity: Math.max(
          Math.min(defaultOpacity, defaultOpacity - offsetClientY / 100 / 2),
          0,
        ),
        photoScale: Math.max(Math.min(1, 1 - offsetClientY / 100 / 10), 0.6),
      };
    });
  }

  handleReachHorizontalMove = (clientX) => {
    const { innerWidth } = window;
    this.setState(({ lastClientX, translateX, photoIndex }) => {
      if (lastClientX === undefined) {
        return {
          touched: true,
          lastClientX: clientX,
          translateX,
        };
      }
      const offsetClientX = clientX - lastClientX;
      return {
        touched: true,
        lastClientX: lastClientX,
        translateX: -(innerWidth + horizontalOffset) * photoIndex + offsetClientX,
      };
    });
  }

  handleReachUp = (clientX: number, clientY: number, touchType: TouchTypeEnum) => {
    const { innerWidth, innerHeight } = window;
    const { images, onIndexChange, onClose, maskClosable = true } = this.props;
    const { lastClientX = clientX, lastClientY = clientY, photoIndex } = this.state;

    const offsetClientX = clientX - lastClientX;
    const offsetClientY = clientY - lastClientY;
    const singlePageWidth = innerWidth + horizontalOffset;

    // 当前偏移
    let currentTranslateX = -singlePageWidth * photoIndex;
    let currentPhotoIndex = photoIndex;

    // mask 点击事件
    if (lastClientX === clientX
      && lastClientY === clientY
      && maskClosable
      && touchType === TouchTypeEnum.Mask
    ) {
      onClose();
    } else if (Math.abs(offsetClientY) > innerHeight * 0.14) {
      onClose();
      // 下一张
    } else if (offsetClientX < -maxMoveOffset && photoIndex < images.length - 1) {
      currentPhotoIndex = photoIndex + 1;
      currentTranslateX = -singlePageWidth * currentPhotoIndex;
      if (onIndexChange) {
        onIndexChange(currentPhotoIndex);
      }
      // 上一张
    } else if (offsetClientX > maxMoveOffset && photoIndex > 0) {
      currentPhotoIndex = photoIndex - 1;
      currentTranslateX = -singlePageWidth * currentPhotoIndex;
      if (onIndexChange) {
        onIndexChange(currentPhotoIndex);
      }
    }
    this.setState({
      touched: false,
      translateX: currentTranslateX,
      photoIndex: currentPhotoIndex,
      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      photoScale: 1,
    });
  }

  render() {
    const {
      images,
      visible,
      overlay,
      className,
      maskClassName,
      viewClassName,
      imageClassName,
      onClose,
      loadingElement,
      brokenElement,
    } = this.props;
    const {
      translateX,
      touched,
      photoIndex,
      backdropOpacity,
      photoScale,
    } = this.state;
    const imageLength = images.length;
    const transform = `translate3d(${translateX}px, 0px, 0)`;

    if (visible) {
      const { innerWidth } = window;

      return (
        <SlideWrap className={className}>
          <Backdrop
            className={maskClassName}
            style={{ background: `rgba(0, 0, 0, ${backdropOpacity})` }}
          />
          <TopBar>
            <Counter>{photoIndex + 1} / {imageLength}</Counter>
            <Close onClick={onClose} />
          </TopBar>
          {images
            .slice( // 加载相邻三张
              Math.max(photoIndex - 1, 0),
              Math.min(photoIndex + 2, imageLength + 1)
            )
            .map((item: string | dataType, index) => {
              const isStrItem = typeof item === 'string';
              // 截取之前的索引位置
              const realIndex = photoIndex === 0
                ? photoIndex + index
                : photoIndex - 1 + index;
              return (
                <PhotoView
                  key={
                    isStrItem
                      ? (item as string) + realIndex
                      : (item as dataType).dataKey
                  }
                  src={isStrItem ? (item as string) : (item as dataType).src}
                  onReachTopMove={this.handleReachVerticalMove}
                  onReachBottomMove={this.handleReachVerticalMove}
                  onReachRightMove={
                    realIndex < imageLength - 1
                      ? this.handleReachHorizontalMove
                      : undefined
                  }
                  onReachLeftMove={
                    realIndex > 0 ? this.handleReachHorizontalMove : undefined
                  }
                  onReachUp={this.handleReachUp}
                  photoScale={photoIndex === realIndex ? photoScale : 1}
                  wrapClassName={viewClassName}
                  className={imageClassName}
                  style={{
                    left: `${(innerWidth + horizontalOffset) * realIndex}px`,
                    WebkitTransform: transform,
                    transform,
                    transition: touched
                      ? undefined
                      : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  }}
                  loadingElement={loadingElement}
                  brokenElement={brokenElement}
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
