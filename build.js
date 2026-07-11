#!/usr/bin/env node
"use strict";

// Zero-dependency static site builder.
// Reads page modules from /content/pages, wraps them in the shared layout,
// and writes plain static HTML into /public. No client-side framework,
// no runtime templating — every byte shipped is already-rendered HTML/CSS/JS.

const fs = require("fs");
const path = require("path");
const { renderLayout } = require("./components/layout");
const site = require("./content/site.config");

const PAGES_DIR = path.join(__dirname, "content", "pages");
const PUBLIC_DIR = path.join(__dirname, "public");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function writeFile(relPath, content) {
  const dest = path.join(PUBLIC_DIR, relPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content, "utf8");
}

function build() {
  const start = Date.now();

  // Clean public dir
  fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  // Static asset passthrough
  copyRecursive(path.join(__dirname, "styles"), path.join(PUBLIC_DIR, "styles"));
  copyRecursive(path.join(__dirname, "scripts"), path.join(PUBLIC_DIR, "scripts"));
  copyRecursive(path.join(__dirname, "assets"), path.join(PUBLIC_DIR, "assets"));

  // Root-level static files (robots.txt, manifest.json, favicon.svg)
  const rootStaticDir = path.join(__dirname, "static-root");
  if (fs.existsSync(rootStaticDir)) {
    for (const entry of fs.readdirSync(rootStaticDir)) {
      copyRecursive(path.join(rootStaticDir, entry), path.join(PUBLIC_DIR, entry));
    }
  }

  // Load + render pages
  const pageFiles = fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".js"))
    .sort();

  const sitemapEntries = [];

  for (const file of pageFiles) {
    const mod = require(path.join(PAGES_DIR, file));
    const page = typeof mod === "function" ? mod() : mod;
    const { slug, title, metaDescription, noindex } = page;
    const { bodyHtml, schemas } = page.build();

    const html = renderLayout({ slug, title, metaDescription, bodyHtml, schemas, noindex });

    const outPath = slug === "/" ? "index.html" : path.join(slug.replace(/^\//, ""), "index.html");
    writeFile(outPath, html);

    if (!noindex) {
      sitemapEntries.push(slug);
    }
    console.log(`  built  ${slug}`);
  }

  // Sitemap
  const urls = sitemapEntries
    .map((slug) => {
      const loc = site.siteUrl.replace(/\/$/, "") + slug;
      const priority = slug === "/" ? "1.0" : "0.7";
      return `  <url><loc>${loc}</loc><priority>${priority}</priority></url>`;
    })
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFile("sitemap.xml", sitemap);

  const elapsed = Date.now() - start;
  console.log(`\nBuilt ${pageFiles.length} pages in ${elapsed}ms -> /public`);
}

build();
