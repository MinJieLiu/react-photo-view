import { computePositionEdge } from './edgeHandle';

/**
 * 获取移动或缩放之后的中心点
 */
export default function getPositionOnMoveOrScale(
  x: number,
  y: number,
  clientX: number,
  clientY: number,
  width: number,
  height: number,
  scale: number,
  toScale: number,
  offsetX: number = 0,
  offsetY: number = 0,
) {
  const { innerWidth, innerHeight } = window;

  // 是否接触边缘
  const [closedEdgeX] = computePositionEdge(x, toScale, width, innerWidth);
  const [closedEdgeY] = computePositionEdge(y, toScale, height, innerHeight);

  const centerClientX = innerWidth / 2;
  const centerClientY = innerHeight / 2;

  // 坐标偏移
  const lastPositionX = centerClientX + x;
  const lastPositionY = centerClientY + y;

  // 偏移位置
  const originX = clientX - (clientX - lastPositionX) * (toScale / scale) - centerClientX;
  const originY = clientY - (clientY - lastPositionY) * (toScale / scale) - centerClientY;
  // 超出边缘距离减半
  return {
    x: originX + (closedEdgeX ? offsetX / 2 : offsetX),
    y: originY + (closedEdgeY ? offsetY / 2 : offsetY),
    lastCX: clientX,
    lastCY: clientY,
  };
}
