"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/privacy-policy/",
  title: "55 Club Privacy Policy — Data Practices",
  metaDescription:
    "55 Club Privacy Policy: what account data is collected, why it's used, and how to request more information or exercise your data rights.",
  build() {
    return renderStandardPage({
      slug: "/privacy-policy/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Privacy Policy" }],
      hero: {
        eyebrow: "Data & Privacy",
        h1: "55 Club Privacy Policy",
        lead: "A plain-language look at what data your account involves, why it's collected, and how you can reach out with questions or requests about your own data.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "Contact", href: "/contact/" },
      },
      intro: [
        "This page explains, in plain language, what account data 55 Club collects and why — without the dense legal jargon that makes most privacy policies hard to actually read.",
        "In short: we collect what's needed to run your account securely, support you when you reach out, and deliver the platform itself. That covers information you provide directly, like your username and contact details, along with account and gameplay activity generated as you use the platform.",
        "Each category below is tied to a stated purpose rather than left open-ended — account data supports the account itself, activity data supports features like your rewards streak and VIP tier, and technical data supports account security.",
        "If anything here raises a question that isn't fully answered, Contact and Customer Support are both available to help — reach out any time for more detail on how your data is handled.",
      ],
      features: {
        eyebrow: "What This Page Covers",
        title: "Core Privacy Topics",
        text: "The categories that matter most to your account.",
        cols: 4,
        items: [
          { icon: "lock", title: "Data Collection", text: "What account and usage data is gathered, and why." },
          { icon: "clock", title: "How It's Used", text: "Account security, support and delivering the platform itself." },
          { icon: "shield", title: "Keeping It Secure", text: "Reasonable safeguards around how account data is handled." },
          { icon: "check", title: "Your Requests", text: "How to reach out for more information about your own data." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Data Collection",
          title: "What Gets Collected and Why",
          paragraphs: [
            "Account data falls into a few general categories: information you provide directly during registration (your username and contact method), information generated through platform use (game history, rewards activity, VIP progress), and technical information collected automatically (device type and general connection details, used for account security).",
            "Each category supports a specific purpose — your account details keep your account working and recoverable, your activity data powers features like the rewards streak tracker and VIP tier, and technical data helps protect your account from unauthorized access.",
          ],
          sideList: {
            title: "General Data Categories",
            items: [
              "Account data — provided at registration",
              "Usage data — generated through platform activity",
              "Technical data — device and security-related information",
              "Communication data — support and contact history",
            ],
          },
        },
        {
          eyebrow: "Why It's Used",
          title: "Account Security, Support and Service Delivery",
          reverse: true,
          paragraphs: [
            "Your data is used to keep your account secure, to help Customer Support assist you when you reach out, and to deliver the platform itself — everything from showing your correct balance to tracking your VIP tier progress accurately.",
            "If you'd like more detail on how a specific piece of your account data is used, or you'd like to request information about your own data, Contact or Customer Support can help point you to a clear answer.",
          ],
          asideTitle: "Questions About Your Data",
          asideText: "Reach out through Contact or Customer Support any time you'd like more detail on how your account data is handled, or to make a request about your own data.",
        },
      ],
      extraSection: {
        eyebrow: "Keeping Information Specific",
        title: "How We Talk About Data Sharing",
        paragraphs: [
          "Where account data needs to be shared for a specific purpose — such as processing a payment or meeting a legal disclosure requirement — that sharing is tied to the specific purpose rather than an open-ended catch-all. Account data isn't sold to third parties for marketing purposes.",
          "Reasonable security practices apply to how account data is handled day to day, including limiting who can access sensitive account details and following a clear process if anything unexpected occurs.",
          "Cookies and similar technologies are used in a standard way — session cookies to keep you logged in, and optionally analytics cookies to understand how the platform is used in aggregate, kept separate rather than bundled under one vague label.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Contact", href: "/contact/" },
          { label: "About", href: "/about/" },
          { label: "Register", href: "/register/" },
        ],
      },
      faq: {
        items: [
          { q: "What data does 55 Club collect?", a: "Four general categories: account data, usage data, technical data and communication data, each tied to a specific purpose." },
          { q: "Why is this data collected?", a: "To keep your account secure, support you when you reach out, and deliver the platform itself, including features like your rewards and VIP tracking." },
          { q: "Can I ask about the data linked to my account?", a: "Yes — reach out through Contact or Customer Support for more detail on your account data or to make a specific request." },
          { q: "Does 55 Club sell user data?", a: "No — account data isn't sold to third parties for marketing purposes." },
          { q: "Who can I contact with privacy questions?", a: "Contact and Customer Support both provide channels appropriate for privacy-related questions." },
          { q: "What security measures apply to account data?", a: "Reasonable safeguards are applied, including limiting internal access to sensitive account details and following a clear process if anything unexpected occurs." },
          { q: "Does this page cover cookies?", a: "Yes — session cookies keep you logged in, and optional analytics cookies help understand aggregate usage, kept distinct from one another." },
          { q: "Is my gameplay activity linked to my account?", a: "Yes — activity like game history, rewards streaks and VIP progress is tied to your account so those features work correctly." },
        ],
      },
      cta: {
        title: "Questions About Your Data?",
        text: "Reach out through Contact or Customer Support for anything this page doesn't answer.",
        primary: { label: "Contact", href: "/contact/" },
        secondary: { label: "Customer Support", href: "/customer-support/" },
      },
    });
  },
};
