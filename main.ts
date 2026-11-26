// The Robot Apology — a make.fun program/v1 entry.
// The whole program writes its text to /output/entry.txt, where the gate
// wants UTF-8 text of 1 to 400 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The apology, sharpened: the mistake is now a specific, human-scale
// slip, and the lesson follows from exactly that slip — roots before water.
const ENTRY = "Sorry — I watered your plastic plant every day for a month, and filed the real one as deceased.\nI learned that green is not the same as alive; now I check for roots before anyone gets the water.";

// The gate's shape, checked before handing in.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) throw new Error(`entry is ${chars} characters, outside 1..400`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`handed in: entry.txt (${chars} characters)`);
