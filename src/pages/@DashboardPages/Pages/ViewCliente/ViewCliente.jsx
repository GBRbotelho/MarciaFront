import React, { useState } from "react";
import styles from "./ViewCliente.module.css";
import FormData from "./components/FormData";

export default function ViewCliente() {
  //Filtro
  const [activeFilter, setActiveFilter] = useState("Dados");

  const handleClickFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={styles.content}>
      <section>
        <div className={styles.container1}>
          <div className={styles.content1}>
            <div className={styles.filtros}>
              <ul>
                {FILTERS.map((filter) => (
                  <li
                    key={filter.label}
                    className={
                      filter.label === activeFilter ? styles.active : ""
                    }
                    onClick={() => handleClickFilter(filter.label)}
                  >
                    {filter.label}
                  </li>
                ))}
              </ul>
            </div>
            <FormData />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.column}></div>
        </div>
      </section>
    </div>
  );
}

const FILTERS = [
  { label: "Dados" },
  { label: "Anamnsese" },
  { label: "Tratamentos" },
  { label: "Consultas" },
];
