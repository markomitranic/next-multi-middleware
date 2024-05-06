/* eslint-disable @typescript-eslint/no-unsafe-argument */
import hookdeckConfig from "hookdeck.config";
import { chain } from "./middleware/chain";
import { withAsyncLog } from "./middleware/withAsyncLog";
import { withCurriedConfig } from "./middleware/withCurriedConfig";
import { withSimpleLog } from "./middleware/withSimpleLog";

export default chain([
  withSimpleLog,
  withAsyncLog,
  withCurriedConfig(hookdeckConfig),
]);

export const config = { matcher: ["/"] };
