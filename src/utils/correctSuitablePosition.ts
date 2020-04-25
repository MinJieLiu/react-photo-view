/**
 * 纠正缩放后偏离中心区域位置
 */
export default function correctSuitablePosition({
  x,
  y,
  scale,
}: {
  x: number;
  y: number;
  scale: number;
}): { x: number; y: number } {
  if (scale <= 1) {
    return {
      x: 0,
      y: 0,
    };
  }
  return {
    x,
    y,
  };
}
