import React, { useState } from "react";
import styles from "./Register.module.css";
import Input from "./components/Input";
import Button from "./components/Button";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Cadastro</h1>
          <div className={styles.form}>
            <Input label="Nome" id="name" state={user} setState={setUser} />
            <Input label="CPF" id="cpf" state={user} setState={setUser} />
            <Input label="Email" id="email" state={user} setState={setUser} />
            <Input
              label="Senha"
              id="password"
              state={user}
              setState={setUser}
            />
            <Input
              label="Confirmar senha"
              id="confirmPassword"
              state={user}
              setState={setUser}
            />
            <div className={styles.button}>
              <Button text="CADASTRAR" state={user} />
              <p className={styles.p}>
                Ao continuar, você <b>concorda</b> com os{" "}
                <b>Termos e Política de Privacidade.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
