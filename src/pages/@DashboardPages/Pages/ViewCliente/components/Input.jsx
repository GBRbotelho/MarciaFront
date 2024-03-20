import React from "react";
import styles from "./Input.module.css";

export default function Input({
  span = 1,
  label,
  state,
  setState,
  id,
  type = "text",
}) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div
      className={styles.input}
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <label>{label}</label>
      <input
        type={type}
        id={id}
        value={state[id]}
        onChange={handleChange}
        // onBlur={handleChange}
        autoComplete="off"
      />
    </div>
  );
}
