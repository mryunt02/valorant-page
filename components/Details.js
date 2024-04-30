import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./detail.module.css";
import Skills from "./Skills.js";
import AgentScroll from "./AgentScroll";

function Details({ agent }) {
  return (
    <>
      <div className={styles.detail}>
        <p className={styles.description}>{agent?.description}</p>
        {agent?.displayIcon ? (
          <Image
            src={agent?.fullPortrait}
            width={700}
            height={700}
            className={styles.image}
            alt={agent?.displayName}
          />
        ) : (
          <Image
            src="/loading.jpg"
            width={700}
            height={700}
            className={styles.image}
            alt="Loading..."
          />
        )}

        <div className={styles.div}>
          <p className={styles.p}>{agent?.role?.displayName}</p>
          <h1
            className={styles.h1}
            style={{ color: `#${agent?.backgroundGradientColors[3]}` }}
          >
            {agent?.displayName}
          </h1>
          <Skills agent={agent} />
        </div>
      </div>
      <div>
        <AgentScroll />
      </div>
    </>
  );
}

export default Details;
