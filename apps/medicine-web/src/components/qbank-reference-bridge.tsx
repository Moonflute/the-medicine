"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQbankReferenceFrame } from "@/components/qbank-reference-workspace";
import { referenceLocation } from "@/lib/qbank-reference";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

function reportLocation(replace = false, query?: string) {
  const url = new URL(window.location.href);
  if (query !== undefined) {
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
  }
  const location = referenceLocation(url.href, window.location.origin, basePath);
  if (!location) return;
  const heading = document.querySelector("main h1")?.textContent?.trim();
  window.parent.postMessage({ type: "qbank-reference:location", href: location.href, replace, title: location.route.startsWith("/search/") ? "자료 검색" : heading || document.title }, window.location.origin);
}

/** Router commands and location reports belong to this frame, never to the active question page. */
export function QbankReferenceBridge() {
  const embedded = useQbankReferenceFrame();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const focusSearch = useRef(false);

  useEffect(() => {
    if (!embedded) return;
    document.documentElement.dataset.qbankReference = "true";
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== window.parent || event.data?.type !== "qbank-reference:navigate") return;
      const location = referenceLocation(event.data.href, window.location.origin, basePath);
      if (!location) return;
      focusSearch.current = location.route.startsWith("/search/");
      if (referenceLocation(window.location.href, window.location.origin, basePath)?.href === location.href) {
        reportLocation();
        if (focusSearch.current) window.dispatchEvent(new Event("medicine:focus-search"));
      } else {
        router.replace(location.route);
      }
    };
    // External references open separately. A target="_top" must not replace the question session.
    const onLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.hasAttribute("download") || anchor.target === "_blank") return;
      const location = referenceLocation(anchor.href, window.location.origin, basePath);
      if (!location) {
        if (!/^https?:/.test(anchor.href)) return;
        event.preventDefault(); event.stopPropagation();
        window.open(anchor.href, "_blank", "noopener,noreferrer");
      } else if (anchor.target === "_top" || anchor.target === "_parent") {
        event.preventDefault(); event.stopPropagation();
        router.replace(location.route);
      }
    };
    const onInput = (event: Event) => {
      const input = event.target;
      if (input instanceof HTMLInputElement && input.closest(".search-panel") && referenceLocation(window.location.href, window.location.origin, basePath)?.route.startsWith("/search/")) reportLocation(true, input.value);
    };
    const onHash = () => reportLocation();
    window.addEventListener("message", onMessage);
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onLink, true);
    document.addEventListener("input", onInput);
    window.parent.postMessage({ type: "qbank-reference:ready" }, window.location.origin);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onLink, true);
      document.removeEventListener("input", onInput);
    };
  }, [embedded, router]);

  useEffect(() => {
    if (!embedded) return;
    const task = requestAnimationFrame(() => {
      reportLocation();
      if (focusSearch.current) {
        window.dispatchEvent(new Event("medicine:focus-search"));
        focusSearch.current = false;
      }
    });
    return () => cancelAnimationFrame(task);
  }, [embedded, pathname, params]);

  return null;
}
