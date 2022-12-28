import { longModeRatio } from '../variables'
import { computePositionEdge } from './edgeHandle'

/**
 * 获取移动或缩放之后的中心点
 */
export default function getPositionOnMoveOrScale(
  isDragMode: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  naturalWidth: number,
  naturalHeight: number,
  scale: number,
  toScale: number,
  clientX: number = innerWidth / 2,
  clientY: number = innerHeight / 2,
  offsetX: number = 0,
  offsetY: number = 0,
) {
  // 是否接触边缘
  const [closedEdgeX] = computePositionEdge(
    x,
    toScale,
    isDragMode ? naturalWidth : width,
    innerWidth,
  )
  const [closedEdgeY] = computePositionEdge(
    y,
    toScale,
    isDragMode ? naturalHeight : height,
    innerHeight,
  )

  const centerClientX = innerWidth / 2
  const centerClientY = innerHeight / 2

  // 坐标偏移
  const lastPositionX = centerClientX + x
  const lastPositionY = centerClientY + y

  // 偏移位置
  const originX = clientX - (clientX - lastPositionX) * (toScale / scale) - centerClientX
  const originY = clientY - (clientY - lastPositionY) * (toScale / scale) - centerClientY
  // 长图模式无左右反馈
  const longModeEdge =
    (isDragMode ? naturalHeight / naturalWidth : height / width) >= longModeRatio &&
    (isDragMode ? naturalWidth : width) * toScale === innerWidth
  // 超出边缘距离减半
  return {
    x: originX + (longModeEdge ? 0 : closedEdgeX ? offsetX / 2 : offsetX),
    y: originY + (closedEdgeY ? offsetY / 2 : offsetY),
    lastCX: clientX,
    lastCY: clientY,
  }
}
