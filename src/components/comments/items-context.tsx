import React from 'react';

const ItemsContext = React.createContext({
  items: [],
  itemsDispatch: () => {},
});

export default ItemsContext;
