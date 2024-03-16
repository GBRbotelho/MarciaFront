import React, { useState } from "react";
import styles from "./Agendamento.module.css";
import Column from "./components/Column";

//Icones
import Calendario from "../../../../components/icons/Calendario";
import Plus from "../../../../components/icons/Plus";
import Raio from "../../../../components/icons/Raio";
import Clock from "../../../../components/icons/Clock";
import SetaDireta from "../../../../components/icons/SetaDireta";
import SetaEsquerda from "../../../../components/icons/SetaEsquerda";

export default function Agendamento() {
  const [activeFilter, setActiveFilter] = useState("Principais (18)");

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
            <SetaEsquerda />
            <span>27/12 - 02/01</span>
            <SetaDireta />
          </div>
          <div className={styles.buttons}>
            <button>
              <Raio />
            </button>
            <button>
              <Clock />
            </button>
            <button>
              <Calendario />
            </button>
            <button>
              <Plus />
            </button>
          </div>
        </div>
        <div className={styles.columns}>
          <Column
            data={[
              {
                id: "1",
                status: "CONFIRMADA",
                timeInicial: "10:00",
                timeFinal: "11:00",
                name: "João Pereira Araujo",
              },
              {
                id: "2",
                status: "CONFIRMADA",
                timeInicial: "10:00",
                timeFinal: "11:00",
                name: "João Pereira Araujo",
              },
            ]}
          />
          <Column
            background="#ffffff"
            data={[
              {
                id: "1",
                status: "CONFIRMADA",
                timeInicial: "10:00",
                timeFinal: "11:00",
                name: "João Pereira Araujo",
              },
              {
                id: "2",
                status: "CONFIRMADA",
                timeInicial: "10:00",
                timeFinal: "11:00",
                name: "João Pereira Araujo",
              },
            ]}
          />
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
  { label: "Principais (18)" },
  { label: "Agendados (4)" },
  { label: "Confirmados (3)" },
];
