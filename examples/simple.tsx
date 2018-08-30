import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { PhotoView } from '../src';

const Container = styled.div`
  font-size: 32px;
`;

const Header = styled.header`
  padding: 40px;
  font-size: 32px;
  border-bottom: 1px solid #ccc;
`;

class Example extends React.Component {
  render() {
    return (
      <Container>
        <Header>React 图片预览组件</Header>
        <PhotoView src="https://assets-cdn.github.com/images/modules/explore/resources/campus_experts.png" />
      </Container>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
