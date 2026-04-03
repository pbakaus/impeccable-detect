# @impeccable/detect

Deterministic UI anti-pattern detector. Catches AI slop (side-tab borders, purple gradients, bounce easing, dark glows) and general design quality issues (line length, cramped padding, skipped headings, and more) across HTML, CSS, JSX, TSX, Vue, and Svelte files.

## Install

```bash
npm install @impeccable/detect
```

## CLI Usage

```bash
npx @impeccable/detect src/                   # scan a directory
npx @impeccable/detect index.html             # scan an HTML file
npx @impeccable/detect https://example.com    # scan a URL (Puppeteer)
npx @impeccable/detect --fast --json .        # regex-only, JSON output
```

### Options

- `--fast` -- Regex-only mode (skip jsdom, faster but misses linked stylesheets)
- `--json` -- Output results as JSON (for CI/CD integration)
- `--help` -- Show help

### Detection modes

| Input | Method | Best for |
|---|---|---|
| HTML files | jsdom + computed styles | Full accuracy, catches linked CSS |
| Non-HTML files | Regex pattern matching | JSX, TSX, Vue, Svelte, CSS-in-JS |
| URLs | Puppeteer rendering | Production sites, full browser fidelity |
| `--fast` | Regex for all files | Speed, CI/CD pipelines |

### Exit codes

- `0` -- No anti-patterns found
- `2` -- Anti-patterns detected

### Framework detection

When scanning a directory, the CLI detects framework configs (Next.js, Vite, SvelteKit, Nuxt, Astro, Angular, Remix) and suggests scanning the running dev server via URL for more accurate results.

## Programmatic Usage

```js
import { detectText, detectHtml } from '@impeccable/detect';

// Scan a string (regex-based)
const findings = detectText(cssContent, 'styles.css');

// Scan an HTML file (jsdom-based)
const findings = await detectHtml('path/to/index.html');
```

## What it detects

25 anti-patterns across borders, color, typography, layout, motion, and quality.

## License

[BSL 1.1](./LICENSE) -- free for individuals, open source projects, and small teams (5 or fewer people, or under $1M ARR). Commercial license required for larger organizations. Converts to Apache 2.0 on 2030-04-03.

Part of the [Impeccable](https://impeccable.style) project.
