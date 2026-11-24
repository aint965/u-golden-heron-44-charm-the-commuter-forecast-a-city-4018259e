import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line weather forecast for the invented city of Mistwick:
// a real-forecast register bent by one small joke — fog so thick the
// bus driver is asking passengers to shout when they see their stop.
// The absurd turn follows from the weather itself: near-zero
// visibility means the driver cannot see the stops, so the commuters
// have to call them out. "Visibility down to one umbrella" keeps the
// broadcast-weather rhythm while measuring fog in commuter units.
const FORECAST =
  "Morning fog in Mistwick, 12°C, visibility down to one umbrella — the bus driver is asking passengers to shout when they see their stop.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
