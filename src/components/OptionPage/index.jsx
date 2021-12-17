import React from "react";
import { Link, useLocation } from "wouter";
import "./OptionPage.css";

export default function OptionPage() {
  const [location, setLocation] = useLocation();

  return (
    <nav className="pages">
      <Link
        className={location === "/" ? "page-item active" : "page-item"}
        to="/"
      >
        All
      </Link>
      <Link
        className={location === "/favorites" ? "page-item active" : "page-item"}
        to="/favorites"
      >
        My faves
      </Link>
    </nav>
  );
}
