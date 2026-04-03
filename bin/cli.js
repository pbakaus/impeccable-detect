#!/usr/bin/env node

/**
 * @impeccable/detect CLI
 *
 * Usage:
 *   npx @impeccable/detect [file-or-dir-or-url...]    # scan for anti-patterns
 *   npx @impeccable/detect live [--port=PORT]          # start browser overlay server
 *   npx @impeccable/detect --help
 */

import { detectCli, liveCli } from '../src/detect-antipatterns.mjs';

const command = process.argv[2];

if (command === 'live') {
  // Shift args so liveCli sees --port etc. in the right positions
  process.argv.splice(2, 1);
  await liveCli();
} else {
  await detectCli();
}
