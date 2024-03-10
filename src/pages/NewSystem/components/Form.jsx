import React, { useState } from "react";
import Input from "./Input";
import styles from "./Form.module.css";
import Button from "./Button";
import Select from "./Select";
import { usePost } from "../../../hooks/useRequest";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Form({ plans, setPlanSelect, planSelect }) {
  const navigate = useNavigate();
  const showMessage = useFlashMessage();
  const { user } = useAuth();
  const [system, setSystem] = useState({
    name: "",
    months: 0,
    plan: planSelect,
  });

  const handleSubmit = async (e) => {
    console.log("Dados passou por aqui");
    e.preventDefault();
    const today = new Date();
    const finalDate = new Date(
      new Date().setMonth(today.getMonth() + Number(system.months))
    );
    const companyData = {
      ...system,
      admin: user._id,
      active: true,
      dateInitial: today,
      dateFinal: finalDate,
    };
    console.log(companyData);
    const response = await usePost("api/companies", companyData);
    console.log(response);
    if (response.success) {
      navigate("/home");
      showMessage(response.message, "success");
    } else {
      showMessage(response.message, "error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <Button text="COMEÇAR A USAR" handleSubmit={handleSubmit} />
    </form>
  );
}
