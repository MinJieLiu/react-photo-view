import debounce from 'lodash.debounce';

export type TapFuncType<T> = (...args: T[]) => void;

/**
 * 单击和双击事件处理
 * @param singleTap - 单击事件
 * @param doubleTap - 双击事件
 * @return invokeTap
 */
export default function withContinuousTap<T>(
  singleTap: TapFuncType<T>,
  doubleTap: TapFuncType<T>,
): TapFuncType<T> {
  // 当前连续点击次数
  let continuousClick = 0;

  const withDebounceTap = debounce((...args) => {
    continuousClick = 0;
    singleTap(...args);
  }, 300);

  return function invokeTap(...args) {
    continuousClick += 1;
    withDebounceTap(...args);
    // 双击
    if (continuousClick >= 2) {
      withDebounceTap.cancel();
      continuousClick = 0;
      doubleTap(...args);
    }
  };
}
