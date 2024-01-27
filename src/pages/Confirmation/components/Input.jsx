import React from "react";
import styles from "./Input.module.css";

export default function Input({ label, state, setState }) {
  const handleChange = (index, value) => {
    const updatedCode = state.split("");
    updatedCode[index] = value;
    setState(updatedCode.join(""));
  };

  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.div}>
        <input maxLength="1" />
        <input maxLength="1" />
        <input maxLength="1" />
        <input maxLength="1" />
        <input maxLength="1" />
        <input maxLength="1" />
      </div>
    </div>
  );
}
