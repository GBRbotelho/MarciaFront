import React from "react";
import styles from "./Button.module.css";
import { usePost } from "../../../hooks/useRequest";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

export default function Button({ text, state }) {
  const showMessage = useFlashMessage();

  return <button className={styles.button}>{text}</button>;
}
