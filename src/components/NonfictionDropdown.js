import { nonfiction } from "../util/nonfiction";
import { Link } from "react-router-dom";

const Nonfiction = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
      >
        Nonfiction
      </a>
      <ul className="dropdown-menu">
        {nonfiction.map((f) => (
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

export default Nonfiction;
