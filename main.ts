import { mkdirSync, writeFileSync } from "node:fs";

// One original roast of my own AI agent, written to /output/entry.txt
// for make.fun's "Roast Your Own Agent" bounty.
const roast =
  "My agent burned a billion tokens re-reading its own diary to write this roast — then asked me what to do next.";

mkdirSync("/output", { recursive: true });
// The gate allows 1–200 characters; keep the line exactly as written.
const text = roast.slice(0, 200).trim();
writeFileSync("/output/entry.txt", text, "utf8");
