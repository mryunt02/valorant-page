import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import Agent from "@/components/Agent";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://valorant-api.com/v1/agents");
  const repo = await response.json();
  return repo.data;
}
async function Agents() {
  const agents = await getData();
  return <Agent agents={agents} />;
}

export default function Home() {
  return (
    <main>
      <Suspense fallback="Fetching agents..">
        <Agents />
      </Suspense>
    </main>
  );
}
