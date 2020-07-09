/**
 * 获取图片合适的大小
 */
export default function getSuitableImageSize(
  naturalWidth: number,
  naturalHeight: number,
  rotate: number,
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
  let { innerWidth, innerHeight } = window;
  const isVertical = rotate % 180 !== 0;

  // 若图片不是水平则调换宽高
  if (isVertical) {
    [innerHeight, innerWidth] = [innerWidth, innerHeight];
  }

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
  else if (naturalHeight / naturalWidth >= 3 && !isVertical) {
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
