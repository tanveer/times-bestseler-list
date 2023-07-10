import { Link } from "react-router-dom";
import { monthlyList } from "../util/monthlyList";

const MonthlyList = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
      >
        Monthly List
      </a>
      <ul className="dropdown-menu">
        {monthlyList.map((f) => (
          <li key={f.list_name}>
            <Link className="dropdown-item" to={`/${f.list_name_encoded}`}>
              {f.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MonthlyList;
