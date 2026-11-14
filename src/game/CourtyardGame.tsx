import { useEffect, useRef } from "react";

export default function CourtyardGame() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let game: import("phaser").Game | undefined;
    let cancelled = false;
    (async () => {
      const Phaser = (await import("phaser")).default;
      const { CourtyardScene, W, H } = await import("./CourtyardScene");
      if (cancelled || !ref.current) return;
      game = new Phaser.Game({
        type: Phaser.AUTO, parent: ref.current, width: W, height: H, backgroundColor: "#2a1f7a",
        scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
        scene: [CourtyardScene],
      });
    })();
    return () => { cancelled = true; game?.destroy(true); };
  }, []);
  return <div ref={ref} className="h-full w-full" />;
}
