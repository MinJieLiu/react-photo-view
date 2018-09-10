import React from 'react';

/**
 * 从 Touch 事件中获取多个触控中心位置
 */
const getMultipleTouchPosition = (
  evt: React.TouchEvent,
): {
  pageX: number;
  pageY: number;
  touchLength: number;
} => {
  const { pageX, pageY } = evt.touches[0];
  const { pageX: nextPageX, pageY: nextPageY } = evt.touches[1];
  return {
    pageX: (pageX + nextPageX) / 2,
    pageY: (pageY + nextPageY) / 2,
    touchLength: Math.sqrt(
      Math.pow(nextPageX - pageX, 2) + Math.pow(nextPageY - pageY, 2),
    ),
  };
};

export default getMultipleTouchPosition;
