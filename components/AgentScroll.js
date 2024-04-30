import AgentImage from "./AgentImage";

async function getData() {
  const response = await fetch("https://valorant-api.com/v1/agents");
  const repo = await response.json();
  return repo.data;
}
async function AgentImages() {
  const agents = await getData();
  return <AgentImage agents={agents} />;
}
export default function AgentScroll() {
  return (
    <div>
      <h1>
        <AgentImages />
      </h1>
    </div>
  );
}
