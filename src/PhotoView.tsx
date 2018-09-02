import React from 'react';
import { Motion, spring } from 'react-motion';
import throttle from 'lodash.throttle';
import Photo from './Photo';
import { PhotoContainer, Backdrop } from './StyledElements';
import { getPositionOnScale, jumpToSuitableOffset } from './utils';
import { defaultAnimationConfig } from './variables';
import { animationType } from './types';

export interface IPhotoViewProps {
  src: string;
}

type PhotoViewState = {
  // 图片 X 偏移量
  x: number;
  // 图片 y 偏移量
  y: number;
  // 图片缩放程度
  scale: number;
  // 图片处于触摸的状态
  touched: boolean;
  // 触摸开始时 x 原始坐标
  pageX: number;
  // 触摸开始时 y 原始坐标
  pageY: number;
  // 触摸开始时图片 x 偏移量
  lastX: number;
  // 触摸开始时图片 y 偏移量
  lastY: number;
  // 上一次触摸开始时 x 原始坐标
  lastPageX: number | undefined;
  // 上一次触摸开始时 y 原始坐标
  lastPageY: number | undefined;
  // 触摸开始时时间
  touchedTime: number;
} & animationType;

export default class PhotoView extends React.Component<
  IPhotoViewProps,
  PhotoViewState
> {
  static displayName = 'PhotoView';

  readonly state = {
    x: 0,
    y: 0,
    scale: 1,
    touched: false,

    pageX: 0,
    pageY: 0,

    lastX: 0,
    lastY: 0,

    lastPageX: undefined,
    lastPageY: undefined,
    touchedTime: 0,

    animation: defaultAnimationConfig,
  };

  private photoRef;

  constructor(props) {
    super(props);
    this.handleMove = throttle(this.handleMove, 8);
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleStart = e => {
    const { pageX, pageY } = e;
    this.setState(prevState => ({
      touched: true,
      pageX,
      pageY,
      lastX: prevState.x,
      lastY: prevState.y,
      touchedTime: Date.now(),
    }));
  }

  handleMove = (newPageX, newPageY) => {
    if (this.state.touched) {
      this.setState(({ pageX, pageY, lastX, lastY }) => {
        return {
          x: newPageX - pageX + lastX,
          y: newPageY - pageY + lastY,
        };
      });
    }
  }

  handleDoubleClick = (e) => {
    const { pageX, pageY } = e;
    this.setState(({ x, y, scale, lastPageX, lastPageY }) => {
      return {
        pageX,
        pageY,
        ...getPositionOnScale({
          x,
          y,
          pageX,
          pageY,
          lastPageX,
          lastPageY,
          fromScale: scale,
          toScale: scale > 1 ? 1 : 2,
        }),
      };
    });
  }

  handleWheel = (e) => {
    const { pageX, pageY, deltaY } = e;
    this.setState(({ x, y, scale, lastPageX, lastPageY }) => {
      return {
        pageX,
        pageY,
        ...getPositionOnScale({
          x,
          y,
          pageX,
          pageY,
          lastPageX,
          lastPageY,
          fromScale: scale,
          toScale: scale - deltaY / 100 / 2,
        }),
        animation: defaultAnimationConfig,
      };
    });
  }

  handleTouchStart = e => {
    this.handleStart(e.touches[0]);
  }

  handleMouseDown = e => {
    this.handleStart(e);
  }

  handleTouchMove = evt => {
    const e = evt.touches[0];
    this.handleMove(e.pageX, e.pageY);
  }

  handleMouseMove = e => {
    e.preventDefault();
    this.handleMove(e.pageX, e.pageY);
  }

  handleMouseUp = (e) => {
    const { pageX, pageY } = e;
    const { width, height } = this.photoRef.state;
    this.setState(({
      x,
      y,
      lastX,
      lastY,
      scale,
      touchedTime,
      ...restPrevState
    }) => {
      const hasMove = pageX !== restPrevState.pageX || pageY !== restPrevState.pageY;
      return {
        touched: false,
        ...jumpToSuitableOffset({
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

  handlePhotoRef = (ref) => {
    this.photoRef = ref;
  }

  render() {
    const { src } = this.props;
    const { x, y, scale, touched, animation } = this.state;
    const style = {
      currX: touched ? x : spring(x, animation),
      currY: touched ? y : spring(y, animation),
      currScale: spring(scale, animation),
    };

    return (
      <PhotoContainer>
        <Backdrop />
        <Motion style={style}>
          {({ currX, currY, currScale }) => {
            const transform = `translate3d(${currX}px, ${currY}px, 0) scale(${currScale})`;
            return (
              <Photo
                src={src}
                ref={this.handlePhotoRef}
                onDoubleClick={this.handleDoubleClick}
                onMouseDown={this.handleMouseDown}
                onTouchStart={this.handleTouchStart}
                onWheel={this.handleWheel}
                style={{
                  WebkitTransform: transform,
                  transform,
                }}
              />
            );
          }}
        </Motion>
      </PhotoContainer>
    );
  }
}
