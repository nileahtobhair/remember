import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header--container">
      <div
        className="header-logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <span> Remember</span>
        <div> remember</div>
      </div>
    </header>
  );
}

export default Header;
