"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/bonus/",
  title: "55 Club Bonus — Reward Mechanics Page Template",
  metaDescription:
    "The 55 Club Bonus page template: a plain-language explainer for how bonus mechanics, wagering-style requirements and reward tiers are typically structured.",
  build() {
    return renderStandardPage({
      slug: "/bonus/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Bonus" }],
      hero: {
        eyebrow: "Reward Mechanics",
        h1: "55 Club Bonus",
        lead: "A plain-language explainer template for how bonus mechanics typically work — what a bonus is, how requirements are usually structured, where the terms live, and how this differs from a straightforward promotion.",
        primary: { label: "See Promotions", href: "/promotions/" },
        secondary: { label: "Register", href: "/register/" },
      },
      intro: [
        "\"Bonus\" is one of the most-searched terms in this entire category, and also one of the most poorly explained on real platforms, where the concept is often assumed rather than defined. This template treats the Bonus page as an educational resource first — a clear explanation of what a bonus actually is, how it's typically structured, and what common requirements (activity thresholds, time limits) tend to accompany one — before it links out to any specific current offer.",
        "That educational framing matters because search intent around \"bonus\" pages is often informational rather than purely transactional — people frequently want to understand the mechanic before committing to anything. A page that assumes prior knowledge and jumps straight to a claim button misses that entire audience.",
        "This template's explanation avoids jargon where possible, and where a technical term is unavoidable (like a wagering-style requirement), it's defined in the same sentence it's introduced rather than assumed or footnoted elsewhere.",
        "The page closes by distinguishing itself clearly from Promotions and Gift Code — Bonus explains the mechanic in general, Promotions lists current specific offers, and Gift Code covers a distinct redemption-code mechanic. Three related but separately scoped pages.",
      ],
      features: {
        eyebrow: "Bonus Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for explaining a commonly misunderstood mechanic in language anyone can follow on a first read.",
        cols: 4,
        items: [
          { icon: "spark", title: "Plain Definitions", text: "Technical terms explained in the same sentence they're introduced." },
          { icon: "clock", title: "Requirement Timelines", text: "How activity thresholds and time limits are typically structured." },
          { icon: "gift", title: "Bonus Types Overview", text: "A short breakdown of common bonus categories." },
          { icon: "check", title: "Terms Transparency", text: "A direct link to where full terms and conditions would live." },
        ],
      },
      infoSections: [
        {
          eyebrow: "What a Bonus Actually Is",
          title: "A Definition Before a Sales Pitch",
          paragraphs: [
            "This template defines a bonus simply: additional value or access added to an account, usually tied to a specific action (registering, a recurring check-in, reaching an activity milestone) and usually subject to some requirement before it becomes fully usable.",
            "Leading with that plain definition — rather than an banner claiming a specific amount — is what makes this page genuinely useful to someone still learning how the mechanic works, not just to someone ready to claim something immediately.",
          ],
          sideList: {
            title: "Common Bonus Types",
            items: [
              "Welcome bonus — tied to registration",
              "Activity bonus — tied to regular engagement",
              "Milestone bonus — unlocked at a threshold",
              "Seasonal bonus — tied to a specific time period",
            ],
          },
        },
        {
          eyebrow: "Requirements, Explained Plainly",
          title: "What 'Requirements' Usually Means",
          reverse: true,
          paragraphs: [
            "Many bonus systems attach a requirement before a bonus becomes fully usable — commonly some form of activity threshold within a time window. This template explains that concept generically and honestly, without pretending it doesn't exist or burying it in a separate terms document nobody reads.",
            "The goal is a visitor who finishes reading this page actually understanding the mechanic, not one who's been sold a number without context for what comes attached to it.",
          ],
          asideTitle: "Why Clarity Here Matters",
          asideText: "Bonus-related confusion is one of the most common sources of support tickets and negative sentiment on real gaming platforms. A clear explanatory page upfront reduces both.",
        },
      ],
      extraSection: {
        eyebrow: "Bonus vs. Promotions vs. Gift Code",
        title: "Three Pages, Three Distinct Jobs",
        paragraphs: [
          "It's worth stating plainly how these three related pages divide responsibility, since the boundary is easy to blur. Bonus explains the general mechanic — what a bonus is and how requirements typically work, independent of any specific current offer. Promotions lists the actual current offers with their concrete terms and expiry dates. Gift Code covers a specific, separate redemption-code mechanic that may or may not be tied to a bonus at all.",
          "Keeping these three jobs distinct, rather than collapsing them into one sprawling page, is what allows each to carry focused, unique content — and focused content is exactly what both readers and search engines respond to best.",
          "There's a reader-facing benefit too, beyond the SEO reasoning. Someone confused about how bonuses generally work shouldn't have to wade through a list of current specific offers to find a definition, and someone comparing two current offers shouldn't have to re-read a general explainer they already understand. Separating the pages serves both readers well, at the cost of a little more upfront planning in how the content is organized.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Promotions", href: "/promotions/" },
          { label: "Gift Code", href: "/gift-code/" },
          { label: "Rewards", href: "/rewards/" },
          { label: "VIP Club", href: "/vip-club/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "What is a bonus, in plain terms?", a: "Additional value or access added to an account, usually tied to a specific action and often subject to a requirement before it becomes fully usable, as explained on this page." },
          { q: "What does a 'requirement' usually mean?", a: "Commonly an activity threshold within a time window that must be met before a bonus becomes fully usable — explained generically here rather than tied to one specific offer." },
          { q: "What are the common bonus types?", a: "This template describes four: welcome, activity, milestone and seasonal bonuses, each tied to a different triggering action." },
          { q: "How is Bonus different from Promotions?", a: "Bonus explains the general mechanic; Promotions lists the actual current offers with specific terms and expiry dates." },
          { q: "How is Bonus different from Gift Code?", a: "Gift Code covers a separate, specific redemption-code mechanic, which may or may not relate to a bonus depending on how a platform structures it." },
          { q: "Is there a live bonus system connected to this page?", a: "No — this is a static content template demonstrating explanatory copy and structure, not a functioning bonus system." },
          { q: "Where would full bonus terms be found on a real platform?", a: "This template links toward a terms-and-conditions pattern rather than burying requirements in a place visitors are unlikely to find them." },
          { q: "Why does this page separate general explanation from specific offers?", a: "So a reader looking for a definition doesn't have to wade through current offers, and a reader comparing offers doesn't have to re-read an explainer they already understand." },
          { q: "Does this page recommend a specific bonus structure?", a: "No — it explains common patterns generically so the underlying concept is clear, leaving the specific numbers and structure to whatever a real implementation decides." },
        ],
      },
      cta: {
        title: "See Current Offer Types",
        text: "Head to Promotions for specific offers, or Gift Code for redemption-code details — each builds directly on what this page explains.",
        primary: { label: "View Promotions", href: "/promotions/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
