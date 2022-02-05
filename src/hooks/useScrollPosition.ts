import { getClosedEdge } from '../utils/getCloseEdge';
import { maxTouchTime } from '../variables';
import useMethods from './useMethods';

/**
 * 物理滚动到具体位置
 */
export default function useScrollPosition<C extends (spatial: number, transition: boolean) => boolean>(
  callbackX: C,
  callbackY: C,
) {
  const callback = useMethods({
    x(spatial: number, transition: boolean) {
      return callbackX(spatial, transition);
    },
    y(spatial: number, transition: boolean) {
      return callbackY(spatial, transition);
    },
  });

  return ({
    x,
    y,
    lastX,
    lastY,
    width,
    height,
    scale,
    rotate,
    touchedTime,
  }: {
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    width: number;
    height: number;
    scale: number;
    rotate: number;
    touchedTime: number;
  }) => {
    const moveTime = Date.now() - touchedTime;

    // 初始速度
    const speedX = (x - lastX) / moveTime;
    const speedY = (y - lastY) / moveTime;

    let currentWidth = width;
    let currentHeight = height;

    // 若图片不是水平则调换属性
    if (rotate % 180 !== 0) {
      [currentWidth, currentHeight] = [height, width];
    }

    const { innerWidth, innerHeight } = window;

    // 时间过长
    if (moveTime >= maxTouchTime) {
      computeEdge(x, scale, currentWidth, innerWidth, callback.x);
      computeEdge(y, scale, currentHeight, innerHeight, callback.y);
      return;
    }

    scrollMove(Math.abs(speedX), (spatial) => {
      return computeEdge(x + spatial * Math.sign(speedX), scale, currentWidth, innerWidth, callback.x);
    });

    scrollMove(Math.abs(speedY), (spatial) => {
      return computeEdge(y + spatial * Math.sign(speedY), scale, currentHeight, innerHeight, callback.y);
    });
  };
}

// 加速度
const acceleration = -0.001;
// 阻力
const resistance = 0.001;

/**
 * 通过速度滚动到停止
 */
function scrollMove(initialSpeed: number, callback: (spatial: number) => boolean) {
  let v = initialSpeed;
  let s = 0;
  let lastTime: number | undefined = undefined;
  let frameId = 0;

  const calcMove = (now: number) => {
    if (!lastTime) {
      lastTime = now;
    }
    const dt = now - lastTime;
    const f = Math.sign(-v) * v ** 2 * resistance;
    const ds = v * dt + ((acceleration + f) * dt ** 2) / 2;
    v = v + (acceleration + f) * dt;

    s = s + ds;
    // move to s
    lastTime = now;

    if (v <= 0) {
      cancelAnimationFrame(frameId);
      return;
    }

    if (callback(s)) {
      frameId = requestAnimationFrame(calcMove);
    }
  };
  frameId = requestAnimationFrame(calcMove);
}

function computeEdge(
  position: number,
  scale: number,
  currentSize: number,
  innerSize: number,
  callback: (current: number, transition: boolean) => boolean,
) {
  const closedEdge = getClosedEdge(position, scale, currentSize, innerSize);
  // 图片超出的长度
  const outOffset = (currentSize * scale - innerSize) / 2;

  let current = position;
  let transition = false;
  if (closedEdge === 'small') {
    current = 0;
    transition = true;
  } else if (closedEdge === 'before') {
    current = outOffset;
  } else if (closedEdge === 'after') {
    current = -outOffset;
  }
  const result = callback(current, transition);

  return !closedEdge && result;
}
