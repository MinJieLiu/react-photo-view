import { useMemo } from 'react'
import type { DataType } from '../types'

interface AdjacentDataType extends DataType {
  /**
   * 是否是克隆的
   */
  isCloned?: boolean
}

/**
 * 截取相邻三张图片
 */
export default function useAdjacentImages(
  images: DataType[],
  index: number,
  loop: boolean,
): AdjacentDataType[] {
  return useMemo(() => {
    const imageLength = images.length
    if (loop) {
      const connected = images.concat(images).concat(images)
      const currentImage = connected[imageLength + index]
      const sliceImages: AdjacentDataType[] = connected.slice(
        imageLength + index - 1,
        imageLength + index + 2,
      )

      const adjacentImages: AdjacentDataType[] = []

      for (let i = 0; i < sliceImages.length - 1; i++) {
        const image = sliceImages[i]
        if (i !== 1 && image.key === currentImage.key) {
          adjacentImages.push({ ...image, isCloned: true })
        } else {
          adjacentImages.push(image)
        }
      }
      return adjacentImages
    }
    return images.slice(Math.max(index - 1, 0), Math.min(index + 2, imageLength + 1))
  }, [images, index, loop])
}
