import React from 'react';
import classNames from 'classnames';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import VisibleAnimationHandle from './components/VisibleAnimationHandle';
import Close from './components/Close';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import isTouchDevice from './utils/isTouchDevice';
import { dataType, IPhotoProviderBase, overlayRenderProps, ReachTypeEnum, ShowAnimateEnum } from './types';
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
  // 该状态是否需要 transition
  shouldTransition: boolean;
  // Reach 开始时 x 坐标
  lastClientX: number | undefined;
  // Reach 开始时 y 坐标
  lastClientY: number | undefined;
  // 背景透明度
  backdropOpacity: number;
  // 上次关闭的背景透明度
  lastBackdropOpacity: number;
  // 覆盖物可见度
  overlayVisible: boolean;
  // 可下拉关闭
  canPullClose: boolean;
  // 旋转集合
  rotatingMap: Map<number, number>;
};

export default class PhotoSlider extends React.Component<IPhotoSliderProps, PhotoSliderState> {
  static displayName = 'PhotoSlider';

  static defaultProps = {
    maskClosable: true,
    photoClosable: false,
    bannerVisible: true,
    introVisible: true,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.index !== undefined && nextProps.index !== prevState.photoIndex) {
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
      shouldTransition: true,

      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      lastBackdropOpacity: defaultOpacity,
      overlayVisible: true,
      canPullClose: true,

      rotatingMap: new Map<number, number>(),
    };
  }

  componentDidMount() {
    const { index = 0 } = this.props;
    this.setState({
      translateX: index * -(window.innerWidth + horizontalOffset),
      photoIndex: index,
    });
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClose = (evt?: React.MouseEvent | React.TouchEvent) => {
    const { onClose } = this.props;
    const { backdropOpacity } = this.state;
    onClose(evt);
    this.setState({
      overlayVisible: true,
      // 记录当前关闭时的透明度
      lastBackdropOpacity: backdropOpacity,
    });
  };

  handlePhotoTap = () => {
    const { photoClosable } = this.props;
    if (photoClosable) {
      this.handleClose();
    } else {
      this.setState(prevState => ({
        overlayVisible: !prevState.overlayVisible,
      }));
    }
  };

  handlePhotoMaskTap = () => {
    const { maskClosable } = this.props;
    if (maskClosable) {
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
        shouldTransition: false,
      };
    });
  };

  handleRotate = (rotating: number) => {
    const { photoIndex, rotatingMap } = this.state;
    rotatingMap.set(photoIndex, rotating);
    this.setState({
      rotatingMap,
    });
  };

  handleKeyDown = (evt: KeyboardEvent) => {
    const { visible } = this.props;
    if (visible) {
      switch (evt.key) {
        case 'ArrowLeft':
          this.handlePrevious(false);
          break;
        case 'ArrowRight':
          this.handleNext(false);
          break;
        case 'Escape':
          this.handleClose();
          break;
      }
    }
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
      const opacity = Math.max(Math.min(defaultOpacity, defaultOpacity - offsetClientY / 100 / 4), 0);
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
          shouldTransition: true,
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
        translateX: -(innerWidth + horizontalOffset) * photoIndex + offsetClientX,
        shouldTransition: true,
      };
    });
  };

  handleIndexChange = (photoIndex: number, shouldTransition: boolean = true) => {
    const singlePageWidth = window.innerWidth + horizontalOffset;
    const translateX = -singlePageWidth * photoIndex;
    this.setState({
      touched: false,
      lastClientX: undefined,
      lastClientY: undefined,
      translateX,
      photoIndex,
      shouldTransition,
    });
    const { onIndexChange } = this.props;
    if (onIndexChange) {
      onIndexChange(photoIndex);
    }
  };

  handlePrevious = (shouldTransition?: boolean) => {
    const { photoIndex } = this.state;
    if (photoIndex > 0) {
      this.handleIndexChange(photoIndex - 1, shouldTransition);
    }
  };

  handleNext = (shouldTransition?: boolean) => {
    const { images } = this.props;
    const { photoIndex } = this.state;
    if (photoIndex < images.length - 1) {
      this.handleIndexChange(photoIndex + 1, shouldTransition);
    }
  };

  handleReachMove = (reachState: ReachTypeEnum, clientX: number, clientY: number, scale?: number) => {
    if (reachState === ReachTypeEnum.XReach) {
      this.handleReachHorizontalMove(clientX);
    } else if (reachState === ReachTypeEnum.YReach) {
      this.handleReachVerticalMove(clientY, scale);
    }
  };

  handleReachUp = (clientX: number, clientY: number) => {
    const { images } = this.props;
    const { lastClientX = clientX, lastClientY = clientY, photoIndex, overlayVisible, canPullClose } = this.state;

    const offsetClientX = clientX - lastClientX;
    const offsetClientY = clientY - lastClientY;
    let willClose = false;
    // 下一张
    if (offsetClientX < -maxMoveOffset && photoIndex < images.length - 1) {
      this.handleIndexChange(photoIndex + 1);
      return;
    }
    // 上一张
    if (offsetClientX > maxMoveOffset && photoIndex > 0) {
      this.handleIndexChange(photoIndex - 1);
      return;
    }
    const singlePageWidth = window.innerWidth + horizontalOffset;

    // 当前偏移
    let currentTranslateX = -singlePageWidth * photoIndex;
    let currentPhotoIndex = photoIndex;

    if (Math.abs(offsetClientY) > window.innerHeight * 0.14 && canPullClose) {
      willClose = true;
      this.handleClose();
    }
    this.setState({
      touched: false,
      translateX: currentTranslateX,
      photoIndex: currentPhotoIndex,
      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      overlayVisible: willClose ? true : overlayVisible,
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
      bannerVisible,
      introVisible,
      overlayRender,
      toolbarRender,
      loadingElement,
      brokenElement,
    } = this.props;
    const {
      translateX,
      touched,
      photoIndex,
      backdropOpacity,
      lastBackdropOpacity,
      overlayVisible,
      rotatingMap,
      shouldTransition,
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
            const currentOverlayVisible = overlayVisible && showAnimateType === ShowAnimateEnum.None;
            // 关闭过程中使用下拉保存的透明度
            const currentOpacity = visible ? backdropOpacity : lastBackdropOpacity;
            // 覆盖物参数
            const overlayParams: overlayRenderProps = {
              images,
              index: photoIndex,
              visible,
              onClose: this.handleClose,
              onIndexChange: this.handleIndexChange,
              overlayVisible: currentOverlayVisible,
              onRotate: this.handleRotate,
              rotate: rotatingMap.get(photoIndex) || 0,
            };
            return (
              <SlideWrap
                className={classNames(
                  {
                    'PhotoView-PhotoSlider__clean': !currentOverlayVisible,
                    'PhotoView-PhotoSlider__willClose': !visible,
                  },
                  className,
                )}
                role="dialog"
                id="PhotoView_Slider"
                onClick={e => e.stopPropagation()}
              >
                <div
                  className={classNames('PhotoView-PhotoSlider__Backdrop', maskClassName, {
                    'PhotoView-PhotoSlider__fadeIn': showAnimateType === ShowAnimateEnum.In,
                    'PhotoView-PhotoSlider__fadeOut': showAnimateType === ShowAnimateEnum.Out,
                  })}
                  style={{
                    background: `rgba(0, 0, 0, ${currentOpacity})`,
                  }}
                  onAnimationEnd={onShowAnimateEnd}
                />
                {bannerVisible && (
                  <div className="PhotoView-PhotoSlider__BannerWrap">
                    <div className="PhotoView-PhotoSlider__Counter">
                      {photoIndex + 1} / {imageLength}
                    </div>
                    <div className="PhotoView-PhotoSlider__BannerRight">
                      {toolbarRender && toolbarRender(overlayParams)}
                      <Close className="PhotoView-PhotoSlider__toolbarIcon" onClick={this.handleClose} />
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
                    const realIndex = photoIndex === 0 ? photoIndex + index : photoIndex - 1 + index;
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
                          left: `${(innerWidth + horizontalOffset) * realIndex}px`,
                          WebkitTransform: transform,
                          transform,
                          transition:
                            touched || !shouldTransition
                              ? undefined
                              : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        }}
                        loadingElement={loadingElement}
                        brokenElement={brokenElement}
                        onPhotoResize={this.handleResize}
                        isActive={photoIndex === realIndex}
                        showAnimateType={showAnimateType}
                        originRect={originRect}
                        rotate={rotatingMap.get(realIndex) || 0}
                      />
                    );
                  })}
                {!isTouchDevice && bannerVisible && (
                  <>
                    {photoIndex !== 0 && (
                      <div className="PhotoView-PhotoSlider__ArrowLeft" onClick={() => this.handlePrevious(false)}>
                        <ArrowLeft />
                      </div>
                    )}
                    {photoIndex + 1 < imageLength && (
                      <div className="PhotoView-PhotoSlider__ArrowRight" onClick={() => this.handleNext(false)}>
                        <ArrowRight />
                      </div>
                    )}
                  </>
                )}
                {Boolean(introVisible && overlayIntro) && (
                  <div className="PhotoView-PhotoSlider__FooterWrap">{overlayIntro}</div>
                )}
                {overlayRender && overlayRender(overlayParams)}
              </SlideWrap>
            );
          }
          return null;
        }}
      </VisibleAnimationHandle>
    );
  }
}
