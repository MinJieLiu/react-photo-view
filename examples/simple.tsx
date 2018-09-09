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
    photoImages: ['1.png', '2.jpg', '1.png'],
    photoVisible: true,
    photoIndex: 1,
  };

  handlePhotoClose = () => {
    this.setState({
      photoVisible: false,
    });
  }

  handleVisibleChange = (photoIndex) => {
    this.setState({
      photoIndex,
    });
  }

  render() {
    const { photoImages, photoVisible, photoIndex } = this.state;

    return (
      <Container>
        <Header>React 图片预览组件</Header>
        <PhotoSlider
          images={photoImages}
          index={photoIndex}
          onIndexChange={this.handleVisibleChange}
          visible={photoVisible}
          onClose={this.handlePhotoClose}
        />
      </Container>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
