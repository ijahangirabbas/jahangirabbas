"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";

export function SoundToggle() {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    setMuted(!muted);
    toast(muted ? "Sound Effects Enabled" : "Sound Effects Muted");
  };

  return (
    <button
      onClick={toggleSound}
      className="inline-flex size-8 items-center justify-center rounded-lg border border-line bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Toggle haptic audio"
    >
      {muted ? <VolumeX className="size-4 text-muted-foreground" /> : <Volume2 className="size-4 text-primary" />}
    </button>
  );
}
