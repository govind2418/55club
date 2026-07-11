"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/slots/",
  title: "55 Club Slots — Game Category Page Template",
  metaDescription:
    "The 55 Club Slots page template: a themed reel-game grid, a feature comparison block and a plain-language rules explainer.",
  build() {
    return renderStandardPage({
      slug: "/slots/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Slots" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Slots",
        lead: "A themed reel-game category template organized by visual style, with a feature comparison block covering paylines, volatility and bonus rounds in plain language.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Casino", href: "/casino/" },
      },
      intro: [
        "Slots pages tend to sprawl on real platforms, often listing hundreds of titles with minimal organization. This template takes the opposite approach: a curated grid organized by theme, with a small comparison block explaining the handful of features — paylines, bonus rounds, volatility — that actually differentiate one slot game from another for someone deciding what to try.",
        "Each game card in the grid follows the same anatomy used throughout the site: a themed thumbnail, a short one-line description, and a tag indicating what makes it notable (new, popular, high volatility). That consistency means the Slots page never feels like a different product from the rest of the template.",
        "The feature comparison block is deliberately short — four or five terms explained in plain language, not a glossary. Someone new to reel-based games shouldn't need to leave this page to understand what a payline is; someone experienced shouldn't have to scroll past paragraphs of explanation to find the game grid.",
        "Like the other category pages, Slots links into the broader ecosystem — toward Casino as the closest structural sibling, and toward Promotions for anyone interested in how bonus-round mechanics might connect to broader reward structures.",
        "The page's tone stays consistent with the rest of the site too — descriptive rather than superlative. Game descriptions say what a title actually offers (a theme, a feature set) rather than leaning on vague claims like \"the best\" or \"amazing wins,\" which tend to read as filler to both users and search engines alike.",
      ],
      features: {
        eyebrow: "Slots Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for organizing a naturally large game category.",
        cols: 4,
        items: [
          { icon: "dice", title: "Themed Organization", text: "Games grouped by visual theme rather than an undifferentiated wall of tiles." },
          { icon: "spark", title: "Feature Comparison", text: "A short glossary of terms like paylines and volatility, explained plainly." },
          { icon: "check", title: "Consistent Card Anatomy", text: "Same thumbnail, description and tag pattern as every other game grid." },
          { icon: "gift", title: "Bonus Round Notes", text: "Plain-language notes on how bonus mechanics are typically structured." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Understanding the Terms",
          title: "A Short Glossary, Not a Wall of Text",
          paragraphs: [
            "This template's feature comparison block covers four terms: paylines (the patterns that determine a result), volatility (how often smaller versus larger outcomes occur), bonus rounds (secondary mechanics within a game), and themes (the visual and narrative styling that differentiates titles).",
            "Each term gets one or two sentences — enough to orient a first-time visitor without turning the page into a strategy guide.",
          ],
          sideList: {
            title: "Terms Covered in the Glossary",
            items: [
              "Paylines — result-determining patterns",
              "Volatility — frequency and size pattern of outcomes",
              "Bonus rounds — secondary in-game mechanics",
              "Themes — visual and narrative styling",
            ],
          },
        },
        {
          eyebrow: "Curated, Not Exhaustive",
          title: "Why This Grid Doesn't List Hundreds of Titles",
          reverse: true,
          paragraphs: [
            "A page trying to showcase hundreds of individual games tends to become slow, cluttered and hard to navigate — the opposite of what this design system is built for. This template instead shows a curated selection organized by theme, treating the Slots page as a category overview rather than an exhaustive catalog.",
            "That choice also keeps the page's load time predictable regardless of how large a real game library eventually grows, since the page itself doesn't need to scale with the catalog size.",
          ],
          asideTitle: "A Note for Real Implementations",
          asideText: "A production version of this page would likely add search and filter controls once the catalog grows beyond what a curated grid can reasonably represent — a pattern intentionally left out of this static template.",
        },
      ],
      extraSection: {
        eyebrow: "Visual Design",
        title: "Keeping Themed Thumbnails Lightweight",
        paragraphs: [
          "Slot games are often the most visually rich category on a gaming platform, which creates real tension with this template's performance goals. The solution here is the same one used throughout the site: inline SVG thumbnails using gradient fills and simple geometric shapes to suggest a theme, rather than large raster illustrations or photographs that would each cost a separate network request.",
          "It's a deliberate trade-off — a production platform might reasonably use richer imagery for its actual slot titles — but for a template meant to demonstrate structure and load speed, keeping every visual asset lightweight and vector-based keeps the whole page fast without exception.",
          "This also sidesteps a common Core Web Vitals problem on real slots pages: cumulative layout shift caused by images loading at different rates and pushing content around as they arrive. Since every thumbnail here is inline SVG with explicit dimensions, the layout is stable from the very first paint, with nothing shifting into place after the fact.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Casino", href: "/casino/" },
          { label: "Aviator", href: "/aviator/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Bonus", href: "/bonus/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How are slot games organized on this page?", a: "By visual theme, in a curated grid, rather than an exhaustive undifferentiated list of every possible title." },
          { q: "What do the feature comparison terms mean?", a: "The glossary covers paylines, volatility, bonus rounds and themes — the four terms most relevant to someone deciding what to try." },
          { q: "Does this page list every available slot game?", a: "No — it's intentionally curated. A production implementation would likely add search and filtering once a real catalog grows large." },
          { q: "How is Slots different from Casino?", a: "Slots focuses specifically on reel-based games; Casino serves as a broader hub for table-style classics and other categories." },
          { q: "Are the thumbnails on this page real screenshots?", a: "No — they're inline SVG illustrations using gradients and shapes to suggest a theme, keeping the page fast and free of large image requests." },
          { q: "Is this page connected to real slot games?", a: "No — it's a static content template demonstrating layout and copy, not a functioning game catalog." },
          { q: "Where can I learn about bonus structures generally?", a: "The Bonus and Promotions pages cover reward mechanics in more depth than a single glossary entry can." },
          { q: "Why don't the thumbnails cause layout shift while loading?", a: "Every thumbnail is inline SVG with explicit dimensions, so the layout is stable from first paint with nothing shifting into place as assets arrive." },
          { q: "How is volatility explained without technical jargon?", a: "The glossary describes it simply as how often smaller versus larger outcomes tend to occur, without diving into the underlying statistical mechanics." },
        ],
      },
      cta: {
        title: "See More Reward-Related Pages",
        text: "Bonus and Promotions expand on how reward mechanics connect across the site.",
        primary: { label: "View Bonus", href: "/bonus/" },
        secondary: { label: "View Promotions", href: "/promotions/" },
      },
    });
  },
};
