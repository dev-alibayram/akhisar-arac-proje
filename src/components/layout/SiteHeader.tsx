import { SiteNavbar } from "@/components/common/SiteNavbar";

type SiteHeaderProps = {
  locale: string;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#071534]/92 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white backdrop-blur sm:px-6">
          <SiteNavbar locale={locale} />
        </div>
      </div>
    </div>
  );
}
