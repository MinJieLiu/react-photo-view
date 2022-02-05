import React, { useLayoutEffect, useState } from 'react';
import type { DataType, IPhotoProviderBase, OverlayRenderProps } from './types';
import type { ReachType } from './types';
import { defaultOpacity, horizontalOffset, maxMoveOffset, maxScale, minScale } from './variables';
import isTouchDevice from './utils/isTouchDevice';
import useSetState from './hooks/useSetState';
import useEventListener from './hooks/useEventListener';
import useAnimationVisible from './hooks/useAnimationVisible';
import useAnimationOrigin from './hooks/useAnimationOrigin';
import SlidePortal from './components/SlidePortal';
import CloseIcon from './components/CloseIcon';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import PhotoView from './PhotoView';
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

type PhotoState = {
  // 旋转
  rotate: number;
  // 缩放
  scale: number;
};

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
  // 子组件状态集合
  photoMap: Map<number | string, PhotoState>;
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

  photoMap: new Map<number, PhotoState>(),
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
    photoClassName,
    photoWrapClassName,
    loadingElement,
    brokenElement,
    images,
    index: controlledIndex = 0,
    onIndexChange: controlledIndexChange,
    visible,
    onClose,
  } = props;

  const [state, updateState] = useSetState(initialState);
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

    photoMap,
  } = state;

  // 受控 index
  const isControlled = props.hasOwnProperty('index');
  const index = isControlled ? controlledIndex : innerIndex;
  const onIndexChange = isControlled ? controlledIndexChange : updateInnerIndex;

  // 当前图片
  const imageLength = images.length;
  const currentImage = images[index];

  // 显示动画处理
  const { realVisible, activeAnimation, onAnimationEnd } = useAnimationVisible(visible);
  // 动画位置计算
  const originRect = useAnimationOrigin(visible, currentImage?.originRef);

  useLayoutEffect(() => {
    // 显示弹出层，修正正确的指向
    if (realVisible) {
      updateState({
        shouldTransition: false,
        translateX: index * -(window.innerWidth + horizontalOffset),
      });
      return;
    }
    // 关闭后清空状态
    updateState(initialState);
  }, [realVisible]);

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
    updateState({
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
    updateState({
      overlayVisible: true,
      // 记录当前关闭时的透明度
      lastBackdropOpacity: backdropOpacity,
    });
  }

  function handlePhotoTap() {
    if (photoClosable) {
      handleClose();
    } else {
      updateState({
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
    updateState({
      translateX: -(innerWidth + horizontalOffset) * index,
      lastClientX: undefined,
      lastClientY: undefined,
      shouldTransition: false,
    });
  }

  function handleMergePhotoMap(next: Partial<PhotoState>) {
    const nextMap = new Map(photoMap);
    if (currentImage) {
      const key = currentImage.key;
      updateState({
        photoMap: nextMap.set(key, { ...nextMap.get(key)!, ...next }),
      });
    }
  }

  function handleRotate(rotate: number) {
    handleMergePhotoMap({ rotate });
  }

  function handleScale(scale: number) {
    handleMergePhotoMap({ scale: Math.max(minScale, Math.min(maxScale, scale)) });
  }

  function onWheel(scale: number) {
    handleMergePhotoMap({ scale });
  }

  function handleReachVerticalMove(clientY: number, scale?: number) {
    if (lastClientY === undefined) {
      updateState({
        touched: true,
        lastClientY: clientY,
        backdropOpacity,
        canPullClose: true,
      });
      return;
    }
    const offsetClientY = Math.abs(clientY - lastClientY);
    const opacity = Math.max(Math.min(defaultOpacity, defaultOpacity - offsetClientY / 100 / 4), 0);

    updateState({
      touched: true,
      lastClientY,
      backdropOpacity: scale === 1 ? opacity : defaultOpacity,
      canPullClose: scale === 1,
    });
  }

  function handleReachHorizontalMove(clientX: number) {
    const { innerWidth } = window;
    if (lastClientX === undefined) {
      updateState({
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

    updateState({
      touched: true,
      lastClientX: lastClientX,
      translateX: -(innerWidth + horizontalOffset) * index + offsetClientX,
      shouldTransition: true,
    });
  }

  function handleReachMove(reachPosition: ReachType, clientX: number, clientY: number, scale?: number) {
    if (reachPosition === 'x') {
      handleReachHorizontalMove(clientX);
    } else if (reachPosition === 'y') {
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

    if (Math.abs(offsetClientY) > 100 && canPullClose && pullClosable) {
      willClose = true;
      handleClose();
    }
    updateState({
      touched: false,
      translateX: currentTranslateX,
      lastClientX: undefined,
      lastClientY: undefined,
      backdropOpacity: defaultOpacity,
      overlayVisible: willClose ? true : overlayVisible,
    });
  }

  const transform = `translate3d(${translateX}px, 0px, 0)`;
  // Overlay
  const overlayIntro = currentImage && currentImage.intro;

  if (!realVisible) {
    return null;
  }

  const { innerWidth } = window;
  const currentOverlayVisible = overlayVisible && !activeAnimation;
  // 关闭过程中使用下拉保存的透明度
  const currentOpacity = visible ? backdropOpacity : lastBackdropOpacity;
  const photoItem = currentImage ? photoMap.get(currentImage.key) : undefined;
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
    scale: photoItem?.scale || 1,
    rotate: photoItem?.rotate || 0,
  };
  return (
    <SlidePortal
      className={`${!currentOverlayVisible ? 'PhotoView-PhotoSlider__clean' : ''}${
        !visible ? ' PhotoView-PhotoSlider__willClose' : ''
      }${className ? ` ${className}` : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`PhotoView-PhotoSlider__Backdrop${maskClassName ? ` ${maskClassName}` : ''}${
          activeAnimation === 'enter'
            ? ' PhotoView-PhotoSlider__fadeIn'
            : activeAnimation === 'leave'
            ? ' PhotoView-PhotoSlider__fadeOut'
            : ''
        }`}
        style={{
          background: `rgba(0, 0, 0, ${currentOpacity})`,
        }}
        onAnimationEnd={onAnimationEnd}
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
              wrapClassName={photoWrapClassName}
              className={photoClassName}
              style={{
                left: `${(innerWidth + horizontalOffset) * realIndex}px`,
                transform,
                transition:
                  touched || !shouldTransition ? undefined : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
              }}
              loadingElement={loadingElement}
              brokenElement={brokenElement}
              onPhotoResize={handleResize}
              isActive={index === realIndex}
              activeAnimation={activeAnimation}
              originRect={originRect}
              onWheel={onWheel}
              {...photoMap.get(item.key)}
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
      {Boolean(introVisible && overlayIntro) && <div className="PhotoView-PhotoSlider__FooterWrap">{overlayIntro}</div>}
      {overlayRender && overlayRender(overlayParams)}
    </SlidePortal>
  );
}
