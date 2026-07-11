"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/rewards/",
  title: "55 Club Rewards — Daily Check-In Page Template",
  metaDescription:
    "The 55 Club Rewards page template: a daily check-in layout, streak-tracking pattern and a plain milestone-unlock explanation.",
  build() {
    return renderStandardPage({
      slug: "/rewards/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Rewards" }],
      hero: {
        eyebrow: "Daily Engagement",
        h1: "55 Club Rewards",
        lead: "A daily check-in page template with a visible streak counter, plain milestone unlocks, honest streak-break behavior and none of the spinning-wheel gimmicks that usually clutter this page type.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See VIP Club", href: "/vip-club/" },
      },
      intro: [
        "Daily rewards pages on most real platforms lean heavily on gamified gimmicks — spinning wheels, mystery boxes, countdown pressure — that add visual noise without adding clarity. This template takes a plainer approach: a visible streak counter, a simple milestone table showing what unlocks at each stage, and a check-in action that's exactly one click, no animation delay required to feel earned.",
        "The streak counter is presented honestly, including what happens if a streak breaks — a detail many real pages leave ambiguous, letting users assume the worst (total reset) when the actual policy might be more forgiving. This template's copy states the behavior directly rather than leaving it to guesswork.",
        "Milestones are shown as a straightforward table: day count on one side, what unlocks on the other. No mystery, no randomized reveal — because the goal of this page is legibility, letting users plan around a system they can actually understand rather than manufacturing excitement through opacity.",
        "This page connects to VIP Club, since consistent daily engagement is a common factor in tier progression, and to Invite Code and Gift Code, since some milestone unlocks on real platforms take the form of one or the other.",
      ],
      features: {
        eyebrow: "Rewards Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a check-in page that respects the user's intelligence instead of manufacturing false suspense.",
        cols: 4,
        items: [
          { icon: "gift", title: "Visible Streak Counter", text: "A clear running count, with honest behavior on what happens if it breaks." },
          { icon: "check", title: "Plain Milestone Table", text: "Day-by-day unlocks shown directly, no randomized mystery reveal." },
          { icon: "bolt", title: "One-Click Check-In", text: "A single action with immediate feedback, no artificial animation delay." },
          { icon: "spark", title: "No Gimmick Mechanics", text: "No spinning wheels or countdown pressure tactics cluttering the page." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How the Streak Works",
          title: "Honest Behavior, Clearly Stated",
          paragraphs: [
            "This template states its streak policy directly on the page rather than leaving it implied: consecutive check-ins build the streak, and the copy explains plainly what happens to that count if a day is missed, whether that's a full reset or a grace-period pattern.",
            "Whichever policy a real implementation chooses, the principle here is the same — say it out loud on the page itself, since ambiguity about something users are actively tracking creates exactly the kind of frustration a rewards page is supposed to prevent, not cause.",
          ],
          sideList: {
            title: "What the Streak Section Shows",
            items: [
              "Current streak count",
              "What happens if a day is missed",
              "Next milestone and what it unlocks",
              "A link to full terms",
            ],
          },
        },
        {
          eyebrow: "Milestone Table",
          title: "Why Every Unlock Is Shown Upfront",
          reverse: true,
          paragraphs: [
            "Rather than a mystery-box reveal pattern, this template shows the full milestone table upfront — every day-count threshold and what it unlocks, visible before a user even starts their streak. That transparency lets users decide for themselves whether the effort is worth it, rather than discovering the reward structure retroactively one day at a time.",
            "It's a small design choice with an outsized trust impact: a system willing to show its full structure upfront reads as more credible than one that reveals itself piece by piece.",
          ],
          asideTitle: "A Note on Real Rewards",
          asideText: "This template's milestone table uses illustrative placeholders rather than specific reward values, since actual rewards depend entirely on a real platform's own program design.",
        },
      ],
      extraSection: {
        eyebrow: "Why This Page Skips the Gimmicks",
        title: "Legibility Over Manufactured Excitement",
        paragraphs: [
          "Spinning wheels and randomized reveals exist because unpredictability can feel exciting in small doses — but they also add real cost: extra JavaScript, extra animation, extra load on Interaction to Next Paint, and extra confusion for anyone trying to understand what they're actually working toward. This template opts out of that trade-off entirely, betting that a clear, honest rewards page builds more long-term engagement than a flashy one that obscures its own mechanics.",
          "That bet is also consistent with the brand positioning established across this entire template — premium, calm, trustworthy. A rewards page cluttered with slot-machine-style visual noise would clash with that positioning far more than it would reinforce it.",
          "It's worth noting this doesn't mean the page has to feel sterile. Warmth here comes from clear communication and small, purposeful touches — the same hover lift and soft glow used on cards throughout the site — rather than from constant motion competing for attention. Calm and engaging aren't opposites; this page is built on the bet that they reinforce each other.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "VIP Club", href: "/vip-club/" },
          { label: "Gift Code", href: "/gift-code/" },
          { label: "Invite Code", href: "/invite-code/" },
          { label: "Promotions", href: "/promotions/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "How does the daily check-in work?", a: "One click, one immediate feedback state — this template avoids artificial animation delays designed to manufacture excitement around a simple action." },
          { q: "What happens if I miss a day?", a: "The page states this policy directly rather than leaving it ambiguous, whether that means a full streak reset or a grace-period pattern in a given implementation." },
          { q: "Are the milestone rewards randomized?", a: "No — this template shows the full milestone table upfront, with no mystery-box or randomized reveal mechanic." },
          { q: "Why doesn't this page use a spinning wheel?", a: "Gimmick mechanics like spinning wheels add animation cost and obscure the actual reward structure, which runs against this page's goal of legibility." },
          { q: "How does Rewards connect to VIP Club?", a: "Consistent daily engagement is a common factor in tier progression, so the two pages are designed to be read together." },
          { q: "Is this check-in system live?", a: "No — this is a static content template demonstrating layout and copy, not a functioning daily-rewards backend." },
          { q: "Where do milestone unlocks come from — Gift Code or Invite Code?", a: "On real platforms, milestone unlocks sometimes take the form of either mechanic, which is why this page links to both rather than assuming just one." },
          { q: "Does a calm design mean the page feels boring?", a: "No — warmth comes from clear communication and the same purposeful hover and glow touches used sitewide, rather than from constant motion competing for attention." },
          { q: "Can I check in from both the app and the website?", a: "This template treats the account and its streak as shared across both surfaces, consistent with how the App page describes account continuity." },
        ],
      },
      cta: {
        title: "See How Tiers and Codes Connect",
        text: "VIP Club, Gift Code and Invite Code all tie into daily engagement in their own distinct way.",
        primary: { label: "View VIP Club", href: "/vip-club/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
