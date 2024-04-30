import { Suspense } from "react";
import Details from "@/components/Details";

async function getData({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  debugger;
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${params.id}`
  );
  const repo = await response.json();
  return repo.data;
}
async function DetailPage({ params }) {
  const agent = await getData({ params });

  return <Details agent={agent} />;
}
export default function AgentDetail({ params }) {
  return (
    <main>
      <DetailPage params={params} />
    </main>
  );
}
