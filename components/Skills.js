"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./detail.module.css";
// ...

export default function Skills({ agent }) {
  const [activeSkill, setActiveSkill] = useState("MB5");
  const skillLetters = ["Q", "E", "C", "X"];

  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <p
            className={
              activeSkill === "MB5"
                ? `${styles.activep}`
                : `${styles.notactivep}`
            }
          >
            MB5
          </p>
          <div
            className={
              activeSkill === "MB5"
                ? `${styles.li} ${styles.active}`
                : styles.li
            }
            onClick={() => setActiveSkill("MB5")}
          >
            <Image
              src={agent?.role?.displayIcon}
              width={50}
              height={50}
              alt="info"
              className={styles.icons}
            />
          </div>
        </li>
        {agent?.abilities.map((ability, index) => (
          <li key={index} className={styles.li}>
            <p
              className={
                index === activeSkill
                  ? `${styles.activep}`
                  : `${styles.notactivep}`
              }
            >
              {skillLetters[index]}
            </p>
            <div
              className={
                index === activeSkill
                  ? `${styles.li} ${styles.active}`
                  : styles.li
              }
              onClick={() => setActiveSkill(index)}
            >
              <Image
                src={ability.displayIcon}
                alt={ability.displayName}
                width={50}
                height={50}
                className={styles.icons}
              />
            </div>
          </li>
        ))}
      </ul>
      {activeSkill === "MB5" ? (
        <div style={{ maxHeight: "170px" }}>
          <h2 className={styles.h2}>{agent?.role?.displayName}</h2>
          <p style={{ maxWidth: "400px" }} className={styles.p}>
            {agent?.role?.description}
          </p>
        </div>
      ) : (
        activeSkill !== null && (
          <div style={{ maxHeight: "170px" }}>
            <h2 className={styles.h2}>
              {agent?.abilities[activeSkill]?.displayName}
            </h2>
            <p style={{ maxWidth: "400px" }} className={styles.p}>
              {agent?.abilities[activeSkill]?.description}
            </p>
          </div>
        )
      )}
    </>
  );
}
