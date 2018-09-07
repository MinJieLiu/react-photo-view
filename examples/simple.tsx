import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { PhotoSlider } from '../src';

const Container = styled.div`
  font-size: 32px;
`;

const Header = styled.header`
  padding: 40px;
  font-size: 32px;
  border-bottom: 1px solid #ccc;
`;

class Example extends React.Component {
  state = {
    photoImages: ['1.png', '2.jpg'],
    photoVisible: true,
  };

  handlePhotoClose = () => {
    this.setState({
      photoVisible: false,
    });
  }

  render() {
    const { photoImages, photoVisible } = this.state;

    return (
      <Container>
        <Header>React 图片预览组件</Header>
        <PhotoSlider images={photoImages} visible={photoVisible} onClose={this.handlePhotoClose} />
      </Container>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
