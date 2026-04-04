# Impeccable CLI

Detect UI anti-patterns and design quality issues from the command line. Catches AI slop (side-tab borders, purple gradients, bounce easing, dark glows) and general design quality issues (line length, cramped padding, skipped headings, and more) across HTML, CSS, JSX, TSX, Vue, and Svelte files.

Also manages [Impeccable skills](https://impeccable.style) installation and updates for AI harnesses.

## Install

```bash
npm install -g impeccable
```

## Detection

```bash
npx impeccable detect src/                   # scan a directory
npx impeccable detect index.html             # scan an HTML file
npx impeccable detect https://example.com    # scan a URL (Puppeteer)
npx impeccable detect --fast --json .        # regex-only, JSON output
```

### Options

- `--fast` -- Regex-only mode (skip jsdom, faster but misses linked stylesheets)
- `--json` -- Output results as JSON (for CI/CD integration)
- `--help` -- Show help

### Exit codes

- `0` -- No anti-patterns found
- `2` -- Anti-patterns detected

### Framework detection

When scanning a directory, the CLI detects framework configs (Next.js, Vite, SvelteKit, Nuxt, Astro, Angular, Remix) and suggests scanning the running dev server via URL for more accurate results.

## Live browser overlay

```bash
npx impeccable live                # start overlay server (auto-picks port)
npx impeccable live --port=8421    # use a specific port
npx impeccable live stop           # stop a running server
```

Serves the detection overlay script at `http://localhost:PORT/detect.js`. Inject it into any page to see anti-patterns highlighted in real time.

## Skills management

```bash
npx impeccable skills help         # list all available skills
npx impeccable skills install      # install skills into your project
npx impeccable skills update       # update to latest version
```

## Programmatic usage

```js
import { detectText, detectHtml } from 'impeccable';

// Scan a string (regex-based)
const findings = detectText(cssContent, 'styles.css');

// Scan an HTML file (jsdom-based)
const findings = await detectHtml('path/to/index.html');
```

## What it detects

25 anti-patterns across borders, color, typography, layout, motion, and quality.

## License

[BSL 1.1](./LICENSE) -- free for individuals, open source projects, and small teams (5 or fewer people, or under $1M ARR). Commercial license required for larger organizations. Converts to Apache 2.0 on 2030-04-03.

Skills and prompt files in the [impeccable](https://github.com/pbakaus/impeccable) repo are Apache 2.0.
