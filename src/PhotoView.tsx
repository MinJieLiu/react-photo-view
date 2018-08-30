import React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import Photo from './Photo';

export interface IPhotoViewProps {
  src: string;
}

type PhotoViewState = {
  x: number;
  y: number;
  scale: number;
  touched: boolean;

  pageX: number;
  pageY: number;
  offsetX: number;
  offsetY: number;
};

interface DragPhotoProps extends React.HTMLAttributes<any> {}

const PhotoContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2000;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const DragPhoto = styled(Photo)<DragPhotoProps>`
  will-change: transform;
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
  };

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
    }));
  }

  handleMove = (pageX, pageY) => {
    if (this.state.touched) {
      this.setState((prevState) => ({
        x: pageX - prevState.pageX + prevState.offsetX,
        y: pageY - prevState.pageY + prevState.offsetY,
      }));
    }
  }

  handleDoubleClick = () => {
    this.setState(prevState => ({
      scale: prevState.scale > 1 ? 1 : 2,
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
    this.setState({
      touched: false,
    });
  }

  render() {
    const { src } = this.props;
    const { x, y, scale } = this.state;
    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

    return (
      <PhotoContainer>
        <Backdrop />
        <DragPhoto
          src={src}
          onDoubleClick={this.handleDoubleClick}
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
          style={{
            WebkitTransform: transform,
            transform,
          }}
        />
      </PhotoContainer>
    );
  }
}
