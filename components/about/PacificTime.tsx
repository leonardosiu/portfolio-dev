"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function formatPST(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    // weekday: "short",
    // year: "numeric",
    // month: "short",
    // day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

export default function TimestampPST() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000); // or 60000 for minute updates
    return () => clearInterval(id);
  }, []);

  const pstString = formatPST(now);

  return (
    <span className="flex items-center gap-1.5">
      <Clock className="w-4 h-4" />
      currently {pstString} PST
    </span>
  );
}
