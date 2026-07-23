import HeaderNeo from "@/components/header-neo";
import FooterNeo from "@/components/footer-neo";
import { blueprintProjects } from "@/lib/site";

const ProjectsPageContent = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md">
      <HeaderNeo />

      <main className="flex-grow">
        <section className="max-w-[1440px] mx-auto px-margin-desktop py-16">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-data-mono text-label-sm text-secondary-container">
                REF_ID: 0x7F3C_ARTIFACTS
              </span>
              <div className="h-px flex-grow bg-outline-variant" />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
              Selected_Artifacts
            </h1>
            <p className="font-data-mono text-label-md text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Curated portfolio of production-grade systems, architectural
              blueprints, and engineering artifacts demonstrating distributed
              systems design and full-stack implementation.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-gutter h-[800px] md:h-[600px]">
            {blueprintProjects.map((project) => (
              <div
                key={project.title}
                className={`${project.colSpan} border border-outline-variant bg-surface-container-lowest p-0 flex flex-col overflow-hidden group`}
              >
                {/* Project with image */}
                {project.hasImage ? (
                  <>
                    <div className="h-2/3 relative overflow-hidden border-b border-outline-variant">
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        data-alt={project.imgAlt}
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-headline-md text-headline-md text-primary">
                            {project.title}
                          </h4>
                          <p className="font-label-sm text-on-surface-variant mt-1">
                            {project.description}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-secondary">
                          open_in_new
                        </span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 border border-outline text-label-sm font-data-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : project.title === "Kube_Orchestrator" ? (
                  <div className="p-6 flex flex-col group h-full">
                    <div className="flex-grow flex items-center justify-center border border-dashed border-outline-variant mb-6 blueprint-accent">
                      <span className="material-symbols-outlined text-[64px] text-primary/20 group-hover:scale-110 transition-transform">
                        cloud_done
                      </span>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-primary">
                      {project.title}
                    </h4>
                    <p className="font-label-sm text-on-surface-variant mt-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 border border-outline text-label-sm font-data-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col justify-between group h-full">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary">
                        {project.title}
                      </h4>
                      <p className="font-label-sm text-on-surface-variant mt-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 border border-outline text-label-sm font-data-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-10 h-10 border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Annotation */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 border border-dashed border-outline">
            <div className="text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                inventory_2
              </span>
            </div>
            <div>
              <p className="font-data-mono text-label-md text-on-surface uppercase tracking-widest mb-2">
                Architectural_Note:
              </p>
              <p className="font-body-md text-sm text-on-surface-variant italic leading-relaxed">
                &ldquo;Each artifact represents a production-grade deployment. Metrics and
                specifications are drawn from actual system telemetry and post-mortem analyses.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterNeo year={currentYear} />
    </div>
  );
};

export default ProjectsPageContent;

