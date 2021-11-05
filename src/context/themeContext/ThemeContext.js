import { createContext, useEffect, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE = {
  theme: "dark",
};

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
