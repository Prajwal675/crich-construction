import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sessionKey = "crichTrafficSessionId";

function getSessionId() {
  const existing = window.sessionStorage.getItem(sessionKey);
  if (existing) return existing;

  const nextId =
    window.crypto?.randomUUID?.() ||
    `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.sessionStorage.setItem(sessionKey, nextId);
  return nextId;
}

export function useTrafficTracking() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;

    fetch("/api/traffic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      keepalive: true,
      body: JSON.stringify({
        path,
        title: document.title,
        referrer: document.referrer,
        sessionId: getSessionId(),
      }),
    }).catch((error) => {
      console.error("Traffic tracking failed:", error);
    });
  }, [location.pathname, location.search, location.hash]);
}
