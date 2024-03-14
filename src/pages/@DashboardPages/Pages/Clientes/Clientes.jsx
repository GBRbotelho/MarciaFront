import React, { useState } from "react";
import styles from "./Clientes.module.css";

import Filtros from "../../../../components/icons/Table/Filtros";
import View from "../../../../components/icons/Table/View";
import Delete from "../../../../components/icons/Table/Delete";

export default function Clientes() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const handleClickFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={styles.content}>
      <section>
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
        <div className={styles.tableOptions}>
          <button className={styles.buttonFilter}>
            {" "}
            <Filtros />
          </button>
        </div>
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Data ultima visita</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pedro Souza</td>
                <td>502.308.777-81</td>
                <td>(19) 9 8171-0543</td>
                <td>pedro@marcia.com</td>
                <td>23/05/2023</td>
                <td>
                  <View />
                  <Delete />
                </td>
              </tr>
              <tr>
                <td>Pedro Souza</td>
                <td>502.308.777-81</td>
                <td>(19) 9 8171-0543</td>
                <td>pedro@marcia.com</td>
                <td>23/05/2023</td>
                <td>
                  <View />
                  <Delete />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const FILTERS = [{ label: "Todos" }, { label: "Novos" }];
