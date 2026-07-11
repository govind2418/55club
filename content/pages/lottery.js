"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/lottery/",
  title: "55 Club Lottery — Numbered Draw Game",
  metaDescription:
    "Play Lottery on 55 Club: pick your numbers, catch the next scheduled draw, and check prize tiers against the published results table.",
  build() {
    return renderStandardPage({
      slug: "/lottery/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Lottery" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Lottery",
        lead: "Pick your numbers, catch the next scheduled draw, and check the results table to see how many you matched. Prize tiers scale with how close your pick lands.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Win Go", href: "/win-go/" },
      },
      intro: [
        "Lottery runs on a fixed, published draw schedule — pick your numbers ahead of time, and once the submission window closes, the draw runs and results post straight to the results table. No guesswork about timing: the schedule is visible up front so you always know when the next draw lands.",
        "Prize tiers are built around how many of your numbers match the draw. A full match pays the top tier, and partial matches still count — the results table shows exactly where your pick landed relative to each tier so there's no ambiguity after a draw closes.",
        "The results table keeps the most recent draw pinned at the top, with older draws paginated below so the page stays fast to load no matter how much history builds up over a season of play.",
        "Lottery, Win Go and Colour Prediction all share the same round-based DNA, so if you like the scheduled-draw pace here, Win Go and Colour Prediction offer faster-cycling variants on the same core idea.",
      ],
      features: {
        eyebrow: "Lottery Features",
        title: "What Makes Lottery Different",
        text: "Four things that define how a draw works.",
        cols: 4,
        items: [
          { icon: "ticket", title: "Fixed Draw Schedule", text: "A published schedule so you always know when the next draw runs." },
          { icon: "check", title: "Results Table", text: "Every draw logged with a clean, paginated view of recent outcomes." },
          { icon: "coin", title: "Tiered Prizes", text: "Prize tiers scale with how many of your numbers match the draw." },
          { icon: "shield", title: "Consistent Cycle", text: "The same submission-draw-results cycle, every single round." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How a Draw Works",
          title: "A Round Structure Explained Simply",
          paragraphs: [
            "Every Lottery round follows the same three-part cycle: a submission window where you pick your numbers, a draw moment on the published schedule, and a results post where the winning numbers and prize tiers go live in the table.",
            "Once the submission window closes, no further picks are accepted for that draw — so it pays to get your numbers in well ahead of the scheduled cutoff.",
          ],
          sideList: {
            title: "The Draw Cycle",
            items: [
              "1. Pick your numbers",
              "2. Submission window closes on schedule",
              "3. Draw runs at the published time",
              "4. Results and prize tiers post to the table",
            ],
          },
        },
        {
          eyebrow: "Results & Prize Tiers",
          title: "Reading the Results Table",
          reverse: true,
          paragraphs: [
            "The results table shows the ten most recent draws by default, with a load-more option for anyone digging into older history. Each row lists the winning numbers alongside the prize tier they triggered, so matching your own pick against a draw takes one glance.",
            "Prize tiers are set by how many numbers you match — the more of your pick that lines up with the draw, the higher the tier. Partial matches still count, so it's worth checking every draw against your numbers, not just the ones where you expect a full hit.",
          ],
          asideTitle: "Why the Schedule Stays Fixed",
          asideText: "A published, unchanging draw schedule means you can plan your picks around it instead of guessing when the next round lands.",
        },
      ],
      extraSection: {
        eyebrow: "Category Relationships",
        title: "How Lottery Connects to Win Go and Colour Prediction",
        paragraphs: [
          "Lottery, Win Go and Colour Prediction are all round-based, result-driven formats, which makes them a natural set to move between depending on the pace you're after. Lottery runs on a slower, scheduled cadence built around numbers; Win Go adds colour-and-number prediction on a faster timer; Colour Prediction strips it down to the simplest, quickest pick-and-track version.",
          "If you're new to the numbered-draw format, start by checking the published schedule and picking a small set of numbers for the next draw — the results table will show you exactly how close you landed once it posts.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "55 Club Win Go", href: "/win-go/" },
          { label: "55 Club Colour Prediction", href: "/colour-prediction/" },
          { label: "55 Club Casino", href: "/casino/" },
          { label: "55 Club Promotions", href: "/promotions/" },
          { label: "55 Club Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "Is 55club lottery the same as 55 Club Lottery?", a: "Yes — 55club, 55 Club and 55Club all refer to the same draw schedule, the same number picks and the same results table on this page." },
          { q: "How does the Lottery format work?", a: "Pick your numbers before the submission window closes, wait for the draw to run on the published schedule, and check the results table for the winning numbers and prize tiers." },
          { q: "How often do draws occur?", a: "Draws run on a fixed, published schedule, so the timing is never a guess — check the schedule to plan your next pick." },
          { q: "Where can I see past results?", a: "The results table shows the ten most recent draws by default, with a load-more option for older history." },
          { q: "How are prize tiers determined?", a: "Prize tiers scale with how many of your numbers match the draw — a full match pays the top tier, and partial matches still count." },
          { q: "How is Lottery different from Win Go?", a: "Lottery centers on numbered draws with a scheduled cadence; Win Go centers on faster colour-and-number rounds. Both share the same round-based foundation." },
          { q: "Can I change my numbers after the submission window closes?", a: "No — once the window closes, that draw's picks are locked in until the next round opens." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "Can I filter the results table by date?", a: "The default view shows the most recent draws chronologically, with older results available through the load-more option." },
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
