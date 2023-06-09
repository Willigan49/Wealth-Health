import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Stepper from "awesome-react-stepper";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import unitedStates from "../utils/states.json";
import departments from "../utils/departments.json";
import Modale from "../components/Modale";

export default function CreateEmployee(): JSX.Element {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [displayModale, setDisplayModale] = useState<boolean>(false);
  const unitedStatesList = unitedStates.map((state) => <option value={state.name} key={state.abbreviation}></option>);
  const departmentList = departments.map((department) => <option value={department.name} key={department.id}></option>);

  return (
    <div className="w-full max-w-[480px] rounded-3xl bg-secondary p-10">
      <h1 className="text-center text-xl" >Create Employee</h1>
      <Stepper
        strokeColor="#46D92C"
        fillStroke="#46D92C"
        activeColor="#46D92C"
        barWidth="150px"
        btnPos="center"
        continueBtn={<Button label="Next"></Button>}
        backBtn={<Button label="Previous"></Button>}
        submitBtn={<Button label="Validate"></Button>}
        onSubmit={() => setDisplayModale(true)}
      >
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Informations</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              placeholderText="Date of Birth"
              selected={birthDate}
              onChange={(date: Date) => setBirthDate(date)}
              className="w-full rounded-xl border-2 border-primary p-2"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              placeholderText="Start Date"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
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
            <Input placeholder="Street" type="text" />
            <Input placeholder="City" type="text" />
            <Input placeholder="State" listName="state-list" datalist={unitedStatesList} />
            <Input placeholder="ZIP Code" type="number" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Department</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <Input placeholder="Department" type="text" listName="department-list" datalist={departmentList} />
          </div>
        </div>
      </Stepper>
      <Modale show={displayModale} />
    </div>
  );
}
