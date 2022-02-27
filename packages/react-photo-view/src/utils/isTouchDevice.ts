/**
 * 是否支持触摸设备
 */
const isTouchDevice = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;

export default isTouchDevice;
