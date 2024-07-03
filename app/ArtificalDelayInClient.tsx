"use client";

export function ArtificalDelayInClient({ delayInMS }: { delayInMS: number }) {
  const now = performance.now();
  while (now + delayInMS > performance.now()) {}
  return null;
}
