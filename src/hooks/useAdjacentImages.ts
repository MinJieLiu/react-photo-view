import { useMemo } from 'react';
import type { DataType } from '../types';

/**
 * 截取相邻三张图片
 */
export default function useAdjacentImages(images: DataType[], index: number, loop: boolean) {
  return useMemo(() => {
    if (loop) {
      const imageLength = images.length;
      const connected = images.concat(images).concat(images);
      return connected.slice(imageLength + index - 1, imageLength + index + 2);
    }
    return images.slice(Math.max(index - 1, 0), Math.min(index + 2, images.length + 1));
  }, [images, index, loop]);
}
