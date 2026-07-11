"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/customer-support/",
  title: "55 Club Customer Support — Help Page Template",
  metaDescription:
    "The 55 Club Customer Support page template: a channel-by-channel contact layout, response-time transparency and a categorized help topic list.",
  build() {
    return renderStandardPage({
      slug: "/customer-support/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Customer Support" }],
      hero: {
        eyebrow: "Get Help",
        h1: "55 Club Customer Support",
        lead: "A support page template that leads with real response-time expectations and a categorized topic list, instead of a single generic contact form and a vague promise to reply soon.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "About", href: "/about/" },
      },
      intro: [
        "A support page's real job is reducing anxiety as much as routing requests — someone arriving here usually has a problem and wants to know, immediately, whether help is actually available and roughly how long it'll take. This template answers that upfront: available channels listed clearly, honest response-time ranges attached to each, and a categorized topic list so common questions can often be resolved without waiting for a reply at all.",
        "Rather than a single generic contact form treated as the only path, this page distinguishes between channels by use case — a self-serve FAQ-style topic list for common questions, a contact form for specific account issues, and (where applicable) a live-chat pattern for anything urgent. Matching the channel to the urgency of the problem respects the visitor's time.",
        "Response-time transparency is treated as a trust signal in its own right. A page that states \"typically within 24 hours\" reads as more credible than one that says nothing and leaves the visitor to wonder, even if the actual number turns out to be similar either way.",
        "This page links naturally to Contact for the structured form pattern, and to About for anyone who wants more context on the brand before trusting it with an account issue. It also links to Responsible Gaming, since that topic often intersects with support conversations on real platforms.",
      ],
      features: {
        eyebrow: "Support Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a support page that reduces anxiety, not just tickets.",
        cols: 4,
        items: [
          { icon: "headset", title: "Channel-by-Channel Layout", text: "Distinct paths for common questions, account issues and urgent matters." },
          { icon: "clock", title: "Response-Time Transparency", text: "Honest time ranges attached to each channel, not a vague promise." },
          { icon: "check", title: "Categorized Topics", text: "A self-serve list that resolves common questions without waiting for a reply." },
          { icon: "shield", title: "Escalation Path", text: "A clear next step for anything the topic list doesn't resolve." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Channel Breakdown",
          title: "Matching the Channel to the Problem",
          paragraphs: [
            "This template lays out three channel types: a categorized self-serve topic list for common questions (account access, verification, general how-it-works questions), a structured contact form for specific account issues, and a live-chat pattern reserved for anything urgent or time-sensitive.",
            "Presenting all three together, rather than defaulting every visitor to the slowest option, means someone with a two-second question isn't stuck filling out a form meant for something more complex.",
          ],
          sideList: {
            title: "Common Support Topics",
            items: [
              "Account access and login issues",
              "Verification and registration questions",
              "Rewards and VIP tier questions",
              "Payment and transaction questions",
              "Responsible gaming and account limits",
            ],
          },
        },
        {
          eyebrow: "Response-Time Honesty",
          title: "Why This Page States Real Time Ranges",
          reverse: true,
          paragraphs: [
            "Rather than a vague \"we'll get back to you soon,\" this template attaches an illustrative time range to each channel — faster for live chat, longer for a detailed account-specific form submission. That specificity is what actually reduces anxiety, not a general reassurance.",
            "A real implementation should keep these numbers honest and update them if actual response times drift, since a stated range that's consistently wrong does more damage to trust than not stating one at all.",
          ],
          asideTitle: "A Note on This Template",
          asideText: "The channels and time ranges described here are illustrative page-structure patterns, not a live, staffed support desk. Any real implementation needs actual support infrastructure behind these promises.",
        },
      ],
      extraSection: {
        eyebrow: "Self-Serve First",
        title: "Why the Topic List Comes Before the Contact Form",
        paragraphs: [
          "Ordering matters on a support page. This template deliberately places the categorized topic list above the contact form, on the theory that most visitors would rather find an immediate answer than wait for a reply, given the choice. Only after scanning that list and not finding their answer does the page nudge toward direct contact.",
          "This ordering also reduces support load in a real implementation — fewer routine questions reach a human agent when a well-organized topic list catches them first, which in turn keeps response times faster for the genuinely complex issues that do need a person's attention.",
          "That said, the page never hides the contact options behind the topic list — both are visible without scrolling past an artificial wall, since forcing someone to prove they've read everything else before reaching a human contact option is exactly the kind of dark pattern this template avoids throughout.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Contact", href: "/contact/" },
          { label: "About", href: "/about/" },
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Login", href: "/login/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
        ],
      },
      faq: {
        items: [
          { q: "What support channels does this template describe?", a: "Three: a categorized self-serve topic list, a structured contact form for account issues, and a live-chat pattern reserved for urgent matters." },
          { q: "How fast can I expect a response?", a: "This template attaches illustrative time ranges per channel — faster for live chat, longer for detailed form submissions — rather than a vague general promise." },
          { q: "What topics does the self-serve list cover?", a: "Account access, verification, rewards and VIP questions, payment questions, and responsible gaming — the most common categories on a real support page." },
          { q: "Why does the topic list appear before the contact form?", a: "Most visitors want an immediate answer over waiting for a reply, so this template surfaces self-serve answers first and only nudges toward direct contact after that." },
          { q: "Is this a live, staffed support system?", a: "No — it's a static content template demonstrating structure and copy, not a functioning support desk." },
          { q: "How does this page relate to Contact?", a: "Contact provides the structured form pattern referenced here in more detail; Customer Support is the entry point that routes to it and other channels." },
          { q: "Does this page cover account security concerns?", a: "Yes, within the categorized topic list, with a path toward more detailed guidance depending on the specific concern." },
          { q: "Is the contact option hidden behind the topic list?", a: "No — both the self-serve topic list and the direct contact options are visible without scrolling past an artificial wall, avoiding a common dark pattern on support pages." },
          { q: "Can I get help outside normal business hours?", a: "This template's channel pattern notes which options (like a topic list) are always available versus which depend on live staffing, so expectations stay clear regardless of when you visit." },
        ],
      },
      cta: {
        title: "Reach Out Directly",
        text: "If the topic list didn't answer your question, the Contact page has the structured form.",
        primary: { label: "Go to Contact", href: "/contact/" },
        secondary: { label: "About 55 Club", href: "/about/" },
      },
    });
  },
};
