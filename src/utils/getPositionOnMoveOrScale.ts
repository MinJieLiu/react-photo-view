/**
 * 获取移动或缩放之后的中心点
 */
const getPositionOnMoveOrScale = ({
  x,
  y,
  pageX,
  pageY,
  fromScale,
  toScale,
}: {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
  fromScale: number;
  toScale: number;
}): {
  x: number;
  y: number;
  scale: number;
} => {
  const { innerWidth, innerHeight } = window;
  const centerPageX = innerWidth / 2;
  const centerPageY = innerHeight / 2;
  // 坐标偏移
  const lastPositionX = centerPageX + x;
  const lastPositionY = centerPageY + y;

  // 放大偏移量
  const offsetScale = toScale / fromScale;
  // 偏移位置
  const originX = pageX - (pageX - lastPositionX) * offsetScale - centerPageX;
  const originY = pageY - (pageY - lastPositionY) * offsetScale - centerPageY;
  return {
    x: originX,
    y: originY,
    scale: toScale,
  };
};

export default getPositionOnMoveOrScale;
