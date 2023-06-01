import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <div>
      <div>
        <h1>HRnet</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Create Employee</Link>
          </li>
          <li>
            <Link to="/table">Employee Table</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
