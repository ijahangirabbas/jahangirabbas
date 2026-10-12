"use client";

import { useEffect } from "react";

/**
 * Lightweight OpenPanel pageview tracker (write client).
 * Requires NEXT_PUBLIC_OPENPANEL_CLIENT_ID.
 */
export function OpenPanelTracker() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
    if (!clientId) return;

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://openpanel.dev/op.js";
    script.dataset.clientId = clientId;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
