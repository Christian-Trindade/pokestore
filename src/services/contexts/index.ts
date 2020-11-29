import { createContext } from "react";

interface contextParams {
  [key: string]: any;
}

let contextVal: contextParams = {};
const StoreContext = createContext(contextVal);

export { StoreContext };
