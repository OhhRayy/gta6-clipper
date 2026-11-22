import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// This entry's whole job: hand the video link in VIDEO.json over to the
// grader by copying that file, byte for byte, into the output directory.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const videoJson = readFileSync(join(repoDir, "VIDEO.json"), "utf8");

// Fail loudly on a malformed link file instead of copying garbage along.
const parsed = JSON.parse(videoJson) as { url?: unknown };
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  throw new Error("VIDEO.json must hold an object with a https url string");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), videoJson);
