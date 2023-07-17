import { Select } from "select-component-oc";
import { ChangeEventHandler } from "react";

type Props = {
  name: string;
  options: Array<Object>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function SelectComponent({ name, options, onChange }: Props) {
  return (
    <Select
      name={name}
      options={options}
      onChange={onChange}
      style={{
        padding: "0.7rem",
        width: "100%",
        borderRadius: "0.75rem",
        borderWidth: "2px",
        borderColor: "rgb(0 187 201)",
        backgroundColor: "white",
        color: "rgb(0 187 201)",
      }}
    />
  );
}
