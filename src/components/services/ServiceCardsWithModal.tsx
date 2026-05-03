"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { ServiceItem } from "@/content/services";
import { services as defaultServices } from "@/content/services";

const cardClassName =
  "box-border flex h-[min(300px,calc(100vw-2rem))] w-[min(300px,calc(100vw-2rem))] shrink-0 cursor-pointer flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-white/20 hover:shadow-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071534] sm:h-[300px] sm:w-[300px] sm:p-5";

type ServiceCardsWithModalProps = {
  items?: ServiceItem[];
  reactKeyPrefix?: string;
};

export function ServiceCardsWithModal({ items = defaultServices, reactKeyPrefix = "" }: ServiceCardsWithModalProps) {
  const [open, setOpen] = useState<ServiceItem | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const modal =
    open ? (
      <div
        className="fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 p-4"
        onClick={() => setOpen(null)}
        role="presentation"
      >
        <div
          className="relative flex max-h-[80vh] w-[80vw] max-w-[80vw] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0a1f45] text-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute right-3 top-3 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setOpen(null)}
            aria-label="Kapat"
          >
            Kapat
          </button>
          <div className="max-h-[80vh] overflow-y-auto px-6 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16">
            <h2 id={titleId} className="pr-20 text-2xl font-bold leading-tight sm:text-3xl">
              {open.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">{open.description}</p>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="mt-12 flex w-full flex-wrap justify-center gap-5 sm:gap-6 lg:mt-16">
        {items.map((service) => (
          <button
            key={reactKeyPrefix ? `${reactKeyPrefix}-${service.title}` : service.title}
            type="button"
            className={cardClassName}
            onClick={() => setOpen(service)}
          >
            <span className="line-clamp-2 shrink-0 text-lg font-semibold text-white sm:text-xl">
              {service.title}
            </span>
            <span className="mt-2 min-h-0 flex-1 overflow-y-auto text-left text-xs leading-snug text-slate-300 sm:mt-3 sm:text-sm">
              {service.description}
            </span>
          </button>
        ))}
      </div>
      {typeof document !== "undefined" && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
