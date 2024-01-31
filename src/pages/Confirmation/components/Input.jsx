import React, { useEffect } from "react";
import styles from "./Input.module.css";

export default function Input({ label, state, setState }) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedCode = [...state];
    updatedCode[id] = value;
    setState(updatedCode);
    if (value && id < 5) {
      const nextInput = document.getElementById(`${parseInt(id, 10) + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.div}>
        <input
          id={`0`}
          maxLength="1"
          value={state[0] || ""}
          onChange={handleChange}
        />
        <input
          id={`1`}
          maxLength="1"
          value={state[1] || ""}
          onChange={handleChange}
        />
        <input
          id={`2`}
          maxLength="1"
          value={state[2] || ""}
          onChange={handleChange}
        />
        <input
          id={`3`}
          maxLength="1"
          value={state[3] || ""}
          onChange={handleChange}
        />
        <input
          id={`4`}
          maxLength="1"
          value={state[4] || ""}
          onChange={handleChange}
        />
        <input
          id={`5`}
          maxLength="1"
          value={state[5] || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
