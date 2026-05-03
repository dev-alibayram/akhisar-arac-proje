import { services } from "@/content/services";

export default function EkHizmetlerPage() {
  return (
    <main className="text-white">
      <section className="dark-grid min-h-[calc(100svh+96px)]">
        <div className="mx-auto flex min-h-[calc(100svh+96px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <h1 className="mt-5 text-3xl font-bold sm:text-5xl lg:text-6xl">Ek Hizmetler</h1>
            <p className="mt-4 text-slate-300 lg:mt-5 lg:text-xl lg:leading-relaxed">
              Motorlu taşıtlarınız için ihtiyaç duyulan tüm TSE uygunluk belgeleri ve projelerini tek
              noktadan sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <article
                key={`extra-${service.title}`}
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
