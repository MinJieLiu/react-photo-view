/**
 * 图片 item 类型
 */
export type dataType = {
  dataKey: string;
  src: string;
};

export type ReachFunction = (clientX: number, clientY: number) => void;

/**
 * 边缘超出状态
 */
export enum CloseEdgeEnum {
  Normal, // 正常滑动
  Small, // 小于屏幕宽度
  Before, // 抵触左边/上边
  After, // 抵触右边/下边
}

/**
 * 边缘触发状态
 */
export enum ReachTypeEnum {
  Normal, // 未触发
  XReach, // x 轴
  YReach, // y 轴
}

/**
 * 触摸类型
 */
export enum TouchTypeEnum {
  Image = 1, // 图片
  Mask, // 背景
}
