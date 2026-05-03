import Link from "next/link";

type SiteFooterProps = {
  locale: string;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const base = `/${locale}`;

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-5 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8 lg:py-7">
        <div>
          <h3 className="text-xl font-bold text-white lg:text-2xl">Akhisar Araç Proje</h3>
          <p className="mt-3 text-sm text-slate-400 lg:text-base">
            Motorlu taşıtlar için TSE uygunluk belgeleri ve projelerinde uzman ekibimizle yanınızdayız.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white lg:text-lg">Hızlı Linkler</h4>
          <ul className="mt-4 space-y-2 text-sm lg:text-base">
            <li>
              <Link href={`${base}#anasayfa`} className="hover:text-white">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href={`${base}/hizmetler`} className="hover:text-white">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href={`${base}/ek-hizmetler`} className="hover:text-white">
                Ek Hizmetler
              </Link>
            </li>
            <li>
              <Link href={`${base}#hakkimizda`} className="hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href={`${base}#iletisim`} className="hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white lg:text-lg">Hizmetlerimiz</h4>
          <ul className="mt-4 space-y-2 text-sm lg:text-base">
            <li>Tip Onayı Belgesi</li>
            <li>Uygunluk Sertifikası</li>
            <li>Periyodik Muayene</li>
            <li>CE Belgesi</li>
            <li>Teknik Proje</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white lg:text-lg">İletişim</h4>
          <ul className="mt-4 space-y-2 text-sm lg:text-base">
            <li>+90 (212) 123 45 67</li>
            <li>info@example.com</li>
            <li>Örnek Mahallesi, Teknoloji Cad. No:123, İstanbul</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/90 px-4 py-2 text-center text-[11px] text-slate-400 sm:text-xs lg:text-sm">
        © 2026 Akhisar Araç Proje - Designed by dev.alibayram@gmail.com
      </div>
    </footer>
  );
}
