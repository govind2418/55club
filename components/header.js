"use strict";
const { icons } = require("./icons");
const { brandMark } = require("./logo");
const site = require("../content/site.config");

function renderHeader(activeHref = "/") {
  const navLinks = site.nav
    .map((item) => {
      const current = item.href === activeHref ? ` aria-current="page"` : "";
      return `<li><a href="${item.href}"${current}>${item.label}</a></li>`;
    })
    .join("");

  const mobileLinks = site.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
<a href="#main" class="skip-link">Skip to content</a>
<header class="site-header" id="siteHeader">
  <div class="container">
    <a href="/" class="brand" aria-label="${site.siteName} home">
      ${brandMark()}
      <span>55<span class="brand-suffix">Club</span></span>
    </a>

    <nav class="nav-main" aria-label="Primary">
      <ul style="display:flex;gap:2rem;">${navLinks}</ul>
    </nav>

    <div class="header-actions">
      <a href="/login/" class="btn btn-outline btn-sm">Login</a>
      <a href="/register/" class="btn btn-primary btn-sm">Register</a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
        ${icons.menu}
      </button>
    </div>
  </div>
</header>

<div class="mobile-nav" id="mobileNav">
  ${mobileLinks}
  <div class="mobile-actions">
    <a href="/register/" class="btn btn-primary btn-block">Register</a>
    <a href="/login/" class="btn btn-outline btn-block">Login</a>
    <a href="/download/" class="btn btn-ghost btn-block">Download App</a>
  </div>
</div>`;
}

module.exports = { renderHeader };
