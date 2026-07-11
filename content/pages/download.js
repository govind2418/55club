"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/download/",
  title: "55 Club Download — Get the App",
  metaDescription:
    "Download 55 Club for Android via direct APK, or play instantly in your mobile browser — no install required either way.",
  build() {
    return renderStandardPage({
      slug: "/download/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Download" }],
      hero: {
        eyebrow: "Get the App",
        h1: "55 Club Download",
        lead: "Get the Android APK for the fastest access with a home-screen icon, or play straight from your mobile browser with nothing to install at all.",
        primary: { label: "View APK Details", href: "/apk/" },
        secondary: { label: "See the App Page", href: "/app/" },
      },
      intro: [
        "There are two ways to play 55 Club on your phone: download the Android APK for a dedicated app-like experience, or open the mobile website directly in your browser. Both give you the same account, balance and full game library — the difference is convenience, not features.",
        "The APK is offered as a direct download because it's faster to reach once installed — one tap from your home screen instead of opening a browser and finding a bookmark — and it's a smaller, lighter install than most app-store equivalents.",
        "If you'd rather not install anything, the mobile browser version works just as well and updates automatically with no action needed on your part. It's the better choice if you're on a shared device or just want to check in quickly without adding an app.",
        "Before installing anything, it's worth confirming you're downloading from the Official Website — a quick habit that protects you from fake or modified copies circulating outside official channels.",
      ],
      features: {
        eyebrow: "Download Page Features",
        title: "Two Ways to Play",
        text: "Pick whichever fits how you use your phone.",
        cols: 4,
        items: [
          { icon: "download", title: "Direct APK", text: "A lightweight install with a home-screen icon for one-tap access." },
          { icon: "shield", title: "No Install Needed", text: "The mobile website works instantly, no download required." },
          { icon: "device", title: "Same Account Either Way", text: "Your balance and progress carry over regardless of how you play." },
          { icon: "clock", title: "Quick Setup", text: "The APK installs in under a minute on most Android devices." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Installing the APK",
          title: "A Short, Numbered Install Path",
          paragraphs: [
            "Installing the APK takes a few short steps: enable installs from unknown sources for your browser or file manager, download the file, run the installer, and open the app. The full walkthrough, including the exact settings toggle, is on the APK page.",
            "The one-time settings change is a standard Android requirement for any app installed outside the Play Store — it's not unique to 55 Club, and it only needs to be enabled once.",
          ],
          sideList: {
            title: "Before You Install",
            items: [
              "Confirm you're on club55.in.net",
              "Check the file size matches what's listed",
              "Enable installs from unknown sources",
              "Run the installer and open the app",
              "Log in with your existing account, or register",
            ],
          },
        },
        {
          eyebrow: "Verifying Authenticity",
          title: "Always Download From the Official Source",
          reverse: true,
          paragraphs: [
            "Fake or modified APKs are a real risk across the gaming app space, which is why every download path on this site links back to the Official Website page. Use it to confirm you're on the right domain before tapping download.",
            "It's a small habit, but it's one of the simplest ways to avoid installing something you didn't mean to.",
          ],
          asideTitle: "A Note on Trust",
          asideText: "Download, App, APK and Official Website all point to the same facts — consistent, cross-referenced information rather than a single unverifiable badge.",
        },
      ],
      extraSection: {
        eyebrow: "Storage & Performance",
        title: "What to Expect After Installing",
        paragraphs: [
          "The APK is a lightweight install, and storage use grows gradually as cached game data accumulates during play. You can clear cached data at any time from within the app's own settings if storage becomes a concern.",
          "Updates are delivered through an in-app prompt rather than a store-managed auto-update, since the app is distributed directly. You'll see a notification when a new version is available.",
          "A stable connection is recommended during play, particularly for round-based games where timing matters. The app is built to handle brief connection drops gracefully, picking back up once you're reconnected.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club App", href: "/app/" },
          { label: "55 Club APK", href: "/apk/" },
          { label: "55 Club Official Website", href: "/official-website/" },
          { label: "55 Club Register", href: "/register/" },
          { label: "55 Club Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "Is the 55club download the same file as the 55 Club download?", a: "Yes — 55club, 55 Club and 55Club all refer to the same APK, so the download steps on this page apply no matter which spelling brought you here." },
          { q: "What devices does the download page cover?", a: "The APK is built for Android. iOS and other devices can play the full game library directly through the mobile browser instead." },
          { q: "Why is there a direct APK instead of only a browser version?", a: "The APK gives you faster access with a one-tap home-screen icon and a lighter footprint than a typical app-store install." },
          { q: "Is the mobile browser version missing any features?", a: "No — it's the same account, balance and game library as the app. The APK is about convenience, not extra features." },
          { q: "Why should I check the Official Website first?", a: "To confirm you're downloading from the right source and avoid a fake or modified copy circulating elsewhere." },
          { q: "What's the difference between this page and the APK page?", a: "Download covers the general get-the-app overview across options; the APK page goes deeper into the Android-specific install steps." },
          { q: "Does the App page duplicate this content?", a: "No — App focuses on in-app features and screens, while Download focuses purely on getting set up." },
          { q: "What are the minimum technical requirements?", a: "A recent Android version and a stable connection are recommended. Exact file size and version requirements are listed on the APK page." },
          { q: "Can I download on a shared or work device?", a: "You can, but keep in mind your login will stay active on that device until you log out — better to use the browser version if you're not sure you'll remember to sign out." },
        ],
      },
      cta: {
        title: "Continue the Install Journey",
        text: "Check the APK page for Android-specific steps, or head to the App page for a feature overview.",
        primary: { label: "APK Details", href: "/apk/" },
        secondary: { label: "App Overview", href: "/app/" },
      },
    });
  },
};
