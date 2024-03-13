import React from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../contexts/AuthContext";
import Sino from "../icons/Sino";
import Perfil from "../icons/Perfil";

export default function Header() {
  const { user } = useAuth();
  const pathSegments = location.pathname.split("/");
  const currentSegment = pathSegments[3] || "Agendamentos";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>{currentSegment}</h2>
        <div className={styles.menu}>
          <p>Ola, {user.name}</p>
          <span>
            <Sino />
          </span>
          <button>
            <Perfil />
          </button>
        </div>
      </div>
    </header>
  );
}
