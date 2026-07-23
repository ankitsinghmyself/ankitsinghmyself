import { neoHero, architectureLayers } from "@/lib/site";

const HeroNeo = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-margin-desktop py-16 grid grid-cols-12 gap-gutter relative">
      {/* Left: Main content */}
      <div className="col-span-12 md:col-span-8 space-y-8">
        {/* Status badge */}
        <div className="inline-block px-3 py-1 bg-secondary text-on-secondary font-data-mono text-label-sm mb-4">
          {neoHero.statusBadge}
        </div>

        {/* Heading */}
        <h1 className="font-headline-lg text-headline-lg text-primary max-w-2xl">
          SYSTEM ARCHITECT // <br />
          <span className="text-secondary">FULL-STACK ENGINEER</span>
        </h1>

        {/* Tagline */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          {neoHero.tagline}
        </p>

        {/* Technical Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <div className="border border-outline-variant bg-surface p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 font-data-mono text-[80px] leading-none select-none group-hover:opacity-20 transition-opacity">
              01
            </div>
            <h3 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest border-b border-outline-variant pb-2">
              CORE_ENGINE
            </h3>
            <ul className="space-y-3 font-data-mono text-label-md">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> Java 17+ (LTS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> Spring Boot 3.x
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> ReactJS
              </li>
            </ul>
          </div>

          <div className="border border-outline-variant bg-surface p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 font-data-mono text-[80px] leading-none select-none group-hover:opacity-20 transition-opacity">
              02
            </div>
            <h3 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest border-b border-outline-variant pb-2">
              DATA_INFRA
            </h3>
            <ul className="space-y-3 font-data-mono text-label-md">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> Apache Kafka
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> MongoDB Atlas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary shrink-0" /> PostgreSQL
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Architecture Diagram */}
      <div className="hidden md:flex col-span-4 flex-col justify-center items-center relative py-12">
        <div className="w-full h-full border border-outline border-dashed p-8 blueprint-accent flex flex-col gap-6 items-center justify-center">
          {architectureLayers.map((layer) => (
            <div
              key={layer.label}
              className={`w-48 p-4 border ${layer.color} bg-surface flex flex-col items-center gap-2 technical-callout`}
            >
              <span className={`material-symbols-outlined ${layer.iconColor}`}>
                {layer.icon}
              </span>
              <span className="font-label-md uppercase">{layer.label}</span>
              <div className="text-[10px] font-data-mono text-on-surface-variant">
                {layer.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroNeo;

