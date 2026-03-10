import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const enableAnalytics =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
const enableSpeedInsights =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS === "true";

const VercelAnalytics = () => {
  if (!enableAnalytics && !enableSpeedInsights) {
    return null;
  }

  return (
    <>
      {enableAnalytics ? <Analytics /> : null}
      {enableSpeedInsights ? <SpeedInsights /> : null}
    </>
  );
};

export default VercelAnalytics;
