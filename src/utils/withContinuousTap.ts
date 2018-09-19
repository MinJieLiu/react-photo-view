import debounce from 'lodash.debounce';

/**
 * 单击和双击事件处理
 * @param singleTap
 * @param doubleTap
 * @return invokeTap
 */
export default function withContinuousTap(
  singleTap: Function,
  doubleTap: Function,
) {
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
