import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    basic: true,
    advanced: false,
    instructions: false,
    showmodal: false,
  },
  reducers: {
    setBasic: (state, action) => {
      state.basic = action.payload;
    },
    setAdvanced: (state, action) => {
      state.advanced = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setShowModal: (state, action) => {
      state.showmodal = action.payload;
    },
  },
});

export const { setBasic, setAdvanced, setInstructions, setShowModal } =
  appSlice.actions;
export default appSlice.reducer;
