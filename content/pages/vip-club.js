"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/vip-club/",
  title: "55 Club VIP Club — VIP1 to VIP10 Loyalty Tiers",
  metaDescription:
    "Climb the 55 Club VIP ladder from VIP1 to VIP10. Higher tiers unlock faster withdrawals, higher limits, dedicated support, birthday bonuses and exclusive promos.",
  build() {
    return renderStandardPage({
      slug: "/vip-club/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "VIP Club" }],
      hero: {
        eyebrow: "Loyalty Program",
        h1: "55 Club VIP Club",
        lead: "A ten-tier loyalty ladder, VIP1 through VIP10. The more you deposit and play, the higher you climb — and every tier up unlocks faster withdrawals, higher limits, and perks the tier below it doesn't get.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Rewards", href: "/rewards/" },
      },
      intro: [
        "VIP Club tracks your deposit and play activity and moves you up through ten tiers — VIP1 at the entry level, VIP10 at the top. Every account starts at VIP1 the moment it's created, and progress toward the next tier builds automatically as you deposit and play, with no separate application or request needed.",
        "Each tier up the ladder adds something the tier below doesn't have. Early tiers focus on small quality-of-life perks; mid tiers start unlocking faster withdrawal processing and higher withdrawal limits; upper tiers add a dedicated support contact, a birthday bonus, and early access to promotions before they go live for everyone else.",
        "Your tier is visible on your account page at all times, along with how much activity stands between you and the next one. There's no mystery to the ladder — you can see exactly where you stand and what the next step up unlocks before you get there.",
        "VIP Club connects naturally with Rewards, since your daily check-in streak contributes to the activity that moves you up, and with Invite Code, since referral activity is another lever that counts toward tier progress.",
      ],
      features: {
        eyebrow: "VIP Club Page Features",
        title: "What Climbing the Ladder Gets You",
        text: "Four things that improve as you move from VIP1 toward VIP10.",
        cols: 4,
        items: [
          { icon: "crown", title: "Ten Tiers, VIP1–VIP10", text: "A clear ladder with automatic progression based on deposit and play activity." },
          { icon: "bolt", title: "Faster Withdrawals", text: "Higher tiers process withdrawal requests quicker, with priority handling." },
          { icon: "coin", title: "Higher Withdrawal Limits", text: "Your maximum withdrawal per request increases as you move up the ladder." },
          { icon: "headset", title: "Dedicated Support", text: "Top tiers get a direct support contact instead of the general queue." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Tier Structure",
          title: "Ten Tiers, Each One Adding More",
          paragraphs: [
            "The ladder runs VIP1 through VIP10, with every account starting at VIP1. Moving up isn't a one-time event — it's ongoing, driven by your deposit volume and play activity over time, so the more consistently you use your account, the faster you climb.",
            "Perks stack as you go: nothing is removed when you move up a tier, only added. A VIP5 account keeps everything a VIP4 account had, plus whatever VIP5 adds on top of it, all the way up to VIP10.",
          ],
          sideList: {
            title: "How the Ladder Builds",
            items: [
              "VIP1–VIP3 — entry perks, faster processing begins",
              "VIP4–VIP6 — higher withdrawal limits unlock",
              "VIP7–VIP8 — dedicated support contact added",
              "VIP9–VIP10 — birthday bonus and exclusive promo access",
            ],
          },
        },
        {
          eyebrow: "How Progression Works",
          title: "Deposits and Play Activity Move You Up",
          reverse: true,
          paragraphs: [
            "Your tier progress is driven by two things: how much you deposit, and how much you play. Both are tracked automatically on your account, and progress toward the next tier is visible at any time — there's nothing hidden about how close you are to leveling up.",
            "Because progression is ongoing rather than a one-time award, staying active keeps you moving. An account that deposits and plays regularly climbs faster than one that's active only occasionally, even if the totals eventually even out.",
          ],
          asideTitle: "Check Your Progress Anytime",
          asideText: "Your current tier and progress toward the next one are shown on your account dashboard, updated in real time as you deposit and play.",
        },
      ],
      extraSection: {
        eyebrow: "Benefits by Tier",
        title: "What Actually Changes as You Climb",
        paragraphs: [
          "Every VIP Club perk is concrete and specific: withdrawal processing time, maximum withdrawal amount, whether you have a dedicated support contact, whether you get a birthday bonus, and whether you see promotions before they're released more broadly. Nothing on this ladder is vague — each tier's benefits are listed plainly so you know exactly what you're playing toward.",
          "Withdrawal speed and limits are usually the first things players notice moving up the ladder. Lower tiers still get processed reliably, but higher tiers see requests prioritized and can move larger amounts per request — a meaningful difference if you play often and cash out regularly.",
          "The top of the ladder, VIP9 and VIP10, is where the relationship shifts from transactional to personal: a dedicated support contact who knows your account, a birthday bonus timed to your account details, and first access to new promotions before the general Promotions page lists them.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club Rewards", href: "/rewards/" },
          { label: "55 Club Invite Code", href: "/invite-code/" },
          { label: "55 Club Promotions", href: "/promotions/" },
          { label: "55 Club Bonus", href: "/bonus/" },
          { label: "55 Club Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "Is 55club vip the same as the 55 Club VIP Club?", a: "Yes — 55club, 55 Club and 55Club all refer to the same ten-tier VIP1–VIP10 loyalty ladder described on this page." },
          { q: "How many VIP tiers are there?", a: "Ten — VIP1 through VIP10. Every account starts at VIP1 and moves up automatically based on deposit and play activity." },
          { q: "What determines tier progression?", a: "Your deposit volume and play activity, tracked continuously on your account. There's no separate application — progress builds as you use your account." },
          { q: "What perks unlock at higher tiers?", a: "Faster withdrawal processing, higher withdrawal limits, a dedicated support contact, a birthday bonus, and early access to exclusive promotions, depending on the tier." },
          { q: "How does VIP Club relate to Rewards?", a: "Your daily check-in streak on the Rewards page contributes to the activity that counts toward VIP tier progression." },
          { q: "Can referrals affect my VIP tier?", a: "Yes — referral activity through Invite Code is one of the levers that counts toward moving up the ladder, alongside deposits and play." },
          { q: "Where can I see my current tier?", a: "Your tier and progress toward the next one are shown on your account dashboard at all times." },
          { q: "Does the top tier include better support?", a: "Yes — VIP9 and VIP10 include a dedicated support contact instead of the general support queue." },
          { q: "Do lower tiers still get withdrawal processing?", a: "Yes — every tier gets reliable withdrawal processing; higher tiers simply get it faster and with higher per-request limits." },
          { q: "Can a VIP tier ever go down?", a: "Tiers are built to reward sustained activity, so staying consistently active is what keeps you moving up and holding your position on the ladder." },
        ],
      },
      cta: {
        title: "Start Climbing the Ladder",
        text: "Every deposit and every session counts toward your next VIP tier — check your progress after you register.",
        primary: { label: "View Rewards", href: "/rewards/" },
        secondary: { label: "View Invite Code", href: "/invite-code/" },
      },
    });
  },
};
