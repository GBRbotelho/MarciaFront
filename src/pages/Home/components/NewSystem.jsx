import React from "react";
import styles from "./NewSystem.module.css";
import { useNavigate } from "react-router-dom";

export default function NewSystem() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.div}
      onClick={() => {
        navigate("/newsystem");
      }}
    >
      <div className={styles.card}>
        <h2>+</h2>
      </div>
      <h3 className={styles.label}>NOVO AMBIENTE</h3>
    </div>
  );
}
