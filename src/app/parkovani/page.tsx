import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Parkování | Penzion U Leopolda",
  description: "Informace o možnostech parkování u penzionu U Leopolda v Brně.",
};

export default function ParkingPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <Header />
      
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
        <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
          Parkování u penzionu
        </h1>
        <p className="mt-6 text-lg leading-8 text-stone-600">
          Chceme, aby byl váš příjezd co nejpohodlnější. Protože se nacházíme v klidné zástavbě, 
          máme k dispozici omezený počet vlastních parkovacích míst. Zde najdete všechny možnosti, 
          jak u nás bez problémů zaparkovat.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-[1.75rem] bg-[#fdfaf6] p-8 shadow-[0_8px_20px_rgba(28,25,23,0.035)] ring-1 ring-stone-200/75">
            <h2 className="text-2xl font-semibold text-stone-900">1. Vyložení zavazadel a ubytování</h2>
            <p className="mt-4 text-[17px] leading-8 text-stone-700">
              Při příjezdu si s parkováním nemusíte dělat starosti. Pro vyložení zavazadel a samotné 
              ubytování můžete na nezbytně nutnou dobu zastavit <strong>přímo před dvěma garážemi 
              našeho penzionu</strong>. Jakmile si věci odnesete na pokoj, prosíme o přeparkování vozu 
              na jedno z níže uvedených míst.
            </p>
          </section>

          <section className="rounded-[1.75rem] bg-[#fdfaf6] p-8 shadow-[0_8px_20px_rgba(28,25,23,0.035)] ring-1 ring-stone-200/75">
            <h2 className="text-2xl font-semibold text-stone-900">2. Naše vyhrazená stání</h2>
            <p className="mt-4 text-[17px] leading-8 text-stone-700">
              Přímo před penzionem máme k dispozici <strong>3 vyhrazená parkovací stání</strong> pro naše hosty. 
              Tato místa jsou zdarma a fungují na principu "kdo dřív přijde". Pokud je zde volno, 
              můžete zde svůj vůz bez obav nechat po celou dobu pobytu.
            </p>
          </section>

          <section className="rounded-[1.75rem] bg-[#fdfaf6] p-8 shadow-[0_8px_20px_rgba(28,25,23,0.035)] ring-1 ring-stone-200/75">
            <h2 className="text-2xl font-semibold text-stone-900">3. Parkování v okolních ulicích a na veřejném parkovišti</h2>
            <p className="mt-4 text-[17px] leading-8 text-stone-700">
              Pokud jsou naše vyhrazená stání plná, není to žádný problém. V přilehlých ulicích 
              v bezprostřední blízkosti penzionu se dá běžně a bezplatně zaparkovat. 
            </p>
            <p className="mt-4 text-[17px] leading-8 text-stone-700">
              Kousek od nás (cca 2 minuty chůze) se také nachází{" "}
              <a 
                href="https://maps.app.goo.gl/7SiLaoMFLbwkBtap6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-700"
              >
                veřejné parkoviště
              </a>
              , které můžete využít.
            </p>
            <p className="mt-6 text-[16px] leading-8 text-stone-600">
              <em>Tip: Pokud si nebudete jistí, kde přesně zaparkovat, zeptejte se nás při příjezdu. Rádi vám ukážeme nejbližší volná místa.</em>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
