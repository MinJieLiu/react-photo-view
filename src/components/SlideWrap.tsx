import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  overflow: hidden;
`;

export default class SlideWrap extends React.Component<{
  className?: string;
  children: any;
}> {
  static displayName = 'SlideWrap';

  private dialogNode;
  private originalOverflow;

  constructor(props) {
    super(props);

    // 创建容器
    this.dialogNode = document.createElement('section');
    document.body.appendChild(this.dialogNode);
  }

  componentDidMount() {
    this.preventScroll();
  }

  componentWillUnmount() {
    this.allowScroll();
    // 清除容器
    document.body.removeChild(this.dialogNode);
    this.dialogNode = undefined;
  }

  preventScroll = () => {
    const { style } = document.body;
    this.originalOverflow = style.overflow;
    style.overflow = 'hidden';
  }

  allowScroll = () => {
    const { style } = document.body;
    style.overflow = this.originalOverflow;
    this.originalOverflow = undefined;
  }

  render() {
    const { className, children } = this.props;

    return createPortal(
      <Container className={className}>
        {children}
      </Container>,
      this.dialogNode,
    );
  }
}
