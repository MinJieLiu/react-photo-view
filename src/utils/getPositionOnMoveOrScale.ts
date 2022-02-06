/**
 * 获取移动或缩放之后的中心点
 */
export default function getPositionOnMoveOrScale(
  x: number,
  y: number,
  clientX: number,
  clientY: number,
  offsetScale: number,
  offsetX: number = 0,
  offsetY: number = 0,
) {
  const { innerWidth, innerHeight } = window;
  const centerClientX = innerWidth / 2;
  const centerClientY = innerHeight / 2;
  // 坐标偏移
  const lastPositionX = centerClientX + x;
  const lastPositionY = centerClientY + y;

  // 偏移位置
  const originX = clientX - (clientX - lastPositionX) * offsetScale - centerClientX;
  const originY = clientY - (clientY - lastPositionY) * offsetScale - centerClientY;
  return {
    x: originX + offsetX,
    y: originY + offsetY,
    lastClientX: clientX,
    lastClientY: clientY,
  };
}
