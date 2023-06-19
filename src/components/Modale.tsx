export default function Modale({ show }: { show: boolean }): JSX.Element {
  const showModale = show ? "absolute bg-black bg-opacity-60 w-screen h-screen z-10 text-secondary top-0 left-0" : "hidden";
  return (
    <div className={showModale}>
      <div className="modale">
        <p>icone</p>
        <p>Success !</p>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
