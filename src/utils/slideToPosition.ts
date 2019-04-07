import {
  maxTouchTime,
  slideAcceleration,
} from '../variables';

/**
 * 适应到合适的图片偏移量
 */
const slideToPosition = ({
  x,
  y,
  lastX,
  lastY,
  touchedTime,
}: {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  touchedTime: number;
}): {
  x: number;
  y: number;

} => {
  const moveTime = Date.now() - touchedTime;
  // 时间过长
  if (moveTime >= maxTouchTime) {
    return {
      x,
      y,
    };
  }
  // 初始速度
  const speedX = (x - lastX) / moveTime;
  const speedY = (y - lastY) / moveTime;

  // 停下所消耗时间
  const slideTimeX = speedX / slideAcceleration;
  const slideTimeY = speedY / slideAcceleration;

  // 计划滑动位置
  const planX = Math.floor(x + speedX * slideTimeX);
  const planY = Math.floor(y + speedY * slideTimeY);

  return {
    x: planX,
    y: planY,
  };
};

export default slideToPosition;
