import React from "react";
import styles from "./Select.module.css";

export default function Select({
  label,
  id,
  state,
  setState,
  span = 4,
  plans,
  setPlanSelect,
  planSelect,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [id]: value });
    setPlanSelect(Number(value));
  }

  return (
    <div
      className={styles.select}
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <label>{label}</label>
      <select value={state[id]} onChange={handleChange}>
        {plans.map((plan) => {
          return <option value={plan.id}>{plan.title}</option>;
        })}
      </select>
    </div>
  );
}
