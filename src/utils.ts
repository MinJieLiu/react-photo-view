import { animationType } from './types';
import { maxTouchTime, defaultAnimationConfig } from './variables';

/**
 * 获取图片合适的大小
 * @param naturalWidth 图片真实宽度
 * @param naturalHeight 图片真实高度
 * @return 图片合适的大小
 */
export const getSuitableImageSize = (
  naturalWidth: number,
  naturalHeight: number,
): {
  width: number;
  height: number;
} => {
  let width = 0;
  let height = 0;
  const { innerWidth, innerHeight } = window;
  if (naturalWidth < innerWidth && naturalHeight < innerHeight) {
    width = naturalWidth;
    height = naturalHeight;
  } else if (naturalWidth < innerWidth && naturalHeight >= innerHeight) {
    width = (naturalWidth / naturalHeight) * innerHeight;
    height = innerHeight;
  } else if (naturalWidth >= innerWidth && naturalHeight < innerHeight) {
    width = innerWidth;
    height = (naturalHeight / naturalWidth) * innerWidth;
  } else if (
    naturalWidth >= innerWidth &&
    naturalHeight >= innerHeight &&
    naturalWidth / naturalHeight > innerWidth / innerHeight
  ) {
    width = innerWidth;
    height = (naturalHeight / naturalWidth) * innerWidth;
  } else {
    width = (naturalWidth / naturalHeight) * innerHeight;
    height = innerHeight;
  }
  return {
    width: Math.floor(width),
    height: Math.floor(height),
  };
};

export const getPositionOnScale = ({
  x,
  y,
  pageX,
  pageY,
  originX,
  originY,
  fromScale,
  toScale,
}: {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
  originX: number;
  originY: number;
  fromScale: number;
  toScale: number;
}): {
  x: number;
  y: number;
  originX: number;
  originY: number;
  scale: number;
} => {
  const { innerWidth, innerHeight } = window;
  // 缩放距离计算
  const imageCenterX = innerWidth / 2 + x;
  const imageCenterY = innerHeight / 2 + y;

  const offsetX = pageX - imageCenterX;
  const offsetY = pageY - imageCenterY;

  return {
    x: x + (offsetX - originX * fromScale),
    y: y + (offsetY - originY * fromScale),
    scale: Math.max(Math.min(toScale, 5), 1),
    originX: offsetX / fromScale,
    originY: offsetY / fromScale,
  };
};

export const slideToPosition = ({
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
  const slideTime = moveTime < maxTouchTime ? Math.abs(maxSpeed) * 10 + 400 : 0;
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
 * 跳转到合适的图片偏移量
 */
export const jumpToSuitableOffset = ({
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
  const { endX, endY, animation } = slideToPosition({ x, y, lastX, lastY, touchedTime });

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

  const isSlide = currentX === endX || currentY === endY;

  return {
    x: currentX,
    y: currentY,
    animation: isSlide ? defaultAnimationConfig : animation,
  };
};
