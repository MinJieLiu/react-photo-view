import { springType } from './types';

/**
 * 最大触摸时间
 */
export const maxTouchTime: number = 200;

/**
 * 最大滑动切换图片距离
 */
export const maxMoveOffset: number = 40;

/**
 * 图片的间隔
 */
export const horizontalOffset: number = 40;

/**
 * 最小触发边缘事件距离
 */
export const minReachOffset: number = 20;

/**
 * 默认背景透明度
 */
export const defaultOpacity: number = 0.8;

/**
 * 最小缩放度
 */
export const minScale: number = 1;

/**
 * 最大缩放度（若图片足够大，则会被忽略）
 */
export const maxScale: number = 6;

/**
 * 缩放弹性缓冲
 */
export const scaleBuffer = 0.2;

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
