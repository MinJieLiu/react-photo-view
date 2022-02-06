import 'react-photo-view/dist/react-photo-view.css';

import styled, { css } from 'styled-components';
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
  padding: 10px;
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

export const Button = styled.button<{ primary?: boolean }>`
  margin: 4px;
  padding: 4px 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    color: #1890ff;
    border-color: #1890ff;
  }

  ${({ primary }) =>
    primary &&
    css`
      color: white;
      border: 1px solid #1890ff;
      background: #1890ff;

      &:hover {
        color: white;
        background: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`;

export const DefaultImage = styled.img`
  width: 100px;
  height: 100px;
`;
