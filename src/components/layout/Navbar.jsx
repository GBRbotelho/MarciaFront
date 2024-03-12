import React from "react";
import styles from "./Navbar.module.css";
import Engrenagens from "../icons/Engrenagens";
import Logo from "../icons/Logo";
import Home from "../icons/MenuNav/Home";
import Clients from "../icons/MenuNav/Clients";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul className={styles.menu}>
          <li className={styles.active}>
            <Home />
          </li>
          <li>
            <Clients />
          </li>
          <li>
            <Home />
          </li>
          <li>
            <Clients />
          </li>
          <li>
            <Home />
          </li>
          <li>
            <Clients />
          </li>
        </ul>
        <button className={styles.config}>
          <Engrenagens />
        </button>
      </div>
    </nav>
  );
}
