import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.4rem 0;
  font-size: 0.32rem;
`;

const Header = styled.header`
  padding: 0.2rem;
  font-size: 0.35rem;
  border-bottom: 1px solid #CCC;
`;

class Example extends React.Component {

  render() {

    return (
      <Container>
        <Header>React 图片预览组件</Header>
      </Container>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
