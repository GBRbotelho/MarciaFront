import React, { useState } from "react";
import styles from "./Login.module.css";
import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.div}>
          <h1>Bem Vindo !!</h1>
          <div>
            <InputEmail state={user} setState={setUser} id="email" />
            <InputPassword state={user} setState={setUser} id="password" />
            <a>
              <p>Esqueci minha senha</p>
            </a>
          </div>
          <div className={styles.button}>
            <Button text="ENTRAR" state={user} />
            <p>
              não tem cadasto ainda ?? <b>criar conta</b>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
