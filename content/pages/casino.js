"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/casino/",
  title: "55 Club Casino — Table Classics & Card Games",
  metaDescription:
    "Play Casino on 55 Club: table classics, card games, fishing and mini games organized into one categorized hub with a consistent game grid.",
  build() {
    return renderStandardPage({
      slug: "/casino/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Casino" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Casino",
        lead: "Table classics, card games, fishing and mini games, all in one hub. Browse by category and jump straight into a consistent, familiar game grid.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Slots", href: "/slots/" },
      },
      intro: [
        "Casino is the hub for everything table-style on 55 Club — wheel formats, card games, fishing and mini games all live here, organized into clear categories rather than one long undifferentiated list.",
        "Each category gets its own labeled section, so if you're after card games specifically, you can jump straight there without wading through table games first. Every game card in the grid follows the same layout across categories, so switching between sections never feels like switching products.",
        "Casino sits at the center of the game lineup, linking out to Slots, Aviator and the individual round-based games, so it's a natural jumping-off point whether you're browsing for the first time or looking for something new to try.",
        "Bonus and reward mechanics get a lot of attention around casino-style categories in particular, so Promotions is worth a look right alongside the game grid here.",
      ],
      features: {
        eyebrow: "Casino Features",
        title: "What Makes Casino Different",
        text: "Four things that define this hub.",
        cols: 4,
        items: [
          { icon: "cards", title: "Categorized Game List", text: "Clear section groupings instead of one undifferentiated grid." },
          { icon: "fish", title: "Sub-Format Coverage", text: "Table classics, card games, fishing and mini games, each in its own section." },
          { icon: "spark", title: "Consistent Game Grid", text: "The same card layout across every category, so nothing feels out of place." },
          { icon: "gift", title: "Promotions Tie-In", text: "A direct link into bonus and reward content tied to casino play." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Page Structure",
          title: "Browsing by Category",
          paragraphs: [
            "Casino is broken into labeled sections — Table Classics, Card Games, Fishing and Mini Games — each with a short intro line before its game cards. That structure keeps the page easy to scan no matter how many titles sit inside each category.",
            "Table Classics covers wheel formats and other traditional table-style games. Card Games brings familiar card formats into a fast digital round. Fishing pairs a target-and-reward mechanic with arcade-style action, and Mini Games rounds out the hub with short-session formats built for quick play.",
          ],
          sideList: {
            title: "Categories in This Hub",
            items: [
              "Table Classics — wheel and traditional table formats",
              "Card Games — familiar card formats, digital pace",
              "Fishing — target-and-reward arcade mechanics",
              "Mini Games — short-session arcade formats",
            ],
          },
        },
        {
          eyebrow: "Central Hub Role",
          title: "Why Casino Links to So Many Other Pages",
          reverse: true,
          paragraphs: [
            "Casino sits at a genuinely central point in the game lineup — it's the natural next stop whether you're coming from Slots, Aviator, or browsing from the homepage's general games entry point.",
            "That's reflected directly in the related links below: more connections than a narrower page like Colour Prediction, because Casino's role is to route you toward whichever category fits what you're in the mood to play.",
          ],
          asideTitle: "One Hub, Many Doors",
          asideText: "Whichever category you land on first, the related links make it easy to move between Casino, Slots and the round-based games without losing your place.",
        },
      ],
      extraSection: {
        eyebrow: "Balancing Breadth and Depth",
        title: "Casino Is Built for Browsing, Not Reading",
        paragraphs: [
          "Given how much ground Casino covers, each category section stays short and to the point — a sentence or two of framing, then straight into the game grid. The dedicated Slots and Aviator pages carry the deeper explanations for their respective formats.",
          "Casino's job is to help you find the right game fast, then get out of the way. If you already know you want a card game, head straight to that section; if you're browsing, the category headers give you a quick map of what's here before you commit to any one title.",
        ],
      },
      relatedLinks: {
        title: "Related Game Pages",
        links: [
          { label: "Slots", href: "/slots/" },
          { label: "Aviator", href: "/aviator/" },
          { label: "Win Go", href: "/win-go/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "VIP Club", href: "/vip-club/" },
        ],
      },
      faq: {
        items: [
          { q: "What game types does the Casino page cover?", a: "Four categories: Table Classics, Card Games, Fishing and Mini Games, each in its own labeled section." },
          { q: "How do I find card games specifically?", a: "Jump straight to the Card Games section — each category has its own labeled header so you don't need to scroll past the others." },
          { q: "Does Casino link to more pages than other category pages?", a: "Yes — its related links reflect its central position in the game lineup, connecting to more pages than a narrower page like Colour Prediction." },
          { q: "Where can I read more about Slots specifically?", a: "The dedicated Slots page goes into more depth on reel-based games than Casino's category intro." },
          { q: "How does Casino relate to Promotions?", a: "Bonus and reward mechanics are commonly tied to casino-style categories, so Promotions sits right alongside the game grid here." },
          { q: "What's in the Fishing category?", a: "Target-and-reward arcade mechanics — a different pace from the table and card formats elsewhere on the page." },
          { q: "Do I need an account to play?", a: "Yes — register with a username and password first; the Register page walks through the full sign-up flow." },
          { q: "Why doesn't Casino explain every game in full detail?", a: "Its role is browsing and navigation; the dedicated Slots and Aviator pages carry the deeper explanatory weight for their formats." },
        ],
      },
      cta: {
        title: "Explore More of the Ecosystem",
        text: "See how Promotions and VIP Club connect to the games covered here.",
        primary: { label: "View Promotions", href: "/promotions/" },
        secondary: { label: "View VIP Club", href: "/vip-club/" },
      },
    });
  },
};
