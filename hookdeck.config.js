// Hookdeck SDK is a dependency of Hookdeck Vercel Middleware.
import { DestinationRateLimitPeriod, RetryStrategy } from "@hookdeck/sdk/api";

/** @type {import("@hookdeck/vercel").HookdeckConfig} */
const hookdeckConfig = {
  match: {
    "/api/webhooks": {
      retry: {
        strategy: RetryStrategy.Linear,
        count: 5,
        interval: 1 * 60 * 1000, // in milliseconds
      },
      rate: {
        limit: 10,
        period: DestinationRateLimitPeriod.Second,
      },
    },
  },
};

export default hookdeckConfig;
