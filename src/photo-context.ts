import React from 'react';

export type onShowType = (key?: string) => void;

export type addItemType = (
  key?: string,
  src?: string,
  intro?: React.ReactNode,
) => void;

export type removeItemType = (key?: string) => void;

export default React.createContext({
  onShow() {},
  addItem() {},
  removeItem() {},
});
