"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/customer-support/",
  title: "55 Club Customer Support — Help & Contact Channels",
  metaDescription:
    "55 Club Customer Support: 24/7 live chat, email and Telegram, plus a categorized help topic list covering accounts, deposits, games and VIP.",
  build() {
    return renderStandardPage({
      slug: "/customer-support/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Customer Support" }],
      hero: {
        eyebrow: "Get Help",
        h1: "55 Club Customer Support",
        lead: "Live chat, email and a Telegram community channel, all available around the clock — plus a categorized topic list so common questions get answered without waiting for a reply at all.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "About", href: "/about/" },
      },
      intro: [
        "Support on 55 Club is built around getting you an answer through the fastest channel that fits your question. Live chat is available 24/7 and is the quickest way to resolve anything urgent — account access, a stuck deposit, a game-rule question mid-session. Email and the Telegram community channel are there for anything that can wait a little longer or benefits from a written trail.",
        "Rather than funneling everything into one inbox, this page distinguishes between channels by what they're best at: a self-serve topic list for common questions, live chat for anything time-sensitive, email through the Contact form for detailed or written-record requests, and Telegram for community discussion and announcements.",
        "Response times are stated plainly rather than left vague. Live chat responses are near-instant during active hours; email through the contact form typically comes back within a few hours. That specificity is meant to save you the guesswork of wondering whether you'll hear back at all.",
        "This page links out to Contact for the structured form, About for background on the platform, and Responsible Gaming, since account-limit and healthy-play questions come up regularly in support conversations.",
      ],
      features: {
        eyebrow: "Support Page Features",
        title: "How Support Is Organized",
        text: "Four channels, matched to how urgent your question is.",
        cols: 4,
        items: [
          { icon: "headset", title: "24/7 Live Chat", text: "Near-instant answers for anything urgent, day or night." },
          { icon: "mail", title: "Email Support", text: "Written responses through the Contact form, typically within a few hours." },
          { icon: "telegram", title: "Telegram Channel", text: "Community discussion, announcements and another way to reach the team." },
          { icon: "check", title: "Categorized Topics", text: "A self-serve list that resolves common questions without waiting for a reply." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Channel Breakdown",
          title: "Matching the Channel to the Problem",
          paragraphs: [
            "Live chat is staffed 24/7 and is the right choice for anything urgent — a login issue, a deposit that hasn't shown up, or a question about a round in progress. Email through the Contact form suits detailed account or billing questions that benefit from a written record. Telegram is the community channel — good for general questions, announcements and connecting with other players, alongside direct support.",
            "Before reaching for any of these, the categorized topic list below covers the questions that come up most — account access, deposits and withdrawals, game rules, and bonus or VIP questions — often with an immediate answer.",
          ],
          sideList: {
            title: "Common Support Topics",
            items: [
              "Account access and login issues",
              "Deposits and withdrawals",
              "Game rules and round mechanics",
              "Bonus, gift code and VIP questions",
              "Responsible gaming and account limits",
            ],
          },
        },
        {
          eyebrow: "Response Times",
          title: "What to Expect From Each Channel",
          reverse: true,
          paragraphs: [
            "Live chat is near-instant — it's staffed around the clock specifically because account and deposit issues don't wait for business hours. Email responses through the Contact form typically land within a few hours. The Telegram channel is checked regularly for both community questions and direct messages.",
            "If a channel is running slower than usual, live chat remains the most reliable fallback, since it's the one channel built specifically for time-sensitive issues.",
          ],
          asideTitle: "Fastest Option First",
          asideText: "Live chat is the fastest way to reach the team, day or night. Email and Telegram are better suited to non-urgent or detailed questions.",
        },
      ],
      extraSection: {
        eyebrow: "Self-Serve First",
        title: "Why the Topic List Comes Before the Contact Form",
        paragraphs: [
          "The categorized topic list sits above the contact form because most questions get answered faster by scanning it than by waiting for a reply — account access steps, how deposits and withdrawals work, game rules, and bonus or VIP mechanics are all covered there directly.",
          "Only after checking the topic list does it make sense to reach for live chat, email or Telegram. That order isn't about making it harder to reach a person — every contact option stays visible without scrolling past a wall — it's about getting you the fastest possible answer.",
          "If your question spans categories or the topic list doesn't quite cover it, live chat is built to handle exactly that kind of judgment call in real time.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club Contact", href: "/contact/" },
          { label: "55 Club About", href: "/about/" },
          { label: "55 Club Responsible Gaming", href: "/responsible-gaming/" },
          { label: "55 Club Login", href: "/login/" },
          { label: "55 Club Privacy Policy", href: "/privacy-policy/" },
        ],
      },
      faq: {
        items: [
          { q: "Is 55club customer support different from 55 Club customer support?", a: "No — 55club, 55 Club and 55Club all lead to the same 24/7 live chat, email and Telegram support covered on this page." },
          { q: "What support channels does 55 Club offer?", a: "24/7 live chat, email through the Contact form, and a Telegram community channel." },
          { q: "How fast can I expect a response?", a: "Live chat is near-instant, day or night. Email through Contact typically comes back within a few hours." },
          { q: "What topics does the self-serve list cover?", a: "Account access, deposits and withdrawals, game rules and round mechanics, and bonus or VIP questions — the categories that come up most." },
          { q: "Why does the topic list appear before the contact form?", a: "Most questions get answered faster by scanning the list than by waiting for a reply, so it's surfaced first with direct contact options right alongside it." },
          { q: "Is live chat really available 24/7?", a: "Yes — it's staffed around the clock specifically for account and deposit issues that can't wait for business hours." },
          { q: "How does this page relate to Contact?", a: "Contact is the structured form for written, detailed requests; Customer Support is the entry point covering that and every other channel." },
          { q: "Does this page cover account security concerns?", a: "Yes, within the categorized topic list, with live chat as the direct escalation path for anything urgent." },
          { q: "Is Telegram just for announcements?", a: "No — it's a community channel for discussion and questions as well as official updates from the team." },
          { q: "Can I get help outside normal business hours?", a: "Yes — live chat runs 24/7, so support isn't limited to a fixed window regardless of when you play." },
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
