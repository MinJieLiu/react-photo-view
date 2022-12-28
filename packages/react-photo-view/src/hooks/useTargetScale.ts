import { useRef } from 'react'
import useSetState from './useSetState'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import useDebounceCallback from './useDebounceCallback'

/**
 * 目标缩放延迟处理
 */
export default function useTargetScale(
  isDragMode: boolean,
  realWidth: number,
  realHeight: number,
  naturalWidth: number,
  naturalHeight: number,
  realScale: number,
  speed: number,
  updateEasing: (pause: boolean) => void,
) {
  const execRef = useRef(false)

  const [{ lead, scale }, updateState] = useSetState({ lead: true, scale: realScale })

  const moveScale = useDebounceCallback(
    async (current: number) => {
      updateEasing(true)
      updateState({ lead: false, scale: current })
    },
    { wait: speed },
  )

  useIsomorphicLayoutEffect(() => {
    if (!execRef.current || isDragMode) {
      execRef.current = true
      return
    }
    updateEasing(false)
    updateState({ lead: true })
    moveScale(realScale)
  }, [realScale, isDragMode])

  if (isDragMode) {
    return [naturalWidth * realScale, naturalHeight * realScale, realScale] as const
  }

  if (lead) {
    // 运动开始
    return [realWidth * scale, realHeight * scale, realScale / scale] as const
  }
  // 运动结束
  return [realWidth * realScale, realHeight * realScale, 1] as const
}
