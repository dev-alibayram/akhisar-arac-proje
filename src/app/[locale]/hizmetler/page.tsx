import { ServiceCardsWithModal } from "@/components/hizmetler/ServiceCardsWithModal";

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

          <ServiceCardsWithModal />
        </div>
      </section>
    </main>
  );
}
