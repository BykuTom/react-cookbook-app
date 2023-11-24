import { createContext, useContext, useReducer, useEffect } from "react";
import { appReducer } from "../reducer/appReducer";
import { getFromLocalStorage, getCookie, setCookie } from "../utils/utilities";
import { mockCookbooks } from "../assets/data/mockCookbookData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    myCookBooks: [],
    cookbooks: getFromLocalStorage("cookbooks", mockCookbooks),
    user: getCookie("user") || null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (state.user) {
      setCookie("user", JSON.stringify(state.user), 7);
    } else {
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }, [state.user]);

  useEffect(() => {
    if (state.user) {
      const myCookBooks = state.cookbooks.filter(
        (cookbooks) => cookbooks.author === state.user.id
      );
      dispatch({ type: "SET_MY_COOKBOOKS", payload: myCookBooks });
    } else {
      dispatch({ type: "SET_MY_COOKBOOKS" });
    }
  }, [state.user, state.cookbooks]);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
