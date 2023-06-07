import React from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    path: "/",
    link: "Home",
  },
  {
    path: "/products",
    link: "Products",
  },
  {
    path: "/blogs",
    link: "Blogs",
  },
  {
    path: "/about",
    link: "About",
  },
];
const Header = () => {
  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Playground
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {Links.map((link) => (
                <li key={link.link} className="nav-item">
                  <Link className="nav-link" aria-current="page" to={link.path}>
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
