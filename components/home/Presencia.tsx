import { Reveal } from "@/components/ui/Reveal";
import { presencia } from "./content";

// Plano de coordenadas con Monterrey como origen. Mapa ilustrativo hasta confirmar las ciudades.
function Plano() {
  const lons = [-116, -110, -104, -98, -92, -86];
  const lats = [34, 30, 26, 22, 18];
  const x = (lon: number) => ((lon + 118) / 34) * 600;
  const y = (lat: number) => ((36 - lat) / 22) * 440;
  const mty = { x: x(-100.31), y: y(25.67) };
  return (
    <svg viewBox="0 0 600 440" fill="none" className="w-full" aria-hidden>
      {lons.map((l) => (
        <g key={l}>
          <path d={`M${x(l)} 0v440`} stroke="currentColor" strokeWidth="1" className="text-arena" />
          <text x={x(l) + 6} y={432} className="fill-ink-muted type-caption">{Math.abs(l)}° O</text>
        </g>
      ))}
      {lats.map((l) => (
        <g key={l}>
          <path d={`M0 ${y(l)}h600`} stroke="currentColor" strokeWidth="1" className="text-arena" />
          <text x={6} y={y(l) - 6} className="fill-ink-muted type-caption">{l}° N</text>
        </g>
      ))}
      {/* Expansión hacia Estados Unidos */}
      <path d={`M${mty.x} ${mty.y - 14} C ${mty.x} ${mty.y - 90}, ${mty.x - 10} ${y(31)}, ${mty.x - 30} ${y(32.4)}`} stroke="currentColor" strokeDasharray="4 5" className="text-verde-salvia" />
      <circle cx={mty.x - 30} cy={y(32.4)} r="5" stroke="currentColor" className="text-verde-salvia" />
      <text x={mty.x - 18} y={y(32.4) - 10} className="fill-verde-salvia type-caption">Estados Unidos · expansión</text>
      {/* Monterrey y San Pedro */}
      <circle cx={mty.x} cy={mty.y} r="6" className="ping-dipz fill-verde-salvia" />
      <circle cx={mty.x} cy={mty.y} r="6" className="fill-verde-salvia" />
      <path d={`M${mty.x} ${mty.y + 12}v40h70`} stroke="currentColor" className="text-ink" />
      <text x={mty.x + 76} y={mty.y + 50} className="fill-ink type-label">Monterrey · San Pedro</text>
      <text x={mty.x + 76} y={mty.y + 68} className="fill-ink-muted type-caption">25.67° N · 100.31° O</text>
    </svg>
  );
}

export function Presencia() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:flex md:min-h-[100dvh] md:items-center md:py-30">
      <div className="w-full md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-2">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {presencia.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {presencia.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted">
            {presencia.paragraph}
          </Reveal>
          <ul className="mt-10 border-t border-line">
            {presencia.cities.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between border-b border-line py-3">
                <span className="type-body">{c.name}</span>
                <span className="type-caption text-ink-muted">{c.note}</span>
              </li>
            ))}
            <li className="py-3 type-caption text-ink-muted">{presencia.pending}</li>
          </ul>
        </div>
        <Reveal delay={0.2} className="mt-12 md:col-span-3 md:col-start-4 md:mt-0">
          <Plano />
          <p className="mt-3 type-caption text-ink-muted">Mapa ilustrativo. El listado de ciudades se integra al confirmarse.</p>
        </Reveal>
      </div>
    </section>
  );
}
