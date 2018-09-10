import React from 'react';
import { Motion, spring } from 'react-motion';
import throttle from 'lodash.throttle';
import Photo from './Photo';
import PhotoWrap from './components/PhotoWrap';
import isMobile from './utils/isMobile';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import slideToSuitableOffset from './utils/slideToSuitableOffset';
import { getClosedHorizontal, getClosedVertical } from './utils/getCloseEdge';
import {
  defaultAnimationConfig,
  minReachOffset,
  minScale,
  maxScale,
  scaleBuffer,
} from './variables';

type ReachFunction = (pageX: number, pageY: number) => void;

export interface IPhotoViewProps {
  // 图片地址
  src: string;
  // 容器类名
  wrapClassName?: string;
  // 图片类名
  className?: string;
  // style
  style?: object;
  // 缩放，用于下拉关闭变小的效果
  photoScale?: number;

  // 到达顶部滑动事件
  onReachTopMove?: ReachFunction;
  // 到达右部滑动事件
  onReachRightMove?: ReachFunction;
  // 到达底部滑动事件
  onReachBottomMove?: ReachFunction;
  // 到达左部滑动事件
  onReachLeftMove?: ReachFunction;
  // 触摸解除事件
  onReachUp?: ReachFunction;

  onPhotoResize?: () => void;
}

const initialState = {
  // 图片 X 偏移量
  x: 0,
  // 图片 y 偏移量
  y: 0,
  // 图片缩放程度
  scale: 1,
  // 图片处于触摸的状态
  touched: false,

  // 触摸开始时 x 原始坐标
  pageX: 0,
  // 触摸开始时 y 原始坐标
  pageY: 0,

  // 触摸开始时图片 x 偏移量
  lastX: 0,
  // 触摸开始时图片 y 偏移量
  lastY: 0,

  // 触摸开始时时间
  touchedTime: 0,
  // 多指触控间距
  lastTouchLength: 0,
  // 动画类型
  animation: defaultAnimationConfig,

  // 当前边缘触发状态，0: 未触发，1: x 轴，2: y 轴
  reachState: 0,
};

export default class PhotoView extends React.Component<
  IPhotoViewProps,
  typeof initialState
> {
  static displayName = 'PhotoView';

  readonly state = initialState;

  private photoRef;

  constructor(props) {
    super(props);
    this.handleMove = throttle(this.handleMove, 8);
  }

  componentDidMount() {
    if (isMobile) {
      window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      window.addEventListener('touchend', this.handleTouchEnd);
    } else {
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
  }

  componentWillUnmount() {
    if (isMobile) {
      window.removeEventListener('touchmove', this.handleTouchMove);
      window.removeEventListener('touchend', this.handleTouchEnd);
    } else {
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }

  handleStart = (pageX: number, pageY: number, touchLength: number = 0) => {
    this.setState(prevState => ({
      touched: true,
      pageX,
      pageY,
      lastX: prevState.x,
      lastY: prevState.y,
      lastTouchLength: touchLength,
      touchedTime: Date.now(),
    }));
  }

  handleMove = (newPageX: number, newPageY: number, touchLength: number = 0) => {
    if (this.state.touched) {
      const { width, naturalWidth } = this.photoRef.state;
      const {
        x,
        y,
        pageX,
        pageY,
        lastX,
        lastY,
        scale,
        lastTouchLength,
        reachState,
      } = this.state;
      let currentX = x;
      let currentY = y;
      // 边缘状态
      let currentReachState = 0;
      if (touchLength === 0) {
        currentX = newPageX - pageX + lastX;
        currentY = newPageY - pageY + lastY;
        // 边缘触发检测
        currentReachState = this.handleReachCallback(
          currentX,
          currentY,
          scale,
          newPageX,
          newPageY,
          reachState,
        );
      }
      // 横向边缘触发禁用当前滑动
      if (currentReachState === 1) {
        this.setState({
          reachState: 1,
        });
      } else {
        // 目标倍数
        const endScale = scale + (touchLength - lastTouchLength) / 100 / 2 * scale;
        // 限制最大倍数和最小倍数
        const toScale = Math.max(
          Math.min(
            endScale,
            Math.max(maxScale, naturalWidth / width)
          ),
          minScale - scaleBuffer,
        );
        this.setState({
          lastTouchLength: touchLength,
          reachState: currentReachState,
          ...getPositionOnMoveOrScale({
            x: currentX,
            y: currentY,
            pageX: newPageX,
            pageY: newPageY,
            fromScale: scale,
            toScale,
          }),
        });
      }
    }
  }

  handleDoubleClick = (e) => {
    const { pageX, pageY } = e;
    const { width, naturalWidth } = this.photoRef.state;
    this.setState(({ x, y, scale }) => {
      return {
        pageX,
        pageY,
        ...getPositionOnMoveOrScale({
          x,
          y,
          pageX,
          pageY,
          fromScale: scale,
          // 若图片足够大，则放大适应的倍数
          toScale: scale !== 1 ? 1 : Math.max(2, naturalWidth / width),
        }),
        animation: defaultAnimationConfig,
      };
    });
  }

  handleWheel = (e) => {
    e.preventDefault();
    const { pageX, pageY, deltaY } = e;
    const { width, naturalWidth } = this.photoRef.state;
    this.setState(({ x, y, scale }) => {
      const endScale = scale - deltaY / 100 / 2;
      // 限制最大倍数和最小倍数
      const toScale = Math.max(
        Math.min(
          endScale,
          Math.max(maxScale, naturalWidth / width)
        ),
        minScale,
      );
      return {
        pageX,
        pageY,
        ...getPositionOnMoveOrScale({
          x,
          y,
          pageX,
          pageY,
          fromScale: scale,
          toScale,
        }),
        animation: defaultAnimationConfig,
      };
    });
  }

  handleTouchStart = e => {
    if (e.touches.length >= 2) {
      const { pageX, pageY, touchLength } = getMultipleTouchPosition(e);
      this.handleStart(pageX, pageY, touchLength);
    } else {
      const { pageX, pageY } = e.touches[0];
      this.handleStart(pageX, pageY);
    }
  }

  handleMouseDown = e => {
    e.preventDefault();
    this.handleStart(e.pageX, e.pageY);
  }

  handleTouchMove = e => {
    e.preventDefault();
    if (e.touches.length >= 2) {
      const { pageX, pageY, touchLength } = getMultipleTouchPosition(e);
      this.handleMove(pageX, pageY, touchLength);
    } else {
      const { pageX, pageY } = e.touches[0];
      this.handleMove(pageX, pageY);
    }
  }

  handleMouseMove = e => {
    e.preventDefault();
    this.handleMove(e.pageX, e.pageY);
  }

  handleUp = (newPageX: number, newPageY: number) => {
    if (this.state.touched) {
      const { onReachUp } = this.props;
      const { width, height } = this.photoRef.state;
      this.setState(({
        x,
        y,
        lastX,
        lastY,
        scale,
        touchedTime,
        pageX,
        pageY,
      }) => {
        if (onReachUp) {
          onReachUp(newPageX, newPageY);
        }
        const hasMove = pageX !== newPageX || pageY !== newPageY;
        // 缩放弹性效果
        const toScale = Math.max(
          Math.min(
            scale,
            maxScale,
          ),
          minScale,
        );
        return {
          touched: false,
          scale: toScale,
          reachState: 0, // 重置触发状态
          ...slideToSuitableOffset({
            x,
            y,
            lastX,
            lastY,
            width,
            height,
            scale,
            touchedTime,
            hasMove,
          }),
        };
      });
    }
  }

  handleTouchEnd = (e) => {
    const { pageX, pageY } = e.changedTouches[0];
    this.handleUp(pageX, pageY);
  }

  handleMouseUp = (e) => {
    const { pageX, pageY } = e;
    this.handleUp(pageX, pageY);
  }

  handleResize = () => {
    this.setState(initialState);
    const { onPhotoResize } = this.props;
    if (onPhotoResize) {
      onPhotoResize();
    }
  }

  handleReachCallback = (
    x: number,
    y: number,
    scale: number,
    newPageX: number,
    newPageY: number,
    reachState: number,
  ): number => {
    const { width, height } = this.photoRef.state;

    const horizontalType = getClosedHorizontal(x, scale, width);
    const verticalType = getClosedVertical(y, scale, height);
    const {
      onReachTopMove,
      onReachRightMove,
      onReachBottomMove,
      onReachLeftMove,
    } = this.props;
    //  触碰到边缘
    if (
      onReachLeftMove
      && (horizontalType
      && x > minReachOffset
      && reachState === 0
      || reachState === 1)
    ) {
      onReachLeftMove(newPageX, newPageY);
      return 1;
    } else if (
      onReachRightMove
      && (horizontalType
      && x < -minReachOffset
      && reachState === 0
      || reachState === 1)
    ) {
      onReachRightMove(newPageX, newPageY);
      return 1;
    } else if (
      onReachTopMove
      && (verticalType
      && y > minReachOffset
      && reachState === 0
      || reachState === 2)
    ) {
      onReachTopMove(newPageX, newPageY);
      return 2;
    } else if (
      onReachBottomMove
      && (verticalType
      && y < -minReachOffset
      && reachState === 0
      || reachState === 2)
    ) {
      onReachBottomMove(newPageX, newPageY);
      return 2;
    }
    return 0;
  }

  handlePhotoRef = (ref) => {
    this.photoRef = ref;
  }

  render() {
    const { src, wrapClassName, className, style, photoScale = 1 } = this.props;
    const { x, y, scale, touched, animation } = this.state;

    return (
      <PhotoWrap className={wrapClassName} style={style}>
        <Motion
          style={{
            currX: touched ? x : spring(x, animation),
            currY: touched ? y : spring(y, animation),
            currScale: touched ? scale : spring(scale, animation),
          }}
        >
          {({ currX, currY, currScale }) => {
            const transform = `translate3d(${currX}px, ${currY}px, 0) scale(${currScale * photoScale})`;
            return (
              <Photo
                className={className}
                src={src}
                ref={this.handlePhotoRef}
                onDoubleClick={this.handleDoubleClick}
                onMouseDown={isMobile ? undefined : this.handleMouseDown}
                onTouchStart={isMobile ? this.handleTouchStart : undefined}
                onWheel={this.handleWheel}
                onPhotoResize={this.handleResize}
                style={{
                  WebkitTransform: transform,
                  transform,
                }}
              />
            );
          }}
        </Motion>
      </PhotoWrap>
    );
  }
}
