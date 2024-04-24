import React from "react";

import styles from "./button.module.css";

function Button({ text, type, onClick }) {
  return (
    <div className="button--container">
      <button onClick={onClick} className={`${styles.default} ${styles[type]}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
