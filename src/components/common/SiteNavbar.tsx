"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type SiteNavbarProps = {
  locale: string;
};

export function SiteNavbar({ locale }: SiteNavbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const base = `/${locale}`;
  const links = useMemo(
    () =>
      [
        { href: `${base}#anasayfa`, label: "Ana Sayfa" },
        { href: `${base}/hizmetler`, label: "Hizmetlerimiz" },
        { href: `${base}/ek-hizmetler`, label: "Ek Hizmetler" },
        { href: `${base}#surec`, label: "Süreç" },
        { href: `${base}#hakkimizda`, label: "Hakkımızda" },
        { href: `${base}#iletisim`, label: "İletişim" },
      ] as const,
    [base],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedMenu = menuRef.current?.contains(target);
      const clickedToggle = toggleButtonRef.current?.contains(target);
      if (!clickedMenu && !clickedToggle) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  return (
    <header className="relative">
      <div
        className={`flex items-center justify-between gap-4 ${open ? "relative z-[120]" : ""}`}
      >
        <Link
          href={`${base}#anasayfa`}
          className="flex min-w-0 shrink-0 items-center gap-2.5 text-lg font-bold text-white"
        >
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            sizes="40px"
            priority
          />
          <span className="truncate sm:whitespace-normal">Akhisar Araç Proje</span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-200 lg:flex"
          aria-label="Ana menü"
        >
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleButtonRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          ref={menuRef}
          id="mobile-menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[110] w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-md lg:hidden"
          aria-label="Mobil menü"
        >
          <ul className="flex flex-col gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
