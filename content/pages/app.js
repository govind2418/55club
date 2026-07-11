"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/app/",
  title: "55 Club App — Mobile Experience Page Template",
  metaDescription:
    "A look at the 55 Club mobile app page template: feature overview layout, screen-by-screen structure and a comparison with the mobile web experience.",
  build() {
    return renderStandardPage({
      slug: "/app/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "App" }],
      hero: {
        eyebrow: "Mobile Experience",
        h1: "55 Club App",
        lead: "A feature-overview layout for the mobile app — what it does, how it differs from the mobile website, and what a first-open experience looks like.",
        primary: { label: "Download the App", href: "/download/" },
        secondary: { label: "APK Details", href: "/apk/" },
      },
      intro: [
        "The App page exists for a different reader than the Download page — someone who already knows they want an app-like experience and is trying to decide if it's worth the install. So instead of leading with a download button, this template leads with a short, honest answer: what the app actually adds over the mobile website.",
        "That answer is broken into concrete points rather than vague marketing language — faster navigation because there's no full page reload between screens, push-notification support for rewards and promotions, and a persistent login so users aren't re-entering credentials every session. Each point is something a user can verify for themselves after installing, which keeps the copy honest.",
        "The layout also walks through the app's core screens at a glance — home, games, rewards, account — using the same card pattern as the rest of the site, so someone scanning this page gets a mental map of the app before ever opening it.",
        "One thing this page deliberately avoids is screenshot-heavy marketing carousels that take longer to load than they take to skim. Instead, each screen is described in a sentence or two, backed by the same lightweight SVG iconography used throughout the site, which keeps this page as fast as any other template here despite covering more visual ground than most.",
      ],
      features: {
        eyebrow: "App Highlights",
        title: "What the App Adds Over Mobile Web",
        text: "Four concrete differences, not vague superlatives.",
        cols: 4,
        items: [
          { icon: "bolt", title: "Faster Navigation", text: "No full-page reloads between screens once the app shell is loaded." },
          { icon: "gift", title: "Push Notifications", text: "Optional alerts for daily rewards and time-limited promotions." },
          { icon: "lock", title: "Persistent Login", text: "Stay signed in across sessions without re-entering credentials each time." },
          { icon: "device", title: "Home Screen Access", text: "One tap from the device home screen instead of a bookmarked browser tab." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Screen Overview",
          title: "What the Main Screens Look Like",
          paragraphs: [
            "This template describes four core screens — Home, Games, Rewards and Account — each mapped to an existing page on this site so the app narrative and the website narrative stay consistent instead of diverging.",
            "That consistency matters for a template meant to be reused: whoever adapts this for a real product only has to design the app screens once, using the same component language already established across the web pages.",
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
            "In the interest of being genuinely useful rather than just promotional, this template's App page also states plainly when the mobile website is the better option — for a one-time visit, for devices with limited storage, or for anyone who'd rather not install anything at all.",
            "That kind of honesty is unusual on affiliate-style app pages, but it's exactly the sort of content depth that both users and search engines reward over time.",
          ],
          asideTitle: "No Pressure Tactics",
          asideText: "This page avoids countdown timers, fake low-storage warnings or other urgency tactics sometimes used to push app installs. The decision is left to the reader.",
        },
      ],
      extraSection: {
        eyebrow: "Update Cadence",
        title: "How App Updates Are Described",
        paragraphs: [
          "Rather than leaving update behavior unexplained, this template includes a short section on how the app is kept current — a version-number pattern, a changelog link pattern, and a note about how long older versions typically remain functional before an update becomes mandatory. This kind of detail rarely gets written, which is exactly why it stands out when it's done well.",
          "It also addresses a subtle but real concern: what happens if someone doesn't update right away. The copy here explains that core account functions keep working, while newer promotional features may require the latest version — a distinction that reduces confusion and support requests.",
          "The page also touches on offline behavior — what's visible when a connection drops mid-session versus what genuinely requires a live connection to function. That kind of detail rarely appears on marketing-style app pages, but it's exactly the sort of practical information that makes a page useful enough to bookmark rather than skim once and forget.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Download", href: "/download/" },
          { label: "APK", href: "/apk/" },
          { label: "Official Website", href: "/official-website/" },
          { label: "Rewards", href: "/rewards/" },
          { label: "Customer Support", href: "/customer-support/" },
        ],
      },
      faq: {
        items: [
          { q: "Is the app different from the mobile website?", a: "Yes — this page outlines four concrete differences: faster in-app navigation, optional push notifications, persistent login and home-screen access." },
          { q: "Do I need the app to use every feature?", a: "No. This template positions the mobile website as a fully valid option, with the app framed as a faster, more convenient layer on top rather than a requirement." },
          { q: "What screens does the app include?", a: "Four core screens in this template's structure: Home, Games, Rewards and Account, each mirroring an equivalent page on the website." },
          { q: "How are app updates communicated?", a: "Through a version-and-changelog pattern described in the Update Cadence section, including what still works if you delay updating." },
          { q: "Where do I actually get the app?", a: "The Download page covers the install process, and the APK page covers Android-specific technical detail." },
          { q: "Does this page function as a real app listing?", a: "No — it's a static template demonstrating page structure and copy, not a live app store listing." },
          { q: "What happens if my connection drops while using the app?", a: "The template describes which screens remain viewable offline (like previously loaded reward status) versus which genuinely require a live connection, so the behavior isn't a surprise." },
          { q: "Can I use the same account on the app and the website?", a: "Yes — this template treats the account system as shared across both, with the Account screen mirroring the same profile and security settings described on the website's Login and Register pages." },
          { q: "Does the app need constant background access?", a: "No — push notifications are opt-in and the app is designed to sit idle in the background without continuous data use, consistent with the permission transparency described earlier on this page." },
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
