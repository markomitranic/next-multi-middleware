import { NextResponse, type NextMiddleware } from "next/server";
import { type MiddlewareFactory } from "./MiddlewareFactory";

/**
 * Allows pretty chaining of middleware functions.
 *
 * @see https://github.com/jmarioste/next-middleware-guide/tree/main
 * @example
 * export default chain([withSimpleLog, withAsyncLog]);
 */
export function chain(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
