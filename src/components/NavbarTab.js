import { Link } from "react-router-dom";

export function NavbarTab({ children, href, id }) {
  return (
    <Link to={href} id={id} className="nav-bar__tab-container">
      {children}
    </Link>
  );
}
