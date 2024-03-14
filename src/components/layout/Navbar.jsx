import React from "react";
import styles from "./Navbar.module.css";
import Engrenagens from "../icons/Engrenagens";
import Logo from "../icons/Logo";
import Home from "../icons/MenuNav/Home";
import Clients from "../icons/MenuNav/Clients";
import { Link } from "react-router-dom";

export default function Navbar() {
  const pathSegments = location.pathname.split("/");

  const idSystem = pathSegments[2];
  const currentSegment = pathSegments[3];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul className={styles.menu}>
          <li className={!currentSegment ? styles.active : undefined}>
            <Link to={`/dashboard/${idSystem}/`}>
              <Home />
            </Link>
          </li>
          <li
            className={
              currentSegment === "clientes" ? styles.active : undefined
            }
          >
            <Link to={`/dashboard/${idSystem}/clientes`}>
              <Clients />
            </Link>
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
