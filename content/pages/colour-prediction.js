"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/colour-prediction/",
  title: "55 Club Colour Prediction — Pick Green, Red or Violet",
  metaDescription:
    "Play Colour Prediction on 55 Club: pick Green, Red or Violet before the round locks, watch fast-cycle results land in the history table, and see the full rules.",
  build() {
    return renderStandardPage({
      slug: "/colour-prediction/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Colour Prediction" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Colour Prediction",
        lead: "Pick Green, Red or Violet before the round locks. No numbers, no extra layers — just a fast, straightforward call on which colour comes up next.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Win Go", href: "/win-go/" },
      },
      intro: [
        "Colour Prediction is the simplest round-based pick in the game cluster: choose Green, Red or Violet, and see if you called it right. There's no number to layer on top, which keeps each round quick to play and easy to follow from the moment it opens.",
        "The round-status panel leads with exactly what you need first — whether picks are still open, how long until it locks, or what the last result was. Everything else, including the history table, sits just below.",
        "Because Colour Prediction and Win Go share a family resemblance, it's worth knowing the difference up front: Colour Prediction is colour-only with a shorter round cycle, while Win Go adds a numbered result on top with a longer two-column history. Pick whichever pace and depth suits how you like to play.",
        "Rounds cycle fast here, so the history table fills up quickly — useful if you like tracking recent patterns before making your next pick.",
      ],
      features: {
        eyebrow: "Colour Prediction Features",
        title: "What Makes Colour Prediction Different",
        text: "Four things that define this format.",
        cols: 4,
        items: [
          { icon: "spark", title: "Three Colours", text: "Pick Green, Red or Violet — one simple call, no number required." },
          { icon: "clock", title: "Fast Round Cycles", text: "Short rounds mean you're never waiting long between picks." },
          { icon: "check", title: "Single-Column History", text: "Every past result logged as a clean, scannable colour list." },
          { icon: "bolt", title: "Simple Round Timer", text: "A visible countdown shows exactly how long picks stay open." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Round Mechanics",
          title: "How a Round Moves Through Its Phases",
          paragraphs: [
            "Each round runs through three phases: it opens for picks, a countdown runs until it locks, and the result — one of Green, Red or Violet — is revealed and logged to history. The status indicator pairs colour with a text label at every stage, so it's always clear exactly where the round stands.",
            "Once the round locks, no further picks are accepted until the next round opens, which keeps every cycle fair and predictable.",
          ],
          sideList: {
            title: "Round Phases",
            items: [
              "Open — picks are accepted",
              "Closing — a short warning window",
              "Locked — no more picks accepted",
              "Result — colour revealed and logged",
            ],
          },
        },
        {
          eyebrow: "Colour Prediction vs. Win Go",
          title: "Two Related Formats, Two Different Paces",
          reverse: true,
          paragraphs: [
            "Colour Prediction and Win Go are built on the same round-based foundation but land at different levels of depth. Colour Prediction keeps it to a single colour outcome per round with a quicker cycle; Win Go layers a numbered result on top with a longer two-column history table.",
            "If you want the fastest possible pace, Colour Prediction is the one to play. If you'd rather track two data points per round, Win Go is right next door.",
          ],
          asideTitle: "Same Cluster, Different Feel",
          asideText: "Colour Prediction, Win Go and Lottery all share the same round-based structure, with the pace and complexity adjusted for each format.",
        },
      ],
      extraSection: {
        eyebrow: "Reading the Result",
        title: "How Results Are Displayed",
        paragraphs: [
          "Every Colour Prediction result pairs a colour swatch with a text label rather than colour alone, so the outcome is always unambiguous at a glance. The history table below the round-status panel logs each result in a single scannable column, most recent first.",
          "Because rounds move quickly, the history fills in fast — helpful if you like to see how the last several rounds landed before deciding on your next pick.",
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
          { q: "How does Colour Prediction work?", a: "Pick Green, Red or Violet before the round locks. A countdown shows how long picks stay open, and the result is revealed and logged once the round closes." },
          { q: "How is this different from Win Go?", a: "Colour Prediction is colour-only with a shorter round cycle; Win Go adds a numbered result on top with a longer two-column history table." },
          { q: "What colours can I pick?", a: "Green, Red or Violet — one pick per round." },
          { q: "How long does a round last?", a: "Rounds run on a fast, visible countdown, so you always know exactly how long you've got before it locks." },
          { q: "Where can I see past round results?", a: "A single-column history table sits below the round-status panel, showing recent colour results with the most recent first." },
          { q: "Can I change my pick after the round locks?", a: "No — once a round locks, no further picks are accepted until the next round opens." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "Is Colour Prediction related to Lottery and Win Go?", a: "Yes — all three share a round-based structure and sit together as a linked cluster of games." },
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
