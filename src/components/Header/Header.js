import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Basic Todo App</h1>
      <nav className="header">
        <NavLink
          to="todoform"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <button>Add Todo</button>
        </NavLink>
        <NavLink
          to="todotable"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <button>Todo Table</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
