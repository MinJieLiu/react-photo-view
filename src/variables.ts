import { springType } from './types';

/**
 * 最大触摸时间
 */
export const maxTouchTime: number = 200;

/**
 * 最大切换滑动距离
 */
export const maxMoveOffset: number = 40;

/**
 * 最小触发边缘距离
 */
export const minReachOffset: number = 40;

/**
 * 关闭页面触发距离
 */
export const closePageOffset: number = 60;

/**
 * 默认背景透明度
 */
export const defaultOpacity: number = 0.6;

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
