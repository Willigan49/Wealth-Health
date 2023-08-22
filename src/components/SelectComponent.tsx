import { Select } from "select-component-oc";
import { ChangeEventHandler } from "react";

type Props = {
  name: string;
  options: Array<Object>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  label: string;
  errorStatus: string;
};

export default function SelectComponent({ name, options, onChange, label, errorStatus }: Props) {
  const defaultStyle: React.CSSProperties = {
    padding: "0.7rem",
    width: "100%",
    borderRadius: "0.75rem",
    borderWidth: "2px",
    borderColor: "rgb(0 187 201)",
    backgroundColor: "white",
    color: "#000000",
  };
  function defineInputStatus(errorStatus: string): React.CSSProperties {
    switch (errorStatus) {
      case "empty":
        return {
          ...defaultStyle,
        };
      case "error":
        return {
          ...defaultStyle,
          borderColor: "#FF0000",
        };
      case "valid":
        return {
          ...defaultStyle,
          borderColor: "#46D92C",
        };

      default:
        return {
          ...defaultStyle,
        };
    }
  }

  return (
    <label className="w-full">
      {`${label}*`}
      <Select name={name} options={options} onChange={onChange} style={defineInputStatus(errorStatus)} />
      {errorStatus == "empty" ? <p className="pl-3 text-xs text-error">Please choose a {label}</p> : null}
    </label>
  );
}
