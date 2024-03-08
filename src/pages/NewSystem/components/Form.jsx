import React, { useState } from "react";
import Input from "./Input";
import styles from "./Form.module.css";
import Button from "./Button";

export default function Form() {
  const [system, setSystem] = useState({
    name: "",
  });

  return (
    <form className={styles.form}>
      <h1>Configurando a Marcia</h1>
      <div className={styles.inputsDiv}>
        <Input
          label="Nome da empresa"
          id="name"
          state={system}
          setState={setSystem}
          span={4}
        />
        <Input
          label="Planos"
          id="plan"
          state={system}
          setState={setSystem}
          span={4}
        />
        <Input
          label="Valor do plano"
          id="price"
          state={system}
          setState={setSystem}
          span={2}
        />
        <Input
          label="Meses"
          id="months"
          state={system}
          setState={setSystem}
          span={2}
        />
      </div>
      <Button text="COMEÇAR A USAR" />
    </form>
  );
}
