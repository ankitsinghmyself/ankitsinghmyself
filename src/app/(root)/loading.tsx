import SiteLoader from "@/components/common/site-loader";

export default function Loading() {
  return (
    <div className="site-loader-overlay" data-state="visible">
      <SiteLoader message="Loading the next section" />
    </div>
  );
}
