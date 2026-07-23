import HeaderNeo from "@/components/header-neo";
import FooterNeo from "@/components/footer-neo";

const StackPageContent = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md">
      <HeaderNeo />

      <main className="py-16 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-data-mono text-[10px] sm:text-label-sm text-secondary-container">
              REF_ID: 0x4F2A
            </span>
            <div className="h-px flex-grow bg-outline-variant" />
          </div>
          <h2 className="font-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase">
            SYSTEM_CORE_DEPENDENCIES
          </h2>
          <p className="font-data-mono text-[11px] sm:text-label-md text-on-surface-variant max-w-2xl mt-3 sm:mt-4 leading-relaxed">
            Architecture mapping of production-grade technologies, infrastructure
            protocols, and environmental specifications utilized in high-concurrency
            distributed systems.
          </p>
        </div>

        {/* Bento Grid - 12 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-gutter">
          {/* ─── 01: Backend & JVM ─── */}
          <section className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-4 sm:p-6 relative overflow-hidden group">
            <div className="absolute top-1 right-2 sm:top-3 sm:right-4 font-data-mono text-primary/10 text-5xl sm:text-6xl font-bold select-none">
              01
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 relative">
              {/* Java */}
              <div className="p-3 sm:p-4 border border-outline-variant hover:border-secondary transition-colors bg-white">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">code</span>
                  <span className="font-data-mono text-[9px] sm:text-[10px] px-1 bg-surface-container text-on-surface-variant border border-outline-variant">LTS</span>
                </div>
                <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">JAVA</h4>
                <p className="font-data-mono text-[10px] sm:text-label-sm text-secondary uppercase mt-1">SPEC: 21_AMAZON_CORRETTO</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-outline-variant/30 font-body-md text-[11px] sm:text-sm text-on-surface-variant">
                  Multi-threading, Virtual Threads, Records.
                </div>
              </div>

              {/* Spring Boot */}
              <div className="p-3 sm:p-4 border border-outline-variant hover:border-secondary transition-colors bg-white">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">bolt</span>
                </div>
                <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">SPRING BOOT</h4>
                <p className="font-data-mono text-[10px] sm:text-label-sm text-secondary uppercase mt-1">SPEC: 3.2.2_MVC_WEBFLUX</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-outline-variant/30 font-body-md text-[11px] sm:text-sm text-on-surface-variant">
                  Security, Cloud Stream, JPA, AOP.
                </div>
              </div>

              {/* Kafka */}
              <div className="p-3 sm:p-4 border border-outline-variant hover:border-secondary transition-colors bg-white">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">hub</span>
                </div>
                <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">KAFKA</h4>
                <p className="font-data-mono text-[10px] sm:text-label-sm text-secondary uppercase mt-1">SPEC: CONFLUENT_7.5</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-outline-variant/30 font-body-md text-[11px] sm:text-sm text-on-surface-variant">
                  Event streaming, Schema Registry, KSQL.
                </div>
              </div>
            </div>
          </section>

          {/* ─── 02: Data Infrastructure ─── */}
          <section className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-4 sm:p-6 relative">
            <div className="absolute top-1 right-2 sm:top-3 sm:right-4 font-data-mono text-primary/10 text-5xl sm:text-6xl font-bold select-none">
              02
            </div>
            <div className="space-y-4 sm:space-y-6">
              {/* PostgreSQL */}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">database</span>
                <div>
                  <h4 className="font-headline-md text-sm sm:text-body-md font-bold">POSTGRESQL</h4>
                  <span className="font-data-mono text-[10px] sm:text-label-sm text-secondary">V16.1_RDS</span>
                </div>
              </div>
              {/* MongoDB */}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">folder_zip</span>
                <div>
                  <h4 className="font-headline-md text-sm sm:text-body-md font-bold">MONGODB</h4>
                  <span className="font-data-mono text-[10px] sm:text-label-sm text-secondary">ATLAS_7.0_MDB</span>
                </div>
              </div>
              {/* Redis */}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">memory</span>
                <div>
                  <h4 className="font-headline-md text-sm sm:text-body-md font-bold">REDIS</h4>
                  <span className="font-data-mono text-[10px] sm:text-label-sm text-secondary">ELASTICACHE_OSS</span>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 03: Frontend Systems ─── */}
          <section className="md:col-span-5 bg-surface-container-lowest border border-outline-variant p-4 sm:p-6 relative">
            <div className="absolute top-1 right-2 sm:top-3 sm:right-4 font-data-mono text-primary/10 text-5xl sm:text-6xl font-bold select-none">
              03
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 border border-outline-variant bg-white">
                <div className="font-data-mono text-[9px] sm:text-[10px] text-on-surface-variant mb-1">LIB_01</div>
                <div className="font-headline-md text-xs sm:text-body-md font-bold">REACT</div>
                <div className="font-data-mono text-[10px] sm:text-[11px] text-secondary">V18.2_HOOKS</div>
              </div>
              <div className="p-2 sm:p-3 border border-outline-variant bg-white">
                <div className="font-data-mono text-[9px] sm:text-[10px] text-on-surface-variant mb-1">LIB_02</div>
                <div className="font-headline-md text-xs sm:text-body-md font-bold">TYPESCRIPT</div>
                <div className="font-data-mono text-[10px] sm:text-[11px] text-secondary">STRICT_5.3</div>
              </div>
              <div className="col-span-2 p-2 sm:p-3 border border-outline-variant bg-white">
                <div className="font-data-mono text-[9px] sm:text-[10px] text-on-surface-variant mb-1">STYLING</div>
                <div className="flex justify-between items-center">
                  <div className="font-headline-md text-xs sm:text-body-md font-bold">TAILWIND CSS</div>
                  <div className="font-data-mono text-[10px] sm:text-[11px] text-secondary">JIT_ENGINE</div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 04: Orchestration ─── */}
          <section className="md:col-span-7 bg-surface-container-lowest border border-outline-variant p-4 sm:p-6 relative">
            <div className="absolute top-1 right-2 sm:top-3 sm:right-4 font-data-mono text-primary/10 text-5xl sm:text-6xl font-bold select-none">
              04
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-gutter">
              <div className="flex-1 space-y-3 sm:space-y-4">
                {/* Kubernetes */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-outline-variant bg-white">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">grid_view</span>
                  <div>
                    <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">KUBERNETES</h4>
                    <p className="font-data-mono text-[10px] sm:text-label-sm text-secondary">VER: 1.29_EKS</p>
                  </div>
                </div>
                {/* Docker */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-outline-variant bg-white">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">box</span>
                  <div>
                    <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">DOCKER</h4>
                    <p className="font-data-mono text-[10px] sm:text-label-sm text-secondary">VER: 24.0_RUNTIME</p>
                  </div>
                </div>
              </div>

              {/* Terraform IaC */}
              <div className="flex-1 p-3 sm:p-4 border border-outline-variant bg-primary text-on-primary relative min-h-[120px] sm:min-h-0">
                <div className="font-data-mono text-[10px] sm:text-label-sm text-on-primary-container mb-3 sm:mb-4">
                  IaC_MODULE
                </div>
                <h4 className="font-headline-md text-sm sm:text-body-lg font-bold">TERRAFORM</h4>
                <p className="font-data-mono text-[10px] sm:text-label-sm text-primary-fixed-dim mt-1 sm:mt-2">HCL_SPEC: 1.7.0</p>
                <div className="mt-3 sm:mt-6 font-body-md text-[11px] sm:text-sm opacity-80">
                  Modular provisioning of VPCs, Subnets, and IAM roles across AWS regions.
                </div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                  <span className="material-symbols-outlined text-secondary-container text-xl sm:text-2xl">settings_input_component</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Technical Annotation */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-4 sm:p-6 border border-dashed border-outline">
          <div className="text-secondary flex-shrink-0">
            <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          </div>
          <div>
            <p className="font-data-mono text-[10px] sm:text-label-md text-on-surface uppercase tracking-widest mb-1 sm:mb-2">
              Architectural_Note:
            </p>
            <p className="font-body-md text-[11px] sm:text-sm text-on-surface-variant italic leading-relaxed">
              &ldquo;This stack is curated for maximum horizontal scalability and fault tolerance.
              Each component is integrated via strictly defined API contracts and asynchronous
              messaging patterns to ensure high availability and eventual consistency.&rdquo;
            </p>
          </div>
        </div>
      </main>

      <FooterNeo year={currentYear} />
    </div>
  );
};

export default StackPageContent;

