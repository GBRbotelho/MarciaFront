import React from "react";
import styles from "./Card.module.css";
import WhatsApp from "../../../../../components/icons/WhatsApp";

export default function Card({ data }) {
  return (
    <div
      className={
        styles.card + (data.status === "CONFIRMADA" ? " " + styles.active : "")
      }
    >
      <div className={styles.divInfo}>
        <div>
          <h2>{data.status}</h2>
          <span>
            {data.timeInicial} - {data.timeFinal}
          </span>
        </div>
        <div className={styles.icon}>
          <WhatsApp />
        </div>
      </div>
      <p>{data.name}</p>
    </div>
  );
}
