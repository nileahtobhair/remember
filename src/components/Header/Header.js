import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../Banner";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Banner
        text={
          "You are currently using an MVP. Any data changes will not be saved!"
        }
      />
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
    </>
  );
}

export default Header;
