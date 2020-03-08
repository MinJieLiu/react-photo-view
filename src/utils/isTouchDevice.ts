/**
 * 是否支持触摸设备
 */
const isTouchDevice = 'ontouchstart' in document.documentElement;

export default isTouchDevice;
