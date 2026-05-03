import { ServiceCardsWithModal } from "@/components/services/ServiceCardsWithModal";

export default function EkHizmetlerPage() {
  return (
    <main className="min-w-0 w-full text-white">
      <section className="dark-grid w-full">
        <div className="mx-auto flex min-h-[calc(100svh-96px)] w-full min-w-0 max-w-6xl flex-col justify-start px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">Ek Hizmetler</h1>
            <p className="mt-4 text-slate-300 lg:mt-5 lg:text-xl lg:leading-relaxed">
              Motorlu taşıtlarınız için ihtiyaç duyulan tüm TSE uygunluk belgeleri ve projelerini tek
              noktadan sunuyoruz.
            </p>
          </div>

          <ServiceCardsWithModal reactKeyPrefix="ek" />
        </div>
      </section>
    </main>
  );
}
