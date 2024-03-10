import React, { useState } from "react";
import styles from "./Login.module.css";
import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useFlashMessage } from "../../contexts/FlashMessageContext";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { login, getDataUser, user } = useAuth();
  const showMessage = useFlashMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(userData);
    if (response.success === true) {
      showMessage(response.message, "success");
      await getData(response.data);
    } else {
      showMessage(response.message, "error");
    }
  };

  const getData = async (token) => {
    const response = await getDataUser(token);
    if (response.success === true) {
      showMessage(response.message, "success");
    } else {
      showMessage(response.message, "error");
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <form className={styles.div} onSubmit={handleSubmit}>
          <h1>Bem Vindo !!</h1>
          <div>
            <InputEmail state={userData} setState={setUserData} id="email" />
            <InputPassword
              state={userData}
              setState={setUserData}
              id="password"
            />
            <a>
              <p>Esqueci minha senha</p>
            </a>
          </div>
          <div className={styles.button}>
            <Button
              text="ENTRAR"
              state={userData}
              handleSubmit={handleSubmit}
            />
            <p>
              Não tem cadasto ainda?{" "}
              <b>
                <Link to="/cadastro" className={styles.link}>
                  criar conta
                </Link>
              </b>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
