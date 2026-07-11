"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/slots/",
  title: "55 Club Slots — Themed Reel Games",
  metaDescription:
    "Play Slots on 55 Club: themed reel games grouped by collection, with paylines, bonus rounds and free spins compared side by side.",
  build() {
    return renderStandardPage({
      slug: "/slots/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Slots" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Slots",
        lead: "Themed reel games grouped by collection, each with its own paylines, bonus rounds and free-spin features. Compare titles side by side before you spin.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Casino", href: "/casino/" },
      },
      intro: [
        "Slots on 55 Club are organized by theme, so you can browse by the style of game you're in the mood for rather than scrolling an undifferentiated list. Each title in a collection shares a visual theme but brings its own mix of paylines, bonus rounds and free-spin features.",
        "Every game card follows the same layout — a themed thumbnail, a short description of what the title offers, and a tag flagging what's notable about it, whether that's a new release, a fan favourite, or a high-volatility title built for bigger, less frequent hits.",
        "A feature comparison block sits alongside the grid, laying out paylines, volatility and bonus-round details side by side so you can weigh titles against each other before picking one to spin.",
        "Slots sits closest to Casino in the game lineup — if you like the reel-based pace here, Casino's table-style formats are worth a look next, and Promotions is where bonus-round mechanics tie into broader reward structures.",
      ],
      features: {
        eyebrow: "Slots Features",
        title: "What Makes Slots Different",
        text: "Four things that define how the collection is organized.",
        cols: 4,
        items: [
          { icon: "dice", title: "Themed Collections", text: "Games grouped by theme so you can browse by style, not scroll a wall of tiles." },
          { icon: "spark", title: "Feature Comparison", text: "Paylines, volatility and bonus rounds compared side by side across titles." },
          { icon: "check", title: "Consistent Card Layout", text: "Same thumbnail, description and tag pattern across every collection." },
          { icon: "gift", title: "Bonus Rounds & Free Spins", text: "Each title's bonus mechanics and free-spin triggers laid out plainly." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Understanding the Terms",
          title: "What to Compare Before You Spin",
          paragraphs: [
            "The feature comparison block covers four terms worth knowing: paylines (the patterns that determine a winning result), volatility (how often smaller versus larger payouts tend to land), bonus rounds (secondary mechanics triggered within a game), and free spins (extra spins awarded without using your own balance).",
            "Each title lists its own numbers against these terms, so comparing two games in the same collection is a matter of reading two rows side by side rather than digging through separate rule pages.",
          ],
          sideList: {
            title: "What Gets Compared",
            items: [
              "Paylines — how many ways a spin can win",
              "Volatility — payout frequency and size pattern",
              "Bonus rounds — secondary in-game features",
              "Free spins — bonus spins without using your balance",
            ],
          },
        },
        {
          eyebrow: "Browsing by Collection",
          title: "Themed Groups Make It Easy to Find a Game",
          reverse: true,
          paragraphs: [
            "Rather than one long undifferentiated grid, titles are grouped into themed collections — so if you know the style you're after, you can jump straight to that group instead of scanning past everything else first.",
            "Each collection card carries a tag flagging what's notable about that title — new, popular, or high volatility — so you can spot standouts at a glance before opening any single game.",
          ],
          asideTitle: "Comparing Across Collections",
          asideText: "The feature comparison block works across themes too — line up a high-volatility title from one collection against a steadier one from another before deciding where to spin.",
        },
      ],
      extraSection: {
        eyebrow: "Bonus Rounds & Free Spins",
        title: "How Bonus Features Work Across Titles",
        paragraphs: [
          "Most titles in the collection carry at least one bonus feature — a free-spin round triggered by landing scatter symbols, a pick-and-win bonus screen, or a multiplier that stacks during a hot streak. The feature comparison block flags which titles carry which mechanics, so you know what you're getting into before you load a game.",
          "Free spins in particular vary by title — some award a fixed batch with a multiplier attached, others let the bonus round retrigger for extended play. Check the comparison block or the title's own info panel for the specifics before you spin.",
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
          { q: "How are slot games organized on this page?", a: "By themed collection, so you can browse titles that share a visual style rather than scrolling one undifferentiated list." },
          { q: "What do the feature comparison terms mean?", a: "Paylines, volatility, bonus rounds and free spins — the four terms most useful for comparing titles before you spin." },
          { q: "What's the difference between a bonus round and free spins?", a: "A bonus round is a secondary mechanic triggered within a game, such as a pick-and-win screen; free spins are extra spins awarded without touching your own balance." },
          { q: "How is Slots different from Casino?", a: "Slots focuses on reel-based games grouped by theme; Casino is a broader hub for table-style classics and other formats." },
          { q: "How do I compare paylines across titles?", a: "The feature comparison block lists paylines, volatility and bonus details for each title side by side." },
          { q: "Do all titles have the same volatility?", a: "No — volatility varies by title, from steadier, more frequent smaller payouts to higher-risk titles built for bigger, less frequent hits." },
          { q: "Where can I learn more about bonus structures generally?", a: "The Bonus and Promotions pages cover reward mechanics in more depth than a single title's comparison entry." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "How do free spins get triggered?", a: "It varies by title — commonly by landing a set number of scatter symbols during a base-game spin, as noted in each title's comparison entry." },
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
