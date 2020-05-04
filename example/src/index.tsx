import * as React from 'react';
import styled from 'styled-components';
import { PhotoSlider } from 'react-photo-view';
import { IPhotoProvider } from 'react-photo-view/dist/PhotoProvider';
import { IPhotoConsumer } from 'react-photo-view/dist/PhotoConsumer';
import { IPhotoSliderProps } from 'react-photo-view/dist/PhotoSlider';
import photo1 from './1.jpg';
import photo2 from './2.jpg';
import photo3 from './3.jpg';
import photo4 from './4.png';
import photo5 from './5.jpg';
import photo6 from './6.png';
import photo7 from './7.jpg';
import photo8 from './8.jpg';

export const photoImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

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

export function IPhotoProviderForwardProps(props: IPhotoProvider) {}

export function IPhotoConsumerForwardProps(props: IPhotoConsumer) {}

export function IPhotoSliderForwardProps(props: IPhotoSliderProps) {}
