import { useLayoutEffect, useRef } from 'react';
import useSetState from './useSetState';
import useDebounceCallback from './useDebounceCallback';

/**
 * 目标缩放延迟处理
 */
export default function useTargetScale(
  realWidth: number,
  realHeight: number,
  realScale: number,
  updateShouldTransition: (transition: boolean) => void,
) {
  const execRef = useRef(false);

  const [{ leading, scale }, updateState] = useSetState({ leading: true, scale: realScale });

  const moveScale = useDebounceCallback(
    async (current: number) => {
      updateShouldTransition(false);
      updateState({ leading: false, scale: current });
    },
    { wait: 400 },
  );

  useLayoutEffect(() => {
    if (!execRef.current) {
      execRef.current = true;
      return;
    }
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
