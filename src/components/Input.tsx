export default function Input({ placeholder }: { placeholder: string }): JSX.Element {
  return (
    <div className="w-full">
      <input className="w-full rounded-xl border-2 border-primary p-2" type="text" placeholder={placeholder} />
      {/* <p className="pl-3 text-xs text-error">it's incorrect</p> */}
    </div>
  );
}
