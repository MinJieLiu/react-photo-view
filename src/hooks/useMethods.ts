import { useRef } from 'react';

/**
 * Hook of persistent methods
 */
export default function useMethods<T extends Record<string, (...args: any[]) => any>>(methods: T) {
  const { current } = useRef({
    methods,
    func: undefined as T | undefined,
  });
  current.methods = methods;

  if (!current.func) {
    const func = Object.create(null);
    Object.keys(methods).forEach((key) => {
      func[key] = (...args: unknown[]) => current.methods[key].call(current.methods, ...args);
    });
    current.func = func;
  }

  return current.func as T;
}
