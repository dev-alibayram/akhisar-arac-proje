"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function applyScrollForHash() {
  const { hash } = window.location;
  if (hash) {
    const id = decodeURIComponent(hash.slice(1));
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function queueScroll() {
  requestAnimationFrame(() => {
    requestAnimationFrame(applyScrollForHash);
  });
}

export function ScrollToHashOnNavigate() {
  const pathname = usePathname();
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const debounced = () => {
      if (debounceRef.current !== null) window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => {
        debounceRef.current = null;
        queueScroll();
      }, 50);
    };

    queueScroll();
    debounced();

    const onHashChange = () => debounced();
    const onPopState = () => debounced();

    const onClickCapture = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href?.includes("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      debounced();
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClickCapture, true);

    return () => {
      if (debounceRef.current !== null) window.clearTimeout(debounceRef.current);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, [pathname]);

  return null;
}
