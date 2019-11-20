import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import VisibleAnimationHandle from './components/VisibleAnimationHandle';
import CloseSVG from './components/CloseSVG';
import isMobile from './utils/isMobile';
import {
  dataType,
  IPhotoProviderBase,
  ReachTypeEnum,
  ShowAnimateEnum,
} from './types';
import { defaultOpacity, horizontalOffset, maxMoveOffset } from './variables';
import './PhotoSlider.less';

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
  // 覆盖物可见度
  overlayVisible: boolean;
  // 可下拉关闭
  canPullClose: boolean;
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
      overlayVisible: true,
      canPullClose: true,
    };
    this.handleResize = debounce(this.handleResize, 32);
  }

  componentDidMount() {
    const { index = 0 } = this.props;
    this.setState({
      translateX: index * -(window.innerWidth + horizontalOffset),
      photoIndex: index,
    });
  }

  handleClose = () => {
    this.props.onClose();
    this.setState({
      overlayVisible: true,
    });
  };

  handlePhotoTap = () => {
    if (this.props.photoClosable) {
      this.handleClose();
    } else {
      this.setState(prevState => ({
        overlayVisible: !prevState.overlayVisible,
      }));
    }
  };

  handlePhotoMaskTap = () => {
    if (this.props.maskClosable) {
      this.handleClose();
    }
  };

  handleResize = () => {
    const { innerWidth } = window;
    this.setState(({ photoIndex }) => {
      return {
        translateX: -(innerWidth + horizontalOffset) * photoIndex,
        lastClientX: undefined,
        lastClientY: undefined,
      };
    });
  };

  handleReachVerticalMove = (clientY, scale) => {
    this.setState(({ lastClientY, backdropOpacity }) => {
      if (lastClientY === undefined) {
        return {
          touched: true,
          lastClientY: clientY,
          backdropOpacity,
          canPullClose: true,
        };
      }
      const offsetClientY = Math.abs(clientY - lastClientY);
      const opacity = Math.max(
        Math.min(defaultOpacity, defaultOpacity - offsetClientY / 100 / 2),
        0,
      );
      return {
        touched: true,
        lastClientY,
        backdropOpacity: scale === 1 ? opacity : defaultOpacity,
        canPullClose: scale === 1,
      };
    });
  };

  handleReachHorizontalMove = clientX => {
    const { innerWidth } = window;
    const { images } = this.props;
    this.setState(({ lastClientX, translateX, photoIndex }) => {
      if (lastClientX === undefined) {
        return {
          touched: true,
          lastClientX: clientX,
          translateX,
        };
      }
      const originOffsetClientX = clientX - lastClientX;
      let offsetClientX = originOffsetClientX;

      // 第一张和最后一张超出距离减半
      if (
        (photoIndex === 0 && originOffsetClientX > 0) ||
        (photoIndex === images.length - 1 && originOffsetClientX < 0)
      ) {
        offsetClientX = originOffsetClientX / 2;
      }
      return {
        touched: true,
        lastClientX: lastClientX,
        translateX:
          -(innerWidth + horizontalOffset) * photoIndex + offsetClientX,
      };
    });
  };

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
  };

  handleReachMove = (
    reachState: ReachTypeEnum,
    clientX: number,
    clientY: number,
    scale?: number,
  ) => {
    if (reachState === ReachTypeEnum.XReach) {
      this.handleReachHorizontalMove(clientX);
    } else if (reachState === ReachTypeEnum.YReach) {
      this.handleReachVerticalMove(clientY, scale);
    }
  };

  handleReachUp = (clientX: number, clientY: number) => {
    const { innerWidth, innerHeight } = window;
    const { images, onIndexChange, onClose } = this.props;
    const {
      lastClientX = clientX,
      lastClientY = clientY,
      photoIndex,
      overlayVisible,
      canPullClose,
    } = this.state;

    const offsetClientX = clientX - lastClientX;
    const offsetClientY = clientY - lastClientY;
    const singlePageWidth = innerWidth + horizontalOffset;

    // 当前偏移
    let currentTranslateX = -singlePageWidth * photoIndex;
    let currentPhotoIndex = photoIndex;
    let isChangeVisible = false;

    if (Math.abs(offsetClientY) > innerHeight * 0.14 && canPullClose) {
      isChangeVisible = true;
      onClose();
      // 下一张
    } else if (
      offsetClientX < -maxMoveOffset &&
      photoIndex < images.length - 1
    ) {
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
      overlayVisible: isChangeVisible ? true : overlayVisible,
    });
  };

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
      overlayVisible,
    } = this.state;
    const imageLength = images.length;
    const currentImage = images.length ? images[photoIndex] : undefined;
    const transform = `translate3d(${translateX}px, 0px, 0)`;
    // Overlay
    const overlayIntro = currentImage && currentImage.intro;

    return (
      <VisibleAnimationHandle visible={visible} currentImage={currentImage}>
        {({ photoVisible, showAnimateType, originRect, onShowAnimateEnd }) => {
          if (photoVisible) {
            const { innerWidth } = window;
            const overlayStyle = {
              opacity:
                overlayVisible && showAnimateType === ShowAnimateEnum.None
                  ? 1
                  : 0,
            };

            return (
              <SlideWrap className={className}>
                <div
                  className={classNames(
                    'PhotoView-PhotoSlider__Backdrop',
                    maskClassName,
                    {
                      'PhotoView-PhotoSlider__fadeIn':
                        showAnimateType === ShowAnimateEnum.In,
                      'PhotoView-PhotoSlider__fadeOut':
                        showAnimateType === ShowAnimateEnum.Out,
                    },
                  )}
                  style={{ background: `rgba(0, 0, 0, ${backdropOpacity})` }}
                />
                {bannerVisible && (
                  <div
                    className="PhotoView-PhotoSlider__BannerWrap"
                    style={overlayStyle}
                  >
                    <div className="PhotoView-PhotoSlider__Counter">
                      {photoIndex + 1} / {imageLength}
                    </div>
                    <div className="PhotoView-PhotoSlider__BannerRight">
                      <CloseSVG
                        className="PhotoView-PhotoSlider__Close"
                        onTouchEnd={isMobile ? onClose : undefined}
                        onClick={isMobile ? undefined : onClose}
                      />
                    </div>
                  </div>
                )}
                {images
                  .slice(
                    // 加载相邻三张
                    Math.max(photoIndex - 1, 0),
                    Math.min(photoIndex + 2, imageLength + 1),
                  )
                  .map((item: dataType, index) => {
                    // 截取之前的索引位置
                    const realIndex =
                      photoIndex === 0
                        ? photoIndex + index
                        : photoIndex - 1 + index;
                    return (
                      <PhotoView
                        key={item.key || realIndex}
                        src={item.src}
                        onReachMove={this.handleReachMove}
                        onReachUp={this.handleReachUp}
                        onPhotoTap={this.handlePhotoTap}
                        onMaskTap={this.handlePhotoMaskTap}
                        viewClassName={viewClassName}
                        className={imageClassName}
                        style={{
                          left: `${(innerWidth + horizontalOffset) *
                            realIndex}px`,
                          WebkitTransform: transform,
                          transform,
                          transition: touched
                            ? undefined
                            : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        }}
                        loadingElement={loadingElement}
                        brokenElement={brokenElement}
                        onPhotoResize={this.handleResize}
                        showAnimateType={showAnimateType}
                        originRect={originRect}
                        onShowAnimateEnd={onShowAnimateEnd}
                      />
                    );
                  })}
                {introVisible && overlayIntro ? (
                  <div
                    className="PhotoView-PhotoSlider__FooterWrap"
                    style={overlayStyle}
                  >
                    {overlayIntro}
                  </div>
                ) : (
                  undefined
                )}
                {overlayRender &&
                  overlayRender({
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
        }}
      </VisibleAnimationHandle>
    );
  }
}
