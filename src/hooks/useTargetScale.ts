import { useLayoutEffect, useRef, useState } from 'react';
import useSetState from './useSetState';
import useDebounceCallback from './useDebounceCallback';

/**
 * 目标缩放延迟处理
 */
export default function useTargetScale(realWidth: number, realHeight: number, realScale: number) {
  const execRef = useRef(false);

  const [{ leading, scale }, updateState] = useSetState({ leading: true, scale: realScale });
  const [disableTransition, updateDisableTransition] = useState(false);

  const moveScale = useDebounceCallback(
    async (current: number) => {
      updateDisableTransition(true);
      updateState({ leading: false, scale: current });
      // 延迟更新 style
      // requestIdleCallback
      setTimeout(() => updateDisableTransition(false), 16);
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
    return [realWidth * scale, realHeight * scale, realScale / scale, disableTransition] as const;
  }

  // 运动结束
  return [realWidth * realScale, realHeight * realScale, 1, disableTransition] as const;
}
