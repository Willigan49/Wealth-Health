import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./reducers/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: EmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
