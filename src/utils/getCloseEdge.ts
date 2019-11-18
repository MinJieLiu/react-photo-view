import { CloseEdgeEnum, ReachTypeEnum } from '../types';

/**
 * 接触左边或右边边缘
 * @param x
 * @param scale
 * @param width
 * @return CloseEdgeEnum
 */
export function getClosedHorizontal(
  x: number,
  scale: number,
  width: number,
): CloseEdgeEnum {
  const { innerWidth } = window;
  const currentWidth = width * scale;
  // 图片超出的宽度
  const outOffsetX = (currentWidth - innerWidth) / 2;
  if (currentWidth <= innerWidth) {
    return CloseEdgeEnum.Small;
  } else if (x > 0 && outOffsetX - x <= 0) {
    return CloseEdgeEnum.Before;
  } else if (x < 0 && outOffsetX + x <= 0) {
    return CloseEdgeEnum.After;
  }
  return CloseEdgeEnum.Normal;
}

/**
 * 接触上边或下边边缘
 * @param y
 * @param scale
 * @param height
 * @return CloseEdgeEnum
 */
export function getClosedVertical(
  y: number,
  scale: number,
  height: number,
): CloseEdgeEnum {
  const { innerHeight } = window;
  const currentHeight = height * scale;
  // 图片超出的高度
  const outOffsetY = (currentHeight - innerHeight) / 2;

  if (currentHeight <= innerHeight) {
    return CloseEdgeEnum.Small;
  } else if (y > 0 && outOffsetY - y <= 0) {
    return CloseEdgeEnum.Before;
  } else if (y < 0 && outOffsetY + y <= 0) {
    return CloseEdgeEnum.After;
  }
  return CloseEdgeEnum.Normal;
}

/**
 * 获取接触边缘类型
 * @param horizontalCloseEdge
 * @param verticalCloseEdge
 * @param reachState
 */
export function getReachType({
  horizontalCloseEdge,
  verticalCloseEdge,
  reachState,
}: {
  horizontalCloseEdge: CloseEdgeEnum;
  verticalCloseEdge: CloseEdgeEnum;
  reachState: ReachTypeEnum;
}): ReachTypeEnum {
  if (
    (horizontalCloseEdge && reachState === ReachTypeEnum.Normal) ||
    reachState === ReachTypeEnum.XReach
  ) {
    return ReachTypeEnum.XReach;
  } else if (
    (verticalCloseEdge && reachState === ReachTypeEnum.Normal) ||
    reachState === ReachTypeEnum.YReach
  ) {
    return ReachTypeEnum.YReach;
  }
  return ReachTypeEnum.Normal;
}
