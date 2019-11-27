import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import image1 from './static/1.png';
import image2 from './static/2.jpg';
import image3 from './static/3.jpg';
import image4 from './static/4.jpg';
import image5 from './static/5.jpg';
import defaultPhoto from './static/default-photo.svg';

const photoImages = [image1, image2, image3, image4, image5];

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

const Button = styled.button`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const DefaultImage = styled.img`
  width: 100px;
  height: 100px;
`;

storiesOf('基本操作', module)
  .add('默认预览', () => (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <SmallImage src={item} />
          </PhotoConsumer>
        ))}
      </ImageList>
    </PhotoProvider>
  ))
  .add('只展示两张', () => (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            {index < 2 ? <SmallImage src={item} /> : undefined}
          </PhotoConsumer>
        ))}
      </ImageList>
    </PhotoProvider>
  ))
  .add('按钮触发', () => (
    <PhotoProvider>
      <ImageList>
        <PhotoConsumer src={image4}>
          <Button>打开预览</Button>
        </PhotoConsumer>
      </ImageList>
    </PhotoProvider>
  ))
  .add('错误图片地址', () => (
    <ImageList>
      <PhotoProvider>
        <PhotoConsumer src={null}>
          <Button>无默认图</Button>
        </PhotoConsumer>
      </PhotoProvider>
      <PhotoProvider brokenElement={<DefaultImage src={defaultPhoto} />}>
        <PhotoConsumer src={null}>
          <Button>自定义默认图</Button>
        </PhotoConsumer>
      </PhotoProvider>
    </ImageList>
  ));
