import authSlice from "../slice/UserAuthSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
