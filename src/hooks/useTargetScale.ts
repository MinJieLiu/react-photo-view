import { useRef } from 'react';
import useSetState from './useSetState';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
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

  const [{ top, scale }, updateState] = useSetState({ top: true, scale: realScale });

  const moveScale = useDebounceCallback(
    async (current: number) => {
      updateEasing(false);
      updateState({ top: false, scale: current });
    },
    { wait: animationTime },
  );

  useIsomorphicLayoutEffect(() => {
    if (!execRef.current) {
      execRef.current = true;
      return;
    }
    updateEasing(true);
    updateState({ top: true });

    moveScale(realScale);
  }, [realScale]);

  // 运动开始
  if (top) {
    return [realWidth * scale, realHeight * scale, realScale / scale] as const;
  }

  // 运动结束
  return [realWidth * realScale, realHeight * realScale, 1] as const;
}
