"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/lottery/",
  title: "55 Club Lottery — Game Category Page Template",
  metaDescription:
    "How the 55 Club Lottery page is structured: a numbered-draw layout, results-history pattern and a plain-language rules explainer.",
  build() {
    return renderStandardPage({
      slug: "/lottery/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Lottery" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Lottery",
        lead: "A numbered-draw category template built around a clear results table, a plain-language rules panel and a predictable round-timing pattern.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Win Go", href: "/win-go/" },
      },
      intro: [
        "Lottery-style formats are some of the oldest game patterns in the category, and their interface has settled into a familiar shape for good reason: a results table, a countdown to the next draw, and a short rules explanation. This template follows that shape deliberately rather than reinventing it, because unfamiliar layouts for familiar game types tend to create confusion rather than delight.",
        "Where this page adds value over a generic template is in how it explains the format to a first-time visitor. Rather than assuming prior knowledge, the rules section breaks the round structure into three plain sentences: how numbers are drawn, how often rounds occur, and how results are displayed. That clarity matters more for search visibility than it might seem — a page that actually answers \"how does lottery work here\" earns more organic trust than one that just shows a game grid.",
        "The results-history pattern is presented as a simple, scannable table rather than a dense data dump, with the most recent draw highlighted at the top. This keeps the page fast to render even with a long history, since older results can be paginated rather than all loaded at once.",
        "Like every category page in this template, Lottery links outward to the two account pages (Register, Login) and inward to related categories — Win Go and Colour Prediction share enough structural DNA with Lottery that cross-linking between them helps both visitors and search engines understand the category relationship.",
      ],
      features: {
        eyebrow: "Lottery Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns that keep a numbered-draw page easy to scan.",
        cols: 4,
        items: [
          { icon: "ticket", title: "Clear Round Timing", text: "A visible schedule pattern instead of an ambiguous countdown with no context." },
          { icon: "check", title: "Results Table", text: "Recent draws shown in a clean, paginated table rather than a dense wall of numbers." },
          { icon: "spark", title: "Plain Rules Panel", text: "A three-sentence explanation of how the format works, aimed at first-time visitors." },
          { icon: "shield", title: "Consistent Structure", text: "The same content skeleton used across every other game category page." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How the Format Works",
          title: "A Round Structure Explained Simply",
          paragraphs: [
            "This template describes lottery-style rounds as a repeating three-part cycle: a submission window, a draw moment, and a results display. Naming each part explicitly — rather than leaving the whole process as one blurry \"play now\" action — is what makes the page genuinely explanatory rather than just decorative.",
            "The rules panel avoids probability claims or outcome guarantees entirely, since this template is a content and design demonstration, not a live gaming system making real promises about odds or payouts.",
          ],
          sideList: {
            title: "What the Rules Panel Covers",
            items: [
              "How often rounds occur",
              "When the submission window closes",
              "How results are displayed and archived",
              "Where to find full terms and conditions",
              "A link to the Responsible Gaming page",
            ],
          },
        },
        {
          eyebrow: "Results & History",
          title: "Designing a Results Table People Actually Read",
          reverse: true,
          paragraphs: [
            "A results table that tries to show too much history at once becomes unreadable fast. This template limits the default view to the ten most recent draws, with a clear \"load more\" pattern for anyone specifically researching historical results.",
            "Each row uses consistent formatting — same date format, same result presentation — so scanning down the table doesn't require re-parsing the layout on every line.",
          ],
          asideTitle: "Why Pagination Matters Here",
          asideText: "Loading an unbounded results history on page load would hurt both performance and Core Web Vitals scores. Paginating keeps the initial page fast regardless of how much history eventually accumulates.",
        },
      ],
      extraSection: {
        eyebrow: "Category Relationships",
        title: "How Lottery Connects to Win Go and Colour Prediction",
        paragraphs: [
          "Lottery, Win Go and Colour Prediction share a family resemblance — all three are round-based, result-driven formats — which is exactly why this template treats them as a connected cluster rather than three unrelated pages competing for the same search intent. Each page links to the other two, with distinct copy explaining what makes each format specifically different rather than generic cross-promotion.",
          "That distinction matters for both readers and search engines. Lottery emphasizes the numbered-draw pattern, Win Go emphasizes colour-and-number prediction timing, and Colour Prediction emphasizes the simplest pick-and-track version of the mechanic. Three related but genuinely different pages, not one page duplicated three times with a find-and-replace on the title.",
          "The practical upshot for anyone adapting this template is worth stating directly: resist the urge to spin up near-identical category pages just to capture a few more keyword variants. A search engine crawling three pages that say the same thing in slightly different words will generally struggle to understand which one should rank for a given query, and visitors bounce just as quickly when a page doesn't add anything beyond what they already read on the last one.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Win Go", href: "/win-go/" },
          { label: "Colour Prediction", href: "/colour-prediction/" },
          { label: "Casino", href: "/casino/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How does the Lottery format work?", a: "This template describes a repeating three-part round cycle: a submission window, a draw moment, and a results display, explained in plain language on the page itself." },
          { q: "How often do rounds occur?", a: "The rules panel pattern includes a visible schedule so the round frequency is never ambiguous to a first-time visitor." },
          { q: "Where can I see past results?", a: "The results-history table shows the ten most recent draws by default, with a load-more pattern for older history." },
          { q: "How is Lottery different from Win Go?", a: "Lottery centers on numbered draws; Win Go centers on colour-and-number prediction with different round timing. The two pages explain that distinction directly." },
          { q: "Is this page connected to a live lottery system?", a: "No — this is a static content template demonstrating layout and copy, not a functioning game or draw system." },
          { q: "Does this page make any odds or payout claims?", a: "No. The rules panel deliberately avoids probability or payout claims, since this template is a design and content demonstration rather than a live gaming product." },
          { q: "Where can I read about responsible play?", a: "The rules panel links directly to the Responsible Gaming page, which covers that topic in full." },
          { q: "Can I filter the results table by date?", a: "The template's default view shows the most recent draws chronologically; a fuller implementation could add date filtering on top of the same underlying table component." },
        ],
      },
      cta: {
        title: "Explore Related Categories",
        text: "See how Win Go and Colour Prediction build on the same round-based format.",
        primary: { label: "View Win Go", href: "/win-go/" },
        secondary: { label: "View Colour Prediction", href: "/colour-prediction/" },
      },
    });
  },
};
