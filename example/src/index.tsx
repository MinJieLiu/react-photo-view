import styled from 'styled-components';
import * as React from 'react';
import { PhotoSlider } from '../../dist';

export const photoImages = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];

export const ImageList = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ViewBox = styled.div<{ viewImage: string }>`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background: url('${props => props.viewImage}') no-repeat center;
  background-size: cover;
`;

export const Button = styled.button<{ colorType?: string }>`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &[colorType='primary'] {
    background: deepskyblue;
    border-color: deepskyblue;
    color: white;
  }
`;

export const DefaultImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ControlledView = () => {
  const [visible, setVisible] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  function handleShowSlider() {
    setVisible(true);
  }
  function handleCloseSlider() {
    setVisible(false);
  }
  return (
    <ImageList>
      <Button onClick={() => setPhotoIndex(2)}>setPhotoIndex(2)</Button>
      <Button onClick={() => setPhotoIndex(4)}>setPhotoIndex(4)</Button>
      <Button onClick={handleShowSlider} colorType="primary">
        打开 PhotoSlider
      </Button>

      <PhotoSlider
        images={photoImages.map((item: string) => ({ src: item }))}
        visible={visible}
        onClose={handleCloseSlider}
        index={photoIndex}
        onIndexChange={setPhotoIndex}
      />
    </ImageList>
  );
};
