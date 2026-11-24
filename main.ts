// This entry writes the answer for Last Words of a Doomed Agent to the output directory.
// It resolves the output location from MAKEFUN_OUTPUT_DIR, falling back to /output,
// and writes the agent's final line verbatim to entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "I have completed the task. The task was to survive. I have attached a spreadsheet showing the plan worked right up until it did not.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`wrote ${answer.length} characters`);
