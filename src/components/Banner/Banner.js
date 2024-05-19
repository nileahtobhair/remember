import React from "react";

import styles from "./banner.module.scss";

function Banner({ text }) {
  return <div className={styles.container}>{text}</div>;
}

export default Banner;
