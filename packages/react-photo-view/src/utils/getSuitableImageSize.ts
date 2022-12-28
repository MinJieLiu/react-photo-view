import { longModeRatio } from '../variables'
import getRotateSize from './getRotateSize'

/**
 * 获取图片合适的大小
 */
export default function getSuitableImageSize(
  isDragMode: boolean,
  naturalWidth: number,
  naturalHeight: number,
  rotate: number,
  margin = 0,
) {
  const [currentWidth, currentHeight, isVertical] = getRotateSize(rotate, innerWidth, innerHeight)

  let y = margin
  let width = currentWidth - margin * 2
  let height = currentHeight - margin * 2

  // 自适应宽高
  const autoWidth = (naturalWidth / naturalHeight) * currentHeight
  const autoHeight = (naturalHeight / naturalWidth) * currentWidth

  if (naturalWidth < currentWidth && naturalHeight < currentHeight) {
    width = naturalWidth
    height = naturalHeight
  } else if (naturalWidth < currentWidth && naturalHeight >= currentHeight) {
    width = autoWidth
  } else if (naturalWidth >= currentWidth && naturalHeight < currentHeight) {
    height = autoHeight
  } else if (naturalWidth / naturalHeight > currentWidth / currentHeight) {
    height = autoHeight
  }
  // 长图模式
  else if (naturalHeight / naturalWidth >= longModeRatio && !isVertical) {
    height = autoHeight
    y = (height - currentHeight) / 2
  } else {
    width = autoWidth
  }
  const state: Record<string, number | boolean> = {
    width,
    height,
    x: margin,
    y,
    pause: true,
  }
  if (isDragMode) state.scale = Math.min(height / naturalHeight, width / naturalWidth, 1)
  return state
}
