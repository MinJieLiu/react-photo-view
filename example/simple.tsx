import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { PhotoProvider, PhotoConsumer } from '../src';

const Container = styled.div`
  font-size: 32px;
`;

const ImageList = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SmallImage = styled.img`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

class Example extends React.Component {
  state = {
    photoImages: ['1.png', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  };

  render() {
    const { photoImages } = this.state;

    return (
      <Container>
        <PhotoProvider>
          <ImageList>
            {photoImages.map((item, index) => (
              <PhotoConsumer key={index} src={item} intro={item}>
                {index < 2 ? <SmallImage src={item} /> : undefined}
              </PhotoConsumer>
            ))}
          </ImageList>
        </PhotoProvider>
      </Container>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('__react-content'));
