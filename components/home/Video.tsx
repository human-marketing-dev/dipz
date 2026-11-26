import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { getSitio } from "@/lib/contenido";
import { VideoPlayer } from "./VideoPlayer";

// Video institucional en 16:9. Con anchoCompleto ocupa todo el ancho de la pantalla, de orilla a orilla;
// si no, va dentro del marco y en escritorio su alto se limita al 70% de la pantalla (el ancho se
// ajusta en proporción) para que se vea completo sin hacer scroll. Sin ID de YouTube muestra el marcador con el
// botón de reproducir; con ID, el reproductor de YouTube sin cookies.
export async function Video() {
  const { video } = (await getSitio()).inicio;
  return (
    <section data-nav="dark" aria-label={video.eyebrow} className="bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="frame md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-arena md:col-span-2">
          {video.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {video.title}
        </Reveal>
      </div>

      <div className={`mt-10 md:mt-16 ${video.anchoCompleto ? "" : "frame"}`}>
        <Reveal
          delay={0.2}
          className={`relative mx-auto aspect-video w-full ${video.anchoCompleto ? "" : "md:max-w-[calc(70svh*16/9)]"}`}
        >
          {video.youtubeId ? (
            <VideoPlayer
              id={video.youtubeId}
              title={`${video.title}, video institucional`}
              portada={video.portada && `${video.portada.src.src}?w=2560&q=80&auto=format`}
            />
          ) : (
            <>
              <Placeholder
                label="Video institucional"
                drawing="landscape"
                tone="graphite"
                showCaption={false}
                className="size-full"
              />
              <span className="absolute top-4 right-4 rounded-pill border border-current px-3 py-1 type-caption text-arena">
                Video pendiente · YouTube
              </span>
              <span aria-hidden className="absolute inset-0 grid place-items-center">
                <span className="grid size-20 place-items-center rounded-pill bg-blanco-calido text-ink md:size-24">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="ml-1 size-6">
                    <path d="M4 2.5v11l9-5.5z" />
                  </svg>
                </span>
              </span>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
