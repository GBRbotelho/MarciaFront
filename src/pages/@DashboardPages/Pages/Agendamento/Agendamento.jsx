import React, { useState } from "react";
import styles from "./Agendamento.module.css";
import Column from "./components/Column";

export default function Agendamento() {
  const [activeFilter, setActiveFilter] = useState("Principais(18)");

  const handleClickFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={styles.content}>
      <section>
        <p className={styles.title}>Profissional: --</p>
        <div className={styles.filtros}>
          <ul>
            {FILTERS.map((filter) => (
              <li
                key={filter.label}
                className={filter.label === activeFilter ? styles.active : ""}
                onClick={() => handleClickFilter(filter.label)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.controller}>
          <div className={styles.buttons + " " + styles.hidden}>
            <button />
            <button />
            <button />
            <button />
          </div>
          <div className={styles.period}>
            <h2>{"<"}</h2>
            <span>27/12 - 02/01</span>
            <h2>{">"}</h2>
          </div>
          <div className={styles.buttons}>
            <button />
            <button />
            <button />
            <button />
          </div>
        </div>
        <div className={styles.columns}>
          <Column />
          <Column background="#ffffff" />
          <Column />
          <Column background="#ffffff" />
          <Column />
          <Column background="#ffffff" />
          <Column />
        </div>
      </section>
    </div>
  );
}

const FILTERS = [
  { label: "Principais(18)" },
  { label: "Agendados(4)" },
  { label: "Confirmados(3)" },
];
