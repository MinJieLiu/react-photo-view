import * as React from 'react';
import styled from 'styled-components';
import { PhotoProvider, PhotoSlider, PhotoConsumer } from 'react-photo-view';
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

const FullScreenIcon = (props: React.HTMLAttributes<any>) => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  React.useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };
  }, []);
  return (
    <svg
      className="PhotoView-PhotoSlider__toolbarIcon"
      fill="white"
      width="44"
      height="44"
      viewBox="0 0 768 768"
      {...props}
    >
      {fullscreen ? (
        <path d="M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z" />
      ) : (
        <path d="M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z" />
      )}
    </svg>
  );
};

export const WithToolbar = () => {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.getElementById('PhotoView_Slider');
      if (element) {
        element.requestFullscreen();
      }
    }
  }
  return (
    <PhotoProvider
      toolbarRender={({ rotate, onRotate }) => {
        return (
          <>
            <svg
              className="PhotoView-PhotoSlider__toolbarIcon"
              onClick={() => onRotate(rotate + 90)}
              width="44"
              height="44"
              fill="white"
              viewBox="0 0 768 768"
            >
              <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
            </svg>
            <FullScreenIcon onClick={toggleFullScreen} />
          </>
        );
      }}
    >
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <ViewBox viewImage={item} />
          </PhotoConsumer>
        ))}
      </ImageList>
    </PhotoProvider>
  );
};

export function IPhotoProviderForwardProps(props: IPhotoProvider) {}

export function IPhotoConsumerForwardProps(props: IPhotoConsumer) {}

export function IPhotoSliderForwardProps(props: IPhotoSliderProps) {}
