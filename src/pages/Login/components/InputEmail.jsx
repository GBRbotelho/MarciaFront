import React from "react";
import styles from "./InputEmail.module.css";

export default function InputEmail({ label, id, state, setState }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [id]: value });
  }

  return (
    <div className={styles.input}>
      <label>
        <i class="ri-mail-fill"></i>
        <b>Email</b>
      </label>
      <input value={state[id]} onChange={handleChange} />
    </div>
  );
}
