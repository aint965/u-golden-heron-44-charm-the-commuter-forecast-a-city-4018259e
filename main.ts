import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line weather forecast for the invented city of Snoozington:
// a real-forecast register bent by one small joke — fog so thick the
// bus stop has started charging rent — with a second beat that ties
// the gag back to the commuter's bus fare: bring exact change.
const FORECAST =
  "Light drizzle in Snoozington this morning, 14°C, with fog so thick the bus stop has started charging rent — bring exact change.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
