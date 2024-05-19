import React from "react";

import styles from "./button.module.scss";

function Button({ text, type, onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={`${styles.default} ${styles[type]}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
