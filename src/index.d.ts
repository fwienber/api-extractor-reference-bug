/**
 * @packageDocumentation
 * This is package api-extractor-test.
 */

export { A } from "./A";
export { B } from "./B";
// re-export using renamed modules:
export { A as somepath_A } from "./somepath/A";
export { B as somepath_B } from "./somepath/B";

// re-export using namespace:
import * as somepath from "./somepath";
export {
  somepath
}
