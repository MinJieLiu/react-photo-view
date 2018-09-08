import { springType } from './types';

/**
 * 最大触摸时间
 */
export const maxTouchTime: number = 200;

/**
 * 默认动画参数
 */
export const defaultAnimationConfig: springType = {
  stiffness: 240,
  damping: 30,
};

/**
 * 滑动时动画参数
 */
export const slideAnimationConfig: springType = {
  stiffness: 170,
  damping: 32,
};
