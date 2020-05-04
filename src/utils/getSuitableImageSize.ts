/**
 * 获取图片合适的大小
 */
export default function getSuitableImageSize(
  naturalWidth: number,
  naturalHeight: number,
): {
  width: number;
  height: number;
  x: number;
  y: number;
  scale: number;
} {
  let width;
  let height;
  let y = 0;
  const { innerWidth, innerHeight } = window;
  const autoWidth = (naturalWidth / naturalHeight) * innerHeight;
  const autoHeight = (naturalHeight / naturalWidth) * innerWidth;

  if (naturalWidth < innerWidth && naturalHeight < innerHeight) {
    width = naturalWidth;
    height = naturalHeight;
  } else if (naturalWidth < innerWidth && naturalHeight >= innerHeight) {
    width = autoWidth;
    height = innerHeight;
  } else if (naturalWidth >= innerWidth && naturalHeight < innerHeight) {
    width = innerWidth;
    height = autoHeight;
  } else if (naturalWidth / naturalHeight > innerWidth / innerHeight) {
    width = innerWidth;
    height = autoHeight;
  }
  // 长图模式
  else if (naturalHeight / naturalWidth > 3) {
    width = innerWidth;
    height = autoHeight;
    // 默认定位到顶部区域
    y = (height - innerHeight) / 2;
  } else {
    width = autoWidth;
    height = innerHeight;
  }
  return {
    width: Math.floor(width),
    height: Math.floor(height),
    x: 0,
    y,
    scale: 1,
  };
}
