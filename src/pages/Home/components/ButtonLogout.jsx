import React from "react";
import styles from "./ButtonLogout.module.css";

export default function ButtonLogout({ text }) {
  return <button className={styles.button}>{text}</button>;
}
