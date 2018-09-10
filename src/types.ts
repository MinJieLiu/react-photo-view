export type springType = {
  // 刚性
  stiffness: number;
  // 减震
  damping: number;
};

export type animationType = {
  animation: springType;
};

/**
 * 图片 item 类型
 */
export type dataType = {
  dataKey: string;
  src: string;
};
