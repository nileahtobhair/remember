import React from "react";

import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <ul>
        <li>{"T&C"}</li>
        <li>{`©${new Date().getFullYear()}rememberemember`}</li>
      </ul>
    </footer>
  );
}

export default Footer;
