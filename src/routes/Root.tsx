import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

export default function Root(): JSX.Element {
  return (
    <>
      <div className="maw-w-max h-screen bg-principal font-nunito">
        <div className="m-auto w-full max-w-[1440px] p-5">
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
          <Outlet />
        </div>
      </div>
    </>
  );
}
