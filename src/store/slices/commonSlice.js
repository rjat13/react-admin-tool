import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    sidebarShow: true,
    sidebarUnfoldable: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const { toggleSidebar } = commonSlice.actions;
