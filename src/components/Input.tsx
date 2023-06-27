export default function Input({
  placeholder,
  type,
  datalist,
  listName,
}: {
  placeholder: string;
  type?: string;
  datalist?: JSX.Element[];
  listName?: string;
}): JSX.Element {
  if (datalist) {
    return (
      <div className="w-full">
        <input className="w-full rounded-xl border-2 border-primary p-2" list={listName} placeholder={placeholder} type={type} />
        <datalist id={listName}>{datalist}</datalist>
        {/* <p className="pl-3 text-xs text-error">it's incorrect</p> */}
      </div>
    );
  }
  return (
    <div className="w-full">
      <input className="w-full rounded-xl border-2 border-primary p-2" placeholder={placeholder} type={type} />
      {/* <p className="pl-3 text-xs text-error">it's incorrect</p> */}
    </div>
  );
}
