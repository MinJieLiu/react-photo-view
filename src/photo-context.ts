import React from 'react';

export type onShowType = (dataKey?: string) => void;

export type addItemType = (dataKey?: string, src?: string) => void;

export type removeItemType = (dataKey?: string) => void;

export default React.createContext({
  onShow() {},
  addItem() {},
  removeItem() {},
});
