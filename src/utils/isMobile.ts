/**
 * 是否为移动端设备
 */
const isMobile =
  (typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.userAgent &&
    window.navigator.userAgent.includes('Mobile')) ||
  false;

export default isMobile;
