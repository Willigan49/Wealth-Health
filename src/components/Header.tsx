import { NavLink, Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
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
  );
}
