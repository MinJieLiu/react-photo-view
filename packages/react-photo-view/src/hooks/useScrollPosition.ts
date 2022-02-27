import { computePositionEdge } from '../utils/edgeHandle';
import getRotateSize from '../utils/getRotateSize';
import { defaultSpeed, maxTouchTime } from '../variables';
import useMethods from './useMethods';

/**
 * 物理滚动到具体位置
 */
export default function useScrollPosition<C extends (spatial: number) => boolean>(
  callbackX: C,
  callbackY: C,
  callbackS: C,
) {
  const callback = useMethods({
    X(spatial: number) {
      return callbackX(spatial);
    },
    Y(spatial: number) {
      return callbackY(spatial);
    },
    S(spatial: number) {
      return callbackS(spatial);
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
    // 缩小的情况下不执行滚动逻辑，恢复居中位置
    if (scale < 1) {
      easeOutMove(x, 0, callback.X);
      easeOutMove(y, 0, callback.Y);
      easeOutMove(scale, 1, callback.S);
      return;
    }

    const moveTime = Date.now() - touchedTime;
    const [currentWidth, currentHeight] = getRotateSize(rotate, width, height);

    // 时间过长
    if (moveTime >= maxTouchTime) {
      const [isEdgeX, nextX] = computePositionEdge(x, scale, currentWidth, innerWidth);
      if (isEdgeX) {
        easeOutMove(x, nextX, callback.X);
      }
      const [isEdgeY, nextY] = computePositionEdge(y, scale, currentHeight, innerHeight);
      if (isEdgeY) {
        easeOutMove(y, nextY, callback.Y);
      }
      return;
    }

    // 初始速度
    const speedX = (x - lastX) / moveTime;
    const speedY = (y - lastY) / moveTime;
    const speedT = Math.sqrt(speedX ** 2 + speedY ** 2);
    // 是否接触到边缘
    let edgeX = false;
    let edgeY = false;

    scrollMove(speedT, (spatial) => {
      const nextX = x + spatial * (speedX / speedT);
      const nextY = y + spatial * (speedY / speedT);

      const [isEdgeX, currentX] = computePositionEdge(nextX, scale, currentWidth, innerWidth);
      const [isEdgeY, currentY] = computePositionEdge(nextY, scale, currentHeight, innerHeight);

      if (isEdgeX && !edgeX) {
        edgeX = true;
        easeOutMove(nextX, currentX, callback.X);
      }

      if (isEdgeY && !edgeY) {
        edgeY = true;
        easeOutMove(nextY, currentY, callback.Y);
      }
      // 同时接触边缘的情况下停止滚动
      if (edgeX && edgeY) {
        return false;
      }

      const resultX = edgeX || callback.X(currentX);
      const resultY = edgeY || callback.Y(currentY);
      return resultX && resultY;
    });
  };
}

/**
 * 通过速度滚动到停止
 */
function scrollMove(initialSpeed: number, callback: (spatial: number) => boolean) {
  // 加速度
  const acceleration = -0.002;
  // 阻力
  const resistance = 0.0002;

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
      caf();
      return;
    }

    if (callback(s)) {
      raf();
      return;
    }
    caf();
  };
  raf();

  function raf() {
    frameId = requestAnimationFrame(calcMove);
  }
  function caf() {
    cancelAnimationFrame(frameId);
  }
}

/**
 * 缓动回调
 */
function easeOutMove(start: number, end: number, callback: (spatial: number) => boolean) {
  const distance = end - start;
  if (distance === 0) {
    return;
  }

  const startTime = Date.now();
  let frameId = 0;

  const calcMove = () => {
    const time = Math.min(1, (Date.now() - startTime) / defaultSpeed);
    const result = callback(start + easeOutQuart(time) * distance);

    if (result && time < 1) {
      raf();
      return;
    }
    caf();
  };
  raf();

  function raf() {
    frameId = requestAnimationFrame(calcMove);
  }
  function caf() {
    cancelAnimationFrame(frameId);
  }
}

/**
 * 缓动函数
 */
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}
