"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/promotions/",
  title: "55 Club Promotions — Offers Page Template",
  metaDescription:
    "The 55 Club Promotions page template: a clear offers layout with plain terms, expiry visibility and a category-by-category breakdown.",
  build() {
    return renderStandardPage({
      slug: "/promotions/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Promotions" }],
      hero: {
        eyebrow: "Offers & Promotions",
        h1: "55 Club Promotions",
        lead: "A promotions page template that leads with plain terms and visible expiry dates instead of vague banner claims — every offer explained in a sentence anyone can act on, with no fine print hidden behind a separate click.",
        primary: { label: "See Bonus Guide", href: "/bonus/" },
        secondary: { label: "Register", href: "/register/" },
      },
      intro: [
        "Promotions pages have a reputation problem across the affiliate web — bold banners promising outsized rewards with terms buried in tiny print several scrolls down. This template takes the opposite approach deliberately: every promotion card states its core terms directly on the card itself — what it offers, what's required to qualify, and when it expires — with no separate page needed just to find the fine print.",
        "The layout groups offers into simple categories rather than one undifferentiated list: welcome-style offers for new accounts, recurring offers tied to regular activity, and time-limited seasonal offers. That grouping mirrors how real gaming platforms typically structure promotions, and it helps a returning visitor find what's changed without re-reading offers they've already seen.",
        "Expiry visibility gets particular attention here. Each promotion card shows a clear end date rather than a countdown timer designed to create urgency — the goal is informing, not pressuring. A separate, small archive section links to expired offers for transparency, rather than quietly deleting them once they lapse.",
        "This page connects naturally to Bonus, Gift Code and Invite Code, since all four pages describe different facets of the same broader reward system. Rather than repeating content across them, each page owns a distinct piece of that system and links to the others for the rest.",
      ],
      features: {
        eyebrow: "Promotions Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for an offers page that respects the reader's time and attention instead of pressuring a quick decision.",
        cols: 4,
        items: [
          { icon: "gift", title: "Terms on the Card", text: "Core requirements shown directly, not hidden behind a separate link." },
          { icon: "clock", title: "Visible Expiry Dates", text: "A clear end date instead of an artificial urgency countdown." },
          { icon: "spark", title: "Categorized Offers", text: "Welcome, recurring and seasonal offers grouped separately." },
          { icon: "check", title: "Expired Offer Archive", text: "Past promotions kept visible rather than silently removed." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Reading a Promotion Card",
          title: "What Every Card Includes",
          paragraphs: [
            "Each promotion card in this template follows a fixed anatomy: a short title, one sentence describing the offer, a qualifying requirement, and an expiry date — in that order, every time. Predictable structure means a visitor scanning multiple offers doesn't have to re-learn the layout for each one.",
            "Where a promotion has more detailed terms than fit on a card, a \"full terms\" link expands them inline rather than navigating away, so context isn't lost mid-read.",
          ],
          sideList: {
            title: "Promotion Card Anatomy",
            items: [
              "Title — short and specific",
              "Description — one plain sentence",
              "Requirement — what qualifies you",
              "Expiry — a real date, not a countdown",
            ],
          },
        },
        {
          eyebrow: "Category Breakdown",
          title: "Welcome, Recurring and Seasonal Offers",
          reverse: true,
          paragraphs: [
            "Welcome-style offers target new accounts and typically appear once; recurring offers tie to regular activity like the Daily Rewards check-in pattern; seasonal offers are time-boxed around specific periods. This template treats each category as visually distinct — different card accents, different section headers — so the type of offer is clear before reading the details.",
            "That distinction also helps returning visitors triage quickly: someone who's already claimed the welcome offer can skip straight to what's new in the recurring or seasonal sections.",
          ],
          asideTitle: "A Note on Real Terms",
          asideText: "This template shows the structure and copy pattern for promotions, not live offers. Any real implementation should ensure terms are accurate, current and compliant with applicable regulations before publishing.",
        },
      ],
      extraSection: {
        eyebrow: "Design Philosophy",
        title: "Why This Page Avoids Urgency Tactics",
        paragraphs: [
          "Countdown timers, flashing banners and \"only 3 left\" style messaging are common on promotions pages because they work in the short term — but they also erode trust over time, especially once a visitor notices the same countdown resetting on their next visit. This template avoids all of that in favor of plain, stable information: what the offer is, what's required, and when it actually ends.",
          "That restraint is a deliberate brand choice as much as a UX one. A platform positioning itself as premium and trustworthy, as this template's design language does throughout, undermines that positioning the moment its promotions page starts using manipulative patterns borrowed from lower-tier competitors.",
          "There's also a practical performance argument for restraint here, beyond the brand reasoning. Countdown timers require a running JavaScript interval on every card, multiplied across however many promotions are displayed at once — a real cost to Interaction to Next Paint that a static expiry date simply doesn't carry. Removing the gimmick removes the performance tax that comes with it.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Bonus", href: "/bonus/" },
          { label: "Gift Code", href: "/gift-code/" },
          { label: "Invite Code", href: "/invite-code/" },
          { label: "VIP Club", href: "/vip-club/" },
          { label: "Rewards", href: "/rewards/" },
        ],
      },
      faq: {
        items: [
          { q: "How are promotions organized on this page?", a: "Into three categories: welcome-style offers for new accounts, recurring offers tied to regular activity, and time-limited seasonal offers." },
          { q: "Where do I find the full terms for an offer?", a: "Each promotion card includes a full-terms link that expands additional detail inline, without navigating away from the page." },
          { q: "Does this page use countdown timers?", a: "No — expiry dates are shown plainly instead, avoiding the artificial urgency tactics common on many promotions pages." },
          { q: "What happens to offers after they expire?", a: "They move to a small archive section rather than being silently removed, for transparency." },
          { q: "How is Promotions different from Bonus?", a: "Promotions covers the offers themselves — what's currently available and its terms; Bonus goes deeper into how bonus mechanics generally work across the platform." },
          { q: "Are the offers on this page live?", a: "No — this is a static content template demonstrating structure and copy, not a live promotions system with real offers." },
          { q: "How does this connect to Gift Code and Invite Code?", a: "Those two pages cover specific redemption and referral mechanics that often appear as promotion types here, without duplicating each other's content." },
          { q: "Why does this page avoid countdown timers specifically?", a: "Beyond the trust concern, running countdown intervals on every card carries a real performance cost — a static expiry date achieves the same information without that overhead." },
          { q: "How often is the promotions list expected to change?", a: "This template doesn't prescribe a fixed cadence, but the categorized layout is built to handle frequent updates without needing structural changes each time." },
        ],
      },
      cta: {
        title: "See the Full Reward System",
        text: "Bonus, Gift Code and Invite Code each cover a different piece of the puzzle — worth reading together for the complete picture.",
        primary: { label: "View Bonus", href: "/bonus/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
