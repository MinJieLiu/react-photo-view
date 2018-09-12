import { maxTouchTime } from '../variables';

/**
 * 根据速度滑动至目标位置
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
  endX: number;
  endY: number;
} => {
  const moveTime = Date.now() - touchedTime;
  const speedX = (x - lastX) / moveTime;
  const speedY = (y - lastY) / moveTime;
  const maxSpeed = Math.max(speedX, speedY);
  const slideTime = moveTime < maxTouchTime ? Math.abs(maxSpeed) * 20 + maxTouchTime : 0;
  return {
    endX: Math.floor(x + speedX * slideTime),
    endY: Math.floor(y + speedY * slideTime),
  };
};

export default slideToPosition;
