import ReactDatePicker from "react-datepicker";

type Props = {
  label: string;
  selectedDate: Date | null;
  onChange: any;
  errorStatus: string
};

export default function DatePicker({ label, selectedDate, onChange, errorStatus }: Props) {
  function defineInputStatus(errorStatus: string): string {
    switch (errorStatus) {
      case "empty":
        return "w-full rounded-xl border-2 border-primary p-2 placeholder-primary placeholder-opacity-70";
      case "error":
        return "w-full rounded-xl border-2 border-error p-2 placeholder-primary placeholder-opacity-70";
      case "valid":
        return "w-full rounded-xl border-2 border-success p-2 placeholder-primary placeholder-opacity-70";

      default:
        return "w-full rounded-xl border-2 border-primary p-2 placeholder-primary placeholder-opacity-70";
    }
  }
  return (
    <label className="w-full">
      {label}
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        placeholderText="25/07/2023"
        selected={selectedDate}
        onChange={onChange}
        className={defineInputStatus(errorStatus)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {errorStatus === "error" ? <p className="pl-3 text-xs text-error">Please enter a valid {label}</p> : null}
    </label>
  );
}
