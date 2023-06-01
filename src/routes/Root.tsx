import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root(): JSX.Element {
  return (
    <>
      <div className=" h-screen w-screen bg-principal font-nunito">
        <div className="w-[1440px] m-auto pt-5">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
