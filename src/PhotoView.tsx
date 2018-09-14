import React from 'react';
import debounce from 'lodash.debounce';
import Photo from './Photo';
import PhotoWrap from './components/PhotoWrap';
import PhotoMask from './components/PhotoMask';
import throttle from './utils/throttle';
import isMobile from './utils/isMobile';
import getCurrentFromEvent from './utils/getCurrentFromEvent';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import slideToSuitableOffset from './utils/slideToSuitableOffset';
import { getClosedHorizontal, getClosedVertical } from './utils/getCloseEdge';
import { maxScale, minReachOffset, minScale, scaleBuffer } from './variables';
import {
  ReachFunction,
  PhotoClickFunction,
  ReachTypeEnum,
} from './types';

interface IPhotoViewProps {
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
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element;

  // Photo 点击事件
  onPhotoClick?: PhotoClickFunction;
  // Mask 点击事件
  onMaskClick?: PhotoClickFunction;
  // 到达顶部滑动事件
  onReachTopMove?: ReachFunction;
  // 到达右部滑动事件
  onReachRightMove?: ReachFunction;
  // 到达底部滑动事件
  onReachBottomMove?: ReachFunction;
  // 到达左部滑动事件
  onReachLeftMove?: ReachFunction;
  // 触摸解除事件
  onReachUp?: (clientX: number, clientY: number) => void;

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
  // 背景处于触摸状态
  maskTouched: false,

  // 触摸开始时 x 原始坐标
  clientX: 0,
  // 触摸开始时 y 原始坐标
  clientY: 0,

  // 触摸开始时图片 x 偏移量
  lastX: 0,
  // 触摸开始时图片 y 偏移量
  lastY: 0,

  // 触摸开始时时间
  touchedTime: 0,
  // 多指触控间距
  lastTouchLength: 0,

  // 当前边缘触发状态
  reachState: ReachTypeEnum.Normal,
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
    this.photoClick = debounce(this.photoClick, 300);
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

  handleStart = (clientX: number, clientY: number, touchLength: number = 0) => {
    this.setState(prevState => ({
      touched: true,
      clientX,
      clientY,
      lastX: prevState.x,
      lastY: prevState.y,
      lastTouchLength: touchLength,
      touchedTime: Date.now(),
    }));
  }

  handleMove = (newClientX: number, newClientY: number, touchLength: number = 0) => {
    const { touched, maskTouched } = this.state;
    if (touched || maskTouched) {
      const { width, naturalWidth } = this.photoRef.state;
      const {
        x,
        y,
        clientX,
        clientY,
        lastX,
        lastY,
        scale,
        lastTouchLength,
        reachState,
      } = this.state;
      let currentX = x;
      let currentY = y;
      // 边缘状态
      let currentReachState = ReachTypeEnum.Normal;
      if (touchLength === 0) {
        currentX = newClientX - clientX + lastX;
        currentY = newClientY - clientY + lastY;
        // 边缘触发检测
        currentReachState = this.handleReachCallback(
          currentX,
          currentY,
          scale,
          newClientX,
          newClientY,
          reachState,
        );
      }
      // 横向边缘触发、背景触发禁用当前滑动
      if (currentReachState === ReachTypeEnum.XReach || maskTouched) {
        this.setState({
          reachState: ReachTypeEnum.XReach,
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
            clientX: newClientX,
            clientY: newClientY,
            fromScale: scale,
            toScale,
          }),
        });
      }
    }
  }

  photoClick = (newClientX: number, newClientY: number) => {
    const { onPhotoClick } = this.props;
    const { clientX, clientY } = this.state;
    if (onPhotoClick
      && Math.abs(clientX - newClientX) < 5
      && Math.abs(clientY - newClientY) < 5
    ) {
      onPhotoClick(newClientX, newClientY);
    }
  }

  handlePhotoClick = (e) => {
    const { clientX, clientY } = getCurrentFromEvent(e);
    this.photoClick(clientX, clientY);
  }

  handleDoubleClick = (e) => {
    e.preventDefault();
    // @ts-ignore 取消 click 事件
    this.photoClick.cancel();
    const { clientX, clientY } = e;
    const { width, naturalWidth } = this.photoRef.state;
    this.setState(({ x, y, scale }) => {
      return {
        clientX,
        clientY,
        ...getPositionOnMoveOrScale({
          x,
          y,
          clientX,
          clientY,
          fromScale: scale,
          // 若图片足够大，则放大适应的倍数
          toScale: scale !== 1 ? 1 : Math.max(2, naturalWidth / width),
        }),
      };
    });
  }

  handleWheel = (e) => {
    e.preventDefault();
    const { clientX, clientY, deltaY } = e;
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
        clientX,
        clientY,
        ...getPositionOnMoveOrScale({
          x,
          y,
          clientX,
          clientY,
          fromScale: scale,
          toScale,
        }),
      };
    });
  }

  handleMaskStart = (clientX: number, clientY: number) => {
    this.setState(prevState => ({
      maskTouched: true,
      clientX,
      clientY,
      lastX: prevState.x,
      lastY: prevState.y,
    }));
  }

  handleMaskMouseDown = (e) => {
    this.handleMaskStart(e.clientX, e.clientY);
  }

  handleMaskTouchStart = (e) => {
    const { clientX, clientY } = e.touches[0];
    this.handleMaskStart(clientX, clientY);
  }

  handleMaskClick = (e) => {
    const evt = getCurrentFromEvent(e);
    const { onMaskClick } = this.props;
    const { clientX, clientY } = this.state;
    if (
      onMaskClick
      && Math.abs(clientX - evt.clientX) < 5
      && Math.abs(clientY - evt.clientY) < 5
    ) {
      onMaskClick(clientX, clientY);
    }
  }

  handleTouchStart = e => {
    if (e.touches.length >= 2) {
      const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
      this.handleStart(clientX, clientY, touchLength);
    } else {
      const { clientX, clientY } = e.touches[0];
      this.handleStart(clientX, clientY);
    }
  }

  handleMouseDown = e => {
    e.preventDefault();
    this.handleStart(e.clientX, e.clientY);
  }

  handleTouchMove = e => {
    e.preventDefault();
    if (e.touches.length >= 2) {
      const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
      this.handleMove(clientX, clientY, touchLength);
    } else {
      const { clientX, clientY } = e.touches[0];
      this.handleMove(clientX, clientY);
    }
  }

  handleMouseMove = e => {
    e.preventDefault();
    this.handleMove(e.clientX, e.clientY);
  }

  handleUp = (newClientX: number, newClientY: number) => {
    const { touched, maskTouched } = this.state;
    if (touched || maskTouched) {
      const { onReachUp } = this.props;
      const { width, naturalWidth, height } = this.photoRef.state;
      this.setState(({
        x,
        y,
        lastX,
        lastY,
        scale,
        touchedTime,
        clientX,
        clientY,
      }) => {
        if (onReachUp) {
          onReachUp(newClientX, newClientY);
        }
        const hasMove = clientX !== newClientX || clientY !== newClientY;
        // 缩放弹性效果
        const toScale = Math.max(
          Math.min(scale, Math.max(maxScale, naturalWidth / width)),
          minScale,
        );
        return {
          touched: false,
          maskTouched: false,
          scale: toScale,
          reachState: ReachTypeEnum.Normal, // 重置触发状态
          ...hasMove
            ? slideToSuitableOffset({
              x,
              y,
              lastX,
              lastY,
              width,
              height,
              scale,
              touchedTime,
            }) : {
              x,
              y,
            },
        };
      });
    }
  }

  handleTouchEnd = (e) => {
    const { clientX, clientY } = e.changedTouches[0];
    this.handleUp(clientX, clientY);
  }

  handleMouseUp = (e) => {
    const { clientX, clientY } = e;
    this.handleUp(clientX, clientY);
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
    newClientX: number,
    newClientY: number,
    reachState: ReachTypeEnum,
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
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.XReach)
    ) {
      onReachLeftMove(newClientX, newClientY);
      return ReachTypeEnum.XReach;
    } else if (
      onReachRightMove
      && (horizontalType
      && x < -minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.XReach)
    ) {
      onReachRightMove(newClientX, newClientY);
      return ReachTypeEnum.XReach;
    } else if (
      onReachTopMove
      && (verticalType
      && y > minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.YReach)
    ) {
      onReachTopMove(newClientX, newClientY);
      return ReachTypeEnum.YReach;
    } else if (
      onReachBottomMove
      && (verticalType
      && y < -minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.YReach)
    ) {
      onReachBottomMove(newClientX, newClientY);
      return ReachTypeEnum.YReach;
    }
    return ReachTypeEnum.Normal;
  }

  handlePhotoRef = (ref) => {
    this.photoRef = ref;
  }

  render() {
    const {
      src,
      wrapClassName,
      className,
      style,
      photoScale = 1,
      loadingElement,
      brokenElement,
    } = this.props;
    const { x, y, scale, touched } = this.state;

    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale * photoScale})`;

    return (
      <PhotoWrap className={wrapClassName} style={style}>
        <PhotoMask
          onMouseDown={isMobile ? undefined : this.handleMaskMouseDown}
          onTouchStart={isMobile ? this.handleMaskTouchStart : undefined}
          onClick={this.handleMaskClick}
        />
        <Photo
          className={className}
          src={src}
          ref={this.handlePhotoRef}
          onClick={this.handlePhotoClick}
          onDoubleClick={this.handleDoubleClick}
          onMouseDown={isMobile ? undefined : this.handleMouseDown}
          onTouchStart={isMobile ? this.handleTouchStart : undefined}
          onWheel={this.handleWheel}
          onPhotoResize={this.handleResize}
          style={{
            WebkitTransform: transform,
            transform,
            transition: touched
              ? undefined
              : 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
          }}
          loadingElement={loadingElement}
          brokenElement={brokenElement}
        />
      </PhotoWrap>
    );
  }
}
