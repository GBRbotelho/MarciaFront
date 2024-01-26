import React from "react";
import styles from "./InputPassword.module.css";

export default function InputPassword({ id, state, setState }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [id]: value });
  }

  return (
    <div className={styles.input}>
      <label>
        <i class="ri-lock-2-fill"></i>
        <b>Senha</b>
      </label>
      <input value={state[id]} onChange={handleChange} />
    </div>
  );
}
