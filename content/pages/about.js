"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/about/",
  title: "About 55 Club — Gaming Entertainment Platform",
  metaDescription:
    "About 55 Club: a gaming entertainment platform with 10 game categories, daily rewards, a 10-tier VIP program and play on mobile or desktop.",
  build() {
    return renderStandardPage({
      slug: "/about/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "About" }],
      hero: {
        eyebrow: "Our Story",
        h1: "About 55 Club",
        lead: "55 Club brings ten game categories, daily rewards and a 10-tier VIP program together under one account — play from your phone's browser, your desktop, or the lightweight Android app.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
      intro: [
        "55 Club runs as a single account across ten game categories — Lottery, Win Go, Colour Prediction, Slots, Casino, Mini Games, Fishing, Sports, Aviator, Card Games and Crash Games — so you're never juggling separate logins or balances to move between formats. Sign in once, and every category is a tap away.",
        "The platform is built around a simple idea: rounds and games should be easy to understand and quick to jump into, whether you've got five minutes or an evening. Round-based formats like Win Go and Colour Prediction run on fixed timers with visible history tables, while Slots, Casino and Crash Games offer a faster, more continuous style of play.",
        "Rewards run alongside every game category rather than sitting off to the side. Daily check-ins, gift codes, invite-code referrals and a 10-tier VIP program all feed the same account, so consistent play is recognized and rewarded as you move up through the tiers.",
        "You can play 55 Club however suits you — straight from a mobile or desktop browser with no install required, or through the lightweight Android APK for faster access and a home-screen icon. Both paths lead to the same account, balance and game library.",
      ],
      features: {
        eyebrow: "What 55 Club Offers",
        title: "Four Things Worth Knowing",
        text: "The core of what makes up the platform.",
        cols: 4,
        items: [
          { icon: "spark", title: "10 Game Categories", text: "Lottery, Win Go, Colour Prediction, Slots, Casino, Mini Games, Fishing, Sports, Aviator and Card Games." },
          { icon: "gift", title: "Daily Rewards", text: "Check-in bonuses and gift codes that add up the more consistently you play." },
          { icon: "crown", title: "10-Tier VIP Program", text: "Climb tiers through play, unlocking bigger perks the higher you go." },
          { icon: "device", title: "Play Anywhere", text: "Mobile browser, desktop browser, or the Android APK — same account either way." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Game Categories",
          title: "Ten Ways to Play",
          paragraphs: [
            "Every category on 55 Club is built around a distinct style of play. Lottery, Win Go and Colour Prediction share a round-based structure with fixed timers and results history. Aviator and Crash Games run on a rising-multiplier format where timing your cash-out is the whole game. Slots, Casino, Fishing and Card Games bring the more traditional casino-style formats, and Sports covers real-world match betting.",
            "That range means there's rarely a dead moment — if one format's round just locked, another category is mid-session and ready to join.",
          ],
          sideList: {
            title: "The 10 Categories",
            items: [
              "Lottery, Win Go & Colour Prediction",
              "Slots & Casino",
              "Mini Games & Fishing",
              "Aviator & Crash Games",
              "Sports & Card Games",
            ],
          },
        },
        {
          eyebrow: "Rewards & VIP",
          title: "How Play Turns Into Perks",
          reverse: true,
          paragraphs: [
            "Every account earns toward the same rewards structure regardless of which games you play. Daily check-ins build a streak, gift codes drop periodically for extra balance, and inviting friends through your personal invite code earns referral rewards for both sides.",
            "The 10-tier VIP program tracks your overall play and moves you up automatically as you cross each tier's threshold — no separate application, no waiting period. Higher tiers unlock larger bonuses, faster withdrawal handling and dedicated perks.",
          ],
          asideTitle: "One Account, Every Category",
          asideText: "Your balance, VIP tier and rewards all carry across every game category and every device you use to play — nothing resets when you switch between them.",
        },
      ],
      extraSection: {
        eyebrow: "Getting Started",
        title: "What to Do First",
        paragraphs: [
          "If you're new here, Register takes under a minute — choose a username, set a password, and you'll land on a welcome screen that walks you through your first rewards. From there, browsing the ten categories will quickly show you which formats fit your style, whether that's the fast rounds of Win Go or the steadier pace of Slots.",
          "Existing players looking to get more out of their account should keep an eye on gift codes and their invite-code link, both of which add up over time with very little extra effort, and check where they land on the VIP tier ladder the next time they play.",
          "Wherever you're starting from, Customer Support is available around the clock through live chat if anything on the platform doesn't make sense — new accounts and long-time players get the same access to help.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Contact", href: "/contact/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Official Website", href: "/official-website/" },
        ],
      },
      faq: {
        items: [
          { q: "What is 55 Club?", a: "A gaming entertainment platform with ten game categories, daily rewards, gift codes, invite-code referrals and a 10-tier VIP program, playable on mobile, desktop or the Android app." },
          { q: "How many game categories does 55 Club have?", a: "Ten: Lottery, Win Go, Colour Prediction, Slots, Casino, Mini Games, Fishing, Sports, Aviator and Card Games, with Crash Games alongside Aviator's fast-round format." },
          { q: "Do I need a different account for each game?", a: "No — one account and one balance cover every category, and your VIP tier and rewards carry across all of them." },
          { q: "How does the VIP program work?", a: "It's a 10-tier structure that tracks your overall play and advances you automatically as you cross each tier's threshold, unlocking bigger perks at higher tiers." },
          { q: "Can I play without installing anything?", a: "Yes — the full game library works directly in a mobile or desktop browser. The Android APK is available as a faster alternative with a home-screen icon." },
          { q: "How do invite codes work?", a: "Share your personal invite code with a friend, and both accounts earn a referral reward once they register and play." },
          { q: "Where can I learn more about the support structure?", a: "The Customer Support page covers all available channels in detail, and Contact is the fastest route to a specific question." },
          { q: "Is rewards play the same across every device?", a: "Yes — your balance and rewards status stay identical whether you're on the browser or the app." },
        ],
      },
      cta: {
        title: "Get in Touch",
        text: "Questions about your account or the platform? Reach out through Contact or Customer Support.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
    });
  },
};
