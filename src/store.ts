import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./reducers/employeeSlice";

export default configureStore({
  reducer: {
    employees: EmployeeReducer,
  },
});
