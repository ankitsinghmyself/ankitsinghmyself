import HeaderNeo from "@/components/header-neo";
import FooterNeo from "@/components/footer-neo";

const AboutPageContent = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md">
      <HeaderNeo />

      <main className="max-w-[1440px] mx-auto px-margin-desktop py-12">
        {/* Hero / Title Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-data-mono text-label-sm border border-secondary">
              <span className="material-symbols-outlined text-[14px]">settings_accessibility</span>
              IDENTITY_MODULE: v1.0.4
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
              Architecting resilient digital <span className="text-secondary">ecosystems</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Senior Full-Stack Engineer specializing in high-throughput distributed systems. I bridge the gap between architectural theory and production-grade implementation.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end items-start pt-4">
            <div className="relative w-full aspect-square max-w-[320px] bg-surface-container-high border border-outline-variant p-4">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
              <img
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 border border-outline"
                alt="Professional portrait of Ankit Singh — Senior Full Stack Software Engineer."
                src="/images/portrait.png"
              />
              <div className="mt-4 font-data-mono text-label-sm text-on-surface-variant">
                IMG_ID: 0x9928_B <br />
                LOC: 12.9716° N, 77.5946° E
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Journey */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline-md text-headline-md text-primary shrink-0">01_ENGINEERING_JOURNEY</h2>
            <div className="h-[1px] w-full bg-outline-variant"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Frontend Foundation */}
            <div className="border border-outline-variant bg-surface-container-lowest p-6 relative overflow-hidden group">
              <div className="font-data-mono text-secondary mb-4 text-label-md">Phase_01: REACT_FOUNDATION</div>
              <p className="font-body-md text-on-surface-variant mb-6">
                Began by building interactive frontend experiences with React. Developed a strong foundation in component architecture, state management, and responsive user interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">ReactJS</span>
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">UI_Architecture</span>
              </div>
            </div>
            {/* Backend Engineering */}
            <div className="border border-outline-variant bg-surface-container-lowest p-6 relative overflow-hidden group">
              <div className="font-data-mono text-secondary mb-4 text-label-md">Phase_02: JAVA_SPRING_BOOT</div>
              <p className="font-body-md text-on-surface-variant mb-6">
                Expanded into backend engineering with Java and Spring Boot. Built maintainable APIs and enterprise services while deepening expertise in OOP, concurrency, and JVM fundamentals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">Java</span>
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">Spring_Boot</span>
              </div>
            </div>
            {/* Distributed Architecture */}
            <div className="border border-outline-variant bg-surface-container-lowest p-6 relative overflow-hidden group">
              <div className="font-data-mono text-secondary mb-4 text-label-md">Phase_03: DISTRIBUTED_CLOUD</div>
              <p className="font-body-md text-on-surface-variant mb-6">
                Progressed to distributed systems and full-stack architecture, working with Kafka, Kubernetes, CI/CD, and cloud-native infrastructure to build resilient services end to end.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">Distributed_Systems</span>
                <span className="px-2 py-1 bg-surface-container text-primary font-data-mono text-label-sm">Cloud_Native</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Philosophy & Stack */}
        <section className="mb-20 bg-primary p-margin-desktop text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-headline-md text-headline-md text-secondary-fixed mb-4">02_TECHNICAL_PHILOSOPHY</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
                &ldquo;Software is not merely code; it is a structural blueprint for logic. I build for <span className="text-secondary-fixed">resilience</span> by anticipating failure, and for <span className="text-secondary-fixed">scale</span> by respecting the physics of data.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="font-data-mono text-label-md mb-6 border-b border-primary-fixed-dim pb-2 inline-block">CORE_DEPENDENCIES</div>
                <ul className="space-y-4 font-data-mono text-body-md">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary-container"></span> REACT
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary-container"></span> JAVA 17 / SPRING BOOT 3
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary-container"></span> APACHE KAFKA (BROKER/STREAMS)
                  </li>
                  {/* <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary-container"></span> KUBERNETES &amp; DOCKER
                  </li> */}
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary-container"></span> MONGODB &amp; POSTGRESQL
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-data-mono text-label-md mb-6 border-b border-primary-fixed-dim pb-2 inline-block">ENGINEERING_PRINCIPLES</div>
                <ul className="space-y-4 font-body-md text-primary-fixed">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                    <span>Type-safety as a first-class citizen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                    <span>Stateless service design for horizontal scaling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                    <span>Product-minded engineering (Context {'>'} Syntax).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Milestones (Spec Sheets) */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline-md text-headline-md text-primary shrink-0">03_TECHNICAL_MILESTONES</h2>
            <div className="h-[1px] w-full bg-outline-variant"></div>
          </div>
          <div className="space-y-6">
            {/* Milestone 01 */}
            <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
              <div className="bg-surface-container-high px-6 py-2 flex justify-between items-center border-b border-outline-variant">
                <span className="font-data-mono text-label-md text-primary">BUILD_ID: 2023_RT_STREAM</span>
                <span className="font-data-mono text-label-sm text-on-surface-variant">STATUS: DEPLOYED</span>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="font-headline-md text-headline-md mb-2">Real-time Analytics Engine</h3>
                  <p className="font-data-mono text-label-sm text-secondary">PROJECT_ALPHA</p>
                </div>
                <div className="md:col-span-8 grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-surface-container-highest pl-4">
                    <div className="font-data-mono text-label-sm text-on-surface-variant">THROUGHPUT</div>
                    <div className="font-headline-md text-primary">10M+ req/min</div>
                  </div>
                  <div className="border-l-2 border-surface-container-highest pl-4">
                    <div className="font-data-mono text-label-sm text-on-surface-variant">LATENCY_P99</div>
                    <div className="font-headline-md text-primary">{'<'} 45ms</div>
                  </div>
                  <div className="col-span-2 mt-4 text-on-surface-variant">
                    Architected a reactive streaming pipeline processing millions of concurrent events using Spring WebFlux and Kafka, reducing infrastructure costs by 40%.
                  </div>
                </div>
              </div>
            </div>
            {/* Milestone 02 */}
            <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
              <div className="bg-surface-container-high px-6 py-2 flex justify-between items-center border-b border-outline-variant">
                <span className="font-data-mono text-label-md text-primary">BUILD_ID: 2022_CORE_MIGRATION</span>
                <span className="font-data-mono text-label-sm text-on-surface-variant">STATUS: COMPLETED</span>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="font-headline-md text-headline-md mb-2">Legacy Modernization</h3>
                  <p className="font-data-mono text-label-sm text-secondary">PROJECT_OMEGA</p>
                </div>
                <div className="md:col-span-8 grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-surface-container-highest pl-4">
                    <div className="font-data-mono text-label-sm text-on-surface-variant">UPTIME</div>
                    <div className="font-headline-md text-primary">99.995%</div>
                  </div>
                  <div className="border-l-2 border-surface-container-highest pl-4">
                    <div className="font-data-mono text-label-sm text-on-surface-variant">TECH_DEBT</div>
                    <div className="font-headline-md text-primary">-65%</div>
                  </div>
                  <div className="col-span-2 mt-4 text-on-surface-variant">
                    Led the migration of a monolithic PHP application to a Java/Spring Boot microservices architecture hosted on EKS, improving developer velocity significantly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests / Human Side */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline-md text-headline-md text-primary shrink-0">04_PERSONAL_INTERESTS</h2>
            <div className="h-[1px] w-full bg-outline-variant"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex gap-6 items-start p-6 bg-surface-container-lowest border border-outline-variant">
              <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center border border-outline-variant shrink-0">
                <span className="material-symbols-outlined text-primary text-[32px]">terminal</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">OSS Contributor</h4>
                <p className="text-on-surface-variant">Maintaining several utility libraries in the Java ecosystem focused on JSON parsing and reactive patterns.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 bg-surface-container-lowest border border-outline-variant">
              <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center border border-outline-variant shrink-0">
                <span className="material-symbols-outlined text-primary text-[32px]">groups</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Tech Mentor</h4>
                <p className="text-on-surface-variant">Advocate for technical literacy and career growth. Mentoring junior developers in system design fundamentals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterNeo year={currentYear} />
    </div>
  );
};

export default AboutPageContent;

