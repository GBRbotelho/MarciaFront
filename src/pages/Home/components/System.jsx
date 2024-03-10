import React from "react";
import styles from "./System.module.css";
import { useNavigate } from "react-router-dom";

export default function System({ name }) {
  const navigate = useNavigate();
  return (
    <div className={styles.div}>
      <div className={styles.card}>
        <h2>ENTRAR</h2>
      </div>
      <h3 className={styles.label}>{name}</h3>
    </div>
  );
}
