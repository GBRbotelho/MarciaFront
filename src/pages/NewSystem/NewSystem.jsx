import React, { useState } from "react";
import styles from "./NewSystem.module.css";
import Form from "./components/Form";
import PlanDescription from "./components/PlanDescription";

export default function NewSystem() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.div1}>
          <Form />
        </div>
        <div className={styles.div2}>
          <PlanDescription />
        </div>
      </section>
    </main>
  );
}
