import React from 'react';
import { dataType } from './types';

export type onShowType = (key?: string) => void;

export type updateItemType = ({ key, src, originRef, intro }: dataType) => void;

export type removeItemType = (key?: string) => void;

export interface PhotoContextType {
  onShow: onShowType;
  updateItem: updateItemType;
  removeItem: removeItemType;
}

export default React.createContext<PhotoContextType>({
  onShow() {},
  updateItem() {},
  removeItem() {},
});
