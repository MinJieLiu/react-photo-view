import debounce from 'lodash.debounce';

/**
 * throttle
 * @param func
 * @param wait
 */
export default function throttle(func, wait: number) {
  return debounce(func, wait, {
    leading: true,
    maxWait: wait,
    trailing: true
  });
}
