import React from "react";
import styles from "./DashboardLayout.module.css";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";

function DashboardLayout({ children }) {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.containerPage}>
        <Header />
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
