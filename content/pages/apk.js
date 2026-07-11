"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/apk/",
  title: "55 Club APK — Android Install Guide",
  metaDescription:
    "Download and install the 55 Club Android APK: enable installs from unknown sources, download the file, install and open — step by step.",
  build() {
    return renderStandardPage({
      slug: "/apk/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "APK" }],
      hero: {
        eyebrow: "Android Package",
        h1: "55 Club APK",
        lead: "Step-by-step Android install: enable installs from unknown sources, download the file, install it, and open the app — all in a few minutes.",
        primary: { label: "General Download Page", href: "/download/" },
        secondary: { label: "App Overview", href: "/app/" },
      },
      intro: [
        "This page covers the direct technical steps for installing the 55 Club Android app outside the Play Store. If you already know what sideloading involves and just want the exact settings path and install steps, you're in the right place.",
        "Because installing outside an app store carries more risk than a store install — fake APKs are a genuine problem across the industry — always download from the Official Website page and check the file size matches what's listed here before you install.",
        "The steps below are the same whether it's your first time sideloading an app or your fiftieth: enable one setting, download the file, run the installer, and grant the permissions the app requests on first launch.",
        "None of this requires deep technical knowledge — every step is a single tap, and the permissions the app asks for are explained in plain terms below rather than left as a dense system dialog you have to interpret on your own.",
      ],
      features: {
        eyebrow: "APK Page Features",
        title: "What This Page Covers",
        text: "Four things worth knowing before you install.",
        cols: 4,
        items: [
          { icon: "shield", title: "File Verification", text: "Check the file size and source before installing anything." },
          { icon: "device", title: "Settings Walkthrough", text: "The exact toggle path for allowing installs from unknown sources." },
          { icon: "clock", title: "Version Info", text: "Current version number and what's new in the latest release." },
          { icon: "lock", title: "Permission Breakdown", text: "What the app requests access to on first launch, and why." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Install Steps",
          title: "The Install Path, Step by Step",
          paragraphs: [
            "Installing takes five steps: enable installs from unknown sources for the browser or file manager you're using, download the APK file from the Official Website, open the downloaded file to start the installer, confirm the install, and open the app to log in or register.",
            "Each step is a single action — there's no need to change any other device settings beyond the one-time toggle for the app you're installing.",
          ],
          sideList: {
            title: "Before You Install",
            items: [
              "Confirm you're on club55.in.net",
              "Check the file size matches what's listed",
              "Enable installs from unknown sources for one app only",
              "Run the installer and confirm",
              "Open the app and log in or register",
            ],
          },
        },
        {
          eyebrow: "Why a Direct APK",
          title: "Why Not Just the Play Store",
          reverse: true,
          paragraphs: [
            "Real-money gaming apps are commonly restricted by app store policy in many regions, which is why direct APK distribution is the standard approach across the industry, not just for 55 Club. This page exists so that route is clear and safe rather than confusing.",
            "Distributing directly also means updates reach you faster — a new version is available the moment it's released, without waiting on a store review process.",
          ],
          asideTitle: "A Note on Settings",
          asideText: "Enabling installs from unknown sources only affects the specific app you allow it for. You can review or revoke that permission in your device settings at any time.",
        },
      ],
      extraSection: {
        eyebrow: "Keeping It Updated",
        title: "Version Numbers and Updates",
        paragraphs: [
          "Since the app isn't distributed through a store, it doesn't auto-update the same way. You'll see an in-app prompt when a new version is available — checking for the latest version occasionally is worth doing, especially if you notice something behaving differently than expected.",
          "Older versions generally keep working for core account functions, but newer promotional features may need the latest release to show up correctly.",
          "If you ever need to remove the app, a standard uninstall from your device settings clears it out, including its cached data.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Download", href: "/download/" },
          { label: "App", href: "/app/" },
          { label: "Official Website", href: "/official-website/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "What is an APK file?", a: "The installable package format for Android apps. This page walks through downloading and installing the 55 Club APK outside the Play Store." },
          { q: "Is installing the APK safe?", a: "Yes, as long as you download it from the Official Website. Always check the domain and file size before installing." },
          { q: "Do I need to change device settings to install?", a: "Yes — you'll need to enable installs from unknown sources for the specific app or browser you're using, a one-time step." },
          { q: "How do I know I have the latest version?", a: "The app shows an in-app prompt when a new version is available. You can also check the current version number in the app's settings." },
          { q: "Why isn't this app on the Play Store?", a: "Real-money gaming apps are commonly restricted by app store policy in many regions, so direct APK distribution is the standard route across the industry." },
          { q: "How do I fully remove the app?", a: "A standard uninstall from your device settings removes the app along with its cached data." },
          { q: "Is the APK the same version as the app described on the App page?", a: "Yes — they're the same release. This page covers the Android-specific install steps; the App page covers the in-app experience." },
          { q: "What if the download doesn't match the expected file size?", a: "Don't install it. Re-download from the Official Website page instead of proceeding with a file that doesn't match." },
        ],
      },
      cta: {
        title: "Continue to Installation",
        text: "See the general Download page for a broader overview, or the App page for feature detail.",
        primary: { label: "Download Page", href: "/download/" },
        secondary: { label: "App Overview", href: "/app/" },
      },
    });
  },
};
