"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/colour-prediction/",
  title: "55 Club Colour Prediction — Game Category Page Template",
  metaDescription:
    "The 55 Club Colour Prediction page template: a simple pick-and-track layout, round-timing pattern and a plain rules explainer.",
  build() {
    return renderStandardPage({
      slug: "/colour-prediction/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Colour Prediction" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Colour Prediction",
        lead: "The simplest version of the round-based prediction format — a pick-and-track layout with a visible round timer, a plain-language rules panel and an accessible, colorblind-friendly status indicator.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Win Go", href: "/win-go/" },
      },
      intro: [
        "Colour Prediction strips the round-based prediction format down to its simplest form, which is exactly the design challenge this template addresses: how do you make a genuinely simple game feel intentional rather than sparse? The answer here is generous spacing, a single large round-status indicator, and a rules panel that fits in three sentences instead of a full page.",
        "This page's layout leads with the current round state — open, closing, or displaying a result — since that's the single piece of information a returning visitor actually needs first. Everything else, including historical results and the fuller rules explanation, sits below the fold for anyone who wants more depth.",
        "Because this format is often confused with Win Go due to surface-level similarity, the page includes a short, direct comparison section clarifying what's actually different: round length, result complexity, and how history is displayed. That clarity serves both new visitors and search engines trying to distinguish the two pages' topical focus.",
        "As with every category template here, the page closes with clear paths forward — to Register for anyone ready to explore further, and to the two closely related category pages for anyone still comparing formats.",
        "Even the smallest details on this page received the same level of attention as the more complex templates in this system — button labels are specific rather than generic, spacing follows the same 8px grid as every other page, and the FAQ block below answers the exact questions this format tends to generate rather than a generic set copy-pasted from elsewhere.",
      ],
      features: {
        eyebrow: "Colour Prediction Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for keeping a simple format's page equally simple.",
        cols: 4,
        items: [
          { icon: "spark", title: "Single Status Indicator", text: "One clear round-state element instead of competing widgets." },
          { icon: "clock", title: "Visible Round Timer", text: "A countdown pattern that always shows what phase the round is in." },
          { icon: "check", title: "Three-Sentence Rules", text: "The core mechanic explained without unnecessary length." },
          { icon: "shield", title: "Consistent Structure", text: "Same page skeleton as every other category template." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Round Mechanics",
          title: "How a Round Moves Through Its Phases",
          paragraphs: [
            "This template names three phases for each round — open, closing, and result — and keeps the status indicator visually distinct for each, using color and label together rather than color alone, which also keeps the pattern accessible for colorblind users.",
            "That accessibility choice matters specifically for a colour-based format: relying on hue alone to communicate state would exclude a meaningful share of visitors, so every status also carries a text label.",
          ],
          sideList: {
            title: "Round Phases in This Template",
            items: [
              "Open — selections can be made",
              "Closing — a short warning window",
              "Result — outcome displayed and archived",
              "History — accessible below the main panel",
            ],
          },
        },
        {
          eyebrow: "Colour Prediction vs. Win Go",
          title: "Two Pages, Two Distinct Formats",
          reverse: true,
          paragraphs: [
            "Colour Prediction and Win Go are related but not identical, and this template treats that distinction as content rather than glossing over it. Colour Prediction uses a shorter round cycle and a simpler result set; Win Go layers in numbered outcomes alongside colour, with a longer results-history pattern.",
            "Writing that comparison out directly, rather than leaving visitors to infer it, is what keeps both pages useful on their own rather than feeling like duplicates of each other.",
          ],
          asideTitle: "Why This Comparison Lives Here",
          asideText: "Placing the comparison on both pages (from each one's own perspective) means a visitor landing on either gets the context they need without an extra click.",
        },
      ],
      extraSection: {
        eyebrow: "Accessibility Notes",
        title: "Designing a Colour-Based Format Responsibly",
        paragraphs: [
          "A page named Colour Prediction has an obvious accessibility obligation: never rely on colour alone to convey meaning. This template pairs every colour indicator with a text label and an icon, tests contrast ratios against the dark background specified in the design tokens, and keeps the round-status element large enough to read clearly even at a glance on a small phone screen.",
          "It's a small detail with an outsized impact — a format literally built around colour is the last place to cut corners on making that information available to everyone, regardless of how they perceive colour.",
          "Contrast ratios throughout this template are checked against the dark background defined in the design tokens, aiming comfortably past the WCAG AA threshold for normal text. Interactive elements like the round-status indicator carry a visible focus ring for keyboard navigation too, so accessibility here isn't limited to colour alone — it extends to how the whole page can be operated without a mouse.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Win Go", href: "/win-go/" },
          { label: "Lottery", href: "/lottery/" },
          { label: "Aviator", href: "/aviator/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How does Colour Prediction work?", a: "This template describes a short round cycle with three phases — open, closing and result — displayed through a single status indicator that pairs colour with a text label." },
          { q: "How is this different from Win Go?", a: "Colour Prediction uses a shorter round and a simpler result set; Win Go layers in numbered outcomes with a longer history pattern, as explained directly on both pages." },
          { q: "Is the format accessible for colorblind users?", a: "Yes — every colour-based indicator in this template pairs with a text label and icon rather than relying on hue alone." },
          { q: "How long does a round last?", a: "The exact timing is shown via a visible countdown pattern rather than left ambiguous, though specific numbers depend on how a live implementation configures it." },
          { q: "Where can I see past round results?", a: "A history section sits below the main status panel, following the same paginated pattern used on the Lottery and Win Go pages." },
          { q: "Is this page connected to a live prediction system?", a: "No — it's a static content template demonstrating layout and copy, not a functioning game." },
          { q: "Does this page make any outcome guarantees?", a: "No. The rules panel avoids probability or outcome claims entirely, consistent with this being a design and content demonstration." },
          { q: "Is this page keyboard-navigable?", a: "Yes — every interactive element, including the round-status indicator, carries a visible focus ring so the page can be operated without a mouse." },
        ],
      },
      cta: {
        title: "Compare the Related Formats",
        text: "See how Win Go and Lottery build on the same round-based mechanic.",
        primary: { label: "View Win Go", href: "/win-go/" },
        secondary: { label: "View Lottery", href: "/lottery/" },
      },
    });
  },
};
