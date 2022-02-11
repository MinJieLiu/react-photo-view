import { useLayoutEffect, useRef } from 'react';
import useSetState from './useSetState';
import useDebounceCallback from './useDebounceCallback';
import { animationTime } from '../variables';

/**
 * 目标缩放延迟处理
 */
export default function useTargetScale(
  realWidth: number,
  realHeight: number,
  realScale: number,
  updateEasing: (transition: boolean) => void,
) {
  const execRef = useRef(false);

  const [{ leading, scale }, updateState] = useSetState({ leading: true, scale: realScale });

  const moveScale = useDebounceCallback(
    async (current: number) => {
      updateEasing(false);
      updateState({ leading: false, scale: current });
    },
    { wait: animationTime },
  );

  useLayoutEffect(() => {
    if (!execRef.current) {
      execRef.current = true;
      return;
    }
    updateEasing(true);
    updateState({ leading: true });

    moveScale(realScale);
  }, [realScale]);

  // 运动开始
  if (leading) {
    return [realWidth * scale, realHeight * scale, realScale / scale] as const;
  }

  // 运动结束
  return [realWidth * realScale, realHeight * realScale, 1] as const;
}
