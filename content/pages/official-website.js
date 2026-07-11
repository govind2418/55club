"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/official-website/",
  title: "55 Club Official Website — Verify You're in the Right Place",
  metaDescription:
    "55 Club is accessible at club55.in.net. Learn how to verify you're on the official domain before logging in, and avoid lookalike or phishing links.",
  build() {
    return renderStandardPage({
      slug: "/official-website/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Official Website" }],
      hero: {
        eyebrow: "Verify Authenticity",
        h1: "55 Club Official Website",
        lead: "55 Club is accessible at club55.in.net. If you arrived here from a shared link or an unfamiliar bookmark, take a moment to confirm you're on the right domain before you log in.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "Login", href: "/login/" },
      },
      intro: [
        "A lot of people searching for \"55 Club official website\" have already run into a suspicious link, an unofficial mirror, or conflicting information somewhere else, and just want a straight answer: is this the real site? It is — 55 Club operates at club55.in.net, and this page exists specifically to help you confirm that before entering any credentials.",
        "Verifying you're in the right place takes a few seconds: check the domain spelling carefully, confirm the connection shows as secure, and make sure the branding and layout match what you see linked from this page's Login and Register buttons.",
        "This page stays short on purpose. Where the homepage sells the full experience, this page's job is narrower — confirm identity, then get out of your way so you can get to your account.",
        "Every link on this page points to the exact same Login, Register and Support pages used everywhere else on the site, so nothing here asks you to trust a new, unfamiliar destination.",
      ],
      features: {
        eyebrow: "Verification Signals",
        title: "What to Check For",
        text: "Four concrete things you can verify yourself.",
        cols: 4,
        items: [
          { icon: "shield", title: "Correct Domain", text: "55 Club operates at club55.in.net — check the spelling carefully before logging in." },
          { icon: "lock", title: "Secure Connection", text: "Confirm the connection shows as secure before entering any credentials." },
          { icon: "check", title: "Matching Links", text: "Login and Register links here lead to the same pages used across the site." },
          { icon: "headset", title: "Support Contact", text: "Reach Customer Support directly if you're still unsure." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Common Confusion",
          title: "Why Lookalike Links Show Up",
          paragraphs: [
            "Popular platform names attract lookalike domains and forwarded links shared through untrusted sources — group chats, ads, or messages claiming to offer a shortcut. If you ended up somewhere that doesn't look quite right, that's exactly the kind of situation this page is meant to resolve.",
            "The guidance here is deliberately plain and practical: check the domain carefully, be cautious of links shared outside official channels, and when in doubt, type club55.in.net directly instead of clicking through a forwarded link.",
          ],
          sideList: {
            title: "A Quick Verification Checklist",
            items: [
              "Confirm the domain reads exactly as club55.in.net",
              "Check the connection shows as secure",
              "Compare the layout against what's linked from this page",
              "Avoid entering credentials after clicking an unsolicited link",
              "When unsure, contact support before proceeding",
            ],
          },
        },
        {
          eyebrow: "Consistent Navigation",
          title: "Why Every Link Here Matches the Rest of the Site",
          reverse: true,
          paragraphs: [
            "Every button on this page — Register, Login, Support — points to the exact same pages linked from the homepage and the header navigation. If you found this page through an unfamiliar route, you should land on something identical to what every other visitor sees.",
            "That consistency is one of the simplest ways to tell a genuine page from an imitation.",
          ],
          asideTitle: "Bookmark It",
          asideText: "Once you've confirmed you're on club55.in.net, save it as a bookmark. Navigating from a saved bookmark removes the risk of clicking a lookalike link in search results later.",
        },
      ],
      extraSection: {
        eyebrow: "Before You Log In",
        title: "A Habit Worth Building",
        paragraphs: [
          "Make a habit of checking the address bar before you enter your password, especially if you followed a link from somewhere other than a saved bookmark or a direct search. It takes a few seconds and it's the single most effective way to avoid a phishing attempt.",
          "If a link ever looks even slightly off — a misspelled domain, an unusual prompt, a request for information beyond your username and password — stop, don't enter anything, and reach out to Customer Support to confirm before proceeding.",
          "This page is intentionally kept separate from the homepage for a reason: it answers one specific question directly, without asking you to read through a full product overview first when all you wanted was confirmation you're in the right place.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Login", href: "/login/" },
          { label: "Register", href: "/register/" },
          { label: "Download", href: "/download/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "About", href: "/about/" },
        ],
      },
      faq: {
        items: [
          { q: "What is the official 55 Club website?", a: "55 Club is accessible at club55.in.net. Always check the domain carefully before entering your login details." },
          { q: "How do I know I'm on the official website?", a: "Check the domain reads exactly as club55.in.net, confirm a secure connection, and compare the layout against what's linked from this page." },
          { q: "Why do lookalike or mirror sites exist?", a: "Popular platform names attract typo-squatted or impersonation domains, often shared through untrusted links in chats or ads." },
          { q: "What should I do if a link looks suspicious?", a: "Don't enter any credentials. Navigate to club55.in.net directly instead of clicking through, or contact support to confirm first." },
          { q: "Where do I go after confirming I'm on the right site?", a: "The Login and Register links on this page lead to the same account-access pages used throughout the rest of the site." },
          { q: "Should I bookmark this page instead of searching each time?", a: "Yes — once you've confirmed the correct domain, save it as a bookmark to avoid clicking a lookalike link in search results later." },
          { q: "What if I already entered details on a suspicious site?", a: "Contact Customer Support immediately so the team can help secure your account." },
          { q: "Is this the same content as the homepage?", a: "No — this page is intentionally shorter and focused specifically on verifying you're on the right domain." },
        ],
      },
      cta: {
        title: "Continue to Your Account",
        text: "Now that you've confirmed you're in the right place, head to Login or Register.",
        primary: { label: "Login", href: "/login/" },
        secondary: { label: "Register", href: "/register/" },
      },
    });
  },
};
