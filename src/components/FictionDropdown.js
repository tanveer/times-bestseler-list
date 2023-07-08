import { fiction } from "../util/fiction";
const Fiction = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
      >
        Fiction
      </a>
      <ul className="dropdown-menu">
        {fiction.map((f) => (
          <li key={f.list_name}>
            <a className="dropdown-item">{f.display_name}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Fiction;
