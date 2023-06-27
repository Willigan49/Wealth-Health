import { MouseEventHandler } from "react";

export default function Button({ label, handleClick }: { label: string, handleClick?: MouseEventHandler}): JSX.Element {
  return (
    <>
      <button onClick={handleClick} className="bg-primary px-4 text-secondary min-w-[100px] h-10 rounded-lg">{label}</button>
    </>
  );
}
