import { searchData } from "../slice/SearchSlice";
import authSlice from "../slice/UserAuthSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: authSlice,
  search:searchData
});

export const store = configureStore({
  reducer: rootReducer,
});
