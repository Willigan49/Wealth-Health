import Stepper from "awesome-react-stepper";
import Button from "../components/button";
import Input from "../components/Input";

export default function CreateEmployee(): JSX.Element {
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
      >
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <p className="text-center">Informations</p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Date of Birth" />
            <Input placeholder="Start Date" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <h1 className="text-center text-xl">Create Employee</h1>
            <p className="text-center">Adress</p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <Input placeholder="Street" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Input placeholder="ZIP Code" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <div>
            <h1 className="text-center text-xl">Create Employee</h1>
            <p className="text-center">Department</p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <Input placeholder="Department" />
          </div>
        </div>
      </Stepper>
    </div>
  );
}
