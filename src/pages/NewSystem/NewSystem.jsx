import React, { useState } from "react";
import styles from "./NewSystem.module.css";
import Form from "./components/Form";
import PlanDescription from "./components/PlanDescription";

export default function NewSystem() {
  const [planSelect, setPlanSelect] = useState(1);
  const plans = [
    {
      id: 1,
      title: "Plano Basico",
      name: "STARTER",
      description:
        "O plano perfeito para negócios que estão começando e para você que quer conhecer mais sobre a Marcia",
      options: [
        "100 cadastros de clientes",
        "50 notificações por e-mail /mês",
        "10 cadastros de produtos",
        "10 cadastros de serviços",
        "Suporte por E-mail",
      ],
      price: 99.9,
    },
    {
      id: 2,
      title: "Plano Medio",
      name: "BASIC",
      description:
        "O plano perfeito para negócios que estão começando e para você que quer conhecer mais sobre a Marcia",
      options: [
        "100 cadastros de clientes",
        "50 notificações por e-mail /mês",
        "10 cadastros de produtos",
        "10 cadastros de serviços",
        "Suporte por E-mail",
      ],
      price: 159.9,
    },
    {
      id: 3,
      title: "Plano Pro",
      name: "PLUS",
      description:
        "O plano perfeito para negócios que estão começando e para você que quer conhecer mais sobre a Marcia",
      options: [
        "100 cadastros de clientes",
        "50 notificações por e-mail /mês",
        "10 cadastros de produtos",
        "10 cadastros de serviços",
        "Suporte por E-mail",
      ],
      price: 199.9,
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.div1}>
          <Form
            plans={plans}
            setPlanSelect={setPlanSelect}
            planSelect={planSelect}
          />
        </div>
        <div className={styles.div2}>
          <PlanDescription plans={plans} planSelect={planSelect} />
        </div>
      </section>
    </main>
  );
}
