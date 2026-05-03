import { services } from "@/content/services";

export default function HizmetlerPage() {
  return (
    <main className="min-w-0 w-full text-white">
      <section className="dark-grid w-full">
        <div className="mx-auto flex min-h-[calc(100svh-96px)] w-full min-w-0 max-w-6xl flex-col justify-start px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="w-full text-center">
            <div className="flex w-full justify-center">
              <h1 className="w-full text-center text-3xl font-bold sm:text-5xl lg:w-auto lg:max-w-[calc(100vw-2rem)] lg:text-6xl lg:whitespace-nowrap">
                Kapsamlı TSE Belgelendirme Çözümleri
              </h1>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 lg:mt-5 lg:text-xl lg:leading-relaxed">
              Motorlu taşıtlarınız için ihtiyaç duyulan tüm TSE uygunluk belgeleri ve projelerini tek
              noktadan sunuyoruz.
            </p>
          </div>

          <div className="mt-12 flex w-full flex-wrap justify-center gap-5 sm:gap-6 lg:mt-16">
            {services.map((service) => (
              <article
                key={service.title}
                className="box-border flex h-[min(300px,calc(100vw-2rem))] w-[min(300px,calc(100vw-2rem))] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:h-[300px] sm:w-[300px] sm:p-5"
              >
                <h2 className="line-clamp-2 shrink-0 text-lg font-semibold text-white sm:text-xl">
                  {service.title}
                </h2>
                <p className="mt-2 min-h-0 flex-1 overflow-y-auto text-xs leading-snug text-slate-300 sm:mt-3 sm:text-sm">
                  {service.description}
                </p>
                <a
                  href="mailto:info@example.com?subject=Hizmet%20hakkında%20bilgi"
                  className="mt-3 shrink-0 text-sm font-semibold text-blue-300 sm:mt-auto"
                >
                  Detaylı Bilgi
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
