import React from "react";
import styles from "./Notification.module.css";

export default function Notification() {
  return (
    <div className={styles.notification}>
      <button>
        <i class="ri-notification-2-fill"></i>
      </button>
    </div>
  );
}
