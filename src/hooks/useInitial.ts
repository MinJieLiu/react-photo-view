import { useRef } from 'react';

export default function useInitial<T extends (...args: any) => any>(callback: T) {
  const { current } = useRef({ initial: false, storeValue: undefined as ReturnType<T> });
  if (!current.initial) {
    current.initial = true;
    current.storeValue = callback();
  }
  return current.storeValue;
}
