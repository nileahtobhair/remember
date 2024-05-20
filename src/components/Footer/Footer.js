import React from "react";

import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <ul>
        <li>
          <a
            href="https://getremember.niamhlawlor.com/"
            target="_blank"
            rel="noreferrer"
          >
            Join waitlist
          </a>
        </li>
        <li>{`©${new Date().getFullYear()}rememberemember`}</li>
      </ul>
    </footer>
  );
}

export default Footer;
