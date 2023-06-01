import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root(): JSX.Element {
  return (
    <>
      <div className=" h-screen w-screen bg-principal">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
