import React, { useState, useEffect } from "react";
import styles from "./AddClient.module.css";
import Input from "./Input";
import { usePost } from "../../../../../hooks/useRequest";

export default function AddClient({ setState }) {
  const pathSegments = location.pathname.split("/");
  const [client, setClient] = useState({
    name: "",
    civilName: "",
    birthday: "",
    cpf: "",
    phone: "",
    gender: "",
    email: "",
    knowMyWork: "",
  });

  const handleClick = async () => {
    const response = await usePost(
      "api/tenant/clients",
      client,
      pathSegments[2]
    );

    if (response.success) {
      setState(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Novo Cliente</h2>
            <button onClick={() => setState(false)}>X</button>
          </div>
          <div className={styles.inputs}>
            <Input
              id={"name"}
              state={client}
              setState={setClient}
              label={"Nome"}
            />
            <Input
              id={"civilName"}
              state={client}
              setState={setClient}
              label={"Nome Civil"}
            />
            <Input
              id={"birthday"}
              state={client}
              setState={setClient}
              label={"Data de Nascimento"}
              type={"date"}
            />
            <Input
              id={"cpf"}
              state={client}
              setState={setClient}
              label={"CPF"}
            />
            <Input
              id={"phone"}
              state={client}
              setState={setClient}
              label={"Telefone"}
            />
            <Input
              id={"gender"}
              state={client}
              setState={setClient}
              label={"Sexo"}
            />
            <Input
              id={"email"}
              state={client}
              setState={setClient}
              label={"Email"}
            />
            <Input
              id={"knowMyWork"}
              state={client}
              setState={setClient}
              label={"Como conheceu meu trabalho"}
            />
            {/* <Input
              id={"recommendation"}
              state={client}
              setState={setClient}
              label={"Indicação"}
            /> */}
          </div>
          <div className={styles.buttons}>
            <button className={styles.create} onClick={handleClick}>
              Criar cliente
            </button>
            <button className={styles.back} onClick={() => setState(false)}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
