"use strict";

// items: [{ label, href }] — last item has no href (current page)
function renderBreadcrumb(items) {
  const li = items
    .map((item, i) => {
      if (i === items.length - 1) {
        return `<li aria-current="page">${item.label}</li>`;
      }
      return `<li><a href="${item.href}">${item.label}</a></li>`;
    })
    .join("");

  return `
<nav class="breadcrumb container" aria-label="Breadcrumb">
  <ol>${li}</ol>
</nav>`;
}

function breadcrumbSchema(items, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? siteUrl.replace(/\/$/, "") + item.href : undefined,
    })),
  };
}

module.exports = { renderBreadcrumb, breadcrumbSchema };
