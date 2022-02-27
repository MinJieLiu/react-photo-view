import React, { useRef } from 'react';
import isTouchDevice from './utils/isTouchDevice';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import { getReachType, computePositionEdge } from './utils/edgeHandle';
import getRotateSize from './utils/getRotateSize';
import { maxScale, minStartTouchOffset, scaleBuffer, minScale } from './variables';
import type { DataType, ReachMoveFunction, ReachFunction, PhotoTapFunction, BrokenElementParams } from './types';
import type { ReachType, TouchStartType } from './types';
import useSetState from './hooks/useSetState';
import limitNumber from './utils/limitNumber';
import getSuitableImageSize from './utils/getSuitableImageSize';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';
import useDebounceCallback from './hooks/useDebounceCallback';
import useEventListener from './hooks/useEventListener';
import useContinuousTap from './hooks/useContinuousTap';
import useScrollPosition from './hooks/useScrollPosition';
import useAnimationPosition from './hooks/useAnimationPosition';
import useMountedRef from './hooks/useMountedRef';
import type { IPhotoLoadedParams } from './Photo';
import Photo from './Photo';
import './PhotoBox.less';

export interface PhotoBoxProps {
  // 图片信息
  item: DataType;
  // 是否可见
  visible: boolean;
  // 动画时间
  speed: number;
  // 动画函数
  easing: string;
  // 容器类名
  wrapClassName?: string;
  // 图片类名
  className?: string;
  // style
  style?: object;
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
  // 旋转状态
  rotate?: number;
  // 放大缩小
  scale?: number;

  // Photo 点击事件
  onPhotoTap: PhotoTapFunction;
  // Mask 点击事件
  onMaskTap: PhotoTapFunction;
  // 到达边缘滑动事件
  onReachMove: ReachMoveFunction;
  // 触摸解除事件
  onReachUp: ReachFunction;
  // Resize 事件
  onPhotoResize?: () => void;
  // 滚轮事件
  onWheel: (scale: number) => void;
  // 是否在当前操作中
  isActive: boolean;
}

const initialState = {
  // 真实宽度
  naturalWidth: undefined as number | undefined,
  // 真实高度
  naturalHeight: undefined as number | undefined,
  // 宽度
  width: 0,
  // 高度
  height: 0,
  // 加载成功状态
  loaded: undefined as boolean | undefined,
  // 破碎状态
  broken: false,

  // 图片 X 偏移量
  x: 0,
  // 图片 y 偏移量
  y: 0,
  // 图片处于触摸的状态
  touched: false,
  // 背景处于触摸状态
  maskTouched: false,

  // 触摸开始时 x 原始坐标
  CX: 0,
  // 触摸开始时 y 原始坐标
  CY: 0,

  // 触摸开始时图片 x 偏移量
  lastX: 0,
  // 触摸开始时图片 y 偏移量
  lastY: 0,
  // 上一个触摸状态 x 原始坐标
  lastCX: 0,
  // 上一个触摸状态 y 原始坐标
  lastCY: 0,

  // 触摸开始时时间
  touchTime: 0,
  // 多指触控间距
  touchLength: 0,
  // 是否暂停 transition
  pause: true,
  // 停止 Raf
  stopRaf: true,
  // 当前边缘触发状态
  currReach: undefined as ReachType,
};

export default function PhotoBox({
  item: { src, render, width: customWidth, height: customHeight, originRef },
  visible,
  speed,
  easing,
  wrapClassName,
  className,
  style,
  loadingElement,
  brokenElement,
  rotate = 0,
  scale = 1,

  onPhotoTap,
  onMaskTap,
  onReachMove,
  onReachUp,
  onPhotoResize,
  onWheel,
  isActive,
}: PhotoBoxProps) {
  const [state, updateState] = useSetState(initialState);
  const initialTouchRef = useRef<TouchStartType>(0);
  const mounted = useMountedRef();

  const {
    naturalWidth = customWidth || 0,
    naturalHeight = customHeight || 0,
    width,
    height,
    loaded = !src,
    broken,
    x,
    y,
    touched,
    stopRaf,
    maskTouched,
    CX,
    CY,
    lastX,
    lastY,
    lastCX,
    lastCY,
    touchTime,
    touchLength,
    pause,
    currReach,
  } = state;

  const handleMove = useDebounceCallback(
    (nextClientX: number, nextClientY: number, currentTouchLength: number = 0) => {
      if ((touched || maskTouched) && isActive) {
        // 通过旋转调换宽高
        const [currentWidth, currentHeight] = getRotateSize(rotate, width, height);
        // 单指最小缩放下，以初始移动距离来判断意图
        if (currentTouchLength === 0 && initialTouchRef.current === 0) {
          const isStillX = Math.abs(nextClientX - CX) <= minStartTouchOffset;
          const isStillY = Math.abs(nextClientY - CY) <= minStartTouchOffset;
          // 初始移动距离不足
          if (isStillX && isStillY) {
            // 方向记录上次移动距离，以便平滑过渡
            updateState({
              lastCX: nextClientX,
              lastCY: nextClientY,
            });
            return;
          }
          // 设置响应状态
          initialTouchRef.current = !isStillX ? 1 : nextClientY > CY ? 3 : 2;
        }

        const offsetX = nextClientX - lastCX;
        const offsetY = nextClientY - lastCY;
        // 边缘触发状态
        let currentReach: ReachType = undefined;
        if (currentTouchLength === 0) {
          // 边缘超出状态
          const [horizontalCloseEdge] = computePositionEdge(offsetX + lastX, scale, currentWidth, innerWidth);
          const [verticalCloseEdge] = computePositionEdge(offsetY + lastY, scale, currentHeight, innerHeight);
          // 边缘触发检测
          currentReach = getReachType(initialTouchRef.current, horizontalCloseEdge, verticalCloseEdge, currReach);

          // 接触边缘
          if (currentReach !== undefined) {
            onReachMove(currentReach, nextClientX, nextClientY, scale);
          }
        }
        // 横向边缘触发、背景触发禁用当前滑动
        if (currentReach === 'x' || maskTouched) {
          updateState({ currReach: 'x' });
        } else {
          // 目标倍数
          const endScale = scale + ((currentTouchLength - touchLength) / 100 / 2) * scale;
          // 限制最大倍数和最小倍数
          const toScale = limitNumber(endScale, minScale - scaleBuffer, Math.max(maxScale, naturalWidth / width));
          if (scale !== toScale) {
            onWheel(toScale);
          }
          updateState({
            touchLength: currentTouchLength,
            currReach: currentReach,
            ...getPositionOnMoveOrScale(
              x,
              y,
              nextClientX,
              nextClientY,
              width,
              height,
              scale,
              toScale,
              offsetX,
              offsetY,
            ),
          });
        }
      }
    },
    {
      maxWait: 8,
    },
  );

  function updateRaf(position: { x?: number; y?: number }) {
    if (stopRaf || touched) {
      return false;
    }
    if (mounted.current) {
      // 下拉关闭时可以有动画
      updateState({ ...position, pause: visible });
    }
    return mounted.current;
  }

  const slideToPosition = useScrollPosition(
    (nextX) => updateRaf({ x: nextX }),
    (nextY) => updateRaf({ y: nextY }),
    (nextScale) => {
      if (mounted.current) {
        onWheel(nextScale);
      }
      return !touched && mounted.current;
    },
  );

  const handlePhotoTap = useContinuousTap(
    (currentClientX: number, currentClientY: number) => {
      onPhotoTap?.(currentClientX, currentClientY);
    },
    (currentClientX: number, currentClientY: number) => {
      if (currReach !== undefined) {
        return;
      }
      // 若图片足够大，则放大适应的倍数
      const toScale = scale !== 1 ? 1 : Math.max(2, naturalWidth / width);
      onWheel(toScale);
      updateState({
        ...getPositionOnMoveOrScale(x, y, currentClientX, currentClientY, width, height, scale, toScale),
        ...(toScale <= 1 && { x: 0, y: 0 }),
      });
    },
  );

  function handleUp(nextClientX: number, nextClientY: number) {
    // 重置响应状态
    initialTouchRef.current = 0;
    if ((touched || maskTouched) && isActive) {
      const hasMove = CX !== nextClientX || CY !== nextClientY;
      const targetScale = limitNumber(scale, minScale, Math.max(maxScale, naturalWidth / width || 1));
      if (targetScale !== scale) {
        onWheel(targetScale);
      }
      updateState({
        touched: false,
        maskTouched: false,
        pause: false,
        stopRaf: false,
        currReach: undefined,
      });
      // Go
      slideToPosition(x, y, lastX, lastY, width, height, scale, rotate, touchTime);

      onReachUp?.(nextClientX, nextClientY);
      // 触发 Tap 事件
      if (!hasMove) {
        if (touched && onPhotoTap) {
          handlePhotoTap(nextClientX, nextClientY);
        } else if (maskTouched && onMaskTap) {
          onMaskTap(nextClientX, nextClientY);
        }
      }
    }
  }

  useEventListener(isTouchDevice ? undefined : 'mousemove', (e) => {
    e.preventDefault();
    handleMove(e.clientX, e.clientY);
  });
  useEventListener(isTouchDevice ? undefined : 'mouseup', (e) => {
    handleUp(e.clientX, e.clientY);
  });
  useEventListener(
    isTouchDevice ? 'touchmove' : undefined,
    (e) => {
      e.preventDefault();
      const position = getMultipleTouchPosition(e);
      handleMove(...position);
    },
    { passive: false },
  );
  useEventListener(
    isTouchDevice ? 'touchend' : undefined,
    ({ changedTouches }) => {
      const touch = changedTouches[0];
      handleUp(touch.clientX, touch.clientY);
    },
    { passive: false },
  );
  useEventListener(
    'resize',
    useDebounceCallback(
      () => {
        if (loaded && !touched) {
          updateState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
          if (onPhotoResize) {
            onPhotoResize();
          }
        }
      },
      { maxWait: 8 },
    ),
  );

  useIsomorphicLayoutEffect(() => {
    updateState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
  }, [rotate]);

  function handlePhotoLoad(params: IPhotoLoadedParams) {
    updateState({
      ...params,
      ...(params.loaded && getSuitableImageSize(params.naturalWidth || 0, params.naturalHeight || 0, rotate)),
    });
  }

  function handleStart(currentClientX: number, currentClientY: number, currentTouchLength: number = 0) {
    updateState({
      touched: true,
      CX: currentClientX,
      CY: currentClientY,
      lastCX: currentClientX,
      lastCY: currentClientY,
      lastX: x,
      lastY: y,
      touchLength: currentTouchLength,
      touchTime: Date.now(),
    });
  }

  function handleWheel(e: React.WheelEvent) {
    if (currReach !== undefined) {
      return;
    }
    const endScale = scale - e.deltaY / 100 / 2;
    // 限制最大倍数和最小倍数
    const toScale = limitNumber(endScale, minScale, Math.max(maxScale, naturalWidth / width));

    updateState({
      CX: e.clientX,
      CY: e.clientY,
      stopRaf: true,
      ...getPositionOnMoveOrScale(x, y, e.clientX, e.clientY, width, height, scale, toScale),
      ...(toScale <= 1 && { x: 0, y: 0 }),
    });
    onWheel(toScale);
  }

  function handleMaskStart(currentClientX: number, currentClientY: number) {
    updateState({
      maskTouched: true,
      CX: currentClientX,
      CY: currentClientY,
      lastX: x,
      lastY: y,
    });
  }

  function handleMaskMouseDown(e: React.MouseEvent) {
    handleMaskStart(e.clientX, e.clientY);
  }

  function handleMaskTouchStart(e: React.TouchEvent) {
    const touch = e.touches[0];
    handleMaskStart(touch.clientX, touch.clientY);
  }

  function handleTouchStart(e: React.TouchEvent) {
    e.stopPropagation();
    handleStart(...getMultipleTouchPosition(e));
  }

  function handleMouseDown(e: React.MouseEvent) {
    e.stopPropagation();
    handleStart(e.clientX, e.clientY, 0);
  }

  // 计算位置
  const [translateX, translateY, currentWidth, currentHeight, currentScale, opacity, easingMode, FIT] =
    useAnimationPosition(visible, originRef, loaded, x, y, width, height, scale, speed, (isPause: boolean) =>
      updateState({ pause: isPause }),
    );
  // 图片 objectFit 渐变时间
  const transitionLayoutTime = easingMode < 4 ? speed / 4 : easingMode > 4 ? speed : 0;
  const transitionCSS = `transform ${speed}ms ${easing}`;

  const attrs = {
    className,
    onMouseDown: isTouchDevice ? undefined : handleMouseDown,
    onTouchStart: isTouchDevice ? handleTouchStart : undefined,
    onWheel: handleWheel,
    style: {
      width: currentWidth,
      height: currentHeight,
      opacity,
      objectFit: easingMode === 4 ? undefined : FIT,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      transition:
        easingMode > 2 || easingMode > 4
          ? `${transitionCSS}, opacity ${speed}ms ease, height ${transitionLayoutTime}ms ${easing}`
          : undefined,
    },
  };

  return (
    <div
      className={`PhotoView__PhotoWrap${wrapClassName ? ` ${wrapClassName}` : ''}`}
      style={style}
      onMouseDown={!isTouchDevice && isActive ? handleMaskMouseDown : undefined}
      onTouchStart={isTouchDevice && isActive ? handleMaskTouchStart : undefined}
    >
      <div
        className="PhotoView__PhotoBox"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${currentScale})`,
          transition: touched || pause ? undefined : transitionCSS,
          willChange: isActive ? 'transform' : undefined,
        }}
      >
        {src ? (
          <Photo
            src={src}
            loaded={loaded}
            broken={broken}
            {...attrs}
            onPhotoLoad={handlePhotoLoad}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
          />
        ) : (
          render?.({ attrs, scale: currentScale, rotate })
        )}
      </div>
    </div>
  );
}
