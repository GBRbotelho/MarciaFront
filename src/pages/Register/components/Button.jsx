import React from "react";
import styles from "./Button.module.css";
import { usePost } from "../../../hooks/useRequest";

export default function Button({ text, state }) {
  const handleSubmit = async () => {
    const response = await usePost("api/users", state);
    console.log(response);
  };

  return (
    <button className={styles.button} onClick={handleSubmit}>
      {text}
    </button>
  );
}
