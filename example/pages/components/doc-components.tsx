import 'react-photo-view/dist/react-photo-view.css';

import styled from 'styled-components';
import photo1 from '../images/1.jpg';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.png';
import photo5 from '../images/5.jpg';
import photo6 from '../images/6.png';
import photo7 from '../images/7.jpg';
import photo8 from '../images/8.jpg';

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
  background: url('${(props) => props.viewImage}') no-repeat center;
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
