import React, { useEffect, useState } from 'react';
import PhotoView from './PhotoView';
import SlideWrap from './components/SlideWrap';
import VisibleAnimationHandle from './components/VisibleAnimationHandle';
import CloseIcon from './components/CloseIcon';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import isTouchDevice from './utils/isTouchDevice';
import type { DataType, IPhotoProviderBase, OverlayRenderProps } from './types';
import { ReachTypeEnum, ShowAnimateEnum } from './types';
import { defaultOpacity, horizontalOffset, maxMoveOffset, maxScale, minScale } from './variables';
import useEventListener from './hooks/useEventListener';
import './PhotoSlider.less';

export interface IPhotoSliderProps extends IPhotoProviderBase {
  // 图片列表
  images: DataType[];
  // 图片当前索引
  index?: number;
  // 索引改变回调
  onIndexChange?: (index: number) => void;
  // 可见
  visible: boolean;
  // 关闭事件
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void;
}

type PhotoSliderState = {
  // 偏移量
  translateX: number;

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
  // 放大缩小集合
  scaleMap: Map<number, number>;
};

const initialState: PhotoSliderState = {
  translateX: 0,
  touched: false,
  shouldTransition: true,

  lastClientX: undefined,
  lastClientY: undefined,
  backdropOpacity: defaultOpacity,
  lastBackdropOpacity: defaultOpacity,
  overlayVisible: true,
  canPullClose: true,

  rotatingMap: new Map<number, number>(),
  scaleMap: new Map<number, number>(),
};

export default function PhotoSlider(props: IPhotoSliderProps) {
  const {
    photoClosable,
    maskClosable = true,
    pullClosable = true,
    bannerVisible = true,
    introVisible = true,
    overlayRender,
    toolbarRender,
    className,
    maskClassName,
    viewClassName,
    imageClassName,
    loadingElement,
    brokenElement,
    images,
    index: controlledIndex = 0,
    onIndexChange: controlledIndexChange,
    visible,
    onClose,
  } = props;

  const [state, updateState] = useState(initialState);
  function mergeState(next: Partial<PhotoSliderState>) {
    updateState((prev) => ({ ...prev, ...next }));
  }
  const [innerIndex, updateInnerIndex] = useState(0);

  const {
    translateX,
    touched,
    shouldTransition,

    lastClientX,
    lastClientY,

    backdropOpacity,
    lastBackdropOpacity,
    overlayVisible,
    canPullClose,

    rotatingMap,
    scaleMap,
  } = state;

  // 受控 index
  const isControlled = props.hasOwnProperty('index');
  const index = isControlled ? controlledIndex : innerIndex;
  const onIndexChange = isControlled ? controlledIndexChange : updateInnerIndex;

  useEffect(() => {
    mergeState({
      translateX: index * -(window.innerWidth + horizontalOffset),
    });
  }, [index]);

  useEventListener('keydown', (evt: KeyboardEvent) => {
    if (visible) {
      switch (evt.key) {
        case 'ArrowLeft':
          handlePrevious(false);
          break;
        case 'ArrowRight':
          handleNext(false);
          break;
        case 'Escape':
          handleClose();
          break;
      }
    }
  });

  function handlePrevious(should?: boolean) {
    if (index > 0) {
      handleIndexChange(index - 1, should);
    }
  }

  function handleNext(should?: boolean) {
    if (index < images.length - 1) {
      handleIndexChange(index + 1, should);
    }
  }

  function handleIndexChange(currentIndex: number, should: boolean = true) {
    const singlePageWidth = window.innerWidth + horizontalOffset;
    mergeState({
      touched: false,
      lastClientX: undefined,
      lastClientY: undefined,
      translateX: -singlePageWidth * currentIndex,
      shouldTransition: should,
    });
    onIndexChange?.(currentIndex);
  }

  function handleClose(evt?: React.MouseEvent | React.TouchEvent) {
    onClose(evt);
    mergeState({
      overlayVisible: true,
      // 记录当前关闭时的透明度
      lastBackdropOpacity: backdropOpacity,
    });
  }

  function handlePhotoTap() {
    if (photoClosable) {
      handleClose();
    } else {
      mergeState({
        overlayVisible: !overlayVisible,
      });
    }
  }

  function handlePhotoMaskTap() {
    if (maskClosable) {
      handleClose();
    }
  }

  function handleResize() {
    const { innerWidth } = window;
    mergeState({
      translateX: -(innerWidth + horizontalOffset) * index,
      lastClientX: undefined,
      lastClientY: undefined,
      shouldTransition: false,
    });
  }

  function handleRotate(rotating: number) {
    rotatingMap.set(index, rotating);
    mergeState({
      rotatingMap,
    });
  }

  function handleScale(scale: number) {
    scaleMap.set(index, Math.max(minScale, Math.min(maxScale, scale)));
    mergeState({
      scaleMap,
    });
  }

  function onWheel(scale: number) {
    scaleMap.set(index, scale);
    mergeState({
      scaleMap,
    });
  }

  function handleReachVerticalMove(clientY: number, scale?: number) {
    if (lastClientY === undefined) {
      mergeState({
        touched: true,
        lastClientY: clientY,
        backdropOpacity,
        canPullClose: true,
      });
      return;
    }
    const offsetClientY = Math.abs(clientY - lastClientY);
    const opacity = Math.max(Math.min(defaultOpacity, defaultOpacity - offsetClientY / 100 / 4), 0);

    mergeState({
      touched: true,
      lastClientY,
      backdropOpacity: scale === 1 ? opacity : defaultOpacity,
      canPullClose: scale === 1,
    });
  }

  function handleReachHorizontalMove(clientX: number) {
    const { innerWidth } = window;
    if (lastClientX === undefined) {
      mergeState({
        touched: true,
        lastClientX: clientX,
        translateX,
        shouldTransition: true,
      });
      return;
    }
    const originOffsetClientX = clientX - lastClientX;
    let offsetClientX = originOffsetClientX;

    // 第一张和最后一张超出距离减半
    if ((index === 0 && originOffsetClientX > 0) || (index === images.length - 1 && originOffsetClientX < 0)) {
      offsetClientX = originOffsetClientX / 2;
    }

    mergeState({
      touched: true,
      lastClientX: lastClientX,
      translateX: -(innerWidth + horizontalOffset) * index + offsetClientX,
      shouldTransition: true,
    });
  }

  function handleReachMove(reachPosition: ReachTypeEnum, clientX: number, clientY: number, scale?: number) {
    if (reachPosition === ReachTypeEnum.XReach) {
      handleReachHorizontalMove(clientX);
    } else if (reachPosition === ReachTypeEnum.YReach) {
      handleReachVerticalMove(clientY, scale);
    }
  }

  function handleReachUp(clientX: number, clientY: number) {
    const offsetClientX = clientX - (lastClientX ?? clientX);
    const offsetClientY = clientY - (lastClientY ?? clientY);
    let willClose = false;
    // 下一张
    if (offsetClientX < -maxMoveOffset && index < images.length - 1) {
      handleIndexChange(index + 1);
      return;
    }
    // 上一张
    if (offsetClientX > maxMoveOffset && index > 0) {
      handleIndexChange(index - 1);
      return;
    }
    const singlePageWidth = window.innerWidth + horizontalOffset;

    // 当前偏移
    const currentTranslateX = -singlePageWidth * index;

    if (Math.abs(offsetClientY) > window.innerHeight * 0.35 && canPullClose && pullClosable) {
      willClose = true;
      handleClose();
    }
    mergeState({
      touched: false,
      translateX: currentTranslateX,
      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      overlayVisible: willClose ? true : overlayVisible,
    });
  }

  const imageLength = images.length;
  const currentImage = images.length ? images[index] : undefined;
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
          const overlayParams: OverlayRenderProps = {
            images,
            index,
            visible,
            onClose: handleClose,
            onIndexChange: handleIndexChange,
            overlayVisible: currentOverlayVisible,
            onRotate: handleRotate,
            onScale: handleScale,
            scale: scaleMap.get(index) || 1,
            rotate: rotatingMap.get(index) || 0,
          };
          return (
            <SlideWrap
              className={`${!currentOverlayVisible ? 'PhotoView-PhotoSlider__clean' : ''}${
                !visible ? ' PhotoView-PhotoSlider__willClose' : ''
              }${className ? ` ${className}` : ''}`}
              role="dialog"
              id="PhotoView_Slider"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`PhotoView-PhotoSlider__Backdrop${maskClassName ? ` ${maskClassName}` : ''}${
                  showAnimateType === ShowAnimateEnum.In
                    ? ' PhotoView-PhotoSlider__fadeIn'
                    : showAnimateType === ShowAnimateEnum.Out
                    ? ' PhotoView-PhotoSlider__fadeOut'
                    : ''
                }`}
                style={{
                  background: `rgba(0, 0, 0, ${currentOpacity})`,
                }}
                onAnimationEnd={onShowAnimateEnd}
              />
              {bannerVisible && (
                <div className="PhotoView-PhotoSlider__BannerWrap">
                  <div className="PhotoView-PhotoSlider__Counter">
                    {index + 1} / {imageLength}
                  </div>
                  <div className="PhotoView-PhotoSlider__BannerRight">
                    {toolbarRender && toolbarRender(overlayParams)}
                    <CloseIcon className="PhotoView-PhotoSlider__toolbarIcon" onClick={handleClose} />
                  </div>
                </div>
              )}
              {images
                .slice(
                  // 加载相邻三张
                  Math.max(index - 1, 0),
                  Math.min(index + 2, imageLength + 1),
                )
                .map((item: DataType, currentIndex) => {
                  // 截取之前的索引位置
                  const realIndex = index === 0 ? index + currentIndex : index - 1 + currentIndex;
                  return (
                    <PhotoView
                      key={item.key ? item.key + item.src : realIndex}
                      src={item.src}
                      onReachMove={handleReachMove}
                      onReachUp={handleReachUp}
                      onPhotoTap={handlePhotoTap}
                      onMaskTap={handlePhotoMaskTap}
                      viewClassName={viewClassName}
                      className={imageClassName}
                      style={{
                        left: `${(innerWidth + horizontalOffset) * realIndex}px`,
                        WebkitTransform: transform,
                        transform,
                        transition:
                          touched || !shouldTransition ? undefined : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      }}
                      loadingElement={loadingElement}
                      brokenElement={brokenElement}
                      onPhotoResize={handleResize}
                      isActive={index === realIndex}
                      showAnimateType={showAnimateType}
                      originRect={originRect}
                      rotate={rotatingMap.get(realIndex) || 0}
                      scale={scaleMap.get(realIndex) || 1}
                      onWheel={onWheel}
                    />
                  );
                })}
              {!isTouchDevice && bannerVisible && (
                <>
                  {index !== 0 && (
                    <div className="PhotoView-PhotoSlider__ArrowLeft" onClick={() => handlePrevious(false)}>
                      <ArrowLeft />
                    </div>
                  )}
                  {index + 1 < imageLength && (
                    <div className="PhotoView-PhotoSlider__ArrowRight" onClick={() => handleNext(false)}>
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
