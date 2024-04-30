import Image from "next/image";
import styles from "./images.module.css";
import Link from "next/link";

export default function AgentImage({ agents }) {
  return (
    <div className={styles.scroll}>
      {agents.map(
        (agent) =>
          agent?.isPlayableCharacter && (
            <Link href={`/${agent.uuid}`} key={agent.uuid}>
              <Image
                src={agent.displayIcon}
                alt={agent.displayName}
                key={agent.displayName}
                width={150}
                height={150}
              />
            </Link>
          )
      )}
    </div>
  );
}
