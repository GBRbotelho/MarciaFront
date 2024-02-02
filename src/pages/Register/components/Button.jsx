import React from "react";
import styles from "./Button.module.css";
import { usePost } from "../../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { useAuth } from "../../../contexts/AuthContext";

export default function Button({ text, state }) {
  const navigate = useNavigate();
  const showMessage = useFlashMessage();
  const { login, getDataUser } = useAuth();

  const handleSubmit = async () => {
    const response = await usePost("api/users", state);
    console.log(response);
    if (response.success) {
      showMessage(response.message, "success");
      const responseLogin = await login(state);
      if (responseLogin.success) {
        getData();
      }
    }
  };

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
