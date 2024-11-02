import { configureStore } from "@reduxjs/toolkit";

import orebiReducer from "./orebiSlice";
export const Store = configureStore({
  reducer: {
    orebiReducer: orebiReducer,
  },
});
