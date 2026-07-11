"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/promotions/",
  title: "55 Club Promotions — Current Offers & Campaigns",
  metaDescription:
    "See what's live on 55 Club right now: first-deposit match bonus, weekend cashback, festival promos and referral campaigns, each with clear terms and dates.",
  build() {
    return renderStandardPage({
      slug: "/promotions/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Promotions" }],
      hero: {
        eyebrow: "Offers & Promotions",
        h1: "55 Club Promotions",
        lead: "Every active and upcoming campaign on 55 Club in one place — first-deposit match, weekend cashback, festival specials and referral pushes — each with its own terms and a clear schedule, no fine print hidden behind a separate click.",
        primary: { label: "See Bonus Guide", href: "/bonus/" },
        secondary: { label: "Register", href: "/register/" },
      },
      intro: [
        "This page tracks what's actually running on 55 Club right now, plus what's coming up next. Every promotion card states its core terms directly — what it offers, what's required to qualify, and when it runs — so you don't need to dig through a separate page to find the details.",
        "Offers are grouped by type: the first-deposit match bonus for new accounts, weekend cashback for regular players, festival and special-event promos tied to specific dates, and referral campaigns that reward you for bringing friends onto the platform. That grouping mirrors how the offers actually work, so it's easy to find the one that applies to you.",
        "Each campaign shows a real schedule — when it starts, when it ends, and whether it's active right now or coming up soon. Nothing here is a countdown built to create pressure; it's a straightforward calendar of what's running.",
        "Promotions connects directly to Bonus, Gift Code and Invite Code — Bonus explains how the underlying bonus mechanics work, Gift Code is where redemption codes tied to some campaigns get entered, and Invite Code is the referral system behind the referral campaigns listed here.",
      ],
      features: {
        eyebrow: "Promotions Page Features",
        title: "What's Running Right Now",
        text: "The four campaign types you'll find on this page.",
        cols: 4,
        items: [
          { icon: "gift", title: "First-Deposit Match", text: "A percentage match bonus applied to your first deposit as a new account." },
          { icon: "coin", title: "Weekend Cashback", text: "A portion of net losses returned as bonus balance over the weekend." },
          { icon: "spark", title: "Festival Specials", text: "Time-boxed promos tied to festivals and major calendar events." },
          { icon: "crown", title: "Referral Campaigns", text: "Extra rewards for referring friends, on top of the standard referral bonus." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Reading a Promotion Card",
          title: "What Every Card Includes",
          paragraphs: [
            "Each promotion card follows the same layout: a title, one sentence describing the offer, the requirement to qualify, and the active dates — in that order, every time. That consistency means scanning several offers at once doesn't require re-learning the format for each one.",
            "Where an offer has more detailed terms than fit on the card, a full-terms link expands them inline, so you don't lose your place scrolling back and forth.",
          ],
          sideList: {
            title: "Promotion Card Anatomy",
            items: [
              "Title — short and specific",
              "Description — one plain sentence",
              "Requirement — what qualifies you",
              "Schedule — start and end dates, active or upcoming",
            ],
          },
        },
        {
          eyebrow: "Campaign Types",
          title: "Deposit Match, Cashback, Festival and Referral",
          reverse: true,
          paragraphs: [
            "The first-deposit match bonus is a one-time offer for new accounts, applied automatically when you make your first deposit after registering. Weekend cashback runs on a recurring schedule, returning a share of net losses as bonus balance for players active over the weekend. Festival and special-event promos are tied to specific calendar dates and typically run for a limited window around the event. Referral campaigns layer extra rewards on top of the standard Invite Code bonus during active promotional periods.",
            "Each type is shown with a distinct accent on this page so you can tell at a glance which category an offer belongs to before reading the details.",
          ],
          asideTitle: "Check the Schedule Before You Claim",
          asideText: "Every promotion card shows whether it's active now or upcoming, along with its exact end date, so you always know how much time you have to qualify.",
        },
      ],
      extraSection: {
        eyebrow: "How to Use This Page",
        title: "Clear Terms, No Pressure Tactics",
        paragraphs: [
          "This page is built to be checked regularly rather than read once. New campaigns go up as they become active, and past ones move to an archive rather than disappearing, so you can always confirm the terms of something you claimed earlier.",
          "There's no artificial urgency here — no flashing banners, no \"expires in minutes\" messaging on offers that quietly reset. Every expiry date shown is the real one, and that's deliberate: knowing exactly what you're working with is more useful than being rushed into a decision.",
          "If you're not sure which promotion applies to your situation — new account, regular player, or referring friends — the Bonus guide is the best starting point, since it explains how the underlying mechanics work before you commit to any specific offer here.",
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
          { q: "What promotions are currently available?", a: "Check this page for the live list — typically a first-deposit match, weekend cashback, any active festival specials, and ongoing referral campaigns." },
          { q: "How do I claim the first-deposit match?", a: "Register an account and make your first deposit — the match bonus applies automatically based on the current offer's terms." },
          { q: "How does weekend cashback work?", a: "A portion of your net losses over the weekend is credited back as bonus balance, following the terms shown on the active cashback card." },
          { q: "Are festival promos available year-round?", a: "No — festival and special-event promos are tied to specific dates and only run during their scheduled window." },
          { q: "How is Promotions different from Bonus?", a: "Promotions lists the actual current campaigns and their terms; Bonus explains how the underlying bonus and wagering mechanics work in general." },
          { q: "Where do I enter a promo code tied to a campaign?", a: "On the Gift Code page — codes tied to specific promotions are redeemed there and credit bonus balance to your account." },
          { q: "How does the referral campaign relate to Invite Code?", a: "Invite Code is the standing referral system; referral campaigns on this page add extra, time-limited rewards on top of the standard referral bonus." },
          { q: "What happens to a promotion after it expires?", a: "It moves to an archive section on this page rather than being removed, so you can still review terms for anything you claimed earlier." },
          { q: "How often does the promotions list change?", a: "New campaigns are added as they go live and the page is checked regularly, so it's worth a visit each week if you want to catch new offers early." },
        ],
      },
      cta: {
        title: "See the Full Reward System",
        text: "Bonus, Gift Code and Invite Code each cover a different piece of how these promotions work — worth reading together for the full picture.",
        primary: { label: "View Bonus", href: "/bonus/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
