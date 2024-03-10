import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import ButtonLogout from "./components/ButtonLogout";
import Input from "./components/Input";
import NewSystem from "./components/NewSystem";
import Notification from "./components/Notification";
import { useGet } from "../../hooks/useRequest";
import { useAuth } from "../../contexts/AuthContext";
import System from "./components/System";

export default function Home() {
  const [systems, setSystems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const FetchSystems = async () => {
      const response = await useGet(`api/companies/admin/${user._id}`);
      setSystems(response.data);
    };

    FetchSystems();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <nav>
          <Notification />
          <ButtonLogout text="SAIR" />
        </nav>
        <div className={styles.top}>
          <h1>Bem Vindo!!</h1>
          <div className={styles.inputDiv}>
            <Input />
          </div>
        </div>
        <div className={styles.cards}>
          {systems && systems.map((system) => <System name={system.name} />)}
          <NewSystem />
        </div>
      </section>
    </main>
  );
}
