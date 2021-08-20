import React from "react";
import { string } from "yup";

interface Action  {
  type: string;
  itemToBeDeleted: string
}

// const Context = React.createContext({
//   items: [],
//   itemsDispatch: (action: Action) => {}, //{ type: "REMOVE", itemToBeDeleted: item }
// });


const Context = React.createContext({
  items: [],
  itemsDispatch: () => {}, //{ type: "REMOVE", itemToBeDeleted: item }
});

export default Context;
