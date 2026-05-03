import { ScrollToHashOnNavigate } from "@/components/common/ScrollToHashOnNavigate";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <SiteHeader locale={locale} />
      <ScrollToHashOnNavigate />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
