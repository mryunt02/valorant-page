import React from "react";
import styles from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 style={{ margin: 0 }}>Valorant Agents</h1>
      <p style={{ margin: 0 }}>Check out all the agents in Valorant</p>
    </header>
  );
}

export default MainHeader;
