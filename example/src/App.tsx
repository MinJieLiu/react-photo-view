import React from 'react';
import styled from 'styled-components';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import './App.css';
import 'react-photo-view/dist/index.css';

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

class App extends React.Component {
  state = {
    photoImages: [
      'images/1.png',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg',
    ],
  };

  render() {
    const { photoImages } = this.state;

    return (
      <Container>
        <PhotoProvider>
          <ImageList>
            {photoImages.map((item, index) => (
              <PhotoConsumer key={index} src={item} intro={item}>
                <SmallImage />
              </PhotoConsumer>
            ))}
          </ImageList>
        </PhotoProvider>
      </Container>
    );
  }
}

export default App;
