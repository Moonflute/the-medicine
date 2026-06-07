"use client";

import { useEffect } from "react";

export function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const serviceWorkerUrl = `${basePath}/sw.js`;
    navigator.serviceWorker.register(serviceWorkerUrl, {
      scope: `${basePath}/` || "/",
    });
  }, []);

  return null;
}
