import React from "react";
import styles from "./Column.module.css";

export default function Column({ background = "#f5eaf8" }) {
  return (
    <div style={{ backgroundColor: background }} className={styles.column}>
      Coluna
    </div>
  );
}
