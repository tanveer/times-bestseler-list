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
            <a className="dropdown-item" href="#">
              {f.display_name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MonthlyList;
