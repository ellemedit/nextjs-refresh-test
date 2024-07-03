import Link from "next/link";
import { setTimeout } from "timers/promises";
import { ArtificalDelayInClient } from "../ArtificalDelayInClient";

export default async function Page({ params }: { params: { test: string } }) {
  // artifical delay in server component
  await setTimeout(700);
  return (
    <div>
      <h1>{params.test}</h1>
      <Link href={`/?d=${new Date().toISOString()}`} className="text-blue-600">
        Root Page
      </Link>
      <ArtificalDelayInClient delayInMS={300} />
    </div>
  );
}
