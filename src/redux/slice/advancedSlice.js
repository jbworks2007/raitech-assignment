import { createSlice } from "@reduxjs/toolkit";

export const advancedSlice = createSlice({
  name: "advanced",
  initialState: {
    neg_marks: 0,
    assign_easy: 0,
    assign_medium: 0,
    assign_hard: 0,
    min_pass: 0,
    registration: false,
    capture: false,
    captureInterval: 0,
  },
  reducers: {
    setNegMarks: (state, action) => {
      state.neg_marks = action.payload;
    },
    setAssignEasy: (state, action) => {
      state.assign_easy = action.payload;
    },
    setAssignMedium: (state, action) => {
      state.assign_medium = action.payload;
    },
    setAssignHard: (state, action) => {
      state.assign_hard = action.payload;
    },
    setMinPass: (state, action) => {
      state.min_pass = action.payload;
    },
    setRegistration: (state, action) => {
      state.registration = action.payload;
    },
    setCapture: (state, action) => {
      state.capture = action.payload;
    },
    setCaptureInterval: (state, action) => {
      state.captureInterval = action.payload;
    },
  },
});

export const {
  setNegMarks,
  setAssignEasy,
  setAssignMedium,
  setAssignHard,
  setMinPass,
  setRegistration,
  setCapture,
  setCaptureInterval,
} = advancedSlice.actions;
export default advancedSlice.reducer;
