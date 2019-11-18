import React from 'react';
import classNames from 'classnames';
import Photo from './Photo';
import throttle from './utils/throttle';
import isMobile from './utils/isMobile';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import slideToPosition from './utils/slideToPosition';
import { getClosedHorizontal, getClosedVertical } from './utils/getCloseEdge';
import withContinuousTap, { TapFuncType } from './utils/withContinuousTap';
import {
  maxScale,
  minReachOffset,
  minStartTouchOffset,
  minScale,
  scaleBuffer,
} from './variables';
import {
  ReachFunction,
  PhotoTapFunction,
  ReachTypeEnum,
  CloseEdgeEnum,
  TouchStartEnum,
} from './types';
import './PhotoView.less';

export interface IPhotoViewProps {
  // 图片地址
  src: string;
  // 容器类名
  wrapClassName?: string;
  // 图片类名
  className?: string;
  // style
  style?: object;
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element;

  // Photo 点击事件
  onPhotoTap?: PhotoTapFunction;
  // Mask 点击事件
  onMaskTap?: PhotoTapFunction;
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
  // 初始响应状态
  initialTouchState: TouchStartEnum.Normal,
};

export default class PhotoView extends React.Component<
  IPhotoViewProps,
  typeof initialState
> {
  static displayName = 'PhotoView';

  readonly state = initialState;
  private readonly photoRef = React.createRef<Photo>();
  private readonly handlePhotoTap: TapFuncType<number>;

  constructor(props: IPhotoViewProps) {
    super(props);
    this.onMove = throttle(this.onMove, 8);
    // 单击与双击事件处理
    this.handlePhotoTap = withContinuousTap(
      this.onPhotoTap,
      this.onDoubleTap,
    );
  }

  componentDidMount() {
    if (isMobile) {
      window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      window.addEventListener('touchend', this.handleTouchEnd, { passive: false });
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
  };

  onMove = (newClientX: number, newClientY: number, touchLength: number = 0) => {
    // minInitialTouchOffset
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
      touched,
      maskTouched,
      initialTouchState,
    } = this.state;
    const { current } = this.photoRef;
    let handleClientX = newClientX;
    let handleClientY = newClientY;
    if ((touched || maskTouched) && current) {
      // 最小缩放下，以初始移动距离来判断意图
      if (scale === minScale && initialTouchState === TouchStartEnum.Normal) {
        const isBeyondX = Math.abs(newClientX - clientX) > minStartTouchOffset;
        const isBeyondY = Math.abs(newClientY - clientY) > minStartTouchOffset;

        // 初始移动距离不足则不做操作
        if (!(isBeyondX || isBeyondY)) {
          return;
        }

        this.setState({
          initialTouchState: isBeyondX ? TouchStartEnum.X : TouchStartEnum.Y,
        });
      }
      if (initialTouchState === TouchStartEnum.X) {
        handleClientX = newClientX - clientX > 0
          ? newClientX + minStartTouchOffset
          : newClientX - minStartTouchOffset;
      } else {
        handleClientY = newClientY - clientY > 0
          ? newClientY - minStartTouchOffset
          : newClientY + minStartTouchOffset;
      }

      const { width, height, naturalWidth } = current.state;
      let currentX = x;
      let currentY = y;
      // 边缘触发状态
      let currentReachState = ReachTypeEnum.Normal;
      if (touchLength === 0) {
        const planX = handleClientX - clientX + lastX;
        currentY = handleClientY - clientY + lastY;
        // 边缘超出状态
        const horizontalCloseEdge = getClosedHorizontal(planX, scale, width);
        const verticalCloseEdge = getClosedVertical(currentY, scale, height);
        // X 方向响应距离减小
        currentX = (handleClientX - clientX) / (horizontalCloseEdge !== CloseEdgeEnum.Normal ? 2 : 1)  + lastX;
        // 边缘触发检测
        currentReachState = this.handleReachCallback({
          x: planX,
          y: currentY,
          horizontalCloseEdge,
          verticalCloseEdge,
          clientX: handleClientX,
          clientY: handleClientY,
          scale,
          reachState,
        });
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
            clientX: handleClientX,
            clientY: handleClientY,
            fromScale: scale,
            toScale,
          }),
        });
      }
    }
  };

  onPhotoTap = (clientX: number, clientY: number) => {
    const { onPhotoTap } = this.props;
    if (onPhotoTap) {
      onPhotoTap(clientX, clientY);
    }
  };

  onDoubleTap: TapFuncType<number> = (clientX, clientY) => {
    const { current } = this.photoRef;
    if (current) {
      const { width, naturalWidth } = current.state;
      const { x, y, scale } = this.state;
      this.setState({
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
      });
    }
  };

  handleWheel = (e) => {
    const { current } = this.photoRef;
    if (current) {
      const { clientX, clientY, deltaY } = e;
      const { width, naturalWidth } = current.state;
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
  };

  handleMaskStart = (clientX: number, clientY: number) => {
    this.setState(prevState => ({
      maskTouched: true,
      clientX,
      clientY,
      lastX: prevState.x,
      lastY: prevState.y,
    }));
  };

  handleMaskMouseDown = (e) => {
    this.handleMaskStart(e.clientX, e.clientY);
  };

  handleMaskTouchStart = (e) => {
    const { clientX, clientY } = e.touches[0];
    this.handleMaskStart(clientX, clientY);
  };

  handleTouchStart = (e) => {
    const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
    this.handleStart(clientX, clientY, touchLength);
  };

  handleMouseDown = (e) => {
    e.preventDefault();
    this.handleStart(e.clientX, e.clientY, 0);
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
    this.onMove(clientX, clientY, touchLength);
  };

  handleMouseMove = (e) => {
    e.preventDefault();
    this.onMove(e.clientX, e.clientY);
  };

  handleUp = (newClientX: number, newClientY: number) => {
    const { touched, maskTouched } = this.state;
    const { current } = this.photoRef;
    if ((touched || maskTouched) && current) {
      const { onReachUp, onPhotoTap, onMaskTap } = this.props;
      const { width, height, naturalWidth } = current.state;
      const {
        x,
        y,
        lastX,
        lastY,
        scale,
        touchedTime,
        clientX,
        clientY,
      } = this.state;
      const hasMove = clientX !== newClientX || clientY !== newClientY;
      this.setState({
        touched: false,
        maskTouched: false,
        // 限制缩放
        scale: Math.max(
          Math.min(scale, Math.max(maxScale, naturalWidth / width)),
          minScale,
        ),
        reachState: ReachTypeEnum.Normal, // 重置触发状态
        initialTouchState: TouchStartEnum.Normal,
        ...hasMove
          ? slideToPosition({
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
      }, () => {
        if (onReachUp) {
          onReachUp(newClientX, newClientY);
        }
        // 触发 Tap 事件
        if (!hasMove) {
          if (touched && onPhotoTap) {
            this.handlePhotoTap(newClientX, newClientY);
          } else if (maskTouched && onMaskTap) {
            onMaskTap(newClientX, newClientY);
          }
        }
      });
    }
  };

  handleTouchEnd = (e) => {
    const { clientX, clientY } = e.changedTouches[0];
    this.handleUp(clientX, clientY);
  };

  handleMouseUp = (e) => {
    const { clientX, clientY } = e;
    this.handleUp(clientX, clientY);
  };

  handleResize = () => {
    this.setState(initialState);
    const { onPhotoResize } = this.props;
    if (onPhotoResize) {
      onPhotoResize();
    }
  };

  handleReachCallback = ({
    x,
    y,
    clientX,
    clientY,
    horizontalCloseEdge,
    verticalCloseEdge,
    scale,
    reachState,
  }: {
    x: number,
    y: number,
    clientX: number,
    clientY: number,
    horizontalCloseEdge: CloseEdgeEnum,
    verticalCloseEdge: CloseEdgeEnum,
    scale: number,
    reachState: ReachTypeEnum,
  }): ReachTypeEnum => {
    const {
      onReachTopMove,
      onReachRightMove,
      onReachBottomMove,
      onReachLeftMove,
    } = this.props;
    //  触碰到边缘
    if (
      onReachLeftMove
      && (horizontalCloseEdge
      && x > minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.XReach)
    ) {
      onReachLeftMove(clientX, clientY);
      return ReachTypeEnum.XReach;
    } else if (
      onReachRightMove
      && (horizontalCloseEdge
      && x < -minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.XReach)
    ) {
      onReachRightMove(clientX, clientY);
      return ReachTypeEnum.XReach;
    } else if (
      onReachTopMove
      && (verticalCloseEdge
      && y > minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.YReach)
    ) {
      onReachTopMove(clientX, clientY, scale);
      return ReachTypeEnum.YReach;
    } else if (
      onReachBottomMove
      && (verticalCloseEdge
      && y < -minReachOffset
      && reachState === ReachTypeEnum.Normal
      || reachState === ReachTypeEnum.YReach)
    ) {
      onReachBottomMove(clientX, clientY, scale);
      return ReachTypeEnum.YReach;
    }
    return ReachTypeEnum.Normal;
  };

  render() {
    const {
      src,
      wrapClassName,
      className,
      style,
      loadingElement,
      brokenElement,
    } = this.props;
    const { x, y, scale, touched } = this.state;

    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

    return (
      <div className={classNames('PhotoView__PhotoWrap', wrapClassName)} style={style}>
        <div
          className="PhotoView__PhotoMask"
          onMouseDown={isMobile ? undefined : this.handleMaskMouseDown}
          onTouchStart={isMobile ? this.handleMaskTouchStart : undefined}
        />
        <Photo
          className={className}
          src={src}
          ref={this.photoRef}
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
      </div>
    );
  }
}
