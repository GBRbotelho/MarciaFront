import React, { useState } from "react";
import styles from "./Confirmation.module.css";
import Input from "./components/Input";
import Button from "./components/Button";

export default function Confirmation() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.div}>
          <h1>Codigo de Confirmação</h1>
          <div className={styles.codigo}>
            <p>
              Para manter a segurança sempre da sua conta nós enviamos um codigo
              de 6 digitos para o endereço de email que você nós forneceu na
              etapa anterior
            </p>
            <Input label="Código" state={code} setState={setCode} />
          </div>
          <Button text="CONFIRMAR" state={code} />
        </div>
      </section>
    </main>
  );
}
