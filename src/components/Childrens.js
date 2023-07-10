import { Link } from "react-router-dom";
import { childrens } from "../util/childrens";

const Childrens = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        Children's
      </a>
      <ul className="dropdown-menu">
        {childrens.map((f) => (
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

export default Childrens;
