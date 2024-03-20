import React, { useEffect, useState } from "react";
import styles from "./Clientes.module.css";
import { Link } from "react-router-dom";

import Filtros from "../../../../components/icons/Table/Filtros";
import View from "../../../../components/icons/Table/View";
import Delete from "../../../../components/icons/Table/Delete";
import Plus from "../../../../components/icons/Plus";
import AddClient from "./components/AddClient";
import { useSystem } from "../../context/SystemContext";
import { useDelete } from "../../../../hooks/useRequest";

export default function Clientes() {
  const pathSegments = location.pathname.split("/");
  const { clients, setClients, reload } = useSystem();
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeAdd, setActiveAdd] = useState(false);

  useEffect(() => {
    const GetClientsData = async () => {
      reload(setClients, "api/tenant/clients", pathSegments[2]);
    };
    GetClientsData();
  }, []);

  const handleClickFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleDeleteClient = async (id) => {
    const response = await useDelete("api/tenant/clients", id, pathSegments[2]);
    if (response.success) {
      await reload(setClients, "api/tenant/clients", pathSegments[2]);
    }
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
            <Filtros />
          </button>
          <button
            className={styles.buttonFilter}
            onClick={() => setActiveAdd(true)}
          >
            <Plus />
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
              {clients.length > 0 ? (
                clients.map((client) => {
                  return (
                    <tr key={client._id}>
                      <td>{client.name}</td>
                      <td>{client.cpf}</td>
                      <td>{client.phone}</td>
                      <td>{client.email}</td>
                      <td>{client.birthday}</td>
                      <td>
                        <button>
                          <Link
                            to={`/dashboard/${pathSegments[2]}/clientes/${client._id}`}
                          >
                            <View />
                          </Link>
                        </button>
                        <button onClick={() => handleDeleteClient(client._id)}>
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6">Não há clientes cadastrados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {activeAdd && <AddClient setState={setActiveAdd} />}
    </div>
  );
}

const FILTERS = [{ label: "Todos" }, { label: "Novos" }];
