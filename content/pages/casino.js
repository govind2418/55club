"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/casino/",
  title: "55 Club Casino — Game Category Hub Page Template",
  metaDescription:
    "The 55 Club Casino page template: a hub-style layout for table classics, card games and fishing formats with a categorized game list.",
  build() {
    return renderStandardPage({
      slug: "/casino/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Casino" }],
      hero: {
        eyebrow: "Game Category",
        h1: "55 Club Casino",
        lead: "A hub-style category template covering table classics, card formats and arcade-style games, organized into a single categorized game list.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Slots", href: "/slots/" },
      },
      intro: [
        "Casino serves a broader role than most category pages in this template — it acts as a hub for several related sub-formats (table classics, card games, fishing, mini games) rather than a single narrow mechanic. That breadth requires a different content structure than a page like Aviator, which explains one specific format in depth.",
        "This page handles that breadth with a categorized game list: clear section headers grouping cards by sub-type, so a visitor scanning for card games specifically doesn't have to wade through table-game entries first. It's a simple organizational choice, but it's the difference between a hub page that feels navigable and one that feels like an undifferentiated dump.",
        "Because Casino sits at the center of several category relationships — linking out to Slots, Aviator and the individual game pages — this template treats its related-links section as slightly more extensive than a narrower page like Colour Prediction would need, reflecting its actual position in the site's information architecture.",
        "The page closes, as always, with a path to Register and a nod toward Promotions, since casino-style categories are often where bonus and reward mechanics get the most attention across a real gaming platform.",
        "Because Casino is likely to be one of the higher-traffic pages in a real implementation, its layout was also stress-tested against a longer game list than the other category pages assume, confirming the section-header pattern holds up cleanly whether there are a dozen games listed or several dozen.",
      ],
      features: {
        eyebrow: "Casino Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a broad, hub-style category page.",
        cols: 4,
        items: [
          { icon: "cards", title: "Categorized Game List", text: "Clear section groupings instead of one undifferentiated grid." },
          { icon: "fish", title: "Sub-Format Coverage", text: "Table classics, card games and arcade formats represented distinctly." },
          { icon: "spark", title: "Hub-Level Linking", text: "More extensive related links, reflecting this page's central position." },
          { icon: "gift", title: "Promotions Tie-In", text: "A natural bridge toward reward and bonus content." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Page Structure",
          title: "Why Casino Uses Sub-Category Headers",
          paragraphs: [
            "Rather than one long game grid, this template breaks Casino into labeled sub-sections — Table Classics, Card Games, Fishing and Mini Games — each with its own short intro line before the game cards. That structure gives the page a clear scan path even as the number of games grows.",
            "It also creates natural anchor points that could support in-page navigation (a jump menu) in a fuller implementation, without requiring any change to the underlying content structure.",
            "Each sub-section additionally carries its own short, one-sentence framing — what kind of visitor that category tends to serve — so even someone skimming headers alone comes away with a rough map of the page before reading a single card.",
          ],
          sideList: {
            title: "Sub-Categories Covered",
            items: [
              "Table Classics — traditional table-style formats",
              "Card Games — traditional card formats reimagined",
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
            "Casino's related-links section is intentionally broader than a page like Aviator's, because Casino genuinely sits at a more central point in the site's category structure — it's the natural next stop for visitors coming from Slots, Aviator, or even the homepage's general \"explore games\" path.",
            "This template reflects that centrality directly in its internal linking rather than treating every page as equally connected to every other page regardless of actual relevance.",
          ],
          asideTitle: "A Note on Internal Link Equity",
          asideText: "Concentrating more internal links on a genuinely central hub page is a standard SEO practice — it signals to search engines which pages carry the most structural importance within a topic cluster.",
        },
      ],
      extraSection: {
        eyebrow: "Balancing Breadth and Depth",
        title: "Why Casino Doesn't Try to Explain Every Sub-Format in Full",
        paragraphs: [
          "Given how much ground Casino covers, it would be easy for this page to sprawl into a shallow summary of everything and a deep explanation of nothing. This template avoids that by keeping each sub-category's intro to a sentence or two, and trusting the dedicated pages — Slots, Aviator — to carry the deeper explanatory weight for their respective formats.",
          "Casino's job, in other words, is orientation and navigation, not exhaustive explanation. That division of labor is what keeps both this page and its more specialized siblings focused on what they each do best.",
          "It's a pattern worth naming explicitly for anyone building out a similar hub-and-spoke content structure: give the hub page just enough depth to be useful on its own, then trust the internal links to do the rest. Trying to make every hub page fully self-contained usually just produces a longer, more repetitive site overall.",
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
          { q: "What game types does the Casino page cover?", a: "Four sub-categories in this template: Table Classics, Card Games, Fishing and Mini Games, each with its own labeled section." },
          { q: "Why is Casino organized differently from Aviator?", a: "Casino is a hub covering several sub-formats, while Aviator explains one specific mechanic in depth — different scopes call for different page structures." },
          { q: "Does Casino link to more pages than other category pages?", a: "Yes — its related-links section reflects its central position in the site's category structure, connecting to more pages than a narrower template like Colour Prediction." },
          { q: "Where can I read more about Slots specifically?", a: "The dedicated Slots page goes into more depth on reel-based games than Casino's brief sub-category intro." },
          { q: "Is this page connected to real casino games?", a: "No — it's a static content template demonstrating layout, copy and internal-linking structure, not a functioning game catalog." },
          { q: "How does Casino relate to Promotions?", a: "The page closes with a link toward Promotions, since bonus and reward mechanics are commonly associated with casino-style categories on real platforms." },
          { q: "Can this hub structure scale to more sub-categories?", a: "Yes — the labeled-section pattern is designed to accommodate additional sub-categories without restructuring the page." },
          { q: "Why doesn't Casino explain every sub-format in full detail?", a: "Its role is orientation and navigation; the dedicated Slots and Aviator pages carry the deeper explanatory weight for their respective formats." },
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
