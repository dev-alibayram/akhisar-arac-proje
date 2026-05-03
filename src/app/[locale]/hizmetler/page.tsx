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

          <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-8"
              >
                <h2 className="text-xl font-semibold text-white lg:text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm text-slate-300 lg:mt-4 lg:text-base">{service.description}</p>
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
    </main>
  );
}
