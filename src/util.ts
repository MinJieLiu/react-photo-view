import { animationTimeBase } from './variables';

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
  slideTime: number;
} => {
  const moveTime = Date.now() - touchedTime;
  const speedX = (x - offsetX) / moveTime;
  const speedY = (y - offsetY) / moveTime;
  const maxSpeed = Math.max(speedX, speedY);
  const currentAnimationTime =
    Math.abs(maxSpeed < 200 ? maxSpeed : 200) * animationTimeBase +
    animationTimeBase;
  return {
    endX: Math.floor(x + speedX * currentAnimationTime),
    endY: Math.floor(y + speedY * currentAnimationTime),
    slideTime: Math.floor(currentAnimationTime),
  };
};

/**
 * 跳转到合适的图片偏移量
 * @param endX x 滑动后距离
 * @param endY y 滑动后距离
 * @param width 图片宽度
 * @param height 图片高度
 * @param scale 缩放
 * @param slideTime 动画时间
 * @return 坐标
 */
export const jumpToSuitableOffset = ({
  endX,
  endY,
  width,
  height,
  scale,
  slideTime,
}: {
  endX: number;
  endY: number;
  width: number;
  height: number;
  scale: number;
  slideTime: number;
}): {
  x: number;
  y: number;
  animationTime: number;
} => {
  const { innerWidth, innerHeight } = window;
  const outOffsetX = (width * scale - innerWidth) / 2;
  const outOffsetY = (height * scale - innerHeight) / 2;

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
    animationTime: isSlide ? slideTime : animationTimeBase,
  };
};
