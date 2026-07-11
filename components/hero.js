"use strict";
const { icons } = require("./icons");
const { renderHeroArt } = require("./heroArt");

function renderHomeHero() {
  return `
<section class="hero">
  <div class="container">
    <div class="hero-copy">
      <span class="badge">${icons.spark} Premium Gaming Platform</span>
      <h1>Play Smarter with <span>55</span> Club</h1>
      <p class="lead">Experience modern gaming with fast access, premium features and exciting entertainment — designed around clean interfaces and clear information, not clutter.</p>
      <div class="hero-actions">
        <a href="/register/" class="btn btn-primary">Register</a>
        <a href="/login/" class="btn btn-outline">Login</a>
        <a href="/download/" class="btn btn-ghost">${icons.download}Download App</a>
      </div>
      <div class="trust-badges">
        <span class="badge-item">${icons.bolt} Fast Access</span>
        <span class="badge-item">${icons.shield} Secure Platform</span>
        <span class="badge-item">${icons.gift} Daily Rewards</span>
        <span class="badge-item">${icons.device} Responsive Design</span>
      </div>
    </div>
    ${renderHeroArt()}
  </div>
</section>`;
}

// Simpler hero used across interior pages.
function renderPageHero({ eyebrow, h1, lead, primary, secondary }) {
  return `
<section class="section" style="padding-bottom:var(--sp-4);">
  <div class="container" style="max-width:820px;">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
    <h1>${h1}</h1>
    ${lead ? `<p class="lead text-secondary" style="margin-top:var(--sp-2);font-size:var(--fs-400);">${lead}</p>` : ""}
    ${
      primary || secondary
        ? `<div class="hero-actions" style="margin-top:var(--sp-3);">
      ${primary ? `<a href="${primary.href}" class="btn btn-primary">${primary.label}</a>` : ""}
      ${secondary ? `<a href="${secondary.href}" class="btn btn-outline">${secondary.label}</a>` : ""}
    </div>`
        : ""
    }
  </div>
</section>`;
}

module.exports = { renderHomeHero, renderPageHero };
