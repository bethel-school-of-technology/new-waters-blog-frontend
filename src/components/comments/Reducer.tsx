const itemsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'POPULATE_ITEMS':
      return action.items;
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter((item: any) => item !== action.itemToBeDeleted);
    default:
      return state;
  }
};

export default itemsReducer;
