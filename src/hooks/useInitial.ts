import { useRef } from 'react';

export default function useInitial<T extends (...args: any) => any>(callback: T) {
  const { current } = useRef({ initial: false, fn: undefined as ReturnType<T> });
  if (!current.initial) {
    current.initial = true;
    current.fn = callback();
  }
  return current.fn;
}
