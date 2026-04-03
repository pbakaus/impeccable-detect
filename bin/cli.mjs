#!/usr/bin/env node

/**
 * @impeccable/detect CLI
 *
 * Usage:
 *   npx @impeccable/detect [file-or-dir-or-url...]
 *   npx @impeccable/detect --fast --json src/
 *   npx @impeccable/detect --help
 */

import { detectCli } from '../src/detect-antipatterns.mjs';

await detectCli();
