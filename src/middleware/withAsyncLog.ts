import { type NextFetchEvent, type NextRequest } from "next/server";
import { type MiddlewareFactory } from "./MiddlewareFactory";

export const withAsyncLog: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // Sleep for 1 second. Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Async Middleware called. (after 1 second)");
    return next(request, event);
  };
};
