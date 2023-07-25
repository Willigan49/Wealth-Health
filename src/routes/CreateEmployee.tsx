import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Stepper from "awesome-react-stepper";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import unitedStates from "../utils/states.json";
import departments from "../utils/departments.json";
import Modale from "../components/Modale";
import SelectComponent from "../components/SelectComponent";
import { addEmployee } from "../reducers/employeeSlice";

import type { Dispatch } from "redux";

export default function CreateEmployee(): JSX.Element {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<Date| null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState<string | null>(null);
  const [department, setDepartment] = useState<Number | null>(null);
  const [displayModale, setDisplayModale] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch();

  function handleSubmit() {
    const employee = {
      firstName,
      lastName,
      birthDate: startDate?.toISOString(),
      startDate: startDate?.toISOString(),
      street,
      city,
      state,
      zipCode,
      department,
    };
    console.log(employee.birthDate);
    console.log(typeof employee.birthDate);
    dispatch(addEmployee(employee));
  }

  return (
    <div className="w-full max-w-[480px] rounded-3xl bg-secondary p-10">
      <h1 className="text-center text-xl">Create Employee</h1>
      <Stepper
        strokeColor="#46D92C"
        fillStroke="#46D92C"
        activeColor="#46D92C"
        barWidth="150px"
        btnPos="center"
        continueBtn={<Button label="Next"></Button>}
        backBtn={<Button label="Previous"></Button>}
        submitBtn={<Button label="Validate"></Button>}
        onSubmit={() => {
          handleSubmit();
          setDisplayModale(true);
        }}
      >
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Informations</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <Input placeholder="First Name" type="text" onChange={(e) => setFirstName(e.target.value)} />
            <Input placeholder="Last Name" type="text" onChange={(e) => setLastName(e.target.value)} />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              placeholderText="Date of Birth"
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              className="w-full rounded-xl border-2 border-primary p-2"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              placeholderText="Start Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full rounded-xl border-2 border-primary p-2"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Adress</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <Input placeholder="Street" type="text" onChange={(e) => setStreet(e.target.value)} />
            <Input placeholder="City" type="text" onChange={(e) => setCity(e.target.value)} />
            <SelectComponent name="State" options={unitedStates} onChange={(e: any) => setState(e.target.value)} />
            <Input placeholder="ZIP Code" type="number" onChange={(e) => setZipCode(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Department</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <SelectComponent name="Departments" options={departments} onChange={(e: any) => setDepartment(e.target.value)} />
          </div>
        </div>
      </Stepper>
      <Modale show={displayModale} />
    </div>
  );
}
