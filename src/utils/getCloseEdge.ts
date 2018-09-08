/**
 * 接触左边或右边边缘
 * @param x
 * @param scale
 * @param width
 * @return 0. 未超出 1. 小于屏幕宽度 2. 接触左边 3. 接触右边
 */
export const getClosedHorizontal = (
  x: number,
  scale: number,
  width: number,
): number => {
  const { innerWidth } = window;
  const currentWidth = width * scale;
  // 图片超出的宽度
  const outOffsetX = (currentWidth - innerWidth) / 2;
  if (currentWidth <= innerWidth) {
    return 1;
  } else if (x > 0 && outOffsetX - x <= 0) {
    return 2;
  } else if (x < 0 && outOffsetX + x <= 0) {
    return 3;
  }
  return 0;
};

/**
 * 接触上边或下边边缘
 * @param y
 * @param scale
 * @param height
 * @return 0. 未超出 1. 小于屏幕高度 2. 接触上边 3. 接触下边
 */
export const getClosedVertical = (
  y: number,
  scale: number,
  height: number,
): number => {
  const { innerHeight } = window;
  const currentHeight = height * scale;
  // 图片超出的高度
  const outOffsetY = (currentHeight - innerHeight) / 2;

  if (currentHeight <= innerHeight) {
    return 1;
  } else if (y > 0 && outOffsetY - y <= 0) {
    return 2;
  } else if (y < 0 && outOffsetY + y <= 0) {
    return 3;
  }
  return 0;
};
