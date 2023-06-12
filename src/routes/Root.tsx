import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

export default function Root(): JSX.Element {
  return (
    <>
      <div className="bg-principal">
        <div className="m-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-5 p-5 font-nunito">
          <div className="flex justify-between text-secondary">
            <div>
              <Link to="/">
                <h1 className="text-2xl font-black">HRnet</h1>
              </Link>
            </div>
            <div>
              <ul className="flex gap-10">
                <li>
                  <NavLink
                    to="/"
                    role="create"
                    className={({ isActive }) =>
                      isActive
                        ? "underline decoration-2 underline-offset-8"
                        : undefined
                    }
                  >
                    Create Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/table"
                    role="table"
                    className={({ isActive }) =>
                      isActive
                        ? "underline decoration-2 underline-offset-8"
                        : undefined
                    }
                  >
                    Employee Table
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
