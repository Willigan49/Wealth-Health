import { MouseEventHandler } from "react";

export default function Button({
  label,
  handleClick,
  disabled,
}: {
  label: string;
  handleClick?: MouseEventHandler;
  disabled?: boolean;
}): JSX.Element {
  return (
    <>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`${disabled ? "bg-desactivate" : "bg-primary"} h-10 min-w-[100px] rounded-lg px-4 text-secondary`}
      >
        {label}
      </button>
    </>
  );
}
