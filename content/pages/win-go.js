"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/win-go/",
  title: "55 Club Win Go — Colour & Number Prediction Game",
  metaDescription:
    "Play Win Go on 55 Club: predict the colour and number before each round locks, track results in the history table, and see the full rules breakdown.",
  build() {
    return renderStandardPage({
      slug: "/win-go/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Win Go" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Win Go",
        lead: "A colour-and-number prediction round that opens, counts down and locks on a fixed cycle — pick before it closes, then watch the result land in the history table.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Colour Prediction", href: "/colour-prediction/" },
      },
      intro: [
        "Win Go layers a numbered outcome on top of the familiar colour-prediction mechanic, which gives it a bit more to explain than the simpler Colour Prediction format. Each round runs on a fixed timer, and every result — colour and number together — gets logged so you can review recent patterns before placing your next pick.",
        "The page opens with the same round-status panel used across the game cluster, so if you've already played Lottery or Colour Prediction, the layout is instantly familiar. That consistency isn't just a design choice — it means less time reading instructions and more time playing.",
        "Results history gets a bit more room here than on the simpler formats, since Win Go's dual colour-and-number outcome benefits from two data points per row instead of one. The table still defaults to a scannable ten-row view with a load-more option underneath.",
        "The FAQ block below runs deeper than some of the other category pages too, since Win Go tends to raise more questions than most — timing, rule clarifications and how it compares to Colour Prediction all come up regularly.",
      ],
      features: {
        eyebrow: "Win Go Features",
        title: "What Makes Win Go Different",
        text: "Four things that set this format apart from the rest of the cluster.",
        cols: 4,
        items: [
          { icon: "ball", title: "Colour + Number", text: "Two outcomes per round instead of one, for a richer result." },
          { icon: "clock", title: "Fixed Round Timer", text: "A visible countdown so you always know how long you've got." },
          { icon: "check", title: "Two-Column History", text: "Colour and number tracked together in every past round." },
          { icon: "spark", title: "Fast Cycles", text: "Short rounds mean you're never waiting long for the next result." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How a Round Works",
          title: "A Step-by-Step Breakdown",
          paragraphs: [
            "A Win Go round moves through four stages: the round opens for picks, a countdown runs until it closes, the round locks so no more picks are accepted, and the result — a colour and a number together — is revealed and added to the history table.",
            "Breaking the cycle into numbered steps rather than one dense paragraph makes it easier to follow on mobile, especially if you're checking the rules mid-session.",
          ],
          sideList: {
            title: "The Four Round Steps",
            items: [
              "1. Round opens — picks are accepted",
              "2. Countdown runs until close",
              "3. Round locks — no more picks",
              "4. Result revealed and logged",
            ],
          },
        },
        {
          eyebrow: "Results History",
          title: "Reading the Results Table",
          reverse: true,
          paragraphs: [
            "Because every Win Go result carries both a colour and a number, the history table uses two clearly labeled columns instead of cramming both values into one cell. Column headers stay visible while scrolling on mobile with a lightweight sticky-header pattern.",
            "As with Lottery, the table defaults to the ten most recent results with a load-more option, so the page stays fast no matter how much history builds up over time.",
          ],
          asideTitle: "Consistent Across the Cluster",
          asideText: "The same results table powers Lottery, Win Go and Colour Prediction, with the column count adjusted to match each format's outcome.",
        },
      ],
      extraSection: {
        eyebrow: "Common Questions",
        title: "What Players Usually Ask About Win Go",
        paragraphs: [
          "Win Go tends to bring up a wider range of questions than the simpler formats in this cluster — how the timer works, what counts as a valid pick before lock, and how it differs from Colour Prediction all come up often. The FAQ below is built around exactly those questions rather than generic filler.",
          "If your question isn't covered below, Customer Support is available around the clock through live chat, and the Responsible Gaming page covers healthy play habits if you want a broader picture before diving in.",
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
          { q: "How does Win Go differ from Colour Prediction?", a: "Win Go combines a colour outcome with a numbered result and a richer two-column history table; Colour Prediction uses a simpler, colour-only result." },
          { q: "What are the four steps of a Win Go round?", a: "Round opens for picks, countdown runs, round locks, and the result is revealed and logged to history." },
          { q: "How is the results history displayed?", a: "As a two-column table showing colour and number together, defaulting to the ten most recent results with a load-more option." },
          { q: "Is Win Go related to Lottery?", a: "Yes — Lottery, Win Go and Colour Prediction all share a round-based structure and sit together as a linked cluster of games." },
          { q: "How long does a round last?", a: "Rounds run on a fixed, visible countdown shown in the round-status panel, so you always know exactly how much time is left before it locks." },
          { q: "Where can I read the full rules?", a: "The rules panel above covers the round cycle in detail, and the Responsible Gaming page has broader guidance on healthy play." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "What if I have a question the FAQ doesn't cover?", a: "Reach out through Customer Support, available around the clock via live chat." },
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
