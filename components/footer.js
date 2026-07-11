"use strict";
const { social } = require("./icons");
const { brandMark } = require("./logo");
const site = require("../content/site.config");

function renderFooter() {
  const columns = site.footerColumns
    .map(
      (col) => `
    <div class="footer-col">
      <h3>${col.title}</h3>
      <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
    </div>`
    )
    .join("");

  const year = new Date().getFullYear();

  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <a href="/" class="brand" aria-label="${site.siteName} home">
          ${brandMark()}
          <span>55 <span class="brand-suffix">Club</span></span>
        </a>
        <p>${site.description}</p>
        <div class="social-icons">
          <a href="${site.social.twitter}" aria-label="55 Club on X / Twitter" rel="noopener noreferrer" target="_blank">${social.twitter}</a>
          <a href="${site.social.instagram}" aria-label="55 Club on Instagram" rel="noopener noreferrer" target="_blank">${social.instagram}</a>
          <a href="${site.social.telegram}" aria-label="55 Club on Telegram" rel="noopener noreferrer" target="_blank">${social.telegram}</a>
          <a href="${site.social.youtube}" aria-label="55 Club on YouTube" rel="noopener noreferrer" target="_blank">${social.youtube}</a>
        </div>
      </div>
      ${columns}
    </div>

    <div class="footer-notice">
      <p class="disclaimer">This is a demonstration template. 55 Club is a placeholder brand used to showcase UI, content and SEO structure only — it is not a live gaming operator and does not process registrations, deposits or withdrawals. Real-money gaming carries financial risk; only engage with platforms that hold verifiable licensing in your jurisdiction, and always play responsibly. Must be of legal age in your jurisdiction.</p>
      <p>&copy; ${year} ${site.siteName}. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}

module.exports = { renderFooter };
