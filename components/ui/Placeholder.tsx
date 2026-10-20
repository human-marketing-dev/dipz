// Marcador de fotografía mientras llegan las fotos y renders de cada desarrollo.
// Dibujo de línea fina (alzado de torre, interior o paisaje) para que la composición se lea como la final.

type Drawing = "tower" | "slab" | "interior" | "landscape" | "street";
type Tone = "dark" | "graphite" | "sand" | "sage";

const tones: Record<Tone, { bg: string; line: string; caption: string }> = {
  dark: { bg: "bg-negro-profundo", line: "text-gris-grafito", caption: "text-arena" },
  graphite: { bg: "bg-gris-grafito", line: "text-arena/40", caption: "text-arena" },
  sand: { bg: "bg-arena", line: "text-gris-grafito/50", caption: "text-ink-muted" },
  sage: { bg: "bg-verde-salvia", line: "text-blanco-calido/30", caption: "text-blanco-calido" },
};

function Lines({ drawing }: { drawing: Drawing }) {
  switch (drawing) {
    case "tower":
      return (
        <g>
          <path d="M0 520h800" />
          <rect x="300" y="60" width="200" height="460" />
          {Array.from({ length: 22 }, (_, i) => (
            <path key={i} d={`M300 ${80 + i * 20}h200`} />
          ))}
          {[340, 380, 420, 460].map((x) => (
            <path key={x} d={`M${x} 60v460`} />
          ))}
          <rect x="520" y="300" width="140" height="220" />
          {Array.from({ length: 10 }, (_, i) => (
            <path key={i} d={`M520 ${320 + i * 20}h140`} />
          ))}
          <path d="M140 520V400h120v120M160 420h80M160 440h80M160 460h80" />
        </g>
      );
    case "slab":
      return (
        <g>
          <path d="M0 520h800" />
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d={`M${200 + (i % 2) * 16} ${160 + i * 30}h${380 - (i % 2) * 16}`} />
          ))}
          <path d="M220 160v360M580 160v360M330 160v360M450 160v360" />
          <path d="M180 160h440" />
        </g>
      );
    case "interior":
      return (
        <g>
          <path d="M0 440 220 340h360l220 100M220 340V80h360v260M220 80 0 0M580 80 800 0" />
          <path d="M280 140h100v200H280zM420 140h100v200H420z" />
          <path d="M260 400h180v24H260zM520 380h90v60h-90z" />
        </g>
      );
    case "landscape":
      return (
        <g>
          <path d="M0 360c120-60 200-120 300-90s160 80 260 40 160-60 240-20" />
          <path d="M0 420c160-20 260-60 380-40s220 40 420 10" />
          <path d="M0 520h800" />
          <rect x="300" y="420" width="220" height="100" />
          <path d="M300 440h220M360 420v100M460 420v100" />
          <circle cx="620" cy="140" r="36" />
        </g>
      );
    case "street":
      return (
        <g>
          <path d="M0 520h800M0 480h800" />
          <path d="M60 480V180h160v300M240 480V120h200v360M460 480V220h120v260M600 480V60h160v420" />
          {Array.from({ length: 14 }, (_, i) => (
            <path key={i} d={`M600 ${90 + i * 28}h160`} />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d={`M240 ${150 + i * 28}h200`} />
          ))}
        </g>
      );
  }
}

export function Placeholder({
  label,
  drawing = "tower",
  tone = "graphite",
  className = "",
  showCaption = true,
  captionClassName = "top-4 right-4",
}: {
  label: string;
  drawing?: Drawing;
  tone?: Tone;
  className?: string;
  showCaption?: boolean;
  captionClassName?: string;
}) {
  const t = tones[tone];
  return (
    <div role="img" aria-label={`Foto pendiente: ${label}`} className={`relative overflow-hidden ${t.bg} ${className}`}>
      <svg
        viewBox="0 0 800 520"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className={`absolute inset-0 size-full ${t.line}`}
        aria-hidden
      >
        <Lines drawing={drawing} />
      </svg>
      {showCaption && (
        <span className={`absolute ${captionClassName} rounded-pill border border-current px-3 py-1 type-caption ${t.caption}`}>
          Foto pendiente · {label}
        </span>
      )}
    </div>
  );
}
