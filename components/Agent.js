import Image from "next/image";
import React from "react";
import styles from "./agent.module.css";
import Link from "next/link";

function Agent({ agents }) {
  return (
    <div className={styles.maindiv}>
      <ul className={styles.ul}>
        {agents.map(
          (agent) =>
            agent?.isPlayableCharacter && (
              <li
                className={styles.listItem}
                key={agent.uuid}
                style={{
                  border: "1px solid",
                  borderRadius: "4px",
                  textAlign: "center",
                  padding: "10px",
                  height: "130px",
                  width: "300px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundImage: `url(${agent?.role?.displayIcon})`,
                  backgroundSize: "230px",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#2C2C3A",
                  backgroundBlendMode: "exclusion",
                }}
              >
                <div>
                  <Image
                    src={agent.displayIcon}
                    alt={agent.displayName}
                    width={170}
                    height={170}
                    className={styles.image}
                  />

                  <div className={styles.headers}>
                    <h2 className={styles.name}>{agent.displayName}</h2>
                    <Link href={`/${agent?.uuid}`} className={styles.details}>
                      Details...
                    </Link>
                  </div>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Agent;
