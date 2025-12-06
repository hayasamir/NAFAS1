import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "../index.css";

export default function Navbar() {
  const navBar = [
    { id: 1, title: "من نحن", path: "/" },
    { id: 2, title: "التأهيل النفسي", path: "/Psychological" },
    { id: 3, title: "التأهيل الاجتماعي", path: "/social" },
    { id: 4, title: "التأهيل التعليمي", path: "/educational" },
  ];

  const MyNav = navBar.map((nav) => (
    <li className="nav-item" key={nav.id}>
      <Link className="nav-link" to={nav.path}>
        {nav.title}
      </Link>
    </li>
  ));

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand logo-text">
            نفس
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">{MyNav}</ul>
          </div>

          <div className="logo d-none d-md-block">
            <Link to="/">
              <img src="/images/logo.png" alt="شعار نفس" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
