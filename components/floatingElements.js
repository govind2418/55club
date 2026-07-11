"use strict";
const { icons } = require("./icons");

function renderFloatingDownload() {
  return `
<a href="/download/" class="btn btn-primary floating-download" aria-label="Download the app">
  ${icons.download}
  <span>Download</span>
</a>`;
}

function renderStickyCta() {
  return `
<div class="sticky-cta" role="region" aria-label="Quick actions">
  <a href="/login/" class="btn btn-outline btn-block">Login</a>
  <a href="/register/" class="btn btn-primary btn-block">Register</a>
</div>`;
}

module.exports = { renderFloatingDownload, renderStickyCta };
