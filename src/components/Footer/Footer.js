import React from "react";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer--container">
      <ul>
        <li>{"T&C"}</li>
        <li>{`©${new Date().getFullYear()}rememberemember`}</li>
      </ul>
    </footer>
  );
}

export default Footer;
