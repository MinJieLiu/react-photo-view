import React from 'react';

/**
 * 从 Touch 事件中获取两个触控中心位置
 */
export default function getMultipleTouchPosition(
  evt: React.TouchEvent,
): {
  clientX: number;
  clientY: number;
  touchLength: number;
} {
  const { clientX, clientY } = evt.touches[0];
  if (evt.touches.length >= 2) {
    const { clientX: nextClientX, clientY: nextClientY } = evt.touches[1];
    return {
      clientX: (clientX + nextClientX) / 2,
      clientY: (clientY + nextClientY) / 2,
      touchLength: Math.sqrt(
        Math.pow(nextClientX - clientX, 2) + Math.pow(nextClientY - clientY, 2),
      ),
    };
  }
  return { clientX, clientY, touchLength: 0 };
}
