import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { video } from "./content";

// Video institucional, del margen al margen en 16:9. Sin ID de YouTube muestra el marcador con el
// botón de reproducir; con ID, el reproductor de YouTube sin cookies.
export function Video() {
  return (
    <section data-nav="dark" aria-label={video.eyebrow} className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-arena md:col-span-2">
          {video.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {video.title}
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative mt-10 aspect-video md:mt-16">
        {video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
            title={`${video.title}, video institucional`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <>
            <Placeholder label="Video institucional" drawing="landscape" tone="graphite" showCaption={false} className="size-full" />
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
    </section>
  );
}
