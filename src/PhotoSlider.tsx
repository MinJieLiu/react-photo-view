import React, { useLayoutEffect, useRef, useState } from 'react';
import type { DataType, PhotoProviderBase, OverlayRenderProps } from './types';
import type { ReachType } from './types';
import { animationCSS, defaultOpacity, horizontalOffset, maxMoveOffset, maxScale, minScale } from './variables';
import isTouchDevice from './utils/isTouchDevice';
import useAdjacentImages from './hooks/useAdjacentImages';
import useSetState from './hooks/useSetState';
import useEventListener from './hooks/useEventListener';
import useAnimationVisible from './hooks/useAnimationVisible';
import useAnimationOrigin from './hooks/useAnimationOrigin';
import useMethods from './hooks/useMethods';
import SlidePortal from './components/SlidePortal';
import CloseIcon from './components/CloseIcon';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import PreventScroll from './components/PreventScroll';
import PhotoBox from './PhotoBox';
import './PhotoSlider.less';

export interface IPhotoSliderProps extends PhotoProviderBase {
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
  easing: boolean;
  // Reach 开始时 x 坐标
  lastCX: number | undefined;
  // Reach 开始时 y 坐标
  lastCY: number | undefined;
  // 背景透明度
  bgOpacity: number | undefined;
  // 上次关闭的背景透明度
  lastBgOpacity: number | undefined;
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
  easing: true,

  lastCX: undefined,
  lastCY: undefined,
  bgOpacity: undefined,
  lastBgOpacity: undefined,
  overlayVisible: true,
  canPullClose: true,

  photoMap: new Map<number, PhotoState>(),
};

export default function PhotoSlider(props: IPhotoSliderProps) {
  const {
    loop = 3,
    photoClosable,
    maskClosable = true,
    maskOpacity = defaultOpacity,
    pullClosable = true,
    bannerVisible = true,
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
    easing,

    lastCX,
    lastCY,

    bgOpacity = maskOpacity,
    lastBgOpacity,
    overlayVisible,
    canPullClose,

    photoMap,
  } = state;

  // 受控 index
  const isControlled = props.hasOwnProperty('index');
  const index = isControlled ? controlledIndex : innerIndex;
  const onIndexChange = isControlled ? controlledIndexChange : updateInnerIndex;
  // 内部虚拟 index
  const virtualIndexRef = useRef(index);

  // 当前图片
  const imageLength = images.length;
  const currentImage: DataType | undefined = images[index];

  // 是否开启
  const enableLoop = loop === true || imageLength > loop;

  // 显示动画处理
  const { realVisible, activeAnimation, onAnimationEnd } = useAnimationVisible(visible);
  // 动画位置计算
  const originRect = useAnimationOrigin(visible, currentImage?.originRef);

  useLayoutEffect(() => {
    // 显示弹出层，修正正确的指向
    if (realVisible) {
      updateState({
        easing: false,
        translateX: index * -(window.innerWidth + horizontalOffset),
      });
      virtualIndexRef.current = index;
      return;
    }
    // 关闭后清空状态
    updateState(initialState);
  }, [realVisible]);

  const { close, changeIndex, onRotate, onScale } = useMethods({
    close(evt?: React.MouseEvent | React.TouchEvent) {
      onClose(evt);
      updateState({
        overlayVisible: true,
        // 记录当前关闭时的透明度
        lastBgOpacity: bgOpacity,
      });
    },
    changeIndex(nextIndex: number, should: boolean = true) {
      // 当前索引
      const currentIndex = enableLoop ? virtualIndexRef.current + (nextIndex - index) : nextIndex;
      const max = imageLength - 1;
      // 虚拟 index
      // 非循环模式，限制区间
      const limitIndex = Math.min(max, Math.max(currentIndex, 0));
      const nextVirtualIndex = enableLoop ? currentIndex : limitIndex;
      // 单个屏幕宽度
      const singlePageWidth = window.innerWidth + horizontalOffset;

      updateState({
        touched: false,
        lastCX: undefined,
        lastCY: undefined,
        translateX: -singlePageWidth * nextVirtualIndex,
        easing: should,
      });

      virtualIndexRef.current = nextVirtualIndex;
      // 更新真实的 index
      const realLoopIndex = nextIndex < 0 ? max : nextIndex > max ? 0 : nextIndex;
      onIndexChange?.(enableLoop ? realLoopIndex : limitIndex);
    },
    onRotate(rotate: number) {
      handleMergePhotoMap({ rotate });
    },
    onScale(scale: number) {
      handleMergePhotoMap({ scale: Math.max(minScale, Math.min(maxScale, scale)) });
    },
  });

  useEventListener('keydown', (evt: KeyboardEvent) => {
    if (visible) {
      switch (evt.key) {
        case 'ArrowLeft':
          changeIndex(index - 1, false);
          break;
        case 'ArrowRight':
          changeIndex(index + 1, false);
          break;
        case 'Escape':
          close();
          break;
      }
    }
  });

  function handlePhotoTap() {
    if (photoClosable) {
      close();
    } else {
      updateState({
        overlayVisible: !overlayVisible,
      });
    }
  }

  function handlePhotoMaskTap() {
    if (maskClosable) {
      close();
    }
  }

  function handleResize() {
    const { innerWidth } = window;
    updateState({
      translateX: -(innerWidth + horizontalOffset) * index,
      lastCX: undefined,
      lastCY: undefined,
      easing: false,
    });
    virtualIndexRef.current = index;
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

  function onWheel(scale: number) {
    handleMergePhotoMap({ scale });
  }

  function handleReachVerticalMove(clientY: number, scale?: number) {
    if (lastCY === undefined) {
      updateState({
        touched: true,
        lastCY: clientY,
        bgOpacity,
        canPullClose: true,
      });
      return;
    }
    const offsetClientY = Math.abs(clientY - lastCY);
    const opacity = Math.max(Math.min(maskOpacity, maskOpacity - offsetClientY / 100 / 4), 0);

    updateState({
      touched: true,
      lastCY,
      bgOpacity: scale === 1 ? opacity : maskOpacity,
      canPullClose: scale === 1,
    });
  }

  function handleReachHorizontalMove(clientX: number) {
    const { innerWidth } = window;
    if (lastCX === undefined) {
      updateState({
        touched: true,
        lastCX: clientX,
        translateX,
        easing: true,
      });
      return;
    }
    const originOffsetClientX = clientX - lastCX;
    let offsetClientX = originOffsetClientX;

    // 第一张和最后一张超出距离减半
    if (
      !enableLoop &&
      ((index === 0 && originOffsetClientX > 0) || (index === images.length - 1 && originOffsetClientX < 0))
    ) {
      offsetClientX = originOffsetClientX / 2;
    }

    updateState({
      touched: true,
      lastCX: lastCX,
      translateX: -(innerWidth + horizontalOffset) * virtualIndexRef.current + offsetClientX,
      easing: true,
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
    const offsetClientX = clientX - (lastCX ?? clientX);
    const offsetClientY = clientY - (lastCY ?? clientY);
    let willClose = false;
    // 下一张
    if (offsetClientX < -maxMoveOffset) {
      changeIndex(index + 1);
      return;
    }
    // 上一张
    if (offsetClientX > maxMoveOffset) {
      changeIndex(index - 1);
      return;
    }
    const singlePageWidth = window.innerWidth + horizontalOffset;

    // 当前偏移
    const currentTranslateX = -singlePageWidth * virtualIndexRef.current;

    if (Math.abs(offsetClientY) > 100 && canPullClose && pullClosable) {
      willClose = true;
      close();
    }
    updateState({
      touched: false,
      translateX: currentTranslateX,
      lastCX: undefined,
      lastCY: undefined,
      bgOpacity: maskOpacity,
      overlayVisible: willClose ? true : overlayVisible,
    });
  }

  const transform = `translate3d(${translateX}px, 0px, 0)`;
  // 截取相邻的图片
  const adjacentImages = useAdjacentImages(images, index, enableLoop);

  if (!realVisible) {
    return null;
  }

  const { innerWidth } = window;
  const currentOverlayVisible = overlayVisible && !activeAnimation;
  // 关闭过程中使用下拉保存的透明度
  const currentOpacity = visible ? bgOpacity : lastBgOpacity;
  const photoItem = currentImage ? photoMap.get(currentImage.key) : undefined;
  // 覆盖物参数
  const overlayParams: OverlayRenderProps = {
    images,
    index,
    visible,
    onClose: close,
    onIndexChange: changeIndex,
    overlayVisible: currentOverlayVisible,
    onRotate,
    onScale,
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
      {visible && <PreventScroll />}
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
          transition: touched ? undefined : `background-color 0.4s ${animationCSS}`,
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
            <CloseIcon className="PhotoView-PhotoSlider__toolbarIcon" onClick={close} />
          </div>
        </div>
      )}
      {adjacentImages.map((item: DataType, currentIndex) => {
        // 截取之前的索引位置
        const nextIndex =
          !enableLoop && index === 0 ? index + currentIndex : virtualIndexRef.current - 1 + currentIndex;

        return (
          <PhotoBox
            key={enableLoop ? `${item.key}/${item.src}/${nextIndex}` : item.key}
            src={item.src}
            render={item.render}
            width={item.width}
            height={item.height}
            onReachMove={handleReachMove}
            onReachUp={handleReachUp}
            onPhotoTap={handlePhotoTap}
            onMaskTap={handlePhotoMaskTap}
            wrapClassName={photoWrapClassName}
            className={photoClassName}
            style={{
              left: `${(innerWidth + horizontalOffset) * nextIndex}px`,
              transform,
              transition: touched || !easing ? undefined : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
            onPhotoResize={handleResize}
            isActive={currentImage?.key === item.key}
            activeAnimation={activeAnimation}
            originRect={originRect}
            onWheel={onWheel}
            {...photoMap.get(item.key)}
          />
        );
      })}
      {!isTouchDevice && bannerVisible && (
        <>
          {(enableLoop || index !== 0) && (
            <div className="PhotoView-PhotoSlider__ArrowLeft" onClick={() => changeIndex(index - 1, false)}>
              <ArrowLeft />
            </div>
          )}
          {(enableLoop || index + 1 < imageLength) && (
            <div className="PhotoView-PhotoSlider__ArrowRight" onClick={() => changeIndex(index + 1, false)}>
              <ArrowRight />
            </div>
          )}
        </>
      )}
      {overlayRender && <div className="PhotoView-PhotoSlider__Overlay">{overlayRender(overlayParams)}</div>}
    </SlidePortal>
  );
}
