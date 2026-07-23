import { blueprintProjects } from "@/lib/site";

const StatsNeo = () => {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-margin-desktop py-12">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter">
          Selected_Artifacts
        </h2>
        <div className="h-px flex-grow bg-outline-variant" />
        <span className="font-data-mono text-label-sm text-on-surface-variant">
          [ COUNT: 0{blueprintProjects.length} ]
        </span>
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
    </section>
  );
};

export default StatsNeo;

