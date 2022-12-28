import { maxScale, minDragScale, minScale } from '../variables'

export const limitNumber = (value: number, min: number, max: number) => {
  return Math.max(Math.min(value, max), min)
}

/**
 * 限制最大/最小缩放
 */
export const limitScale = (
  scale: number,
  isDragMode = false,
  max: number = 0,
  buffer: number = 0,
) => {
  return limitNumber(
    scale,
    isDragMode ? minDragScale : minScale * (1 - buffer),
    Math.max(maxScale, max) * (1 + buffer),
  )
}
