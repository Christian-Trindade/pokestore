import { createContext } from "react";

interface contextParams {
  [key: string]: any;
}

let contextVal: contextParams = {};
const StoreContext = createContext(contextVal);

let searchContextVal: string = "";
const SearchContext = createContext(searchContextVal);

export { StoreContext, SearchContext };
