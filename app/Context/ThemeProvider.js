"use client";
import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

export function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);