"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/download/",
  title: "55 Club Download — Get the App Page Template",
  metaDescription:
    "The 55 Club download page template: a clear device-selection layout, install-step guidance and storage/permission transparency.",
  build() {
    return renderStandardPage({
      slug: "/download/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Download" }],
      hero: {
        eyebrow: "Get the App",
        h1: "55 Club Download",
        lead: "A device-aware download layout that explains exactly what's being installed, how large it is, and what steps come next — before a single tap.",
        primary: { label: "View APK Details", href: "/apk/" },
        secondary: { label: "See the App Page", href: "/app/" },
      },
      intro: [
        "Download pages are a strange middle ground: they need to feel instant and low-friction while also being transparent about what's actually being installed. This template splits the difference by leading with a single obvious download button, then following it with a short, honest breakdown — file size, supported OS versions, and a plain description of what permissions the app will request and why.",
        "Rather than assuming the visitor's device, the layout offers device-aware guidance: separate install instructions for Android and iOS-style flows, since the steps genuinely differ — sideloading guidance for one platform, App Store redirection for another. Burying that distinction in a single generic paragraph is one of the more common ways real download pages confuse users.",
        "This page also connects forward and backward in the funnel deliberately. It links back to the Official Website page for anyone who wants to verify authenticity before installing anything, and forward to the APK page for the technical detail some users specifically search for.",
        "None of that structure matters if the page itself is slow, which is why this template treats its own performance as part of the content strategy. The download button renders immediately with no dependency on third-party scripts, the device-detection logic (where used) degrades gracefully to showing both options rather than guessing wrong and hiding one, and every icon on the page is inline SVG rather than a network request. A download page that takes several seconds to become interactive undermines its own message before a visitor even reaches the button.",
      ],
      features: {
        eyebrow: "Download Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a download page that respects the user's caution.",
        cols: 4,
        items: [
          { icon: "download", title: "One Clear CTA", text: "A single, unmistakable download action instead of competing buttons." },
          { icon: "shield", title: "Permission Transparency", text: "Plain-language notes on what the app requests access to and why." },
          { icon: "device", title: "Device-Aware Steps", text: "Separate, honest install guidance rather than one-size-fits-all instructions." },
          { icon: "clock", title: "Size & Version Info", text: "File size and minimum OS version shown upfront, not hidden in fine print." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Installation Steps",
          title: "A Short, Numbered Install Path",
          paragraphs: [
            "The install guidance in this template is written as a short numbered sequence rather than a paragraph, because step-by-step instructions are what people actually scan for on a download page. Each step is one sentence, one action.",
            "For sideloaded installs, the copy also explains the settings toggle a device may require, framed as a one-time step rather than a scary warning — accuracy without alarmism.",
          ],
          sideList: {
            title: "What a Good Install Guide Covers",
            items: [
              "Where the download link leads",
              "Any settings change required before install",
              "Expected install time and file size",
              "What the first-launch screen looks like",
              "Where to get help if install fails",
            ],
          },
        },
        {
          eyebrow: "Verifying Authenticity",
          title: "Why This Links Back to the Official Website",
          reverse: true,
          paragraphs: [
            "One of the most common risks around app downloads for any brand is a fake or modified copy circulating outside official channels. This template addresses that directly by linking every download path back to the Official Website page, so visitors have a clear, single source of truth to check against.",
            "It's a small structural choice, but it matters: a download page that doesn't reference an official source is a download page that's easy to spoof.",
          ],
          asideTitle: "A Note on Trust Signals",
          asideText: "Trust on a download page isn't one badge — it's consistent, cross-referenced information across Download, App, APK and Official Website all pointing to the same facts.",
        },
      ],
      extraSection: {
        eyebrow: "Storage & Performance",
        title: "Keeping the Download Experience Honest",
        paragraphs: [
          "Beyond the install steps, this template's download page addresses two things users increasingly care about: how much storage the app will take, and what happens to that footprint over time as cached data accumulates. Rather than omitting this, the layout includes a short note on expected storage growth and how to clear cached data from within the app's own settings.",
          "The page also sets expectations around update frequency, since an app that silently prompts for updates constantly can feel untrustworthy. A brief line about how updates are delivered — in-app prompt versus store-managed — closes that gap before it becomes a support question.",
          "Connection requirements get the same treatment. Rather than leaving users to discover mid-install that a stable connection is required, or that the app needs a certain amount of free storage headroom beyond its base install size, this template states both upfront in a short technical-requirements line near the main download button.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "App", href: "/app/" },
          { label: "APK", href: "/apk/" },
          { label: "Official Website", href: "/official-website/" },
          { label: "Register", href: "/register/" },
          { label: "Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "What devices does this download page cover?", a: "The layout includes separate guidance patterns for Android-style sideloaded installs and iOS-style store installs, since the steps differ meaningfully." },
          { q: "Is the download link on this page live?", a: "No. This is a static template demonstrating page structure and copy — there is no functioning binary attached to the download button." },
          { q: "How does this page handle app permissions?", a: "Through a short, plain-language section explaining what access the app would request and why, rather than a dense permissions list." },
          { q: "Why does this page link to the Official Website?", a: "To give users a way to cross-check authenticity before installing anything, which is a standard trust pattern for any app-distribution page." },
          { q: "What's the difference between this page and the APK page?", a: "Download covers the general get-the-app experience across platforms; the APK page goes deeper into the Android-specific technical details some users search for directly." },
          { q: "Does the app page duplicate this content?", a: "No — App focuses on in-app features and screens, while Download focuses purely on the install process itself." },
          { q: "What are the minimum technical requirements?", a: "The page states expected file size, minimum OS version and a stable connection requirement upfront, next to the main download action, rather than leaving users to discover them mid-install." },
          { q: "Can I download on a shared or work device?", a: "The template's guidance is general-purpose, but any real install on a shared device should follow that device's own policy — this page includes a brief note pointing that out rather than assuming a personal device." },
        ],
      },
      cta: {
        title: "Continue the Install Journey",
        text: "Check the APK page for Android-specific detail, or head to the App page for a feature overview.",
        primary: { label: "APK Details", href: "/apk/" },
        secondary: { label: "App Overview", href: "/app/" },
      },
    });
  },
};
