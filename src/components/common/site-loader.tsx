const SiteLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="size-5 animate-spin rounded-full border-2 border-border border-t-foreground" />
        <p className="text-sm text-secondary">Loading</p>
      </div>
    </div>
  );
};

export default SiteLoader;

