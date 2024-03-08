import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

export default function Button({ text, state }) {
  const navigate = useNavigate();
  const showMessage = useFlashMessage();

  const handleSubmit = async () => {};

  const getData = async (token) => {
    const response = await getDataUser(token);
    if (response.success === true) {
      showMessage(response.message, "success");
      navigate("/confirmacao");
    } else {
      showMessage(response.message, "error");
      navigate("/login");
    }
  };

  return (
    <button className={styles.button} onClick={handleSubmit}>
      {text}
    </button>
  );
}
