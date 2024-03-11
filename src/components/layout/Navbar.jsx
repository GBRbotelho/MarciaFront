import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>Logo</h2>
      <ul>
        <li>HOME</li>
        <li>USERS</li>
        <li>PRODUCTS</li>
        <li>SERVICES</li>
        <li>TRATAMENTOS</li>
      </ul>
      <h2>CONFIG</h2>
    </nav>
  );
}
