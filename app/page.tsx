import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="mx-auto w-full max-w-6xl px-6 py-6">
        {/* El PNG tiene ~25% de margen transparente arriba y abajo: una caja de 80px deja el logo visible en ~40px. */}
        <Image
          src="/brand/dipz-logo-negro.png"
          alt="Dipz"
          width={104}
          height={80}
          preload
          className="h-20 w-auto object-contain"
        />
      </header>

      <main className="flex flex-1 flex-col">
        <section className="bg-surface py-16 md:py-30">
          <div className="mx-auto max-w-6xl px-6">
            <p className="type-eyebrow">THE FUTURE OF REAL ESTATE</p>
            <h1 className="mt-4 type-h1 md:type-display">ARQUITECTURA QUE PERMANECE</h1>
            <p className="mt-4 type-accent">Cada línea tiene un propósito.</p>
            <p className="mt-6 max-w-2xl type-body-lg text-ink-muted">
              Dipz desarrolla proyectos arquitectónicos pensados para durar. Este sitio está en
              construcción; mientras tanto, agenda una visita y conoce cómo trabajamos.
            </p>
            <button
              type="button"
              className="mt-10 rounded-pill bg-accent px-6 py-4 text-ink-inverse type-label focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Agendar visita
            </button>
          </div>
        </section>

        <section className="flex-1 bg-surface-inverse py-16 text-ink-inverse md:py-30">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 md:flex-row md:items-center">
            <Image
              src="/brand/dipz-monograma-blanco.png"
              alt="Dipz"
              width={124}
              height={96}
              className="h-24 w-auto object-contain"
            />
            <div>
              <h2 className="type-h2">Proyectos en desarrollo</h2>
              <p className="mt-4 max-w-xl type-body">
                Pronto encontrarás aquí los proyectos de Dipz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
