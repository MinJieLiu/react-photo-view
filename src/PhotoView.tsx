import React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import Photo from './Photo';
import { PhotoContainer, Backdrop } from './StyledElements';
import { slideToPosition, jumpToSuitableOffset } from './util';
import { animationDefault, animationTimeBase } from './variables';

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
  offsetX: number;
  // 触摸开始时图片 y 偏移量
  offsetY: number;
  // 触摸开始时时间
  touchedTime: number;
  // 动画名称
  animationName: string | null;
  // 动画时间
  animationTime: number;
};

const DragPhoto = styled(Photo)<React.HTMLAttributes<any>>`
  will-change: transform;
  cursor: -webkit-grab;

  &:active {
    cursor: -webkit-grabbing;
  }
`;

export default class PhotoView extends React.Component<
  IPhotoViewProps,
  PhotoViewState
> {
  readonly state = {
    x: 0,
    y: 0,
    scale: 1,
    touched: false,

    pageX: 0,
    pageY: 0,
    offsetX: 0,
    offsetY: 0,
    touchedTime: 0,
    animationName: animationDefault,
    animationTime: animationTimeBase,
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
      offsetX: prevState.x,
      offsetY: prevState.y,
      touchedTime: Date.now(),
    }));
  }

  handleMove = (newPageX, newPageY) => {
    if (this.state.touched) {
      this.setState(({ pageX, pageY, offsetX, offsetY }) => {
        return {
          x: newPageX - pageX + offsetX,
          y: newPageY - pageY + offsetY,
        };
      });
    }
  }

  handleDoubleClick = () => {
    this.setState(prevState => ({
      scale: prevState.scale > 1 ? 1 : 3,
      animationName: animationDefault,
      animationTime: animationTimeBase,
    }));
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

  handleMouseUp = () => {
    const { width, height } = this.photoRef.state;
    this.setState(({
      x,
      y,
      offsetX,
      offsetY,
      scale,
      touchedTime,
    }) => {
      return {
        touched: false,
        ...jumpToSuitableOffset({
          width,
          height,
          scale,
          ...slideToPosition({
            x,
            y,
            offsetX,
            offsetY,
            touchedTime,
          }),
        }),
      };
    });
  }

  handlePhotoRef = (ref) => {
    this.photoRef = ref;
  }

  render() {
    const { src } = this.props;
    const { x, y, scale, touched, animationName, animationTime } = this.state;
    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

    return (
      <PhotoContainer>
        <Backdrop />
        <DragPhoto
          src={src}
          innerRef={this.handlePhotoRef}
          onDoubleClick={this.handleDoubleClick}
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
          style={{
            WebkitTransform: transform,
            transform,
            transition: touched
              ? undefined
              : `transform ${animationTime}ms ${animationName}`,
          }}
        />
      </PhotoContainer>
    );
  }
}
