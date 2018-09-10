import React from 'react';

export default React.createContext({
  onShow(dataKey) {},
  addItem(dataKey, src) {},
  removeItem(dataKey) {},
});
