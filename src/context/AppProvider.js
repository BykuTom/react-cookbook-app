import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { getFromLocalStorage } from "../utils/utilities";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    myCookBooks: getFromLocalStorage("myCookBooks", []),
    cookbooks: getFromLocalStorage("cookbooks", []),
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
