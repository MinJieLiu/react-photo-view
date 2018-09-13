import slideToPosition from './slideToPosition';
import { getClosedHorizontal, getClosedVertical } from './getCloseEdge';
import { CloseEdgeEnum } from '../types';

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
}: {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  width: number;
  height: number;
  scale: number;
  touchedTime: number;
}): {
  x: number;
  y: number;
} => {
  // 滑动到结果的位置
  const { endX, endY } = slideToPosition({
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
  if (horizontalType === CloseEdgeEnum.Small) {
    currentX = 0;
  } else if (horizontalType === CloseEdgeEnum.Before) {
    currentX = outOffsetX;
  } else if (horizontalType === CloseEdgeEnum.After) {
    currentX = -outOffsetX;
  }
  // y
  if (verticalType === CloseEdgeEnum.Small) {
    currentY = 0;
  } else if (verticalType === CloseEdgeEnum.Before) {
    currentY = outOffsetY;
  } else if (verticalType === CloseEdgeEnum.After) {
    currentY = -outOffsetY;
  }

  return {
    x: currentX,
    y: currentY,
  };
};

export default slideToSuitableOffset;
