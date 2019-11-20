import { OriginRectType } from '../types';

export default function getAnimateOrigin(
  originRect: OriginRectType,
  width: number,
  height: number,
): string | undefined {
  if (originRect) {
    const { innerWidth, innerHeight } = window;

    const xOrigin = (width - innerWidth) / 2 + originRect.clientX;
    const yOrigin = (height - innerHeight) / 2 + originRect.clientY;

    return `${xOrigin}px ${yOrigin}px`;
  }

  return undefined;
}
