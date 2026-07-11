"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/vip-club/",
  title: "55 Club VIP Club — Tiered Loyalty Page Template",
  metaDescription:
    "The 55 Club VIP Club page template: a tiered loyalty ladder layout, plain progression rules and a benefits comparison across tiers.",
  build() {
    return renderStandardPage({
      slug: "/vip-club/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "VIP Club" }],
      hero: {
        eyebrow: "Loyalty Program",
        h1: "55 Club VIP Club",
        lead: "A tiered loyalty ladder template — from an entry tier with light perks to a top tier with priority support — laid out for fast, side-by-side comparison at any screen size, phone included.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Rewards", href: "/rewards/" },
      },
      intro: [
        "VIP or loyalty tier pages tend to fail in one of two directions: either they're so vague about progression that users can't tell what actually moves them up a tier, or they're so dense with numbers and conditions that the page becomes unreadable. This template aims for a middle path — a clear tier ladder with plain progression logic, presented as a comparison rather than a wall of text.",
        "Each tier card follows the same anatomy: a name, a one-line description of who the tier suits, and three to five concrete benefits. That consistency means comparing tier two against tier four takes a glance, not a re-read of differently structured paragraphs.",
        "Progression logic is explained once, clearly, near the top of the tier list, rather than repeated with slight variation under each tier card. The explanation covers what generally moves an account up a tier (typically activity or engagement over time) without inventing specific numeric thresholds this static template has no authority to promise.",
        "This page connects naturally to Rewards, since daily engagement often factors into tier progression on real platforms, and to Invite Code, since referral activity is another common lever in loyalty program design.",
      ],
      features: {
        eyebrow: "VIP Club Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a scannable, tiered loyalty page that holds up on any screen size.",
        cols: 4,
        items: [
          { icon: "crown", title: "Consistent Tier Cards", text: "Same anatomy across every tier for fast side-by-side comparison." },
          { icon: "spark", title: "Plain Progression Logic", text: "One clear explanation of what generally moves an account up a tier." },
          { icon: "check", title: "Concrete Benefits", text: "Three to five specific perks per tier, not vague superlatives." },
          { icon: "headset", title: "Priority Support Framing", text: "Top-tier benefits described specifically, including support priority." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Tier Structure",
          title: "A Four-Tier Ladder, Clearly Labeled",
          paragraphs: [
            "This template presents four illustrative tiers — Entry, Silver, Gold and Elite — each building on the last with more benefits and a higher bar for entry. The exact number of tiers is a design choice, not a fixed requirement; what matters structurally is that each tier is clearly named and visually distinct.",
            "Tier names avoid overly abstract branding (no invented jargon) in favor of familiar terms that communicate rank immediately, even to a first-time visitor unfamiliar with the specific program.",
          ],
          sideList: {
            title: "Illustrative Tier Ladder",
            items: [
              "Entry — light perks, low bar to reach",
              "Silver — expanded rewards, moderate activity",
              "Gold — priority features, sustained engagement",
              "Elite — top-tier recognition and support priority",
            ],
          },
        },
        {
          eyebrow: "How Progression Works",
          title: "What Typically Moves an Account Up a Tier",
          reverse: true,
          paragraphs: [
            "Rather than inventing specific point thresholds this template has no authority to promise, the progression section explains the concept generally: tiers typically respond to sustained account activity and engagement over a rolling period, evaluated periodically rather than instantly.",
            "A real implementation would attach actual numbers and a specific evaluation cadence to this pattern — this template's job is demonstrating how to explain that system clearly, not inventing the system itself.",
          ],
          asideTitle: "Why Vagueness Erodes Trust",
          asideText: "A VIP program that never explains how tiers are determined tends to feel arbitrary to users, even if the underlying logic is perfectly fair. Explaining the mechanism, even in general terms, builds more trust than silence.",
        },
      ],
      extraSection: {
        eyebrow: "Benefits Comparison",
        title: "Why Every Tier Lists Concrete, Not Vague, Perks",
        paragraphs: [
          "It's tempting to describe top-tier benefits in aspirational language — \"exclusive access,\" \"premium treatment\" — without ever specifying what that actually means day to day. This template resists that temptation by requiring every listed benefit to be something concrete enough to verify: faster support response times, a dedicated contact channel, or a specific reward multiplier, rather than an adjective with no attached mechanic.",
          "That discipline extends to how tiers are compared against each other. Rather than a marketing narrative claiming each tier is dramatically better than the last, the benefit lists let the comparison speak for itself — readers can see exactly what's added at each step without needing persuasive copy to fill in the gaps.",
          "This also makes the page easier to keep accurate over time. Vague, aspirational copy tends to drift away from what a program actually offers, since nobody notices when a superlative stops quite matching reality. A list of concrete, checkable benefits is self-correcting in a way marketing language never is — either the benefit is still true, or the card needs updating.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Rewards", href: "/rewards/" },
          { label: "Invite Code", href: "/invite-code/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Bonus", href: "/bonus/" },
          { label: "Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "How many VIP tiers does this template show?", a: "Four illustrative tiers — Entry, Silver, Gold and Elite — each with progressively more benefits, though the exact count is a design choice rather than a fixed rule." },
          { q: "What determines tier progression?", a: "Generally, sustained account activity and engagement over a rolling period, explained conceptually here since this static template doesn't define specific numeric thresholds." },
          { q: "What kind of benefits are listed per tier?", a: "Concrete, verifiable perks — like support response priority or a specific reward multiplier — rather than vague aspirational language." },
          { q: "How does VIP Club relate to Rewards?", a: "Daily engagement patterns described on the Rewards page often factor into tier progression logic, so the two pages are designed to be read together." },
          { q: "Can referrals affect my VIP tier?", a: "This template notes referral activity as a common lever in real loyalty program design, connecting to the Invite Code page for that mechanic." },
          { q: "Is this VIP system live?", a: "No — this is a static content template demonstrating tier structure and comparison patterns, not a functioning loyalty program." },
          { q: "Does the top tier include better support?", a: "Yes, in this template's illustrative structure — Elite includes priority support framing as one of its concrete, listed benefits." },
          { q: "Why do the benefit lists avoid marketing language?", a: "Concrete, checkable benefits stay accurate over time; vague superlatives tend to drift away from reality without anyone noticing, which erodes trust in the whole program." },
          { q: "Can a VIP tier ever be lost, not just gained?", a: "This template doesn't prescribe that specifically, but it's a common pattern on real loyalty programs worth stating clearly on any live implementation's own progression page." },
        ],
      },
      cta: {
        title: "See How Rewards Connects",
        text: "Daily engagement patterns on the Rewards page often factor into VIP progression — the two pages are designed to be read together.",
        primary: { label: "View Rewards", href: "/rewards/" },
        secondary: { label: "View Invite Code", href: "/invite-code/" },
      },
    });
  },
};
