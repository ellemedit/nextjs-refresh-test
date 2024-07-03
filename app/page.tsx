import Link from "next/link";
import { setTimeout } from "timers/promises";

import { ArtificalDelayInClient } from "./ArtificalDelayInClient";

export default async function Page({
  searchParams,
}: {
  searchParams: { d?: string };
}) {
  // artifical delay in server component
  await setTimeout(700);
  return (
    <div>
      <h1>Root Page {searchParams.d != null && `(${searchParams.d})`}</h1>
      <Link href={`/${new Date().toISOString()}`} className="text-blue-600">
        Test
      </Link>
      <ArtificalDelayInClient delayInMS={300} />
    </div>
  );
}
