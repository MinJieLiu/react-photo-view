import { useEffect } from 'react';

export default function PreventScroll() {
  useEffect(() => {
    const unlockSafari = lockSafariScroll();
    const unlockBody = handleLock(document.body);

    return () => {
      unlockBody();
      unlockSafari?.();
    };
  }, []);

  return null;
}

function handleLock(el: HTMLElement) {
  const { style } = el;
  const lastOverflow = style.overflow;
  style.overflow = 'hidden';

  return function unlock() {
    style.overflow = lastOverflow;
  };
}

function lockSafariScroll() {
  const ua = navigator.userAgent;
  if (ua.includes('iPhone') && ua.includes('Safari')) {
    const scrollY = window.scrollY;
    const el = document.documentElement;
    const { style } = el;

    const handleUnlock = handleLock(el);
    const lastHeight = style.height;
    style.height = `${window.innerHeight}px`;

    return function unlock() {
      handleUnlock();
      style.height = lastHeight;
      window.scrollTo(0, scrollY);
    };
  }
  return undefined;
}
