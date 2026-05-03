import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "İlk Görüşme",
    text: "İhtiyaçlarınızı dinliyor ve size en uygun belgelendirme sürecini planlıyoruz.",
  },
  {
    id: "02",
    title: "Dokümantasyon",
    text: "Gerekli tüm teknik döküman ve projeleri eksiksiz şekilde hazırlıyoruz.",
  },
  {
    id: "03",
    title: "TSE Başvuru",
    text: "Hazırlanan dosyalarla TSE'ye resmi başvuru yapıyor ve süreci takip ediyoruz.",
  },
  {
    id: "04",
    title: "Belge Teslimi",
    text: "Onaylanan belgelerinizi size teslim ediyor ve süreç sonrası destek sunuyoruz.",
  },
];

const stats = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "200+", label: "Mutlu Müşteri" },
  { value: "%98", label: "Başarı Oranı" },
  { value: "15+", label: "Yıllık Tecrübe" },
];

type LandingPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LandingPage({ params }: LandingPageProps) {
  const { locale } = await params;
  const base = `/${locale}`;

  return (
    <main className="text-slate-900">
      <section id="anasayfa" className="scroll-mt-28 dark-grid sm:scroll-mt-32">
        <div className="mx-auto flex min-h-[calc(100vh-110px)] max-w-6xl items-center px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid gap-10 text-white lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Motorlu Taşıtlar İçin{" "}
                <span className="text-blue-400">TSE Uygunluk Belgeleri</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-slate-300 lg:mt-6 lg:text-lg">
                Araçlarınız için gerekli tüm TSE uygunluk belgelerini ve projelerini profesyonel
                ekibimizle hızlı ve güvenilir şekilde hazırlıyoruz.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200 lg:mt-7 lg:space-y-3 lg:text-base">
                <li>- Hızlı ve güvenilir süreç</li>
                <li>- Uzman kadro ile profesyonel destek</li>
                <li>- Tam uyumluluk garantisi</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-9 lg:gap-4">
                <Link
                  href={`${base}/hizmetler`}
                  className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 lg:px-6 lg:py-3.5 lg:text-lg"
                >
                  Hizmetlerimiz
                </Link>
                <Link
                  href={`${base}#iletisim`}
                  className="rounded-lg border border-blue-400/40 bg-blue-500/15 px-5 py-3 text-base font-semibold text-blue-100 transition hover:bg-blue-500/25 lg:px-6 lg:py-3.5 lg:text-lg"
                >
                  İletişim
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl lg:p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-xl bg-white/10 p-5 lg:p-6">
                  <p className="text-3xl font-bold text-blue-300 lg:text-4xl">500+</p>
                  <p className="mt-1 text-sm text-slate-200 lg:text-base">Tamamlanan Proje</p>
                </article>
                <article className="rounded-xl bg-white/10 p-5 lg:p-6">
                  <p className="text-3xl font-bold text-blue-300 lg:text-4xl">%98</p>
                  <p className="mt-1 text-sm text-slate-200 lg:text-base">Müşteri Memnuniyeti</p>
                </article>
              </div>
              <article className="mt-3 rounded-xl bg-white/10 p-5 lg:mt-4 lg:p-6">
                <p className="text-sm text-slate-100 lg:text-base">TSE Sertifikalı Onaylı Belgeler</p>
                <div className="mt-4 h-2 rounded-full bg-slate-700 lg:mt-5 lg:h-2.5">
                  <div className="h-full w-11/12 rounded-full bg-blue-400" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="surec"
        className="flex min-h-[calc(100svh+96px)] scroll-mt-28 flex-col items-center justify-center bg-slate-50 px-4 py-16 sm:scroll-mt-32 sm:px-6 lg:min-h-[calc(100svh-5.5rem)] lg:px-14 lg:py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-5xl lg:text-7xl">Basit ve Hızlı Süreç</h2>
            <p className="mt-4 text-slate-600 lg:mt-6 lg:text-2xl lg:leading-relaxed">
              4 adımda TSE uygunluk belgelerinize sahip olun. Her aşamada yanınızdayız.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">
            {steps.map((step) => (
              <article
                key={step.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-10"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white lg:h-14 lg:w-14 lg:text-lg">
                  {step.id}
                </span>
                <h3 className="mt-4 text-xl font-semibold lg:mt-6 lg:text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600 lg:mt-5 lg:text-lg">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="hakkimizda"
        className="dark-grid flex min-h-[calc(100svh+96px)] scroll-mt-28 flex-col items-center justify-center px-4 py-16 text-white sm:scroll-mt-32 sm:px-6 lg:min-h-[calc(100svh-5.5rem)] lg:px-14 lg:py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-5xl lg:text-7xl">Güvenilir ve Deneyimli Ekip</h2>
            <p className="mt-4 text-slate-300 lg:mt-6 lg:text-2xl lg:leading-relaxed">
              Yıllardır sektörde edindiğimiz tecrübe ve başarılarımızla yanınızdayız.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center lg:p-10"
              >
                <p className="text-4xl font-extrabold text-blue-400 lg:text-7xl">{stat.value}</p>
                <p className="mt-2 font-semibold text-slate-100 lg:mt-4 lg:text-xl">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="scroll-mt-28 bg-[#f8fafc] pb-12 pt-20 sm:scroll-mt-32 sm:pb-14 sm:pt-24 lg:pt-28"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <article className="w-full max-w-2xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
              Hemen İletişime Geçin
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 lg:mt-5 lg:max-w-2xl lg:text-xl lg:leading-relaxed">
              TSE uygunluk belgeleri ihtiyaçlarınız için size özel çözümler sunuyoruz. Telefon veya
              e-posta ile bize ulaşabilirsiniz.
            </p>

            <div className="mx-auto mt-8 max-w-xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-center lg:mt-10 lg:max-w-2xl lg:p-8 lg:text-lg">
              <p>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+902121234567" className="text-blue-600 hover:underline">
                  +90 (212) 123 45 67
                </a>
              </p>
              <p>
                <strong>E-posta:</strong>{" "}
                <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                  info@example.com
                </a>
              </p>
              <p>
                <strong>Adres:</strong> Örnek Mahallesi, Teknoloji Cad. No:123, İstanbul
              </p>
            </div>
            <p className="mt-6 text-sm text-slate-500 lg:mt-8 lg:text-base">
              Mesai saatleri: Pazartesi - Cuma 09:00 - 18:00
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
