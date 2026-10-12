import React from "react";

export function JamLogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-zinc-950 shadow-xs ${className}`}>
      <img
        src="/apple-touch-icon.png"
        alt="Jahangir Abbas Logo"
        className="size-full object-cover"
      />
    </div>
  );
}
