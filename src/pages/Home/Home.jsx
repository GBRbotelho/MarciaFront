import React, { useState } from "react";
import styles from "./Home.module.css";
import ButtonLogout from "./components/ButtonLogout";
import Input from "./components/Input";
import NewSystem from "./components/NewSystem";
import Notification from "./components/Notification";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <nav>
          <Notification />
          <ButtonLogout text="SAIR" />
        </nav>
        <div className={styles.top}>
          <h1>Bem Vindo!!</h1>
          <div className={styles.inputDiv}>
            <Input />
          </div>
        </div>
        <div className={styles.cards}>
          <NewSystem />
          <NewSystem />
          <NewSystem />
          <NewSystem />
          <NewSystem />
          <NewSystem />
          <NewSystem />
        </div>
      </section>
    </main>
  );
}
