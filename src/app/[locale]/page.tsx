import { SiteNavbar } from "@/components/common/SiteNavbar";

const services = [
  {
    title: "Tip Onayı Belgeleri",
    description:
      "Motorlu taşıtlar için TSE tip onayı belgelerinin hazırlanması ve tescil süreçleri.",
  },
  {
    title: "Uygunluk Sertifikaları",
    description:
      "Güvenlik standartlarına uygun araç modifikasyonları için uygunluk belgeleri.",
  },
  {
    title: "Periyodik Muayene",
    description:
      "Ticari araçlar için zorunlu periyodik muayene ve dokümantasyon hizmetleri.",
  },
  {
    title: "CE Belgesi",
    description:
      "AB standartlarına uygun araç ve ekipmanlar için CE belgesi danışmanlığı.",
  },
  {
    title: "Teknik Proje Hazırlama",
    description:
      "Araç modifikasyonları ve özel donanımlar için teknik proje dokümantasyonu.",
  },
  {
    title: "Hızlı Belgelendirme",
    description:
      "Acil ihtiyaçlar için hızlandırılmış belgelendirme ve onay süreçleri.",
  },
];

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

export default function LandingPage() {
  return (
    <main className="text-slate-900">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#071534]/92 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white backdrop-blur sm:px-6">
            <SiteNavbar />
          </div>
        </div>
      </div>

      <section id="anasayfa" className="dark-grid">
        <div className="mx-auto flex min-h-[calc(100vh-110px)] max-w-6xl items-center px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid gap-10 text-white lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Motorlu Taşıtlar İçin{" "}
                <span className="text-blue-400">TSE Uygunluk Belgeleri</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-slate-300 lg:mt-6 lg:text-lg">
                Araçlarınız için gerekli tüm TSE uygunluk belgelerini ve
                projelerini profesyonel ekibimizle hızlı ve güvenilir şekilde
                hazırlıyoruz.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200 lg:mt-7 lg:space-y-3 lg:text-base">
                <li>- Hızlı ve güvenilir süreç</li>
                <li>- Uzman kadro ile profesyonel destek</li>
                <li>- Tam uyumluluk garantisi</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-9 lg:gap-4">
                <a
                  href="#hizmetler"
                  className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 lg:px-6 lg:py-3.5 lg:text-lg"
                >
                  Hizmetlerimiz
                </a>
                <a
                  href="#iletisim"
                  className="rounded-lg border border-blue-400/40 bg-blue-500/15 px-5 py-3 text-base font-semibold text-blue-100 transition hover:bg-blue-500/25 lg:px-6 lg:py-3.5 lg:text-lg"
                >
                  İletişim
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl lg:p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-xl bg-white/10 p-5 lg:p-6">
                  <p className="text-3xl font-bold text-blue-300 lg:text-4xl">
                    500+
                  </p>
                  <p className="mt-1 text-sm text-slate-200 lg:text-base">
                    Tamamlanan Proje
                  </p>
                </article>
                <article className="rounded-xl bg-white/10 p-5 lg:p-6">
                  <p className="text-3xl font-bold text-blue-300 lg:text-4xl">
                    %98
                  </p>
                  <p className="mt-1 text-sm text-slate-200 lg:text-base">
                    Müşteri Memnuniyeti
                  </p>
                </article>
              </div>
              <article className="mt-3 rounded-xl bg-white/10 p-5 lg:mt-4 lg:p-6">
                <p className="text-sm text-slate-100 lg:text-base">
                  TSE Sertifikalı Onaylı Belgeler
                </p>
                <div className="mt-4 h-2 rounded-full bg-slate-700 lg:mt-5 lg:h-2.5">
                  <div className="h-full w-11/12 rounded-full bg-blue-400" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler">
        <div className="mx-auto flex min-h-[calc(100svh+96px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h2 className="mt-5 w-full text-center text-3xl font-bold sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
              Kapsamlı TSE Belgelendirme Çözümleri
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 lg:mt-5 lg:text-lg">
              Motorlu taşıtlarınız için ihtiyaç duyulan tüm TSE uygunluk
              belgeleri ve projelerini tek noktadan sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-8"
              >
                <h3 className="text-xl font-semibold lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 lg:mt-4 lg:text-base">
                  {service.description}
                </p>
                <a
                  href="mailto:info@example.com?subject=Hizmet%20hakkında%20bilgi"
                  className="mt-5 inline-block text-sm font-semibold text-blue-600 lg:mt-6 lg:text-base"
                >
                  Detaylı Bilgi
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ek-hizmetler" className="dark-grid text-white">
        <div className="mx-auto flex min-h-[calc(100svh+96px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl lg:text-6xl">
              Ek Hizmetler
            </h2>
            <p className="mt-4 text-slate-300 lg:mt-5 lg:text-xl lg:leading-relaxed">
              Motorlu taşıtlarınız için ihtiyaç duyulan tüm TSE uygunluk
              belgeleri ve projelerini tek noktadan sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <article
                key={`extra-${service.title}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-8"
              >
                <h3 className="text-xl font-semibold text-white lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 lg:mt-4 lg:text-base">
                  {service.description}
                </p>
                <a
                  href="mailto:info@example.com?subject=Hizmet%20hakkında%20bilgi"
                  className="mt-5 inline-block text-sm font-semibold text-blue-300 lg:mt-6 lg:text-base"
                >
                  Detaylı Bilgi
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="bg-slate-50">
        <div className="mx-auto flex min-h-[calc(100svh+96px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl lg:text-6xl">
              Basit ve Hızlı Süreç
            </h2>
            <p className="mt-4 text-slate-600 lg:mt-5 lg:text-xl lg:leading-relaxed">
              4 adımda TSE uygunluk belgelerinize sahip olun. Her aşamada
              yanınızdayız.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
            {steps.map((step) => (
              <article
                key={step.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 lg:p-8"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white lg:h-12 lg:w-12 lg:text-base">
                  {step.id}
                </span>
                <h3 className="mt-4 text-xl font-semibold lg:mt-5 lg:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600 lg:mt-4 lg:text-base">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="dark-grid text-white">
        <div className="mx-auto flex min-h-[calc(100svh+96px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full border border-blue-300/30 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
              Rakamlarla Biz
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
              Güvenilir ve Deneyimli Ekip
            </h2>
            <p className="mt-4 text-slate-300">
              Yıllardır sektörde edindiğimiz tecrübe ve başarılarımızla
              yanınızdayız.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-4xl font-extrabold text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-2 font-semibold text-slate-100">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="flex min-h-[calc(100svh-96px)] flex-col justify-between"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center px-4 pb-6 pt-8 sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-2xl">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              İletişim
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl lg:whitespace-nowrap">
              Hemen İletişime Geçin
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              TSE uygunluk belgeleri ihtiyaçlarınız için size özel çözümler
              sunuyoruz. Telefon veya e-posta ile bize ulaşabilirsiniz.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
              <p>
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+902121234567"
                  className="text-blue-600 hover:underline"
                >
                  +90 (212) 123 45 67
                </a>
              </p>
              <p>
                <strong>E-posta:</strong>{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-blue-600 hover:underline"
                >
                  info@example.com
                </a>
              </p>
              <p>
                <strong>Adres:</strong> Örnek Mahallesi, Teknoloji Cad. No:123,
                İstanbul
              </p>
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              Mesai saatleri: Pazartesi - Cuma 09:00 - 18:00
            </p>
          </article>
        </div>

        <div className="bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                Akhisar Araç Proje
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Motorlu taşıtlar için TSE uygunluk belgeleri ve projelerinde
                uzman ekibimizle yanınızdayız.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Hızlı Linkler</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#anasayfa">Ana Sayfa</a>
                </li>
                <li>
                  <a href="#hizmetler">Hizmetlerimiz</a>
                </li>
                <li>
                  <a href="#hakkimizda">Hakkımızda</a>
                </li>
                <li>
                  <a href="#iletisim">İletişim</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Hizmetlerimiz</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Tip Onayı Belgesi</li>
                <li>Uygunluk Sertifikası</li>
                <li>Periyodik Muayene</li>
                <li>CE Belgesi</li>
                <li>Teknik Proje</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">İletişim</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>+90 (212) 123 45 67</li>
                <li>info@example.com</li>
                <li>Örnek Mahallesi, Teknoloji Cad. No:123, İstanbul</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/90 px-4 py-2 text-center text-[11px] text-slate-400 sm:text-xs">
            © 2026 Akhisar Araç Proje - Designed by dev.alibayram@gmail.com
          </div>
        </div>
      </section>
    </main>
  );
}
