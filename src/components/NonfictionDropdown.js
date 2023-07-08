import { nonfiction } from "../util/nonfiction";

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
            <a className="dropdown-item" href="#">
              {f.display_name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Nonfiction;
