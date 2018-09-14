import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  width: 100%;
  min-height: 44px;
  line-height: 1.5;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: justify;
  transition: opacity 0.2s ease-out;
  z-index: 20;
`;

export default FooterWrap;
