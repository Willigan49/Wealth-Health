import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Modale({ show }: { show: boolean }): JSX.Element {
  const showModale = show
    ? "absolute bg-black bg-opacity-60 w-screen h-screen z-10 text-secondary top-0 left-0 flex justify-center items-center"
    : "hidden";
  const navigate = useNavigate();

  return (
    <div className={showModale}>
      <div className="flex w-[450px] flex-col items-center gap-10 rounded-3xl bg-secondary p-10">
        <FontAwesomeIcon icon={faCircleCheck} size="6x" className="text-success" beat />
        <p className="text-black">Employee create with success !</p>
        <div className="flex gap-5">
          <Button label="Go to table" handleClick={() => [navigate("/table")]} />
        </div>
      </div>
    </div>
  );
}
