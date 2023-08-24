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
import { nameReg, dateReg, zipReg, streetReg } from "../utils/regex";
import { format } from "date-fns";
import { type Department, type Employee, type States } from '../enum/types';

import type { Dispatch } from "redux";

export default function CreateEmployee(): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [step, setStape] = useState<Number>(1);
  const [displayModale, setDisplayModale] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch();

  function checkStep(stepNumber: Number): boolean {
    switch (stepNumber) {
      case 1:
        if (nameReg.test(firstName) && nameReg.test(lastName) && birthDate && startDate) {
          return false;
        }
        return true;
      case 2:
        if (streetReg.test(street) && zipReg.test(zipCode) && nameReg.test(city) && state.length > 0 && state !== unitedStates[0].name) {
          return false;
        }
        return true;
      case 3:
        if (department.length > 0 && department !== departments[0].name) {
          return false;
        }
        return true;

      default:
        return true;
    }
  }

  function formatAndControlDate(date: Date | null): string {
    let formatDate;
    if (date) {
      formatDate = format(date, "dd/MM/yyyy");
      return controlInput(formatDate, dateReg);
    }
    return "empty";
  }

  function controlSelect(options: Array<Department | States>, value: string): string {
    if (value.length > 0 && options[0].name !== value) {
      return "valid";
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
      birthDate: format(birthDate!, "dd/MM/yyyy"),
      startDate: format(startDate!, "dd/MM/yyyy"),
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
        onContinue={(step) => setStape(step)}
        onPrev={(step) => setStape(step)}
        continueBtn={<Button disabled={checkStep(step)} label="Next"></Button>}
        backBtn={<Button label="Previous"></Button>}
        submitBtn={<Button disabled={checkStep(step)} label="Validate"></Button>}
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
                value={firstName}
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
                errorStatus={controlInput(firstName, nameReg)}
              />
            </div>
            <Input
              type="text"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              errorStatus={controlInput(lastName, nameReg)}
            />
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
            <Input
              label="Street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              errorStatus={controlInput(street, streetReg)}
            />
            <Input label="City" type="text" value={city} onChange={(e) => setCity(e.target.value)} errorStatus={controlInput(city, nameReg)} />

            <SelectComponent
              label="State"
              errorStatus={controlSelect(unitedStates, state)}
              name="State"
              options={unitedStates}
              onChange={(e: any) => setState(e.target.value)}
            />

            <Input
              label="ZIP Code"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              errorStatus={controlInput(zipCode, zipReg)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Department</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <SelectComponent
              label="department"
              errorStatus={controlSelect(departments, department)}
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
