import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import metricsReducer from "../features/metricsSlice";
import filterReducer from "../features/filterSlice";
import pageReducer from "../features/pageSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    metrics: metricsReducer,
    filter: filterReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
