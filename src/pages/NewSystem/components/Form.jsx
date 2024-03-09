import React, { useState } from "react";
import Input from "./Input";
import styles from "./Form.module.css";
import Button from "./Button";
import Select from "./Select";

export default function Form({ plans, setPlanSelect, planSelect }) {
  const [system, setSystem] = useState({
    name: "",
    months: 0,
    plan: planSelect,
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
        <Select
          label="Planos"
          id="plan"
          state={system}
          setState={setSystem}
          span={4}
          plans={plans}
          setPlanSelect={setPlanSelect}
        />
        <Input
          label="Valor do plano"
          id="price"
          state={system}
          setState={setSystem}
          plans={plans}
          span={2}
        />
        <Input
          label="Meses"
          id="months"
          state={system}
          setState={setSystem}
          span={2}
          type="number"
        />
      </div>
      <Button text="COMEÇAR A USAR" />
    </form>
  );
}
