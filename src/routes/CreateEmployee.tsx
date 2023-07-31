import "react-datepicker/dist/react-datepicker.css";
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
import DatePicker from "../components/DatePicker";
import { nameReg, dateReg, zipReg } from "../utils/regex";

import type { Dispatch } from "redux";
import { format } from "date-fns";

interface Employee {
  firstName: string | null;
  lastName: string | null;
  birthDate: string | null | undefined;
  startDate: string | null | undefined;
  street: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  department: string | null;
}

export default function CreateEmployee(): JSX.Element {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [displayModale, setDisplayModale] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch();

  function formatAndControlDate(date: Date | null): string {
    let formatDate;
    if (date) {
      formatDate = format(date, "dd/MM/yyyy");
      return controlInput(formatDate, dateReg);
    }
    return "empty";
  }

  function controlInput(value: string | null, regex: RegExp): string {
    if (!value) {
      return "empty";
    }
    if (value && !regex.test(value)) {
      return "error";
    }
    if (value && regex.test(value)) {
      return "valid";
    }
    return "empty";
  }

  function handleSubmit() {
    const employee: Employee = {
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
            <div className="w-full">
              <Input
                type="text"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
                errorStatus={controlInput(firstName, nameReg)}
              />
            </div>
            <Input type="text" label="Last Name" onChange={(e) => setLastName(e.target.value)} errorStatus={controlInput(lastName, nameReg)} />
            <DatePicker
              onChange={(date: Date) => setBirthDate(date)}
              selectedDate={birthDate}
              label="Birth Date"
              errorStatus={formatAndControlDate(birthDate)}
            />
            <DatePicker
              onChange={(date: Date) => setStartDate(date)}
              selectedDate={startDate}
              label="Start Date"
              errorStatus={formatAndControlDate(startDate)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Adress</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <Input label="Street" type="text" onChange={(e) => setStreet(e.target.value)} errorStatus={controlInput(street, nameReg)} />
            <Input label="City" type="text" onChange={(e) => setCity(e.target.value)} errorStatus={controlInput(city, nameReg)} />

            <SelectComponent
              label="State"
              errorStatus={controlInput(state, nameReg)}
              name="State"
              options={unitedStates}
              onChange={(e: any) => setState(e.target.value)}
            />

            <Input label="ZIP Code" type="text" onChange={(e) => setZipCode(e.target.value)} errorStatus={controlInput(zipCode, zipReg)} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Department</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <SelectComponent
              label="department"
              errorStatus={controlInput(department, nameReg)}
              name="Departments"
              options={departments}
              onChange={(e: any) => setDepartment(e.target.value)}
            />
          </div>
        </div>
      </Stepper>
      <Modale show={displayModale} />
    </div>
  );
}
