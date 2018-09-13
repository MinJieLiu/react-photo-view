import React from 'react';
import styled from 'styled-components';

export const TopBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s linear;
  will-change: opacity;
  z-index: 20;
`;

export const Counter = styled.div`
  padding: 0 10px;
  font-size: 14px;
  opacity: 0.75;
`;

function CloseSVG(props) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 768 768"
      {...props}
    >
      <path
        fill="#FFF"
        d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"
      />
    </svg>
  );
}

export const Close = styled(CloseSVG)<React.HTMLAttributes<any>>`
  padding: 10px;
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
