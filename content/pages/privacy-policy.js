"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/privacy-policy/",
  title: "55 Club Privacy Policy — Data Practices Page Template",
  metaDescription:
    "The 55 Club Privacy Policy page template: a plain-language data-practices layout covering collection, use, retention and user rights.",
  build() {
    return renderStandardPage({
      slug: "/privacy-policy/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Privacy Policy" }],
      hero: {
        eyebrow: "Data & Privacy",
        h1: "55 Club Privacy Policy",
        lead: "A plain-language privacy page template covering what data a platform like this would typically collect, why, how long it's kept, and what control users have over it.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "Contact", href: "/contact/" },
      },
      intro: [
        "Privacy policies have a well-earned reputation for being dense, jargon-heavy documents nobody actually reads, written more to satisfy legal review than to inform the people they're supposed to protect. This template takes a different approach: the same plain-language standard used across every other page here, applied to a genuinely important topic instead of being abandoned the moment the content turns legal.",
        "That doesn't mean skipping substance. This page covers the categories a real gaming-style platform would typically address — what account data is collected during registration and use, why it's collected, how long it's retained, who it might be shared with and under what circumstances, and what rights a user has to access, correct or delete their own data.",
        "Each section states its point directly in the first sentence, with supporting detail after — the same inverted-pyramid structure used throughout this template's content, because a privacy policy that requires reading three paragraphs before reaching the actual point has already failed the person trying to understand it.",
        "As with every page on this site, it's worth restating plainly: this is a content and structure template, not a binding legal document. Any real implementation needs actual legal review specific to its jurisdiction, its data practices, and applicable regulations like GDPR, CCPA or others relevant to where it operates.",
        "Cookies and similar tracking technologies get their own brief mention too, since they're a near-universal part of how modern websites function — session cookies to keep a login active, and optionally analytics cookies to understand aggregate usage patterns, each described honestly rather than bundled together under one vague \"cookies\" catch-all.",
      ],
      features: {
        eyebrow: "What This Page Covers",
        title: "Five Core Privacy Topics",
        text: "The categories a real privacy policy needs to address clearly.",
        cols: 4,
        items: [
          { icon: "lock", title: "Data Collection", text: "What account and usage data is typically gathered, and why." },
          { icon: "clock", title: "Retention Periods", text: "How long data is generally kept before deletion or anonymization." },
          { icon: "shield", title: "Sharing & Disclosure", text: "When data might be shared with third parties, and under what limits." },
          { icon: "check", title: "User Rights", text: "How users can typically access, correct or delete their own data." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Data Collection",
          title: "What Gets Collected and Why",
          paragraphs: [
            "This template describes account data collection in three general categories: information provided directly during registration (username, contact method), information generated through platform use (activity logs, preferences), and technical information collected automatically (device type, general location for security purposes).",
            "Each category is tied to a stated purpose rather than left open-ended — account data supports the account itself, usage data supports features like the Rewards streak tracker, and technical data supports security and fraud prevention.",
          ],
          sideList: {
            title: "General Data Categories",
            items: [
              "Account data — provided at registration",
              "Usage data — generated through platform activity",
              "Technical data — device and security-related information",
              "Communication data — support and contact history",
            ],
          },
        },
        {
          eyebrow: "Retention & Deletion",
          title: "How Long Data Is Typically Kept",
          reverse: true,
          paragraphs: [
            "This template states a general principle rather than specific numbers: data is retained only as long as needed for the purpose it was collected for, or as required by applicable law, after which it should be deleted or anonymized.",
            "A user-facing deletion request pattern is described here too — the ability to request account and associated data removal, subject to any legal retention requirements a real platform would need to account for (such as records related to financial transactions).",
          ],
          asideTitle: "A Note on Legal Review",
          asideText: "Specific retention periods, legal bases and jurisdiction-specific rights (like GDPR's right to erasure) need to be defined by real legal counsel, not inferred from a content template.",
        },
      ],
      extraSection: {
        eyebrow: "Third-Party Sharing",
        title: "Being Specific About When Data Moves",
        paragraphs: [
          "Vague language like \"we may share your information with partners\" is exactly the kind of phrasing this template avoids. Where sharing is described, it's tied to specific, named purposes — payment processing, fraud prevention, legally required disclosure to regulators — rather than an open-ended catch-all that could mean almost anything.",
          "This page also addresses what this template does not do: it doesn't sell user data to third parties for marketing purposes, and any real platform adapting this content should keep that same standard, or be explicit and specific if its actual practices differ.",
          "Security measures get a brief mention here too, in general terms — encryption in transit, access controls limiting who within an organization can view sensitive data, and a stated process for what happens in the rare event of a data incident. Specifics belong in a real security policy, but acknowledging the topic at all is better than silence.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Contact", href: "/contact/" },
          { label: "About", href: "/about/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "What data does this template describe collecting?", a: "Four general categories: account data, usage data, technical data and communication data, each tied to a stated purpose rather than left open-ended." },
          { q: "How long is data typically kept?", a: "This page states a general principle — only as long as needed for its purpose or as legally required — rather than specific numbers, which a real implementation would need to define precisely." },
          { q: "Can I request my data be deleted?", a: "This template describes a user-facing deletion request pattern, subject to any legal retention requirements a real platform would need to account for." },
          { q: "Does this platform sell user data?", a: "This template explicitly states it does not sell data to third parties for marketing purposes, and recommends any real implementation hold the same standard or be explicit if practices differ." },
          { q: "Is this a legally binding privacy policy?", a: "No — this is a content and structure template. Any real implementation needs actual legal review specific to its jurisdiction and data practices." },
          { q: "Who can I contact with privacy questions?", a: "The Contact and Customer Support pages both provide channels appropriate for privacy-related questions." },
          { q: "Does this page address international regulations like GDPR?", a: "It gestures toward the general categories such regulations typically require (rights, retention, disclosure) without prescribing jurisdiction-specific compliance, which needs real legal expertise." },
          { q: "What security measures does this page describe?", a: "General categories only — encryption in transit, internal access controls and an incident-response process — with specifics left to a real, jurisdiction-appropriate security policy." },
          { q: "Does this page cover cookies?", a: "Yes, briefly — distinguishing session cookies that keep a login active from optional analytics cookies, rather than bundling both under one vague catch-all term." },
        ],
      },
      cta: {
        title: "Questions About Your Data?",
        text: "Reach out through Contact or Customer Support for anything this page doesn't answer.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
    });
  },
};
