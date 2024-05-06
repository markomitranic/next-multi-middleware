import { type NextFetchEvent, type NextRequest } from "next/server";
import { type MiddlewareFactory } from "./MiddlewareFactory";

export const withSimpleLog: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    console.log("Simple Middleware called.");
    return next(request, event);
  };
};
