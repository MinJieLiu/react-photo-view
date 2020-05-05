import { CloseEdgeEnum, ReachTypeEnum, TouchStartEnum } from '../types';

/**
 * 接触左边/上边 或 右边/下边边缘
 * @param position - x/y
 * @param scale
 * @param size - width/height
 * @param innerSize - innerWidth/innerHeight
 * @return CloseEdgeEnum
 */
export function getClosedEdge(position: number, scale: number, size: number, innerSize: number): CloseEdgeEnum {
  const currentWidth = size * scale;
  // 图片超出的宽度
  const outOffsetX = (currentWidth - innerSize) / 2;
  if (currentWidth <= innerSize) {
    return CloseEdgeEnum.Small;
  } else if (position > 0 && outOffsetX - position <= 0) {
    return CloseEdgeEnum.Before;
  } else if (position < 0 && outOffsetX + position <= 0) {
    return CloseEdgeEnum.After;
  }
  return CloseEdgeEnum.Normal;
}

/**
 * 获取接触边缘类型
 * @param initialTouchState
 * @param horizontalCloseEdge
 * @param verticalCloseEdge
 * @param reachState
 */
export function getReachType({
  initialTouchState,
  horizontalCloseEdge,
  verticalCloseEdge,
  reachState,
}: {
  initialTouchState: TouchStartEnum;
  horizontalCloseEdge: CloseEdgeEnum;
  verticalCloseEdge: CloseEdgeEnum;
  reachState: ReachTypeEnum;
}): ReachTypeEnum {
  if ((horizontalCloseEdge > 0 && initialTouchState === TouchStartEnum.X) || reachState === ReachTypeEnum.XReach) {
    return ReachTypeEnum.XReach;
  } else if (
    (verticalCloseEdge > 0 &&
      (initialTouchState === TouchStartEnum.YPull || initialTouchState === TouchStartEnum.YPush)) ||
    reachState === ReachTypeEnum.YReach
  ) {
    return ReachTypeEnum.YReach;
  }
  return ReachTypeEnum.Normal;
}
