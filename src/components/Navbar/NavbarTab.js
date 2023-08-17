import { Link } from "react-router-dom";

export function NavbarTab({ children, href, id, pathName }) {
  return (
    <Link
      to={href}
      id={id}
      className={`nav-bar__tab-container ${
        pathName === href ? "active-tab" : null
      }`}
    >
      {children}
    </Link>
  );
}
