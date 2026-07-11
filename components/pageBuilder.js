"use strict";
const { renderBreadcrumb, breadcrumbSchema } = require("./breadcrumb");
const { renderPageHero } = require("./hero");
const { renderFeatureGrid, renderSteps } = require("./cards");
const { renderFaq, faqSchema } = require("./faq");
const { renderRelatedLinks } = require("./relatedLinks");
const { renderCta } = require("./cta");
const site = require("../content/site.config");

// Shared skeleton used by every interior page: breadcrumb, hero, intro copy,
// an optional feature grid, optional two-column info sections, optional
// step list, related links, FAQ (with schema) and a closing CTA.
function renderStandardPage(opts) {
  const {
    slug,
    breadcrumb,
    hero,
    intro = [],
    features,
    infoSections = [],
    steps,
    extraSection,
    relatedLinks,
    faq,
    cta,
  } = opts;

  const introHtml = intro
    .map((p) => `<p class="text-secondary" style="font-size:var(--fs-400);margin-top:var(--sp-2);">${p}</p>`)
    .join("\n");

  const infoHtml = infoSections
    .map((sec) => {
      const paras = sec.paragraphs
        .map((p) => `<p class="text-secondary" style="margin-top:var(--sp-2);">${p}</p>`)
        .join("\n");
      const textCol = `
        <div>
          ${sec.eyebrow ? `<p class="eyebrow">${sec.eyebrow}</p>` : ""}
          <h2>${sec.title}</h2>
          ${paras}
        </div>`;
      const sideCol = sec.sideList
        ? `<div class="feature-card">
            <h3>${sec.sideList.title}</h3>
            <ul style="display:grid;gap:10px;margin-top:var(--sp-2);">
              ${sec.sideList.items
                .map((i) => `<li class="text-secondary" style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--color-primary);">&#10003;</span><span>${i}</span></li>`)
                .join("")}
            </ul>
          </div>`
        : `<div class="feature-card"><h3>${sec.asideTitle || ""}</h3><p class="text-secondary">${sec.asideText || ""}</p></div>`;

      const cols = sec.reverse ? `${sideCol}${textCol}` : `${textCol}${sideCol}`;

      return `
<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;">
      ${cols}
    </div>
  </div>
</section>`;
    })
    .join("\n");

  const bodyHtml = `
${renderBreadcrumb(breadcrumb)}
${renderPageHero(hero)}
<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    ${introHtml}
  </div>
</section>
${features ? renderFeatureGrid(features.items, features) : ""}
${infoHtml}
${steps ? renderSteps(steps.items, steps) : ""}
${
  extraSection
    ? `<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    ${extraSection.eyebrow ? `<p class="eyebrow">${extraSection.eyebrow}</p>` : ""}
    <h2>${extraSection.title}</h2>
    ${extraSection.paragraphs.map((p) => `<p class="text-secondary" style="margin-top:var(--sp-2);">${p}</p>`).join("\n")}
  </div>
</section>`
    : ""
}
${relatedLinks ? renderRelatedLinks(relatedLinks.links, { title: relatedLinks.title }) : ""}
${faq ? renderFaq(faq.items, { title: faq.title }) : ""}
${cta ? renderCta(cta) : ""}
`;

  const schemas = [breadcrumbSchema(breadcrumb, site.siteUrl)];
  if (faq) schemas.push(faqSchema(faq.items));

  return { bodyHtml, schemas };
}

module.exports = { renderStandardPage };
