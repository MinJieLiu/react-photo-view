import React from 'react';

export type onShowType = (key?: string) => void;

export type addItemType = (
  key?: string,
  src?: string,
  intro?: React.ReactNode,
) => void;

export type removeItemType = (key?: string) => void;

export interface PhotoContextType {
  onShow: onShowType,
  addItem: addItemType,
  removeItem: removeItemType,
}

export default React.createContext<PhotoContextType>({
  onShow() {},
  addItem() {},
  removeItem() {},
});
