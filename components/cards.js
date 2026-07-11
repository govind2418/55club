"use strict";
const { icons } = require("./icons");

// items: [{ icon, title, text }]
function renderFeatureGrid(items, opts = {}) {
  const { eyebrow, title, text, cols = 3 } = opts;
  const cards = items
    .map(
      (item) => `
    <div class="feature-card">
      <div class="icon">${icons[item.icon] || icons.spark}</div>
      <h3>${item.title}</h3>
      <p class="text-secondary">${item.text}</p>
    </div>`
    )
    .join("");

  return `
<section class="section">
  <div class="container">
    ${title ? `<div class="section-head${opts.center ? " center" : ""}">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2>${title}</h2>
      ${text ? `<p class="text-secondary">${text}</p>` : ""}
    </div>` : ""}
    <div class="grid grid-${cols}">${cards}</div>
  </div>
</section>`;
}

// items: [{ value, label }]
function renderStats(items) {
  const cards = items
    .map((s) => `<div class="stat-card"><div class="value">${s.value}</div><div class="label">${s.label}</div></div>`)
    .join("");
  return `
<section class="section" style="padding-top:0;">
  <div class="container">
    <div class="grid grid-4">${cards}</div>
  </div>
</section>`;
}

// items: [{ icon, name, tag }]
function renderGameGrid(items, opts = {}) {
  const { eyebrow, title, text, href, cols = 4 } = opts;
  const cards = items
    .map(
      (g) => `
    <a class="game-card" href="${g.href}">
      <div class="thumb"><span class="tag">${g.tag}</span>${icons[g.icon] || icons.dice}</div>
      <div class="body">
        <h3>${g.name}</h3>
        <p class="text-secondary" style="font-size:var(--fs-100);">${g.desc}</p>
      </div>
    </a>`
    )
    .join("");

  return `
<section class="section">
  <div class="container">
    <div class="section-head">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2>${title}</h2>
      ${text ? `<p class="text-secondary">${text}</p>` : ""}
    </div>
    <div class="grid grid-${cols}">${cards}</div>
    ${href ? `<div style="margin-top:var(--sp-4);"><a href="${href}" class="btn btn-outline">View All Games</a></div>` : ""}
  </div>
</section>`;
}

// items: [{ title, text }]
function renderSteps(items, opts = {}) {
  const { eyebrow, title, text } = opts;
  const steps = items
    .map((s) => `<div class="step"><h3>${s.title}</h3><p class="text-secondary">${s.text}</p></div>`)
    .join("");
  return `
<section class="section">
  <div class="container">
    <div class="section-head center">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2>${title}</h2>
      ${text ? `<p class="text-secondary">${text}</p>` : ""}
    </div>
    <div class="steps">${steps}</div>
  </div>
</section>`;
}

// items: [{ title, excerpt, tag, date }]
function renderArticleGrid(items, opts = {}) {
  const { eyebrow = "From the Blog", title = "Latest Articles", text } = opts;
  const cards = items
    .map(
      (a) => `
    <a class="article-card" href="${a.href}">
      <div class="thumb"></div>
      <div class="body">
        <p class="meta">${a.tag} &middot; ${a.date}</p>
        <h3>${a.title}</h3>
        <p class="text-secondary" style="font-size:var(--fs-200);">${a.excerpt}</p>
      </div>
    </a>`
    )
    .join("");
  return `
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${text ? `<p class="text-secondary">${text}</p>` : ""}
    </div>
    <div class="grid grid-3">${cards}</div>
  </div>
</section>`;
}

module.exports = { renderFeatureGrid, renderStats, renderGameGrid, renderSteps, renderArticleGrid };
