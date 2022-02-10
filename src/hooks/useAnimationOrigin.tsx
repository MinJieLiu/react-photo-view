import type React from 'react';
import { useEffect, useState } from 'react';
import type { OriginRectType } from '../types';

export default function useAnimationOrigin(
  visible: boolean | undefined,
  originRef?: React.MutableRefObject<HTMLElement | null>,
) {
  const [originRect, updateOriginRect] = useState<OriginRectType>();

  useEffect(() => {
    const element = originRef?.current;

    if (element && element.nodeType === 1) {
      // 获取触发时节点位置
      const { top, left, width, height } = element.getBoundingClientRect();
      updateOriginRect({
        clientX: left + width / 2,
        clientY: top + height / 2,
      });
    } else if (originRect && !element) {
      updateOriginRect(undefined);
    }
  }, [visible]);

  return originRect;
}
