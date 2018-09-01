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
  toScale,
}: {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
  toScale: number;
}): {
  distanceX: number;
  distanceY: number;
} => {
  const { innerWidth, innerHeight } = window;
  const scale = toScale - 1;
  const distanceX = (innerWidth / 2 - x - pageX) * scale;
  const distanceY = (innerHeight / 2 - y - pageY) * scale;
  return {
    distanceX: Math.floor(distanceX),
    distanceY: Math.floor(distanceY),
  };
};

export const slideToPosition = ({
  x,
  y,
  offsetX,
  offsetY,
  touchedTime,
}: {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  touchedTime: number;
}): {
  endX: number;
  endY: number;
} & animationType => {
  const moveTime = Date.now() - touchedTime;
  const speedX = (x - offsetX) / moveTime;
  const speedY = (y - offsetY) / moveTime;
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
  offsetX,
  offsetY,
  width,
  height,
  scale,
  touchedTime,
  hasMove,
}: {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
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
  const { endX, endY, animation } = slideToPosition({ x, y, offsetX, offsetY, touchedTime });

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
