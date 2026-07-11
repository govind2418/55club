"use strict";
const { icons } = require("./icons");

// items: [{ q, a }]
function renderFaq(items, opts = {}) {
  const { title = "Frequently Asked Questions", eyebrow = "FAQ" } = opts;
  const list = items
    .map(
      (item, i) => `
    <details class="faq-item"${i === 0 ? " open" : ""}>
      <summary class="faq-question">
        <span>${item.q}</span>
        <span class="icon-plus">${icons.plus}</span>
      </summary>
      <div class="faq-answer"><p>${item.a}</p></div>
    </details>`
    )
    .join("");

  return `
<section class="section faq-section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
    </div>
    <div class="faq-list">${list}</div>
  </div>
</section>`;
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
    })),
  };
}

module.exports = { renderFaq, faqSchema };
