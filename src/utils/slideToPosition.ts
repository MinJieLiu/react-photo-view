import {
  maxTouchTime,
  slideAcceleration,
} from '../variables';
import { CloseEdgeEnum } from '../types';
import { getClosedHorizontal, getClosedVertical } from './getCloseEdge';

/**
 * 适应到合适的图片偏移量
 */
const slideToPosition = ({
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
  const moveTime = Date.now() - touchedTime;

  // 初始速度
  const speedX = (x - lastX) / moveTime;
  const speedY = (y - lastY) / moveTime;

  // 停下所消耗时间
  const slideTimeX = Math.abs(speedX / slideAcceleration);
  const slideTimeY = Math.abs(speedY / slideAcceleration);

  // 计划滑动位置
  const planX = Math.floor(x + speedX * slideTimeX);
  const planY = Math.floor(y + speedY * slideTimeY);

  let currentX = planX;
  let currentY = planY;

  const { innerWidth, innerHeight } = window;
  // 图片超出的长度
  const outOffsetX = (width * scale - innerWidth) / 2;
  const outOffsetY = (height * scale - innerHeight) / 2;

  const horizontalType = getClosedHorizontal(planX, scale, width);
  const verticalType = getClosedVertical(planY, scale, height);

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

  // 时间过长
  if (moveTime >= maxTouchTime && (currentX !== 0 || currentY !== 0)) {
    return {
      x,
      y,
    };
  }
  return {
    x: currentX,
    y: currentY,
  };
};

export default slideToPosition;
