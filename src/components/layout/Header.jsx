import React from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>Agendamentos</h2>
        <div className={styles.menu}>
          <p>Ola, {user.name}</p>
        </div>
      </div>
    </header>
  );
}
