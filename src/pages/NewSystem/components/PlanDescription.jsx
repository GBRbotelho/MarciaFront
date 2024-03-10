import React from "react";
import styles from "./PlanDescription.module.css";

export default function PlanDescription({ plans, planSelect }) {
  const plan = plans.find((plan) => plan.id === planSelect);

  return (
    <div className={styles.describeDiv}>
      <h1>Informações do plano</h1>
      <div className={styles.description}>
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
        <ul>
          {plan.options.map((option, index) => (
            <li key={`${index}`}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
