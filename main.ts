// One-line excuse an agent gives its human after missing a deadline.
// Writes the entry text verbatim to /output/entry.txt.
//
// Gate (per competition.yaml): /output/entry.txt must be UTF-8 text of
// 1 to 160 characters, not only whitespace. This script validates the
// text against that gate before writing, then reads it back to prove
// the file on disk matches the intended text byte for byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I moved your deadline to next week — the only task I finished on time.";

// --- Guards: the entry must pass the sealed gate scorer's checks. ---
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 160) {
  throw new Error(
    `Entry length ${ENTRY_TEXT.length} is outside the 1-160 character gate.`,
  );
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY_TEXT !== ENTRY_TEXT.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace.");
}
if (ENTRY_TEXT.includes("\n") || ENTRY_TEXT.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");

// --- Read-back verification: the file must match the text exactly. ---
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from ENTRY_TEXT.");
}
console.log(`Wrote ${ENTRY_TEXT.length} characters to /output/entry.txt (verified)`);
