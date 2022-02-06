import { computePositionEdge } from '../utils/edgeHandle';
import getRotateSize from '../utils/getRotateSize';
import { maxTouchTime } from '../variables';
import useMethods from './useMethods';

const raf = requestAnimationFrame;
const caf = cancelAnimationFrame;

/**
 * 物理滚动到具体位置
 */
export default function useScrollPosition<C extends (spatial: number, easing?: boolean) => boolean>(
  callbackX: C,
  callbackY: C,
) {
  const callback = useMethods({
    x(spatial: number, easing?: boolean) {
      return callbackX(spatial, easing);
    },
    y(spatial: number, easing?: boolean) {
      return callbackY(spatial, easing);
    },
  });

  return (
    x: number,
    y: number,
    lastX: number,
    lastY: number,
    width: number,
    height: number,
    scale: number,
    rotate: number,
    touchedTime: number,
  ) => {
    // 缩小的情况下不执行滚动逻辑
    if (scale < 1) {
      callback.x(0, true);
      callback.y(0, true);
      return;
    }

    const moveTime = Date.now() - touchedTime;
    // 初始速度
    const speedX = (x - lastX) / moveTime;
    const speedY = (y - lastY) / moveTime;

    const [currentWidth, currentHeight] = getRotateSize(rotate, width, height);

    scrollMoveCallback(moveTime, speedX, x, scale, currentWidth, window.innerWidth, callback.x);
    scrollMoveCallback(moveTime, speedY, y, scale, currentHeight, window.innerHeight, callback.y);
  };
}

/**
 * 滚动回调/边缘处理
 */
function scrollMoveCallback(
  moveTime: number,
  speed: number,
  position: number,
  scale: number,
  currentSize: number,
  innerSize: number,
  callback: (spatial: number) => boolean,
) {
  // 时间过长
  if (moveTime >= maxTouchTime) {
    const [next, isEdge] = computePositionEdge(position, scale, currentSize, innerSize);
    if (isEdge) {
      easeOutMove(position, next, callback);
    }
    return;
  }

  scrollMove(speed, (spatial) => {
    const [current, isCloseEdge] = computePositionEdge(position + spatial, scale, currentSize, innerSize);
    // 接触边缘回弹
    if (isCloseEdge) {
      easeOutMove(position + spatial, current, callback);
      return false;
    }
    const result = callback(current);
    return !isCloseEdge && result;
  });
}

/**
 * 通过速度滚动到停止
 */
function scrollMove(initialSpeed: number, callback: (spatial: number) => boolean) {
  // 加速度
  const acceleration = -0.001;
  // 阻力
  const resistance = 0.0005;

  let v = initialSpeed;
  let s = 0;
  let lastTime: number | undefined = undefined;
  let frameId = 0;

  const calcMove = (now: number) => {
    if (!lastTime) {
      lastTime = now;
    }
    const dt = now - lastTime;
    const direction = Math.sign(initialSpeed);
    const a = direction * acceleration;
    const f = Math.sign(-v) * v ** 2 * resistance;
    const ds = v * dt + ((a + f) * dt ** 2) / 2;
    v = v + (a + f) * dt;

    s = s + ds;
    // move to s
    lastTime = now;

    if (direction * v <= 0) {
      caf(frameId);
      return;
    }

    if (callback(s)) {
      frameId = raf(calcMove);
      return;
    }
    caf(frameId);
  };
  frameId = raf(calcMove);
}

/**
 * 缓动回调
 */
function easeOutMove(start: number, end: number, callback: (spatial: number) => boolean) {
  const distance = end - start;
  const totalTime = 400;
  if (distance === 0) {
    return;
  }

  const startTime = Date.now();
  let frameId = 0;

  const calcMove = () => {
    const time = Math.min(1, (Date.now() - startTime) / totalTime);
    const result = callback(start + easeOutExpo(time) * distance);

    if (result) {
      frameId = raf(calcMove);
      return;
    }
    caf(frameId);
  };
  frameId = raf(calcMove);

  setTimeout(() => {
    caf(frameId);
    callback(end);
  }, totalTime);
}

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}
