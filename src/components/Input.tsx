import { ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
  type?: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean | undefined;
  errorStatus: string;
  value: string;
};

export default function Input({ placeholder, type, label, onChange, autoFocus, errorStatus, value }: Props): JSX.Element {
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
      {`${label}*`}
      <input value={value} className={defineInputStatus(errorStatus)} placeholder={placeholder} type={type} onChange={onChange} autoFocus={autoFocus} />
      {errorStatus === "error" ? <p className="pl-3 text-xs text-error">Please enter a valid {label}</p> : null}
    </label>
  );
}
