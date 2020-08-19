import React from 'react';
import classNames from 'classnames';
import Photo from './Photo';
import throttle from './utils/throttle';
import isTouchDevice from './utils/isTouchDevice';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import slideToPosition from './utils/slideToPosition';
import { getReachType, getClosedEdge } from './utils/getCloseEdge';
import withContinuousTap, { TapFuncType } from './utils/withContinuousTap';
import getAnimateOrigin from './utils/getAnimateOrigin';
import { maxScale, minStartTouchOffset, minScale, scaleBuffer } from './variables';
import {
  ReachMoveFunction,
  ReachFunction,
  PhotoTapFunction,
  ReachTypeEnum,
  TouchStartEnum,
  ShowAnimateEnum,
  OriginRectType,
  brokenElementDataType,
} from './types';
import './PhotoView.less';
import getSuitableImageSize from './utils/getSuitableImageSize';
import correctSuitablePosition from './utils/correctSuitablePosition';

export interface IPhotoViewProps {
  // 图片地址
  src: string;
  // 介绍
  intro?: React.ReactNode;
  // 容器类名
  viewClassName?: string;
  // 图片类名
  className?: string;
  // style
  style?: object;
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element | ((photoProps: brokenElementDataType) => JSX.Element);
  // 旋转状态
  rotate: number;

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
  // 是否在当前操作中
  isActive: boolean;

  // 动画类型
  showAnimateType?: ShowAnimateEnum;
  // 动画源位置
  originRect?: OriginRectType;
}

const initialState = {
  // 真实宽度
  naturalWidth: 1,
  // 真实高度
  naturalHeight: 1,
  // 宽度
  width: 1,
  // 高度
  height: 1,
  // 加载成功状态
  loaded: false,
  // 破碎状态
  broken: false,

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
  // 上一个触摸状态 x 原始坐标
  lastMoveClientX: 0,
  // 上一个触摸状态 y 原始坐标
  lastMoveClientY: 0,

  // 触摸开始时时间
  touchedTime: 0,
  // 多指触控间距
  lastTouchLength: 0,

  // 当前边缘触发状态
  reachState: ReachTypeEnum.Normal,
};

export default class PhotoView extends React.Component<IPhotoViewProps, typeof initialState> {
  static displayName = 'PhotoView';

  readonly state = initialState;
  // 初始响应状态
  private initialTouchState = TouchStartEnum.Normal;

  private readonly handlePhotoTap: TapFuncType<number>;

  constructor(props: IPhotoViewProps) {
    super(props);
    this.onMove = throttle(this.onMove, 8);
    this.handleResize = throttle(this.handleResize, 8);
    // 单击与双击事件处理
    this.handlePhotoTap = withContinuousTap(this.onPhotoTap, this.onDoubleTap);
  }

  componentDidMount() {
    if (isTouchDevice) {
      window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      window.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    } else {
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps: Readonly<IPhotoViewProps>) {
    const { rotate } = this.props;
    if (rotate !== prevProps.rotate) {
      const { naturalWidth, naturalHeight } = this.state;
      this.setState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('resize', this.handleResize);
  }

  handleImageLoad = imageParams => {
    this.setState(imageParams);
  };

  handleResize = () => {
    const { onPhotoResize, rotate } = this.props;
    const { loaded, naturalWidth, naturalHeight } = this.state;
    if (loaded) {
      this.setState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
      if (onPhotoResize) {
        onPhotoResize();
      }
    }
  };

  handleStart = (clientX: number, clientY: number, touchLength: number = 0) => {
    this.setState(prevState => ({
      touched: true,
      clientX,
      clientY,
      lastMoveClientX: clientX,
      lastMoveClientY: clientY,
      lastX: prevState.x,
      lastY: prevState.y,
      lastTouchLength: touchLength,
      touchedTime: Date.now(),
    }));
  };

  onMove = (newClientX: number, newClientY: number, touchLength: number = 0) => {
    const { onReachMove, isActive, rotate } = this.props;
    const {
      naturalWidth,
      x,
      y,
      clientX,
      clientY,
      lastMoveClientX,
      lastMoveClientY,
      lastX,
      lastY,
      scale,
      lastTouchLength,
      reachState,
      touched,
      maskTouched,
    } = this.state;
    if ((touched || maskTouched) && isActive) {
      let { width, height } = this.state;
      // 若图片不是水平则调换属性
      if (rotate % 180 !== 0) {
        [width, height] = [height, width];
      }
      // 单指最小缩放下，以初始移动距离来判断意图
      if (touchLength === 0 && this.initialTouchState === TouchStartEnum.Normal) {
        const isStillX = Math.abs(newClientX - clientX) <= minStartTouchOffset;
        const isStillY = Math.abs(newClientY - clientY) <= minStartTouchOffset;
        // 初始移动距离不足
        if (isStillX && isStillY) {
          // 方向记录上次移动距离，以便平滑过渡
          this.setState({
            lastMoveClientX: newClientX,
            lastMoveClientY: newClientY,
          });
          return;
        }
        // 设置响应状态
        this.initialTouchState = !isStillX
          ? TouchStartEnum.X
          : newClientY > clientY
          ? TouchStartEnum.YPull
          : TouchStartEnum.YPush;
      }

      let offsetX = newClientX - lastMoveClientX;
      let offsetY = newClientY - lastMoveClientY;
      // 边缘触发状态
      let currentReachState = ReachTypeEnum.Normal;
      if (touchLength === 0) {
        // 边缘超出状态
        const horizontalCloseEdge = getClosedEdge(offsetX + lastX, scale, width, window.innerWidth);
        const verticalCloseEdge = getClosedEdge(offsetY + lastY, scale, height, window.innerHeight);
        // 边缘触发检测
        currentReachState = getReachType({
          initialTouchState: this.initialTouchState,
          horizontalCloseEdge,
          verticalCloseEdge,
          reachState,
        });

        // 接触边缘
        if (currentReachState != ReachTypeEnum.Normal) {
          onReachMove(currentReachState, newClientX, newClientY, scale);
        }
      }
      // 横向边缘触发、背景触发禁用当前滑动
      if (currentReachState === ReachTypeEnum.XReach || maskTouched) {
        this.setState({
          reachState: ReachTypeEnum.XReach,
        });
      } else {
        // 目标倍数
        const endScale = scale + ((touchLength - lastTouchLength) / 100 / 2) * scale;
        // 限制最大倍数和最小倍数
        const toScale = Math.max(Math.min(endScale, Math.max(maxScale, naturalWidth / width)), minScale - scaleBuffer);
        this.setState({
          lastTouchLength: touchLength,
          reachState: currentReachState,
          ...getPositionOnMoveOrScale({
            x,
            y,
            clientX: newClientX,
            clientY: newClientY,
            offsetX,
            offsetY,
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
    const { width, naturalWidth, x, y, scale, reachState } = this.state;
    if (reachState !== ReachTypeEnum.Normal) {
      return;
    }
    const position = getPositionOnMoveOrScale({
      x,
      y,
      clientX,
      clientY,
      fromScale: scale,
      // 若图片足够大，则放大适应的倍数
      toScale: scale !== 1 ? 1 : Math.max(2, naturalWidth / width),
    });
    this.setState({
      clientX,
      clientY,
      ...position,
      ...correctSuitablePosition(position),
    });
  };

  handleWheel = e => {
    const { clientX, clientY, deltaY } = e;
    const { width, naturalWidth, reachState } = this.state;
    if (reachState !== ReachTypeEnum.Normal) {
      return;
    }
    this.setState(({ x, y, scale }) => {
      const endScale = scale - deltaY / 100 / 2;
      // 限制最大倍数和最小倍数
      const toScale = Math.max(Math.min(endScale, Math.max(maxScale, naturalWidth / width)), minScale);

      const position = getPositionOnMoveOrScale({
        x,
        y,
        clientX,
        clientY,
        fromScale: scale,
        toScale,
      });
      return {
        clientX,
        clientY,
        ...position,
        ...correctSuitablePosition(position),
      };
    });
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

  handleMaskMouseDown = e => {
    this.handleMaskStart(e.clientX, e.clientY);
  };

  handleMaskTouchStart = e => {
    const { clientX, clientY } = e.touches[0];
    this.handleMaskStart(clientX, clientY);
  };

  handleTouchStart = e => {
    const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
    this.handleStart(clientX, clientY, touchLength);
  };

  handleMouseDown = e => {
    e.preventDefault();
    this.handleStart(e.clientX, e.clientY, 0);
  };

  handleTouchMove = e => {
    e.preventDefault();
    const { clientX, clientY, touchLength } = getMultipleTouchPosition(e);
    this.onMove(clientX, clientY, touchLength);
  };

  handleMouseMove = e => {
    e.preventDefault();
    this.onMove(e.clientX, e.clientY);
  };

  handleUp = (newClientX: number, newClientY: number) => {
    // 重置响应状态
    this.initialTouchState = TouchStartEnum.Normal;
    const { onReachUp, onPhotoTap, onMaskTap, isActive, rotate } = this.props;
    const {
      width,
      height,
      naturalWidth,
      x,
      y,
      lastX,
      lastY,
      scale,
      touchedTime,
      clientX,
      clientY,
      touched,
      maskTouched,
    } = this.state;
    if ((touched || maskTouched) && isActive) {
      const hasMove = clientX !== newClientX || clientY !== newClientY;
      this.setState(
        {
          touched: false,
          maskTouched: false,
          // 限制缩放
          scale: Math.max(Math.min(scale, Math.max(maxScale, naturalWidth / width)), minScale),
          reachState: ReachTypeEnum.Normal, // 重置触发状态
          ...(hasMove
            ? slideToPosition({
                x,
                y,
                lastX,
                lastY,
                width,
                height,
                scale,
                rotate,
                touchedTime,
              })
            : {
                x,
                y,
              }),
        },
        () => {
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
        },
      );
    }
  };

  handleTouchEnd = e => {
    const { clientX, clientY } = e.changedTouches[0];
    this.handleUp(clientX, clientY);
  };

  handleMouseUp = e => {
    const { clientX, clientY } = e;
    this.handleUp(clientX, clientY);
  };

  render() {
    const {
      src,
      intro,
      viewClassName,
      className,
      style,
      rotate,
      loadingElement,
      brokenElement,
      isActive,
      showAnimateType,
      originRect,
    } = this.props;
    const { width, height, loaded, x, y, scale, touched, broken } = this.state;

    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;

    return (
      <div className={classNames('PhotoView__PhotoWrap', viewClassName)} style={style}>
        <div
          className="PhotoView__PhotoMask"
          onMouseDown={!isTouchDevice && isActive ? this.handleMaskMouseDown : undefined}
          onTouchStart={isTouchDevice && isActive ? this.handleMaskTouchStart : undefined}
        />
        <div
          className={classNames('PhotoView__PhotoBox', {
            PhotoView__animateIn: loaded && showAnimateType === ShowAnimateEnum.In,
            PhotoView__animateOut: loaded && showAnimateType === ShowAnimateEnum.Out,
          })}
          style={{
            transformOrigin: loaded ? getAnimateOrigin(originRect, 0, 0) : undefined,
          }}
        >
          <Photo
            className={className}
            src={src}
            intro={intro}
            width={width}
            height={height}
            loaded={loaded}
            broken={broken}
            rotate={rotate}
            onMouseDown={isTouchDevice ? undefined : this.handleMouseDown}
            onTouchStart={isTouchDevice ? this.handleTouchStart : undefined}
            onWheel={this.handleWheel}
            style={{
              WebkitTransform: transform,
              transform,
              transition: touched ? undefined : 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
            onImageLoad={this.handleImageLoad}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
          />
        </div>
      </div>
    );
  }
}
