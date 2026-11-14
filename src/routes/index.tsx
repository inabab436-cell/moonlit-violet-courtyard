import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";

const CourtyardGame = lazy(() => import("@/game/CourtyardGame"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Courtyard — Night Scene" },
      { name: "description", content: "A layered 2D night-time royal courtyard built in Phaser 3." },
      { property: "og:title", content: "Royal Courtyard — Night Scene" },
      { property: "og:description", content: "A layered 2D night-time royal courtyard built in Phaser 3." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <main className="fixed inset-0 overflow-hidden bg-background">
      {ready && <Suspense fallback={null}><CourtyardGame /></Suspense>}
      <div className="rotate-hint pointer-events-none absolute inset-x-0 bottom-6 justify-center text-center text-sm text-foreground">
        Rotate your device to landscape · drag to look around
      </div>
    </main>
  );
}
