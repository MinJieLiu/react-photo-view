/**
 * 获取旋转后的宽高
 */
export default function getRotateSize(rotate: number, width: number, height: number) {
  let currentWidth = width;
  let currentHeight = height;
  const isVertical = rotate % 180 !== 0;

  // 若图片不是水平则调换属性
  if (isVertical) {
    [currentWidth, currentHeight] = [height, width];
  }

  return [currentWidth, currentHeight, isVertical] as const;
}
