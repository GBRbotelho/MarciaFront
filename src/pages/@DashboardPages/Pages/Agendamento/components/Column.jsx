import React from "react";
import styles from "./Column.module.css";
import Card from "./Card";

export default function Column({ background = "#f5eaf8", data = [] }) {
  return (
    <div style={{ backgroundColor: background }} className={styles.column}>
      <h2>SEG | 27/12</h2>
      <div className={styles.container}>
        {data &&
          data.length > 0 &&
          data.map((object) => {
            return <Card data={object} />;
          })}
      </div>
    </div>
  );
}
