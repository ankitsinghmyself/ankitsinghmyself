import { Code2 } from "lucide-react";

type SiteLoaderProps = {
  message?: string;
  title?: string;
};

const SiteLoader = ({
  message = "Preparing a smooth experience",
  title = "Loading",
}: SiteLoaderProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={title}
      className="site-loader"
    >
      <div className="site-loader-core" aria-hidden="true">
        <span className="site-loader-glow" />
        <span className="site-loader-ring site-loader-ring-primary" />
        <span className="site-loader-ring site-loader-ring-secondary" />
        <div className="site-loader-icon-shell">
          <Code2 className="site-loader-icon" />
        </div>
      </div>

      <div className="site-loader-copy">
        <p className="site-loader-title">
          {title}
          <span className="site-loader-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </p>
        <p className="site-loader-subtitle">{message}</p>
      </div>
    </div>
  );
};

export default SiteLoader;
