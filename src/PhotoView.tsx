import React from 'react';
import { Motion, spring } from 'react-motion';
import throttle from 'lodash.throttle';
import Photo from './Photo';
import { PhotoContainer, Backdrop } from './StyledElements';
import {
  isMobile,
  getMultipleTouchPosition,
  getPositionOnMoveOrScale,
  slideToSuitableOffset,
} from './utils';
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
  // 多指触控间距
  lastTouchLength: number;

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

    touchedTime: 0,
    lastTouchLength: 0,
    animation: defaultAnimationConfig,
  };

  private photoRef;

  constructor(props) {
    super(props);
    this.handleMove = throttle(this.handleMove, 8);
  }

  componentDidMount() {
    if (isMobile) {
      window.addEventListener('touchmove', this.handleTouchMove);
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
      this.setState(({
        x,
        y,
        pageX,
        pageY,
        lastX,
        lastY,
        scale,
        lastTouchLength,
      }) => {
        const offsetScale = (touchLength - lastTouchLength) / 100 / 2 * scale;
        return {
          lastTouchLength: touchLength,
          ...getPositionOnMoveOrScale({
            x: touchLength ? x : newPageX - pageX + lastX,
            y: touchLength ? y : newPageY - pageY + lastY,
            pageX: newPageX,
            pageY: newPageY,
            fromScale: scale,
            toScale: scale + offsetScale,
          }),
        };
      });
    }
  }

  handleDoubleClick = (e) => {
    const { pageX, pageY } = e;
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
          toScale: scale !== 1 ? 1 : 2,
        }),
        animation: defaultAnimationConfig,
      };
    });
  }

  handleWheel = (e) => {
    const { pageX, pageY, deltaY } = e;
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
          toScale: scale - deltaY / 100 / 2,
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
      const hasMove = pageX !== newPageX || pageY !== newPageY;
      return {
        touched: false,
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

  handleTouchEnd = (e) => {
    const { pageX, pageY } = e.changedTouches[0];
    this.handleUp(pageX, pageY);
  }

  handleMouseUp = (e) => {
    const { pageX, pageY } = e;
    this.handleUp(pageX, pageY);
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
      currScale: touched ? scale : spring(scale, animation),
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
                onMouseDown={isMobile ? undefined : this.handleMouseDown}
                onTouchStart={isMobile ? this.handleTouchStart : undefined}
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
