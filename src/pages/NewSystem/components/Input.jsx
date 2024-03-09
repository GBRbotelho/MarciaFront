import React from "react";
import styles from "./Input.module.css";

export default function Input({
  label,
  id,
  state,
  setState,
  span = 4,
  type = "text",
  disabled = false,
  plans,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [id]: value });
  }

  const plan = plans?.find((plan) => plan.id === Number(state.plan));

  return (
    <div
      className={styles.input}
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <label>{label}</label>
      <input
        type={type}
        disabled={disabled}
        value={
          id === "price" ? plan.price.toFixed(2).replace(".", ",") : state[id]
        }
        onChange={handleChange}
        style={
          id === "price"
            ? {
                textAlign: "center",
                padding: "0px",
                width: "100%",
                backgroundColor: "rgb(96, 0, 125, 0.2)",
                fontWeight: "800",
              }
            : {}
        }
      />
      {id === "price" && (
        <div className={styles.spanPrice}>
          <span>R$</span>
          <span>/mês</span>
        </div>
      )}
    </div>
  );
}
