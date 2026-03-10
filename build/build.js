const fs = require("fs");
const path = require("path");
const { transform } = require("lightningcss");

const srcDir = path.join(__dirname, "..", "src");
const dist = path.join(__dirname, "..", "dist");
const docsDist = path.join(__dirname, "..", "docs", "dist");
const out = path.join(dist, "xylem.css");
const outMin = path.join(dist, "xylem.min.css");
const outMap = path.join(dist, "xylem.min.css.map");

/* Source partials in concat order */
const partials = [
  "_tokens.css",
  "_base.css",
  "_components.css",
  "_utilities.css",
  "_accessibility.css",
];

/*
 * Browser targets
 * Chrome 105+, Firefox 121+, Safari 15.4+
 */
const targets = {
  chrome: 105 << 16,
  firefox: 121 << 16,
  safari: 15 << 16 | 4 << 8,
};

function concat() {
  let css = partials
    .map((f) => fs.readFileSync(path.join(srcDir, f), "utf8"))
    .join("\n");

  /*
   * Expand DARK_TOKENS_START / DARK_TOKENS_END markers.
   * The source contains a single copy of the dark-mode token overrides
   * between these markers. We expand them into two rule blocks:
   *   1. @media (prefers-color-scheme: dark) — for auto dark mode
   *   2. :root[data-theme="dark"] — for manual toggle
   */
  const darkRe =
    /\/\* DARK_TOKENS_START \*\/([\s\S]*?)\/\* DARK_TOKENS_END \*\//;
  const match = css.match(darkRe);
  if (match) {
    const tokens = match[1];
    const expanded = [
      `@media (prefers-color-scheme: dark) {`,
      `  :root:not([data-theme="light"]) {`,
      `  ${tokens.trim()}`,
      `  }`,
      `}`,
      ``,
      `:root[data-theme="dark"] {`,
      `${tokens.trim()}`,
      `}`,
    ].join("\n");
    css = css.replace(darkRe, expanded);
  }

  return css;
}

function build() {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const css = concat();

  /*
   * lightningcss strips the standalone @layer order declaration during
   * transform.  We prepend it to the output so that layer precedence is
   * guaranteed even when Xylem is loaded after other layered stylesheets.
   */
  const layerOrder = "@layer base, components, utilities;\n";

  try {
    const readable = transform({
      filename: "xylem.css",
      code: Buffer.from(css),
      minify: false,
      targets,
    });

    const minified = transform({
      filename: "xylem.css",
      code: Buffer.from(css),
      minify: true,
      sourceMap: true,
      targets,
    });

    fs.writeFileSync(out, layerOrder + readable.code);
    fs.writeFileSync(outMin, layerOrder + minified.code);
    if (minified.map) {
      fs.writeFileSync(outMap, minified.map);
    }

    /* Copy to docs/dist/ for local preview and Pages deployment */
    if (!fs.existsSync(docsDist)) {
      fs.mkdirSync(docsDist, { recursive: true });
    }
    fs.writeFileSync(path.join(docsDist, "xylem.css"), layerOrder + readable.code);
    fs.writeFileSync(path.join(docsDist, "xylem.min.css"), layerOrder + minified.code);

    const size = (Buffer.byteLength(readable.code) / 1024).toFixed(1);
    const minSize = (Buffer.byteLength(minified.code) / 1024).toFixed(1);
    console.log(`Built dist/xylem.css (${size} KB) + dist/xylem.min.css (${minSize} KB)`);
  } catch (err) {
    console.error("Build failed:", err.message);
    if (err.loc) {
      console.error(`  at line ${err.loc.line}, column ${err.loc.column}`);
    }
    process.exitCode = 1;
  }
}

build();

if (process.argv.includes("--watch")) {
  console.log("Watching src/ for changes...");
  const debounce = {};
  for (const file of partials) {
    const filepath = path.join(srcDir, file);
    fs.watch(filepath, () => {
      clearTimeout(debounce[file]);
      debounce[file] = setTimeout(build, 50);
    });
  }
}
