import React from "react";
import styles from "./Button.module.css";
import { usePost } from "../../../hooks/useRequest";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { login } from "../../../contexts/AuthContext";

export default function Button({ text, state }) {
  const showMessage = useFlashMessage();

  const handleSubmit = async () => {
    const response = await login(state);
    if (response.success === true) {
      showMessage(response.message, "success");
    } else {
      showMessage(response.message, "error");
    }
  };

  return (
    <button className={styles.button} onClick={handleSubmit}>
      {text}
    </button>
  );
}
