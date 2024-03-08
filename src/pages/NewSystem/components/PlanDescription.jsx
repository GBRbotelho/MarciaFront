import React from "react";
import styles from "./PlanDescription.module.css";

export default function PlanDescription() {
  return (
    <div className={styles.describeDiv}>
      <h1>Informações do plano</h1>
      <div className={styles.description}>
        <h2>STARTER</h2>
        <p>
          O plano perfeito para negócios que estão começando e para você que
          quer conhecer mais sobre a Marcia
        </p>
        <ul>
          <li>100 cadastros de clientes</li>
          <li>50 notificações por e-mail /mês</li>
          <li>10 cadastros de produtos</li>
          <li>10 cadastros de serviços</li>
          <li>Suporte por E-mail</li>
        </ul>
      </div>
    </div>
  );
}
