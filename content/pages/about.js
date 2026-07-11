"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/about/",
  title: "About 55 Club — Brand & Template Overview",
  metaDescription:
    "About 55 Club: the story behind this premium gaming platform template, its design principles and what it's meant to demonstrate.",
  build() {
    return renderStandardPage({
      slug: "/about/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "About" }],
      hero: {
        eyebrow: "Our Story",
        h1: "About 55 Club",
        lead: "A brand-overview page template built to explain what this project actually is — a premium design and content system, not a live gaming operator.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
      intro: [
        "55 Club began as an answer to a specific problem: most gaming-adjacent affiliate websites look and feel disposable — templated layouts, stock imagery, generic copy repeated across dozens of near-identical domains. This project set out to demonstrate the opposite is achievable without heavy frameworks or bloated tooling: a dark-luxury, red-accented design system built entirely in hand-crafted HTML, CSS and vanilla JavaScript, fast enough to load instantly and structured cleanly enough for search engines to fully understand.",
        "Every component on this site — the header, the game cards, the FAQ accordion, the footer — was built as a small, reusable piece rather than a one-off page design. That component discipline is what let this project scale to 24 distinct, fully-written pages without descending into copy-paste inconsistency between them.",
        "It's important to be direct about what this project is and isn't. 55 Club is a placeholder brand and a design template — it doesn't operate as a live gaming platform, doesn't process registrations or payments, and doesn't make any real-money gaming claims. It exists to demonstrate premium UI, clean information architecture and technical SEO structure, all of which are genuinely reusable for any brand once paired with real, properly licensed functionality behind it.",
        "The name itself reflects the design intent — a faceted, gem-like mark meant to evoke precision and value without borrowing any existing brand's identity. Every visual asset on this site, from the logo to the hero illustration to the icon set, was built from scratch as inline SVG rather than sourced from a stock library.",
      ],
      features: {
        eyebrow: "What This Project Demonstrates",
        title: "Four Things Worth Noticing",
        text: "Beyond the visual design, here's what's actually being shown.",
        cols: 4,
        items: [
          { icon: "spark", title: "Hand-Built Components", text: "No templates, no page builders — every piece assembled from a shared design system." },
          { icon: "bolt", title: "Genuine Performance", text: "Static HTML output with zero client-side framework overhead." },
          { icon: "check", title: "Real SEO Structure", text: "Unique titles, meta descriptions, schema and internal linking across all 24 pages." },
          { icon: "shield", title: "Honest Framing", text: "Clear about what this project is — a template, not a live product." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Design Principles",
          title: "What Guided Every Decision",
          paragraphs: [
            "Three principles shaped this project throughout: restraint (no unnecessary animation or visual noise), consistency (a shared component system rather than one-off page designs), and honesty (content that explains rather than oversells, and structural transparency about what this project actually is).",
            "Those principles sound simple, but they're easy to abandon under pressure to make each individual page feel more exciting. This project holds the line on all three across all 24 pages, not just the homepage.",
          ],
          sideList: {
            title: "Core Principles",
            items: [
              "Restraint over visual noise",
              "Consistency over one-off design",
              "Honesty over overselling",
              "Performance as a design constraint, not an afterthought",
            ],
          },
        },
        {
          eyebrow: "Technical Approach",
          title: "Why No Framework Was Used",
          reverse: true,
          paragraphs: [
            "Every page on this site ships as pre-rendered static HTML, styled with plain CSS using design tokens, and enhanced with a small amount of vanilla JavaScript for interactive touches like the mobile menu and header scroll behavior. There's no React, no build-step bundler, no client-side routing.",
            "That choice wasn't about avoiding modern tooling for its own sake — it was about matching the tool to the job. A largely static, content-driven site doesn't need a JavaScript framework's overhead to feel fast; it needs clean HTML and CSS, which is exactly what loads instantly regardless of device or connection speed.",
          ],
          asideTitle: "A Note on Reusability",
          asideText: "This entire component system — tokens, layout, cards, forms — is designed to be reused for a different brand simply by swapping the design tokens and content, without touching the underlying structure.",
        },
      ],
      extraSection: {
        eyebrow: "Looking Forward",
        title: "What Comes Next for This Template",
        paragraphs: [
          "As a template, 55 Club is meant to be a starting point rather than a finished product. Adapting it for a real brand means swapping the placeholder name, palette and copy for something specific and, where the subject matter involves regulated activity like real-money gaming, verifying proper licensing before any live launch — a step this project deliberately doesn't take on its own behalf.",
          "What stays constant through that adaptation is the underlying discipline: a shared component system, honest and specific content, careful internal linking, and a genuine commitment to loading fast. Those qualities transfer to any brand this template gets adapted for, which is the whole point of building it this way in the first place.",
          "If there's a single takeaway worth carrying forward from this project, it's that premium design and genuine performance were never actually in tension. The perception that a luxury-feeling brand needs heavy animation, large hero images or a JavaScript framework to feel credible doesn't hold up under scrutiny — this entire site argues the opposite, one page at a time.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Contact", href: "/contact/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Official Website", href: "/official-website/" },
        ],
      },
      faq: {
        items: [
          { q: "What is 55 Club, exactly?", a: "A premium dark-luxury design and content template for gaming-style platforms — a demonstration of UI, structure and SEO practice, not a live gaming operator." },
          { q: "Does 55 Club process real registrations or payments?", a: "No. This is a static template; no real accounts, payments or gaming transactions are processed anywhere on this site." },
          { q: "Why was no JavaScript framework used?", a: "A largely static, content-driven site doesn't need framework overhead to feel fast — clean HTML and CSS, with a small amount of vanilla JavaScript, was the better tool for this job." },
          { q: "Are the images on this site stock photography?", a: "No — every visual asset, including the logo, hero illustration and icon set, is hand-built inline SVG rather than sourced from a stock library." },
          { q: "Can this template be adapted for a real brand?", a: "Yes — the component system is designed for that, provided any regulated functionality (like real-money gaming) is paired with proper licensing before a live launch." },
          { q: "How many pages does this template include?", a: "24 distinct pages, each with unique content, meta data and structured data, built from the same shared component library." },
          { q: "Where can I learn more about the support structure?", a: "The Customer Support page covers the support-channel pattern in detail, and Contact covers the structured contact-form pattern specifically." },
          { q: "Does premium design require heavy animation or a framework?", a: "No — this entire site argues the opposite, achieving a luxury feel through spacing, typography and restraint rather than motion or client-side framework overhead." },
        ],
      },
      cta: {
        title: "Get in Touch",
        text: "Questions about this project or how to adapt it? Reach out through Contact or Customer Support.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
    });
  },
};
