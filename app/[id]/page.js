import { Suspense } from "react";
import Details from "@/components/Details";

export async function getStaticPaths() {
  // Replace this with your actual data fetching logic
  const agents = await fetch("https://valorant-api.com/v1/agents");
  const data = await agents.json();

  const paths = data.data.map((agent) => ({
    params: { id: agent.uuid },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${params.id}`
  );
  const repo = await response.json();

  return {
    props: {
      agent: repo.data,
    },
  };
}

function DetailPage({ agent }) {
  return <Details agent={agent} />;
}

export default function AgentDetail({ agent }) {
  return (
    <main>
      <DetailPage agent={agent} />
    </main>
  );
}
