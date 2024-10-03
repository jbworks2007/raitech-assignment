import { createSlice } from "@reduxjs/toolkit";

export const basicSlice = createSlice({
  name: "basic",
  initialState: {
    examname: "",
    duration: 0,
    topic: "Python",
    easy: 0,
    medium: 0,
    hard: 0,
    qp: "Auto",
    table: false,
  },
  reducers: {
    setExamName: (state, action) => {
      state.examname = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setEasy: (state, action) => {
      state.easy = action.payload;
    },
    setMedium: (state, action) => {
      state.medium = action.payload;
    },
    setHard: (state, action) => {
      state.hard = action.payload;
    },
    setQP: (state, action) => {
      state.qp = action.payload;
    },
    setTable: (state, action) => {
      state.table = action.payload;
    },
  },
});

export const {
  setExamName,
  setDuration,
  setTopic,
  setEasy,
  setMedium,
  setHard,
  setQP,
  setTable,
} = basicSlice.actions;
export default basicSlice.reducer;
