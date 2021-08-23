import * as React from "react";
interface ContextState {
  items: any | null;
  Dispatch: any | null;
}

const Context = React.createContext({
  items: [],
  Dispatch: () => {},
} as unknown as ContextState);

export default Context;

