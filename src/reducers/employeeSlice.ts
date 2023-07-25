import { createSlice } from "@reduxjs/toolkit";

interface Employee {
  firstName: string;
  lastName: string;
  birthDate: Date;
  startDate: Date;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

export const employeeSlice = createSlice({
  name: "employees",
  initialState: [] as Employee[],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
