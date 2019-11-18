import { maxTouchTime, slideAcceleration } from '../variables';
import { CloseEdgeEnum } from '../types';
import { getClosedHorizontal, getClosedVertical } from './getCloseEdge';

/**
 * 适应到合适的图片偏移量
 */
export default function slideToPosition({
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
} {
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

  const horizontalCloseEdge = getClosedHorizontal(planX, scale, width);
  const verticalCloseEdge = getClosedVertical(planY, scale, height);

  // x
  if (horizontalCloseEdge === CloseEdgeEnum.Small) {
    currentX = 0;
  } else if (horizontalCloseEdge === CloseEdgeEnum.Before) {
    currentX = outOffsetX;
  } else if (horizontalCloseEdge === CloseEdgeEnum.After) {
    currentX = -outOffsetX;
  }
  // y
  if (verticalCloseEdge === CloseEdgeEnum.Small) {
    currentY = 0;
  } else if (verticalCloseEdge === CloseEdgeEnum.Before) {
    currentY = outOffsetY;
  } else if (verticalCloseEdge === CloseEdgeEnum.After) {
    currentY = -outOffsetY;
  }

  // 时间过长
  if (
    moveTime >= maxTouchTime &&
    (horizontalCloseEdge === CloseEdgeEnum.Normal &&
      verticalCloseEdge === CloseEdgeEnum.Normal)
  ) {
    return {
      x,
      y,
    };
  }
  return {
    x: currentX,
    y: currentY,
  };
}
