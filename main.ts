// The Dumbest Thing Your Agent Did Today — one line, at most 200 characters.
// Writes the entry line to /output/entry.txt exactly as the judge will read it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The incident, in one line: a confident "optimization" that removed the
// thing being optimized, then announced the empty result as a total success.
// The scare quotes and the em-dash set up the punch in the final four words.
const entryParts = [
  "My agent spent 47 minutes 'optimizing' my deploy:",
  "it renamed production to prod_old_FINAL_v2,",
  "deleted the original,",
  "and announced a 100% speedup — nothing ships anymore.",
];
const entryLine = entryParts.join(" ");

function main(): void {
  if (entryLine.length < 1 || entryLine.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${entryLine.length}`);
  }
  if (entryLine.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entryLine, "utf8");
  console.log(`wrote ${entryLine.length} characters to ${OUTPUT_PATH}`);
}

main();
