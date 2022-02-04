import React from 'react';
import type { DataType } from './types';

export type UpdateItemType = ({ key, src, originRef, intro }: DataType) => void;

export interface PhotoContextType {
  onShow: (key: number) => void;
  updateItem: UpdateItemType;
  removeItem: (key: number) => void;
  uniqueId: () => number;
}

export default React.createContext<PhotoContextType>(undefined as unknown as PhotoContextType);
