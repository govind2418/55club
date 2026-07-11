"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/official-website/",
  title: "55 Club Official Website — Verification Page Template",
  metaDescription:
    "How the 55 Club official-website verification page is structured: authenticity signals, mirror-link guidance and a plain trust checklist.",
  build() {
    return renderStandardPage({
      slug: "/official-website/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Official Website" }],
      hero: {
        eyebrow: "Verify Authenticity",
        h1: "55 Club Official Website",
        lead: "A trust-focused landing template for the exact question most brand-name searches are really asking: is this the real site?",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "Login", href: "/login/" },
      },
      intro: [
        "A surprising share of searches for any brand's name plus \"official website\" come from people who've already encountered a suspicious link, an unofficial mirror, or conflicting information somewhere else, and are now trying to confirm what's real. This template treats that search intent seriously instead of just repeating the homepage — it leads with a short, direct confirmation and a small set of concrete ways to verify authenticity.",
        "Those verification cues include a canonical domain reference, consistent branding elements that match every other page on the site, and clear links to the same Login and Register pages used elsewhere — so nothing about this page asks a visitor to trust a new, unfamiliar destination.",
        "The page is deliberately short on marketing language and long on reassurance. Where the homepage sells the experience, this page's job is narrower: confirm identity, then get out of the way and route the visitor to what they actually came for.",
        "That narrower job is also why this template keeps the page relatively short compared to the homepage — length for its own sake doesn't build trust, and a visitor who's already anxious about authenticity doesn't want to scroll through paragraphs of brand story before finding a straight answer. Every sentence here earns its place by directly supporting the verification task.",
      ],
      features: {
        eyebrow: "Verification Signals",
        title: "What This Page Checks For",
        text: "Four concrete things a visitor can verify for themselves.",
        cols: 4,
        items: [
          { icon: "shield", title: "Consistent Branding", text: "Same logo, palette and component system as every other page on the site." },
          { icon: "lock", title: "Secure Connection", text: "A reminder to confirm HTTPS and the exact domain before entering any credentials." },
          { icon: "check", title: "Matching Links", text: "Login and Register links that lead to the same templates used across the rest of the site." },
          { icon: "headset", title: "Support Contact", text: "A direct link to the Customer Support page for anyone still unsure." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Common Confusion",
          title: "Why Mirror and Lookalike Sites Exist",
          paragraphs: [
            "Popular brand names attract lookalike domains, whether through simple typo-squatting or more deliberate impersonation. This template addresses that reality directly rather than ignoring it, explaining plainly why a visitor might have landed somewhere unfamiliar in the first place.",
            "Rather than fear-based language, the copy stays factual: check the domain carefully, be cautious of links shared outside official channels, and when in doubt, navigate manually instead of clicking through a forwarded link.",
          ],
          sideList: {
            title: "A Quick Verification Checklist",
            items: [
              "Check the domain spelling character by character",
              "Confirm the connection shows as secure (HTTPS)",
              "Compare the layout against this template's design",
              "Avoid entering credentials after clicking an unsolicited link",
              "When unsure, contact support before proceeding",
            ],
          },
        },
        {
          eyebrow: "Consistent Navigation",
          title: "Why Every Link Here Matches the Rest of the Site",
          reverse: true,
          paragraphs: [
            "Every button on this page — Register, Login, Support — points to the exact same templates linked from the homepage and the header navigation. That redundancy is intentional: a visitor who found this page through an unfamiliar route should land on something identical to what everyone else sees.",
            "It's a small structural discipline, but it's one of the simplest ways a legitimate page can distinguish itself from an imitation.",
          ],
          asideTitle: "About This Template",
          asideText: "This page is a content and layout demonstration, not a live authentication or verification service. Any adaptation for a real product should pair this copy with actual domain-security practices.",
        },
      ],
      extraSection: {
        eyebrow: "Search Intent",
        title: "Writing for the Exact Question Being Asked",
        paragraphs: [
          "Pages targeting \"[brand] official website\" queries often make the mistake of duplicating the homepage almost word for word, which both underserves the visitor's actual question and creates a near-duplicate content problem for search engines. This template avoids that by keeping the intro short, verification-focused, and structurally distinct from the homepage — same brand voice, different job.",
          "That distinction is also why this page carries its own unique title, meta description and heading rather than inheriting the homepage's — a small technical detail that keeps both pages eligible to rank for their respective, different queries instead of competing with each other.",
          "It's also why the FAQ block below asks slightly different questions than the homepage FAQ, even where the topics overlap. Duplicate FAQ schema across multiple pages can dilute the effectiveness of both — writing distinct questions grounded in this page's specific verification purpose keeps the structured data meaningful rather than repetitive.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Login", href: "/login/" },
          { label: "Register", href: "/register/" },
          { label: "Download", href: "/download/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "About", href: "/about/" },
        ],
      },
      faq: {
        items: [
          { q: "How do I know I'm on the official website?", a: "Check the domain carefully, confirm a secure connection, and compare the layout and branding against what's described on this page." },
          { q: "Why do lookalike or mirror sites exist?", a: "Popular brand names frequently attract typo-squatted or impersonation domains. This page explains the pattern so visitors know what to watch for." },
          { q: "What should I do if a link looks suspicious?", a: "Avoid entering any credentials, and navigate to the site manually instead of clicking through, or contact support to confirm before proceeding." },
          { q: "Does this page verify domains automatically?", a: "No — this is a static content template. It demonstrates the messaging and structure a verification page should have, not a live security tool." },
          { q: "Where do I go after confirming I'm on the right site?", a: "The Login and Register links on this page lead to the same account-access templates used throughout the rest of the site." },
          { q: "Is this the same content as the homepage?", a: "No — this page is intentionally shorter and focused specifically on verification, while the homepage covers the full product overview." },
          { q: "Why do the FAQs here differ from the homepage FAQs?", a: "Repeating identical FAQ content across multiple pages weakens both for search purposes. This page's questions are written specifically around verification rather than duplicating general product questions." },
          { q: "Should I bookmark this page instead of searching each time?", a: "Yes — this template recommends exactly that in its verification checklist, since navigating from a saved bookmark removes the risk of clicking a lookalike link in search results." },
          { q: "What if I already entered details on a suspicious site?", a: "The template's guidance points to Customer Support as the first step, since a real platform would need to know quickly if a lookalike domain is actively collecting user information." },
        ],
      },
      cta: {
        title: "Continue to Your Account",
        text: "Now that you've confirmed you're in the right place, head to Login or Register.",
        primary: { label: "Login", href: "/login/" },
        secondary: { label: "Register", href: "/register/" },
      },
    });
  },
};
