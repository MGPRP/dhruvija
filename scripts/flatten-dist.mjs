// Moves the static client build (dist/client) to dist/ and drops the server bundle,
// leaving dist/index.html + dist/assets ready for any static host.
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";

if (existsSync("dist/client")) {
  // Clear output left over from previous builds so stale hashed assets don't pile up.
  for (const entry of readdirSync("dist")) {
    if (entry !== "client") rmSync(`dist/${entry}`, { recursive: true, force: true });
  }
  cpSync("dist/client", "dist", { recursive: true });
  rmSync("dist/client", { recursive: true, force: true });
}
