import { configureStore } from "@reduxjs/toolkit";
import toggleThemeReducer from "../reducers/themeSlice";

export const store = configureStore({
  reducer: {
    toggleTheme: toggleThemeReducer,
  },
});
