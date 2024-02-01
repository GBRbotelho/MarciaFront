import React from "react";
import styles from "./Input.module.css";

export default function Input() {
  return (
    <div className={styles.div}>
      <input type="text" className={styles.input} placeholder="Buscar" />
      <button className={styles.button}>
        <i className="ri-search-line"></i>
      </button>
    </div>
  );
}
