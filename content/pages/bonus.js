"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/bonus/",
  title: "55 Club Bonus Guide — Bonus Types & How Unlocking Works",
  metaDescription:
    "A plain-language guide to every bonus type on 55 Club — welcome bonus, daily check-in, referral and VIP bonuses — and how wagering unlocks the balance.",
  build() {
    return renderStandardPage({
      slug: "/bonus/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Bonus" }],
      hero: {
        eyebrow: "Reward Mechanics",
        h1: "55 Club Bonus Guide",
        lead: "Every bonus on 55 Club explained in one place — the welcome bonus on your first deposit, the daily check-in bonus, referral bonuses, VIP bonuses, and how wagering unlocks bonus balance for withdrawal.",
        primary: { label: "See Promotions", href: "/promotions/" },
        secondary: { label: "Register", href: "/register/" },
      },
      intro: [
        "\"Bonus\" covers a handful of different mechanics on 55 Club, and this page walks through each one plainly: what triggers it, what you get, and what has to happen before that bonus balance is yours to withdraw. If you're new to the platform, start here before diving into Promotions or Gift Code.",
        "The short version: most bonuses land in a separate bonus balance rather than your main balance, and that bonus balance usually needs to be wagered — played through a set number of times — before it converts to withdrawable funds. That's standard across the welcome bonus, referral bonuses and VIP bonuses; the daily check-in bonus is the simplest of the four and typically credits with lighter requirements.",
        "Knowing the mechanic upfront means no surprises later — you'll know exactly why a bonus shows in your account but isn't withdrawable yet, and roughly what it takes to change that.",
        "This page explains the mechanics. For what's actually live right now, head to Promotions, which lists current offers with their specific terms and expiry dates. Gift Code covers a separate, code-based redemption mechanic that can also credit bonus balance.",
      ],
      features: {
        eyebrow: "Bonus Page Features",
        title: "The Four Bonus Types on 55 Club",
        text: "Where each one comes from and how it's triggered.",
        cols: 4,
        items: [
          { icon: "gift", title: "Welcome Bonus", text: "Credited on your first deposit after registering a new account." },
          { icon: "spark", title: "Daily Check-In Bonus", text: "Claimed once a day from the Rewards page, streak-based and lighter on requirements." },
          { icon: "coin", title: "Referral Bonus", text: "Earned when someone registers with your invite code and starts playing." },
          { icon: "crown", title: "VIP Bonus", text: "Unlocked as you climb the VIP tier ladder, including birthday and milestone bonuses." },
        ],
      },
      infoSections: [
        {
          eyebrow: "The Four Bonus Types",
          title: "What Each Bonus Is Tied To",
          paragraphs: [
            "The welcome bonus is tied to your first deposit — make it after registering, and the bonus is added on top based on the current welcome offer's terms. The daily check-in bonus is tied to logging in and claiming on the Rewards page, and grows with your streak. The referral bonus is tied to someone using your invite code to register and play. The VIP bonus is tied to your tier on the VIP Club ladder, including perks like a birthday bonus at higher tiers.",
            "Each type is credited differently and can carry different unlock requirements, so it's worth knowing which bonus you're looking at before assuming how it behaves.",
          ],
          sideList: {
            title: "The Four Bonus Types",
            items: [
              "Welcome bonus — first deposit after registering",
              "Daily check-in bonus — claimed from Rewards, streak-based",
              "Referral bonus — earned through Invite Code",
              "VIP bonus — unlocked by your VIP Club tier",
            ],
          },
        },
        {
          eyebrow: "How Unlocking Works",
          title: "Wagering Requirements, Explained Plainly",
          reverse: true,
          paragraphs: [
            "Most bonus balance isn't withdrawable the moment it's credited. It sits in a separate bonus balance until you've wagered it — played through it a set number of times across eligible games — at which point it converts to your main, withdrawable balance. This applies to the welcome bonus, referral bonus and VIP bonus; the daily check-in bonus is generally lighter, since it's designed to be claimed and used quickly.",
            "The specific wagering multiple and eligible games depend on which bonus you're working with — the exact terms are shown at the point the bonus is credited and are also available from Customer Support if you want to check before you start playing it through.",
          ],
          asideTitle: "Where to Check Your Bonus Status",
          asideText: "Your bonus balance and how much of it is still locked behind a wagering requirement are both visible on your account balance page, updated as you play.",
        },
      ],
      extraSection: {
        eyebrow: "Bonus vs. Promotions vs. Gift Code",
        title: "Three Pages, Three Distinct Jobs",
        paragraphs: [
          "It's worth being clear about how these three pages divide up. Bonus — this page — explains the mechanics: what each bonus type is, how it's triggered, and how wagering unlocks it, independent of any single current offer. Promotions lists the actual live offers with their specific terms and expiry dates, including the current welcome match and any active cashback or seasonal campaigns. Gift Code covers a separate redemption-code mechanic, where entering a code credits bonus balance directly.",
          "If you're trying to understand how bonuses generally work, this page is the place to start. If you want to know what's live right now, head to Promotions. If someone gave you a code to redeem, that's Gift Code.",
          "All three connect back to your bonus balance in the end, which is why understanding the wagering mechanic on this page makes the other two easier to use — you'll know what to expect before you claim anything.",
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
          { q: "What bonus types does 55 Club offer?", a: "Four: a welcome bonus on your first deposit, a daily check-in bonus, a referral bonus, and a VIP bonus tied to your tier on the VIP Club ladder." },
          { q: "What does 'wagering requirement' mean?", a: "It means bonus balance has to be played through a set number of times before it converts to withdrawable main balance. Specific multiples vary by bonus type." },
          { q: "How is Bonus different from Promotions?", a: "This page explains the general mechanics behind every bonus type; Promotions lists the actual current offers with their specific terms and expiry dates." },
          { q: "How is Bonus different from Gift Code?", a: "Gift Code is a separate redemption-code mechanic — entering a valid code credits bonus balance directly, which then follows the same unlock rules explained here." },
          { q: "Do I need to deposit to get a bonus?", a: "The welcome bonus requires a first deposit, but the daily check-in bonus doesn't — it's claimed for free once a day from the Rewards page." },
          { q: "How do I earn a referral bonus?", a: "Share your personal invite code from the Invite Code page — when someone registers with it and starts playing, you earn a referral bonus." },
          { q: "Does the VIP bonus change as I move up tiers?", a: "Yes — higher VIP tiers unlock additional bonus perks, including a birthday bonus and access to VIP-exclusive promotions." },
          { q: "Where can I see my bonus balance and wagering progress?", a: "Both are shown on your account balance page, updated in real time as you play." },
          { q: "Where would I find the exact terms for a specific bonus?", a: "Full terms are shown when the bonus is credited to your account, and Customer Support can also confirm them if you want to check beforehand." },
        ],
      },
      cta: {
        title: "See What's Live Right Now",
        text: "Head to Promotions for current offers, or Gift Code if you've got a code to redeem.",
        primary: { label: "View Promotions", href: "/promotions/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
