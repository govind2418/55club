"use strict";
const { icons } = require("./icons");

// links: [{ label, href }]
function renderRelatedLinks(links, opts = {}) {
  const { title = "Related Pages" } = opts;
  const items = links
    .map(
      (l) => `<li><a href="${l.href}"><span>${l.label}</span>${icons.chevronRight}</a></li>`
    )
    .join("");

  return `
<section class="section related-links">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Explore More</p>
      <h2>${title}</h2>
    </div>
    <ul class="grid grid-3">${items}</ul>
  </div>
</section>`;
}

module.exports = { renderRelatedLinks };
