import AgentScroll from "@/components/AgentScroll";
import styles from "@/components/detail.module.css";
import Image from "next/image";
import Skills from "@/components/Skills";
export default function Loading() {
  return (
    <div>
      <div className={styles.detail}>
        <p className={styles.description}>Description loading...</p>
        <Image
          src="/loading.jpg"
          width={700}
          height={700}
          className={styles.image}
          alt="Loading..."
        />
        <div className={styles.div}>
          <p className={styles.p}>Name loading...</p>
          <h1 className={styles.h1}>Loading...</h1>
        </div>
      </div>
      <AgentScroll />
    </div>
  );
}
