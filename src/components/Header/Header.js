import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../Banner";

import styles from "./header.module.scss";

function Header() {
  const navigate = useNavigate();

  const text =
    "You are currently using an MVP. Any data changes will not be saved!";

  return (
    <>
      <Banner text={text} />
      <header className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <span> Remember</span>
          <div> remember</div>
        </div>
      </header>
    </>
  );
}

export default Header;
