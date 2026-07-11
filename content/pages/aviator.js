"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/aviator/",
  title: "55 Club Aviator — Game Category Page Template",
  metaDescription:
    "The 55 Club Aviator page template: a rising-curve layout, a plain rules explainer and a round-history pattern built for a crash-style format.",
  build() {
    return renderStandardPage({
      slug: "/aviator/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Aviator" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Aviator",
        lead: "A rising-curve crash-style format template, explained through a simple static timeline graphic, a concise plain-language rules panel and a lightweight round-history list.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Casino", href: "/casino/" },
      },
      intro: [
        "Aviator-style formats center on a single visual idea — a curve that rises over time and ends at an unpredictable point — and this template builds the entire page around explaining that idea clearly rather than around a literal animated simulation. A simple static timeline graphic, built in inline SVG, shows the shape of a round without requiring any JavaScript-driven animation loop that would hurt performance.",
        "The rules panel breaks the format into three plain sentences: a round starts, a curve rises, and the round ends at a point that becomes part of the visible history. That's the entire mechanic, and this template resists the temptation to over-explain a genuinely simple format with unnecessary padding.",
        "Because crash-style formats are visually distinct from the round-based cluster (Lottery, Win Go, Colour Prediction), this page's related-links section points instead toward Casino and Slots — categories that share more in common with Aviator's single-outcome-per-round structure than the numbered-draw formats do.",
        "As with every category page, this one closes with clear next steps — Register for new visitors, and links to the two most closely related categories for anyone still comparing formats before deciding where to spend their time.",
        "It's worth noting how much this page accomplishes with relatively little content, compared to a hub page like Casino. That's intentional — Aviator is a single, simple mechanic, and a page explaining a simple mechanic should read as simple, not padded out to match some external length target for its own sake.",
      ],
      features: {
        eyebrow: "Aviator Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for explaining a visual, single-outcome format.",
        cols: 4,
        items: [
          { icon: "plane", title: "Static Timeline Graphic", text: "An inline SVG illustration instead of a performance-heavy animation loop." },
          { icon: "spark", title: "Three-Sentence Rules", text: "The entire mechanic explained without unnecessary padding." },
          { icon: "check", title: "Round History List", text: "Recent round outcomes shown as a simple, scannable list." },
          { icon: "shield", title: "Consistent Structure", text: "Same page skeleton as the rest of the category cluster." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How the Format Works",
          title: "One Curve, One Outcome, Explained Simply",
          paragraphs: [
            "This template describes the Aviator format as three stages: a round starts, a rising curve tracks progress visually, and the round concludes at a specific point that gets logged. There's no additional complexity to add — the strength of this format's page is restraint, not exhaustive detail.",
            "The static SVG timeline graphic mirrors that restraint: it communicates the shape of the mechanic at a glance without any animation dependency, keeping the page's Interaction to Next Paint score unaffected by decorative motion.",
          ],
          sideList: {
            title: "What the Rules Panel Covers",
            items: [
              "How a round starts",
              "What the rising curve represents",
              "How and when a round concludes",
              "Where results are logged",
              "A link to the Responsible Gaming page",
            ],
          },
        },
        {
          eyebrow: "Category Placement",
          title: "Why Aviator Links to Casino, Not Lottery",
          reverse: true,
          paragraphs: [
            "Internal linking works best when it reflects genuine structural similarity, not just shared category membership. Aviator's single-outcome-per-round mechanic has more in common with Casino and Slots — both single-round, single-result formats — than with the numbered-draw cluster of Lottery, Win Go and Colour Prediction.",
            "This template's related-links section reflects that reasoning directly, rather than defaulting to a generic \"all games\" list that would treat every category as interchangeable.",
          ],
          asideTitle: "A Note on Link Relevance",
          asideText: "Search engines weigh internal links partly by contextual relevance. Linking Aviator to genuinely related categories does more for both users and SEO than linking every page to every other page indiscriminately.",
        },
      ],
      extraSection: {
        eyebrow: "Performance Notes",
        title: "Why This Page Avoids a Live Animated Curve",
        paragraphs: [
          "A tempting but ultimately counterproductive choice for an Aviator-style page is a live, constantly animating curve running in the background as decoration. It looks impressive in a mockup but tends to hurt exactly the performance metrics this entire template is built around — continuous animation keeps the main thread busy, which can push back Interaction to Next Paint and drain battery on mobile devices for no real content benefit.",
          "Instead, this template uses a single static SVG graphic to communicate the concept, reserving actual motion for the small, purposeful hover and float effects already used sparingly elsewhere on the site. The result explains the format just as clearly while keeping the page fast.",
          "This same reasoning extends to the round-history list below the graphic — it's a plain, static list rather than a live-updating ticker. A ticker component sounds appealing but introduces its own performance and accessibility complications (screen readers announcing constant updates, for one), and none of that complexity is necessary just to show a handful of recent outcomes.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Casino", href: "/casino/" },
          { label: "Slots", href: "/slots/" },
          { label: "Win Go", href: "/win-go/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How does the Aviator format work?", a: "This template describes it in three stages: a round starts, a rising curve tracks progress, and the round concludes at a point that gets logged to history." },
          { q: "Is there a live animated curve on this page?", a: "No — the template uses a static SVG timeline graphic to explain the concept without the performance cost of continuous animation." },
          { q: "Why is Aviator linked to Casino instead of Lottery?", a: "Aviator's single-outcome-per-round structure is closer to Casino and Slots than to the numbered-draw formats, so the related links reflect that genuine similarity." },
          { q: "Where can I see past round outcomes?", a: "A round-history list sits below the main rules panel, following the same scannable pattern used across the other category pages." },
          { q: "Is this page connected to a live Aviator game?", a: "No — it's a static content template demonstrating layout and copy, not a functioning game." },
          { q: "Does this page make any outcome guarantees?", a: "No. The rules panel avoids probability or payout claims entirely, consistent with this being a design and content demonstration." },
          { q: "Where can I read about responsible play for this format?", a: "The rules panel links directly to the Responsible Gaming page." },
          { q: "Why isn't the round-history list a live-updating ticker?", a: "A constantly updating ticker introduces performance and accessibility complications without adding real value over a plain, periodically refreshed list, so this template keeps it simple." },
          { q: "Does this page work well on small phone screens?", a: "Yes — the timeline graphic and rules panel both scale down cleanly below 720px, following the same mobile-first grid used across every page in this template." },
        ],
      },
      cta: {
        title: "Explore Related Categories",
        text: "See how Casino and Slots compare to this single-outcome format.",
        primary: { label: "View Casino", href: "/casino/" },
        secondary: { label: "View Slots", href: "/slots/" },
      },
    });
  },
};
