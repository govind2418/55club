"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/app/",
  title: "55 Club App — Mobile Experience",
  metaDescription:
    "Play 55 Club through the mobile app: same account and balance as the website, plus push notifications for rewards and promotions.",
  build() {
    return renderStandardPage({
      slug: "/app/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "App" }],
      hero: {
        eyebrow: "Mobile Experience",
        h1: "55 Club App",
        lead: "The same account, balance and game library as the website, wrapped in a faster app experience with notifications for rewards and promotions.",
        primary: { label: "Download the App", href: "/download/" },
        secondary: { label: "APK Details", href: "/apk/" },
      },
      intro: [
        "The app gives you the exact same 55 Club account as the website — same balance, same VIP tier, same game history — with a faster, more direct experience layered on top.",
        "What the app adds is concrete rather than vague: faster navigation because there's no full page reload between screens, push notifications for daily rewards and time-limited promotions, and a persistent login so you're not re-entering credentials every session.",
        "The app is organized around four main screens — Home, Games, Rewards and Account — each mirroring the equivalent section of the website, so switching between the two feels seamless rather than like two different products.",
        "None of this requires giving up the browser version. If you'd rather not install anything, the mobile website covers the same games and features, just without the home-screen icon and notifications.",
      ],
      features: {
        eyebrow: "App Highlights",
        title: "What the App Adds Over Mobile Web",
        text: "Four concrete differences, not vague superlatives.",
        cols: 4,
        items: [
          { icon: "bolt", title: "Faster Navigation", text: "No full-page reloads between screens once the app is loaded." },
          { icon: "gift", title: "Push Notifications", text: "Alerts for daily rewards and time-limited promotions, opt-in." },
          { icon: "lock", title: "Persistent Login", text: "Stay signed in across sessions without re-entering credentials." },
          { icon: "device", title: "Home Screen Access", text: "One tap from your device home screen instead of a browser bookmark." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Screen Overview",
          title: "What the Main Screens Look Like",
          paragraphs: [
            "The app has four core screens: Home for quick access to your top game categories, Games for browsing the full library across all ten categories, Rewards for your daily check-in streak and milestones, and Account for your profile, security settings and support links.",
            "Each screen mirrors its equivalent page on the website, so your mental map of the site carries straight over to the app with no relearning required.",
          ],
          sideList: {
            title: "Core App Screens",
            items: [
              "Home — quick links to top game categories",
              "Games — full category browsing, mirrors site structure",
              "Rewards — daily check-in and milestone tracker",
              "Account — profile, security and support links",
            ],
          },
        },
        {
          eyebrow: "App vs. Mobile Web",
          title: "When the Website Is the Better Choice",
          reverse: true,
          paragraphs: [
            "The mobile website is the better call for a one-time visit, on a device with limited storage, or if you'd simply rather not install anything at all — it covers the same games and the same account with no compromise.",
            "The app earns its place for regular players who want notifications for rewards and promotions and the convenience of a home-screen icon.",
          ],
          asideTitle: "Your Call, No Pressure",
          asideText: "Both paths lead to the same account and balance. Pick whichever fits how often you play and how you use your phone.",
        },
      ],
      extraSection: {
        eyebrow: "Staying Current",
        title: "How App Updates Work",
        paragraphs: [
          "Since the app is distributed directly rather than through a store, updates arrive as an in-app prompt when a new version is ready. Core account functions — login, balance, deposits — keep working even if you don't update immediately, though newer promotional features may need the latest version.",
          "If your connection drops mid-session, previously loaded screens like your reward status stay visible, while anything requiring a live connection — placing a bet, submitting a pick — will prompt you to reconnect.",
          "Notifications are opt-in and the app is designed to sit idle in the background without constant data use, so it won't drain your battery or data plan just by being installed.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club Download", href: "/download/" },
          { label: "55 Club APK", href: "/apk/" },
          { label: "55 Club Official Website", href: "/official-website/" },
          { label: "55 Club Rewards", href: "/rewards/" },
          { label: "55 Club Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "Is the 55club app the same as the 55 Club app?", a: "Yes — 55club app, 55 Club app and 55Club app all refer to the same mobile experience described on this page, sharing one account with the website." },
          { q: "Is the app different from the mobile website?", a: "It's the same account and games, with faster in-app navigation, push notifications, persistent login and home-screen access added on top." },
          { q: "Do I need the app to use every feature?", a: "No. The mobile website covers the full game library and account features — the app just adds convenience and notifications." },
          { q: "What screens does the app include?", a: "Four core screens: Home, Games, Rewards and Account, each mirroring the equivalent page on the website." },
          { q: "How are app updates handled?", a: "You'll see an in-app prompt when a new version is available. Core account functions keep working even if you update later." },
          { q: "Where do I actually get the app?", a: "The Download page covers the install process, and the APK page covers the Android-specific technical steps." },
          { q: "Can I use the same account on the app and the website?", a: "Yes — your account, balance and VIP tier are shared across both, with the Account screen mirroring your website profile and settings." },
          { q: "What happens if my connection drops while using the app?", a: "Previously loaded screens, like your reward status, stay visible. Anything requiring a live connection will prompt you to reconnect." },
          { q: "Does the app need constant background access?", a: "No — notifications are opt-in and the app stays idle in the background without continuous data use." },
        ],
      },
      cta: {
        title: "Ready to Install?",
        text: "Head to the Download page for step-by-step install guidance across devices.",
        primary: { label: "Go to Download", href: "/download/" },
        secondary: { label: "APK Details", href: "/apk/" },
      },
    });
  },
};
