import type { CloseEdgeType } from '../types';
import type { ReachType, TouchStartType } from '../types';

/**
 * 获取接触边缘类型
 */
export const getReachType = (
  initialTouchState: TouchStartType,
  horizontalCloseEdge: CloseEdgeType,
  verticalCloseEdge: CloseEdgeType,
  reachPosition: ReachType,
): ReachType => {
  if ((horizontalCloseEdge && initialTouchState === 'x') || reachPosition === 'x') {
    return 'x';
  } else if (
    (verticalCloseEdge && (initialTouchState === 'pull' || initialTouchState === 'push')) ||
    reachPosition === 'y'
  ) {
    return 'y';
  }
  return undefined;
};

/**
 * 计算接触边缘位置
 * @param position - x/y
 * @param scale
 * @param size - width/height
 * @param innerSize - innerWidth/innerHeight
 * @return [CloseEdgeType, position]
 */
export const computePositionEdge = (position: number, scale: number, size: number, innerSize: number) => {
  const currentWidth = size * scale;
  // 图片超出的宽度
  const outOffset = (currentWidth - innerSize) / 2;
  let closedEdge: CloseEdgeType = undefined;

  let current = position;
  if (currentWidth <= innerSize) {
    closedEdge = 'S';
    current = 0;
  } else if (position > 0 && outOffset - position <= 0) {
    closedEdge = 'F';
    current = outOffset;
  } else if (position < 0 && outOffset + position <= 0) {
    closedEdge = 'E';
    current = -outOffset;
  }

  return [closedEdge, current] as const;
};
