"use strict";
const { renderHeader } = require("./header");
const { renderFooter } = require("./footer");
const { renderFloatingDownload, renderStickyCta } = require("./floatingElements");
const { organizationSchema, websiteSchema, schemaScript } = require("./schema");
const site = require("../content/site.config");

/**
 * @param {object} opts
 * @param {string} opts.slug            URL path, e.g. "/lottery/" or "/" for home
 * @param {string} opts.title           SEO <title>
 * @param {string} opts.metaDescription Meta description (~150-160 chars)
 * @param {string} opts.bodyHtml        Rendered page body (inside <main>)
 * @param {object[]} [opts.schemas]     Extra JSON-LD objects (FAQ, Breadcrumb, Article...)
 * @param {boolean} [opts.noindex]      Add noindex robots meta (used for Privacy/Contact if desired)
 */
function renderLayout({ slug, title, metaDescription, bodyHtml, schemas = [], noindex = false }) {
  const canonical = site.siteUrl.replace(/\/$/, "") + slug;
  const allSchemas = [organizationSchema(), websiteSchema(), ...schemas];

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${metaDescription}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow">'}
<meta name="theme-color" content="${site.themeColor}">
<meta name="google-site-verification" content="UWWFC1BQhro8tzO6aD8DLvQj8PmuxS51nr4qoZzWchM" />

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.siteName}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDescription}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.siteUrl}/assets/images/og-default.svg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${metaDescription}">
<meta name="twitter:image" content="${site.siteUrl}/assets/images/og-default.svg">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/manifest.json">

<link rel="preload" href="/styles/tokens.css" as="style">
<link rel="stylesheet" href="/styles/tokens.css">
<link rel="stylesheet" href="/styles/base.css">
<link rel="stylesheet" href="/styles/components.css">

${allSchemas.map(schemaScript).join("\n")}
</head>
<body>
${renderHeader(slug)}
<main id="main">
${bodyHtml}
</main>
${renderFooter()}
${renderFloatingDownload()}
${renderStickyCta()}
<script src="/scripts/main.js" defer></script>
</body>
</html>`;
}

module.exports = { renderLayout };
