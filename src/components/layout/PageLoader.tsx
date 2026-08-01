import { useEffect, useState } from "react";
import { ArrowDownUp } from "lucide-react";

export default function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 750);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 1100);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className={`page-loader ${phase === "leaving" ? "page-loader--leaving" : ""}`} aria-label="ManiConvert yüklənir" role="status">
      <div className="loader-mark">
        <ArrowDownUp size={25} strokeWidth={2.7} />
      </div>
      <p className="mt-4 text-sm font-bold tracking-[-0.03em] text-primary">Mani<span className="accent-text">Convert</span></p>
      <span className="loader-line mt-5"><span /></span>
    </div>
  );
}
