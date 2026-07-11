"use strict";
const site = require("../content/site.config");

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.siteName,
    url: site.siteUrl,
    logo: `${site.siteUrl}/assets/images/logo.svg`,
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.supportEmail,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.siteName,
    url: site.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.siteUrl}/search/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function articleSchema({ headline, description, datePublished, dateModified, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: site.siteName },
    publisher: {
      "@type": "Organization",
      name: site.siteName,
      logo: { "@type": "ImageObject", url: `${site.siteUrl}/assets/images/logo.svg` },
    },
    mainEntityOfPage: url,
    image: image || `${site.siteUrl}/assets/images/og-default.svg`,
  };
}

function schemaScript(schemaObj) {
  const json = JSON.stringify(schemaObj, null, 0);
  return `<script type="application/ld+json">${json}</script>`;
}

module.exports = { organizationSchema, websiteSchema, articleSchema, schemaScript };
