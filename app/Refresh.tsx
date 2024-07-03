"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function Refresh() {
  const [withTransition, setWithTransition] = useState(true);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      return;
    }
    let canceled = false;
    async function refresh() {
      if (canceled) {
        return;
      }
      if (withTransition) {
        startTransition(() => {
          router.refresh();
        });
      } else {
        router.refresh();
      }
      setTimeout(() => {
        refresh();
      }, 500);
    }
    refresh();
    return () => {
      canceled = true;
    };
  }, [router, isPending, withTransition]);

  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        defaultChecked={withTransition}
        onChange={(event) => {
          setWithTransition(event.currentTarget.checked);
        }}
      />
      Refresh With Transition
    </label>
  );
}
