import { ChangeEventHandler } from "react";

export default function Input({
  placeholder,
  type,
  onChange
}: {
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  return (
    <div className="w-full">
      <input className="w-full rounded-xl border-2 border-primary p-2" placeholder={placeholder} type={type} onChange={onChange} />
      {/* <p className="pl-3 text-xs text-error">it's incorrect</p> */}
    </div>
  );
}
