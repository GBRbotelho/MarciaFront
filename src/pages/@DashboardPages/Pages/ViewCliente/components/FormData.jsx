import React, { useState } from "react";
import styles from "./FormData.module.css";
import Input from "./Input";

export default function FormData() {
  const [client, setClient] = useState({});
  return (
    <div className={styles.container}>
      <h2>Básicos</h2>
      <div className={styles.formBasic}>
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Civil"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input label={"CPF"} state={client} setState={setClient} id={"name"} />
        <Input
          label={"Data de Nascimento"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input label={"Sexo"} state={client} setState={setClient} id={"name"} />
        <Input
          label={"Como conheceu meu trabalho"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Indicação"}
          state={client}
          setState={setClient}
          id={"name"}
        />
      </div>
      <h2>Para contato</h2>
      <div className={styles.formBasic}>
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
      </div>
      <h2>Endereço</h2>
      <div className={styles.formBasic}>
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
      </div>
      <h2>Familiares</h2>
      <div className={styles.formBasic}>
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
        <Input
          label={"Nome Completo"}
          state={client}
          setState={setClient}
          id={"name"}
        />
      </div>
    </div>
  );
}
