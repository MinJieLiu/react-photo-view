import React from 'react';
import { dataType } from './types';

export type onShowType = (key?: string) => void;

export type addItemType = ({
  key,
  src,
  originRef,
  intro,
}: dataType) => void;

export type removeItemType = (key?: string) => void;

export interface PhotoContextType {
  onShow: onShowType;
  addItem: addItemType;
  removeItem: removeItemType;
}

export default React.createContext<PhotoContextType>({
  onShow() {},
  addItem() {},
  removeItem() {},
});
