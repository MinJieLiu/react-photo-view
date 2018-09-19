import React from 'react';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import Backdrop from './components/Backdrop';
import { Close, Counter, BannerWrap, BannerRight } from './components/BannerWrap';
import FooterWrap from './components/FooterWrap';
import isMobile from './utils/isMobile';
import {
  dataType,
  IPhotoProviderBase,
} from './types';
import { defaultOpacity, horizontalOffset, maxMoveOffset } from './variables';

export interface IPhotoSliderProps extends IPhotoProviderBase {
  // 图片列表
  images: dataType[];
  // 图片当前索引
  index?: number;
  // 可见
  visible: boolean;
  // 关闭事件
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void;
  // 索引改变回调
  onIndexChange?: Function;
}

type PhotoSliderState =  {
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
  // 覆盖物可见度
  overlayVisible: boolean;
};

export default class PhotoSlider extends React.Component<
  IPhotoSliderProps,
  PhotoSliderState
> {
  static displayName = 'PhotoSlider';

  static defaultProps = {
    maskClosable: true,
    photoClosable: false,
    bannerVisible: true,
    introVisible: true,
  };

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
      overlayVisible: true,
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

  handleClose = () => {
    this.props.onClose();
    this.setState({
      overlayVisible: true,
    });
  }

  handlePhotoTap = () => {
    if (this.props.photoClosable) {
      this.handleClose();
    } else {
      this.setState(prevState => ({
        overlayVisible: !prevState.overlayVisible,
      }));
    }
  }

  handlePhotoMaskTap = () => {
    if (this.props.maskClosable) {
      this.handleClose();
    }
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

  handleIndexChange = (photoIndex: number) => {
    const singlePageWidth = window.innerWidth + horizontalOffset;
    const translateX = -singlePageWidth * photoIndex;
    this.setState({
      translateX,
      photoIndex,
    });
    const { onIndexChange } = this.props;
    if (onIndexChange) {
      onIndexChange(photoIndex);
    }
  }

  handleReachUp = (clientX: number, clientY: number) => {
    const { innerWidth, innerHeight } = window;
    const { images, onIndexChange, onClose } = this.props;
    const {
      lastClientX = clientX,
      lastClientY = clientY,
      photoIndex,
      overlayVisible,
    } = this.state;

    const offsetClientX = clientX - lastClientX;
    const offsetClientY = clientY - lastClientY;
    const singlePageWidth = innerWidth + horizontalOffset;

    // 当前偏移
    let currentTranslateX = -singlePageWidth * photoIndex;
    let currentPhotoIndex = photoIndex;
    let isChangeVisible = false;

    if (Math.abs(offsetClientY) > innerHeight * 0.14) {
      isChangeVisible = true;
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
      overlayVisible: isChangeVisible ? true : overlayVisible,
    });
  }

  render() {
    const {
      images,
      visible,
      className,
      maskClassName,
      viewClassName,
      imageClassName,
      onClose,
      bannerVisible,
      introVisible,
      overlayRender,
      loadingElement,
      brokenElement,
    } = this.props;
    const {
      translateX,
      touched,
      photoIndex,
      backdropOpacity,
      photoScale,
      overlayVisible,
    } = this.state;
    const imageLength = images.length;
    const transform = `translate3d(${translateX}px, 0px, 0)`;
    // Overlay
    const overlayIntro = imageLength ? images[photoIndex].intro : undefined;
    const overlayStyle = { opacity: +overlayVisible };

    if (visible) {
      const { innerWidth } = window;

      return (
        <SlideWrap className={className}>
          <Backdrop
            className={maskClassName}
            style={{ background: `rgba(0, 0, 0, ${backdropOpacity})` }}
          />
          {bannerVisible ? (
            <BannerWrap style={overlayStyle}>
              <Counter>{photoIndex + 1} / {imageLength}</Counter>
              <BannerRight>
                <Close
                  onTouchEnd={isMobile ? onClose : undefined}
                  onClick={isMobile ? undefined : onClose}
                />
              </BannerRight>
            </BannerWrap>
          ) : undefined}
          {images
            .slice( // 加载相邻三张
              Math.max(photoIndex - 1, 0),
              Math.min(photoIndex + 2, imageLength + 1)
            )
            .map((item: dataType, index) => {
              // 截取之前的索引位置
              const realIndex = photoIndex === 0
                ? photoIndex + index
                : photoIndex - 1 + index;
              return (
                <PhotoView
                  key={item.key || realIndex}
                  src={item.src}
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
                  onPhotoTap={this.handlePhotoTap}
                  onMaskTap={this.handlePhotoMaskTap}
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
          {introVisible && overlayIntro ? (
            <FooterWrap style={overlayStyle}>{overlayIntro}</FooterWrap>
          ) : undefined}
          {overlayRender && overlayRender({
            images,
            index: photoIndex,
            visible,
            onClose,
            onIndexChange: this.handleIndexChange,
            overlayVisible,
          })}
        </SlideWrap>
      );
    }
    return null;
  }
}
