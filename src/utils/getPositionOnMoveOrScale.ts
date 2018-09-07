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
  let endScale = toScale;
  let originX = x;
  let originY = y;
  // 缩放限制
  if (toScale < 1) {
    endScale = 1;
  } else if (toScale > 6) {
    endScale = 6;
  } else {
    const centerPageX = innerWidth / 2;
    const centerPageY = innerHeight / 2;
    // 坐标偏移
    const lastPositionX = centerPageX + x;
    const lastPositionY = centerPageY + y;

    // 放大偏移量
    const offsetScale = endScale / fromScale;
    // 偏移位置
    originX = pageX - (pageX - lastPositionX) * offsetScale - centerPageX;
    originY = pageY - (pageY - lastPositionY) * offsetScale - centerPageY;
  }
  return {
    x: originX,
    y: originY,
    scale: endScale,
  };
};

export default getPositionOnMoveOrScale;
