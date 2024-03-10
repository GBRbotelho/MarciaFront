import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

export default function Button({ text, handleSubmit }) {
  const navigate = useNavigate();
  const showMessage = useFlashMessage();

  return (
    <button className={styles.button} onClick={handleSubmit}>
      {text}
    </button>
  );
}
