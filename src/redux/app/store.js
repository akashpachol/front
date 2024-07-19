import SearchSlice from "../slice/SearchSlice";
import authSlice from "../slice/UserAuthSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: authSlice,
  search:SearchSlice
});

export const store = configureStore({
  reducer: rootReducer,
});
