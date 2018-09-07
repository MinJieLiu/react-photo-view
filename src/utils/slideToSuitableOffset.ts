import { animationType } from '../types';
import { maxTouchTime, defaultAnimationConfig } from '../variables';

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
} & animationType => {
  const moveTime = Date.now() - touchedTime;
  const speedX = (x - lastX) / moveTime;
  const speedY = (y - lastY) / moveTime;
  const maxSpeed = Math.max(speedX, speedY);
  const slideTime = moveTime < maxTouchTime ? Math.abs(maxSpeed) * 20 + 400 : 0;
  return {
    endX: Math.floor(x + speedX * slideTime),
    endY: Math.floor(y + speedY * slideTime),
    animation: {
      stiffness: 170,
      damping: 32,
    },
  };
};

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

  const { innerWidth, innerHeight } = window;
  // 图片超出的长度
  const outOffsetX = (width * scale - innerWidth) / 2;
  const outOffsetY = (height * scale - innerHeight) / 2;

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

  if (width * scale <= innerWidth) {
    currentX = 0;
  } else if (endX > 0 && outOffsetX - endX <= 0) {
    currentX = outOffsetX;
  } else if (endX < 0 && outOffsetX + endX <= 0) {
    currentX = -outOffsetX;
  }
  if (height * scale <= innerHeight) {
    currentY = 0;
  } else if (endY > 0 && outOffsetY - endY <= 0) {
    currentY = outOffsetY;
  } else if (endY < 0 && outOffsetY + endY <= 0) {
    currentY = -outOffsetY;
  }

  const isBumpEdge = currentX !== endX || currentY !== endY;

  return {
    x: currentX,
    y: currentY,
    animation: isBumpEdge ? defaultAnimationConfig : animation,
  };
};

export default slideToSuitableOffset;
