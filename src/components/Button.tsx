export default function Button({ label }: { label: string}): JSX.Element {
  return (
    <>
      <button className="bg-primary p-2 text-secondary w-24 h-10 rounded-lg">{label}</button>
    </>
  );
}
