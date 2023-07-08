import { childrens } from "../util/childrens";

const Childrens = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
      >
        Children's
      </a>
      <ul className="dropdown-menu">
        {childrens.map((f) => (
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

export default Childrens;
