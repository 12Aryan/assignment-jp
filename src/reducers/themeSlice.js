import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleThemeGlobal(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { toggleThemeGlobal } = themeSlice.actions;
export default themeSlice.reducer;
