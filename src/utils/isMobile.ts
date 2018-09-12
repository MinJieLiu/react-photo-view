/**
 * 是否为移动端设备
 */
const isMobile: boolean = typeof window !== 'undefined'
  && window.navigator.userAgent.includes('Mobile');

export default isMobile;
