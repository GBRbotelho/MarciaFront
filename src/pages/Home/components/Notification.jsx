import React from "react";
import styles from "./Notification.module.css";

export default function Notification() {
  return (
    <div className={styles.notification}>
      <button>
        <i className="ri-notification-2-fill"></i>
      </button>
    </div>
  );
}
