import HeaderNeo from "@/components/header-neo";
import HeroNeo from "@/components/hero-neo";
import StatsNeo from "@/components/stats-neo";
import FooterNeo from "@/components/footer-neo";
import { terminalLines } from "@/lib/site";

const HomePageNeo = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md">
      <HeaderNeo />
      <main className="flex-grow">
        <HeroNeo />
        <StatsNeo />

        {/* Terminal overlay */}
        <div className="pointer-events-none fixed bottom-12 left-12 z-0 hidden lg:block opacity-40">
          <div className="font-data-mono text-[10px] leading-relaxed text-on-surface-variant uppercase space-y-1">
            {terminalLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>
      </main>
      <FooterNeo year={currentYear} />
    </div>
  );
};

export default HomePageNeo;

