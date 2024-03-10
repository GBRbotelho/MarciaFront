import React, { useEffect } from "react";
import styles from "./Button.module.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Button({ text, handleSubmit }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.isEmailVerified === "NO") {
      navigate("/confirmacao");
    }
    if (user && user.isEmailVerified === "YES") {
      navigate("/home");
    }
  }, [user]);

  return (
    <button className={styles.button} onClick={handleSubmit}>
      {text}
    </button>
  );
}
