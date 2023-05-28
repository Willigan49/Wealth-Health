import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div className=" w-screen h-screen bg-principal">
        <Outlet />
      </div>
    </>
  );
}
