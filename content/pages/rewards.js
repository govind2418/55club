"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/rewards/",
  title: "55 Club Rewards — Daily Check-In Bonus",
  metaDescription:
    "Check in every day on 55 Club to build your streak and claim a small bonus. Hit day 3, 7, 15 and 30 for bigger milestone rewards — see how it works.",
  build() {
    return renderStandardPage({
      slug: "/rewards/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Rewards" }],
      hero: {
        eyebrow: "Daily Engagement",
        h1: "55 Club Rewards",
        lead: "Log in and check in once a day to claim a small bonus and grow your streak. The longer you keep it going without missing a day, the bigger the milestone bonuses waiting at day 3, 7, 15 and 30.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See VIP Club", href: "/vip-club/" },
      },
      intro: [
        "The Rewards page is where your daily check-in streak lives. Every day you log in and claim, your streak counter goes up by one, and a small bonus lands in your account balance right away — no wagering games, no waiting, just a quick tap and it's yours.",
        "Streaks compound. A day-one check-in is worth less than a day-twenty check-in, because the streak itself is tracked and rewarded — the system remembers how many consecutive days you've shown up, and the bonus scales with it. Miss a day and the streak resets, so consistency is what actually pays off here, not one-off visits.",
        "Along the way you'll hit milestones — day 3, day 7, day 15 and day 30 are the big ones — and each milestone unlocks a noticeably bigger bonus than a standard daily claim. The milestone table on this page shows exactly what's coming at each stage, so you always know what you're building toward.",
        "Rewards ties directly into VIP Club, since consistent daily activity is one of the things that moves your account up the tier ladder, and into Invite Code and Gift Code, since referral bonuses and redeemable codes stack on top of whatever you're already earning from your streak.",
      ],
      features: {
        eyebrow: "Rewards Page Features",
        title: "How the Daily Check-In Works",
        text: "Four things to know before you claim your first day.",
        cols: 4,
        items: [
          { icon: "gift", title: "Daily Check-In Bonus", text: "Claim a small bonus once a day, credited to your balance instantly." },
          { icon: "spark", title: "Growing Streak", text: "Your streak counter rises with every consecutive day you check in." },
          { icon: "crown", title: "Milestone Unlocks", text: "Bigger bonuses land automatically at day 3, 7, 15 and 30." },
          { icon: "clock", title: "One Claim Per Day", text: "The check-in resets every 24 hours, so there's always a reason to come back." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How the Streak Works",
          title: "Show Up Daily, Earn More Over Time",
          paragraphs: [
            "Your streak is simple to track: check in today, and it adds one to yesterday's count. Miss a day and the streak drops back to zero, so the bonus resets to the day-one rate the next time you check in. The streak counter sits right on this page, updated the moment you claim.",
            "Because the reward grows with the streak rather than staying flat, the biggest gains come from consistency — a player who checks in every day for a month earns meaningfully more than one who checks in sporadically, even if the total number of visits ends up similar.",
          ],
          sideList: {
            title: "What You'll See on This Page",
            items: [
              "Your current streak count",
              "Today's check-in status — claimed or available",
              "The next milestone and what it unlocks",
              "Full terms for the check-in bonus",
            ],
          },
        },
        {
          eyebrow: "Milestone Table",
          title: "Bigger Bonuses at Day 3, 7, 15 and 30",
          reverse: true,
          paragraphs: [
            "Milestones are the streak's biggest payouts. Reach day 3 and you get a step up from the standard daily amount; day 7 steps up again; day 15 and day 30 are the largest single-day bonuses the check-in offers. Every milestone is shown on this page upfront, so you can see exactly what's ahead before you start your streak.",
            "There's no guessing involved — the milestone table lists each threshold and its reward side by side, and it updates automatically as you progress so you always know how close you are to the next one.",
          ],
          asideTitle: "Keep the Streak Alive",
          asideText: "A missed day resets the counter to zero, so if you're a day or two from a milestone, checking in that day is worth it. The claim only takes a second.",
        },
      ],
      extraSection: {
        eyebrow: "Getting the Most from Rewards",
        title: "Make Check-In Part of Your Routine",
        paragraphs: [
          "The check-in bonus is designed to be quick — open the app or site, hit claim, and you're done. It doesn't require a deposit or a minimum bet to trigger, which makes it one of the easiest ways to add a little extra to your balance every single day you play.",
          "Pair it with VIP Club and the two systems reinforce each other: daily activity helps move you up the tier ladder, and higher tiers come with their own perks on top of whatever your streak is already paying out.",
          "If you're chasing a milestone, set a reminder. The streak only holds as long as you check in daily — there's no grace period built in, so the difference between reaching day 30 and starting over at day 1 usually comes down to one missed login.",
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
          { q: "How does the daily check-in work?", a: "Log in once a day and hit claim on the Rewards page. The bonus is credited to your balance immediately, and your streak counter goes up by one." },
          { q: "What happens if I miss a day?", a: "Your streak resets to zero, and your next check-in starts back at the day-one rate. There's no grace period, so it's worth checking in even on a busy day." },
          { q: "What are the milestone days?", a: "Day 3, 7, 15 and 30 each unlock a bigger bonus than a standard daily claim. The milestone table on this page shows exactly what each one pays out." },
          { q: "Can I claim more than once a day?", a: "No — the check-in resets on a 24-hour cycle, so it's one claim per day, every day you're active." },
          { q: "How does Rewards connect to VIP Club?", a: "Consistent daily check-ins count toward the activity that moves your account up the VIP tier ladder, so the two systems work together." },
          { q: "Do I need to deposit to claim the daily bonus?", a: "No — the check-in bonus doesn't require a deposit or a minimum bet. It's available just for logging in and claiming." },
          { q: "Where can I see my current streak?", a: "Your streak count is shown right on the Rewards page, along with whether today's check-in has been claimed yet." },
          { q: "Can milestone unlocks include gift codes or referral bonuses?", a: "Some milestone rewards are delivered as bonus balance directly, and others may connect to Gift Code or Invite Code promotions — check the terms on this page for specifics." },
          { q: "Can I check in from both the app and the website?", a: "Yes — your account and streak are shared across both, so a check-in on one carries over to the other." },
        ],
      },
      cta: {
        title: "Start Your Streak Today",
        text: "Register, check in daily, and watch your streak build toward the next milestone bonus.",
        primary: { label: "View VIP Club", href: "/vip-club/" },
        secondary: { label: "View Gift Code", href: "/gift-code/" },
      },
    });
  },
};
