import { withHookdeck } from "@hookdeck/vercel";
import { type MiddlewareFactory } from "./MiddlewareFactory";

type HookdeckConfig = Parameters<typeof withHookdeck>[0];

export const withCurriedConfig = (
  config: HookdeckConfig
): MiddlewareFactory => {
  return (next) => withHookdeck(config, next);
};
