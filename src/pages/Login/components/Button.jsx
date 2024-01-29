import React, { useEffect } from "react";
import styles from "./Button.module.css";
import { usePost } from "../../../hooks/useRequest";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Button({ text, state }) {
  const showMessage = useFlashMessage();
  const navigate = useNavigate();
  const { login, getDataUser, user } = useAuth();

  useEffect(() => {
    if (user.isEmailVerified === "NO") {
      navigate("/confirmacao");
    }
  }, [user]);

  const handleSubmit = async () => {
    const response = await login(state);
    if (response.success === true) {
      showMessage(response.message, "success");
      await getData(response.data);
    } else {
      showMessage(response.message, "error");
    }
  };

  const getData = async (token) => {
    const response = await getDataUser(token);
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
