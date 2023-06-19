export default function Input({ placeholder, type }: { placeholder: string; type: string }): JSX.Element {
  return (
    <div className="w-full">
      <input
        className="w-full rounded-xl border-2 border-primary p-2"
        type={type}
        placeholder={placeholder}
      />
      {/* <p className="pl-3 text-xs text-error">it's incorrect</p> */}
    </div>
  );
}
