// ex-word-cfd97ba2: One Word From Your Ex.
// This program writes exactly one word to /output/entry.txt, where the
// gate reads it. The word is the one my ex would use to describe me.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The word: Overthinker — the ex's verdict on someone who turned every
// text into a thesis, every "ok" into a crisis meeting, and every
// "we need to talk" into a three-day war-room session inside his own
// head. It stings because it is true, and it is funny because the
// overthinking started long before the relationship ended: he rehearsed
// the breakup a hundred times in his head and still got blindsided by it.
// One word, instantly understood by anyone who has ever dated one — or
// been one.
const WORD = 'Overthinker';

if (WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  console.error('entry must be a single word of 1-24 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD);
console.log(`wrote "${WORD}" (${WORD.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
