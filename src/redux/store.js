import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slice/appSlice";
import { basicSlice } from "./slice/basicSlice";
import { advancedSlice } from "./slice/advancedSlice";

export default configureStore({
  reducer: {
    app: appSlice.reducer,
    basic: basicSlice.reducer,
    advanced: advancedSlice.reducer,
  },
});
