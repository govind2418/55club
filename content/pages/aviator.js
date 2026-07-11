"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/aviator/",
  title: "55 Club Aviator — Crash-Style Multiplier Game",
  metaDescription:
    "Play Aviator on 55 Club: bet before takeoff, watch the multiplier climb, and cash out before the plane flies away. Check round history and full rules.",
  build() {
    return renderStandardPage({
      slug: "/aviator/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Aviator" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Aviator",
        lead: "Place your bet before the plane takes off, then watch the multiplier climb as it flies. Cash out any time to lock in your multiplier — wait too long and it flies away with your bet.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Casino", href: "/casino/" },
      },
      intro: [
        "Aviator runs on one simple idea: a plane climbs, a multiplier rises with it, and you decide exactly when to cash out. Every round starts with a short betting window before takeoff, and once the plane is in the air, the multiplier keeps climbing until it crashes — at which point any bet still riding the curve is lost.",
        "The skill in Aviator is entirely about timing. Cash out early and you lock in a smaller multiplier but a safer win; hold on longer and the multiplier keeps growing, but so does the chance the plane flies away before you tap out. There's no fixed target — you're reading the curve round by round and deciding how much risk you want to carry.",
        "A scrollable round history sits above the betting panel, showing the multiplier each recent round crashed at. It's the fastest way to get a feel for how a session is trending before you place your next bet.",
        "Aviator plays fast — rounds run back-to-back with only a short pause between the crash and the next betting window, so you're rarely waiting long to get back in.",
      ],
      features: {
        eyebrow: "Aviator Features",
        title: "What Makes Aviator Different",
        text: "Four things that define how a round plays out.",
        cols: 4,
        items: [
          { icon: "plane", title: "Rising Multiplier", text: "The multiplier climbs continuously from the moment the plane takes off." },
          { icon: "bolt", title: "Cash Out Any Time", text: "Lock in your multiplier the instant you decide — before the plane flies away." },
          { icon: "check", title: "Live Round History", text: "A scrollable list of recent crash points to help you read the pattern." },
          { icon: "spark", title: "Back-to-Back Rounds", text: "A short pause between rounds keeps the action moving." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How a Round Works",
          title: "A Step-by-Step Breakdown",
          paragraphs: [
            "An Aviator round moves through four stages: bets are placed while the plane sits on the runway, the plane takes off and the multiplier starts climbing, you choose when to cash out while it's still flying, and the round ends the moment the plane crashes.",
            "Cash out before the crash and your bet pays out at whatever multiplier was showing the instant you tapped out. Still in when it crashes, and that round's bet is gone — which is exactly why reading the curve and committing to a cash-out point matters so much.",
          ],
          sideList: {
            title: "The Four Round Steps",
            items: [
              "1. Bet placed before takeoff",
              "2. Plane takes off — multiplier starts rising",
              "3. Cash out any time while it's flying",
              "4. Round ends when the plane crashes",
            ],
          },
        },
        {
          eyebrow: "Round History",
          title: "Reading the Multiplier History",
          reverse: true,
          paragraphs: [
            "Every crash point gets added to a scrollable history chart above the bet panel, so you can see at a glance whether recent rounds have been ending early or running long. It's presented as a simple list of past multipliers, kept lightweight so it never slows the page down mid-session.",
            "The history doesn't predict the next round — every flight is independent — but it's a useful read on how a session has been playing out before you decide how aggressively to hold your next cash-out.",
          ],
          asideTitle: "Higher Risk, Higher Multiplier",
          asideText: "The longer the plane stays in the air, the higher the multiplier climbs — and the greater the chance it crashes before you cash out. That trade-off is the entire game.",
        },
      ],
      extraSection: {
        eyebrow: "Category Placement",
        title: "Why Aviator Sits Alongside Casino and Slots",
        paragraphs: [
          "Aviator is a single-outcome-per-round format — one bet, one flight, one result — which puts it closer in spirit to Casino and Slots than to the numbered-draw games like Lottery, Win Go and Colour Prediction. If you enjoy the fast, single-round pace of Aviator, those categories are worth exploring next.",
          "Rounds are quick and continuous, so it's easy to play several in a row while deciding on your cash-out strategy. Check the round history at any time to see how the last several flights played out.",
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
          { q: "How does Aviator work?", a: "Bet before the plane takes off, watch the multiplier climb as it flies, and cash out any time to lock in your win — the round ends when the plane crashes." },
          { q: "When should I cash out?", a: "That's entirely up to you — cash out early for a smaller, safer multiplier, or hold longer for a bigger payout at higher risk of the plane crashing first." },
          { q: "What happens if I don't cash out in time?", a: "If the plane crashes before you cash out, that round's bet is lost." },
          { q: "Where can I see past multipliers?", a: "A scrollable round history sits above the bet panel, showing the crash multiplier for recent rounds." },
          { q: "How long does a round last?", a: "Rounds move quickly — a short betting window before takeoff, then a flight that can end anywhere from under a second to a much longer climb." },
          { q: "Why is Aviator linked to Casino instead of Lottery?", a: "Aviator's single bet, single-round structure is closer to Casino and Slots than to the numbered-draw formats like Lottery and Win Go." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "Can I place a bet after the plane takes off?", a: "No — bets are locked in once the plane leaves the runway; you'll need to catch the next round's betting window." },
        ],
      },
      cta: {
        title: "Explore Related Categories",
        text: "See how Casino and Slots compare to this single-round format.",
        primary: { label: "View Casino", href: "/casino/" },
        secondary: { label: "View Slots", href: "/slots/" },
      },
    });
  },
};
