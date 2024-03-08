import React from "react";
import styles from "./Input.module.css";

export default function Input({ label, id, state, setState, span = 4 }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [id]: value });
  }

  return (
    <div
      className={styles.input}
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <label>{label}</label>
      <input value={state[id]} onChange={handleChange} />
    </div>
  );
}
