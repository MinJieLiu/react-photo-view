import { maxTouchTime, slideAcceleration } from '../variables';
import { getClosedEdge } from './getCloseEdge';

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
  rotate,
  touchedTime,
}: {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  width: number;
  height: number;
  scale: number;
  rotate: number;
  touchedTime: number;
}) {
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

  let currentWidth = width;
  let currentHeight = height;

  // 若图片不是水平则调换属性
  if (rotate % 180 !== 0) {
    [currentWidth, currentHeight] = [height, width];
  }

  let currentX = planX;
  let currentY = planY;

  const { innerWidth, innerHeight } = window;
  // 图片超出的长度
  const outOffsetX = (currentWidth * scale - innerWidth) / 2;
  const outOffsetY = (currentHeight * scale - innerHeight) / 2;

  const horizontalCloseEdge = getClosedEdge(planX, scale, currentWidth, innerWidth);
  const verticalCloseEdge = getClosedEdge(planY, scale, currentHeight, innerHeight);

  // x
  if (horizontalCloseEdge === 'small') {
    currentX = 0;
  } else if (horizontalCloseEdge === 'before') {
    currentX = outOffsetX;
  } else if (horizontalCloseEdge === 'after') {
    currentX = -outOffsetX;
  }
  // y
  if (verticalCloseEdge === 'small') {
    currentY = 0;
  } else if (verticalCloseEdge === 'before') {
    currentY = outOffsetY;
  } else if (verticalCloseEdge === 'after') {
    currentY = -outOffsetY;
  }

  // 时间过长
  if (moveTime >= maxTouchTime && horizontalCloseEdge === undefined && verticalCloseEdge === undefined) {
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
