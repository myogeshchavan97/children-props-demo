import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Children Props Demo</h1>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/list" className="link">
        Movies List
      </Link>
    </div>
  );
};

export default Header;
