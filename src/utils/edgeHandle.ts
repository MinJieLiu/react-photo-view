import type { CloseEdgeType } from '../types';
import type { ReachType, TouchStartType } from '../types';

/**
 * 接触左边/上边 或 右边/下边边缘
 * @param position - x/y
 * @param scale
 * @param size - width/height
 * @param innerSize - innerWidth/innerHeight
 * @return CloseEdgeType
 */
export function getClosedEdge(position: number, scale: number, size: number, innerSize: number): CloseEdgeType {
  const currentWidth = size * scale;
  // 图片超出的宽度
  const outOffset = (currentWidth - innerSize) / 2;
  if (currentWidth <= innerSize) {
    return 'small';
  } else if (position > 0 && outOffset - position <= 0) {
    return 'before';
  } else if (position < 0 && outOffset + position <= 0) {
    return 'after';
  }
  return undefined;
}

/**
 * 获取接触边缘类型
 */
export function getReachType(
  initialTouchState: TouchStartType,
  horizontalCloseEdge: CloseEdgeType,
  verticalCloseEdge: CloseEdgeType,
  reachPosition: ReachType,
): ReachType {
  if ((horizontalCloseEdge && initialTouchState === 'x') || reachPosition === 'x') {
    return 'x';
  } else if (
    (verticalCloseEdge && (initialTouchState === 'pull' || initialTouchState === 'push')) ||
    reachPosition === 'y'
  ) {
    return 'y';
  }
  return undefined;
}

/**
 * 计算接触边缘位置
 */
export function computePositionEdge(position: number, scale: number, currentSize: number, innerSize: number) {
  const closedEdge = getClosedEdge(position, scale, currentSize, innerSize);
  // 图片超出的长度
  const outOffset = (currentSize * scale - innerSize) / 2;

  let current = position;
  if (closedEdge === 'small') {
    current = 0;
  } else if (closedEdge === 'before') {
    current = outOffset;
  } else if (closedEdge === 'after') {
    current = -outOffset;
  }

  return [current, closedEdge] as const;
}
