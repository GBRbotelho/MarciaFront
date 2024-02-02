import React from "react";
import styles from "./ButtonLogout.module.css";
import { useAuth } from "../../../contexts/AuthContext";

export default function ButtonLogout({ text }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      {text}
    </button>
  );
}
