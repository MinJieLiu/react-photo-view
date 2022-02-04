import { useReducer } from 'react';

export default function useSetState<S extends Record<string, any>>(initialState: S) {
  return useReducer((state: S, action: Partial<S>) => ({ ...state, ...action }), initialState);
}
