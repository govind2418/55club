"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/win-go/",
  title: "55 Club Win Go — Game Category Page Template",
  metaDescription:
    "The 55 Club Win Go page template: a colour-and-number round layout, results-history pattern and a step-by-step rules guide.",
  build() {
    return renderStandardPage({
      slug: "/win-go/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Win Go" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Win Go",
        lead: "A colour-and-number round format template, laid out with a step-by-step rules guide and a results-history panel built for fast scanning.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Colour Prediction", href: "/colour-prediction/" },
      },
      intro: [
        "Win Go layers a numbered outcome on top of the colour-based prediction mechanic, which gives this template slightly more surface area to explain than the simpler Colour Prediction page. Rather than compressing that complexity into a single dense paragraph, the rules section here is broken into a numbered step sequence — how a round opens, what the number and colour represent, and how the result is displayed.",
        "The page leads with the same single round-status pattern used across the category cluster, so a visitor who's already seen the Lottery or Colour Prediction page recognizes the layout immediately. Consistency here isn't accidental — it's the whole point of building this as a component system rather than one-off pages.",
        "Results history gets particular attention on this page, since Win Go's dual colour-and-number outcome benefits from a slightly richer table than the simpler formats — two data points per row instead of one, still kept to a scannable ten-row default view.",
        "This template also uses the Win Go page to demonstrate a slightly deeper FAQ block than some of the simpler category pages, since search queries around this specific format tend to be more varied — timing questions, rule questions, and comparison questions all show up here.",
        "That extra depth is reflected in the length of this page relative to its closest sibling, Colour Prediction — not because longer is inherently better, but because Win Go's dual-outcome mechanic genuinely has more to explain. Matching content depth to actual complexity, rather than forcing every page to an identical length, is a theme that runs through this entire template.",
      ],
      features: {
        eyebrow: "Win Go Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a slightly more complex round-based format.",
        cols: 4,
        items: [
          { icon: "ball", title: "Numbered Step Rules", text: "A sequential rules guide instead of one dense paragraph." },
          { icon: "clock", title: "Round Status Panel", text: "The same single-indicator pattern used across the category cluster." },
          { icon: "check", title: "Two-Column Results", text: "A results table built for colour and number outcomes together." },
          { icon: "spark", title: "Deeper FAQ Block", text: "More FAQ coverage, matching the format's broader range of search queries." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How a Round Works",
          title: "A Step-by-Step Breakdown",
          paragraphs: [
            "This template explains Win Go's round cycle as four numbered steps: the round opens, a countdown runs, the round closes, and the result — a colour and a number together — is displayed and logged to history.",
            "Writing the mechanic as numbered steps rather than flowing prose makes it easier to scan on mobile, where a dense paragraph is more likely to be skipped entirely.",
          ],
          sideList: {
            title: "The Four Round Steps",
            items: [
              "1. Round opens for the cycle",
              "2. Countdown runs to close",
              "3. Round closes for that cycle",
              "4. Result displayed and archived",
            ],
          },
        },
        {
          eyebrow: "Results History",
          title: "Reading a Two-Data-Point Table",
          reverse: true,
          paragraphs: [
            "Because each Win Go result carries both a colour and a number, this template's history table uses two clearly labeled columns rather than cramming both values into one cell. Column headers stay visible even when scrolling on mobile, using a lightweight sticky-header pattern.",
            "As with Lottery, the table defaults to the ten most recent results with a load-more option, keeping the page fast regardless of how much history accumulates over time.",
          ],
          asideTitle: "Consistency Across the Cluster",
          asideText: "The same table component powers Lottery, Win Go and Colour Prediction's history sections, with column count adjusted per format — one more example of the shared component system in action.",
        },
      ],
      extraSection: {
        eyebrow: "Search Intent",
        title: "Why This Page's FAQ Runs Deeper",
        paragraphs: [
          "Win Go tends to generate a wider range of search queries than the simpler formats in this cluster — timing questions, rule clarifications, and direct comparisons to Colour Prediction all show up in real search patterns for this category of game. This template responds to that by giving the FAQ block more room here than on some of the other category pages, rather than forcing every page into an identical FAQ length regardless of actual search demand.",
          "That's a general principle worth carrying into any real SEO content strategy: page depth should track query complexity, not an arbitrary uniform word count applied everywhere without regard for what people are actually asking.",
          "It also shows up in how this page's FAQ schema is written — each question maps to something a real visitor plausibly types into a search bar, rather than a generic template question rewritten with the page's keyword swapped in. That distinction is subtle in the rendered HTML but meaningful for how a search engine evaluates whether a page's structured data genuinely matches its content.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Colour Prediction", href: "/colour-prediction/" },
          { label: "Lottery", href: "/lottery/" },
          { label: "Aviator", href: "/aviator/" },
          { label: "Slots", href: "/slots/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How does Win Go differ from Colour Prediction?", a: "Win Go combines a colour outcome with a numbered result and a slightly richer history table; Colour Prediction uses a simpler, colour-only result set." },
          { q: "What are the four steps of a Win Go round?", a: "This template describes them as: round opens, countdown runs, round closes, and result displayed and archived to history." },
          { q: "How is the results history displayed?", a: "As a two-column table showing colour and number together, defaulting to the ten most recent results with a load-more pattern." },
          { q: "Is Win Go related to Lottery?", a: "Yes — all three formats (Lottery, Win Go, Colour Prediction) share a round-based structure, and this template treats them as a linked cluster of related pages." },
          { q: "Does this page explain timing in detail?", a: "Yes, through the round-status panel and the numbered step breakdown, since timing questions are among the most common queries for this format." },
          { q: "Is this connected to a live Win Go game?", a: "No — this is a static content template demonstrating layout, copy and structure, not a functioning game." },
          { q: "Where can I read the full terms for this format?", a: "The rules panel links through to broader policy pages, including Responsible Gaming, for anyone wanting the complete picture." },
          { q: "How is the FAQ schema written for this page?", a: "Each question is written to match a plausible real search query rather than a generic template question with the keyword swapped in, which keeps the structured data genuinely representative of the page." },
        ],
      },
      cta: {
        title: "Compare Related Formats",
        text: "See how Colour Prediction and Lottery differ from this format.",
        primary: { label: "View Colour Prediction", href: "/colour-prediction/" },
        secondary: { label: "View Lottery", href: "/lottery/" },
      },
    });
  },
};
