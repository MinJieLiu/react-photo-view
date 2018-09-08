import { animationType } from '../types';
import { defaultAnimationConfig } from '../variables';
import slideToPosition from './slideToPosition';
import { getClosedHorizontal, getClosedVertical } from './getCloseEdge';

/**
 * 适应到合适的图片偏移量
 */
const slideToSuitableOffset = ({
  x,
  y,
  lastX,
  lastY,
  width,
  height,
  scale,
  touchedTime,
  hasMove,
}: {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  width: number;
  height: number;
  scale: number;
  touchedTime: number;
  hasMove: boolean;
}): {
  x: number;
  y: number;
} & animationType => {
  // 没有移动图片
  if (!hasMove) {
    return {
      x,
      y,
      animation: defaultAnimationConfig,
    };
  }
  // 滑动到结果的位置
  const { endX, endY, animation } = slideToPosition({
    x,
    y,
    lastX,
    lastY,
    touchedTime,
  });

  let currentX = endX;
  let currentY = endY;

  const { innerWidth, innerHeight } = window;
  // 图片超出的长度
  const outOffsetX = (width * scale - innerWidth) / 2;
  const outOffsetY = (height * scale - innerHeight) / 2;

  const horizontalType = getClosedHorizontal(endX, scale, width);
  const verticalType = getClosedVertical(endY, scale, height);

  // x
  if (horizontalType === 1) {
    currentX = 0;
  } else if (horizontalType === 2) {
    currentX = outOffsetX;
  } else if (horizontalType === 3) {
    currentX = -outOffsetX;
  }
  // y
  if (verticalType === 1) {
    currentY = 0;
  } else if (verticalType === 2) {
    currentY = outOffsetY;
  } else if (verticalType === 3) {
    currentY = -outOffsetY;
  }

  const isClosedEdge = horizontalType !== 0 || verticalType !== 0;

  return {
    x: currentX,
    y: currentY,
    animation: isClosedEdge ? defaultAnimationConfig : animation,
  };
};

export default slideToSuitableOffset;
