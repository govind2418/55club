"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/login/",
  title: "55 Club Login — Access Your Account Page Template",
  metaDescription:
    "See how the 55 Club login page is structured: a fast, minimal-field sign-in layout with session security patterns and clear error handling.",
  build() {
    return renderStandardPage({
      slug: "/login/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Login" }],
      hero: {
        eyebrow: "Account Access",
        h1: "55 Club Login",
        lead: "A fast, minimal sign-in layout built around two fields, clear error states and a visible link to account recovery — no clutter between you and your account.",
        primary: { label: "Register Instead", href: "/register/" },
        secondary: { label: "Download App", href: "/download/" },
      },
      intro: [
        "The login page is often the most-visited template on any gaming platform, which is exactly why it gets the least visual noise here. This layout uses a single centered card, two fields — identifier and password — and a primary button that's impossible to miss, even on a small screen. Everything non-essential, from marketing banners to unrelated navigation, is pushed out of the immediate sign-in path.",
        "Behind that simplicity is a deliberate set of interface decisions. Password fields include a visibility toggle so users can confirm what they've typed before submitting, rather than guessing and re-entering. Error messages are specific — \"incorrect password\" reads differently from \"account not found\" — because vague failure states are one of the most common sources of support tickets on real platforms. A persistent \"forgot password\" link sits directly under the form, not buried in a settings menu three clicks away.",
        "This page also demonstrates how a login template should connect to the rest of a site. A visible link to Register handles the case where someone lands here by mistake without an account yet, and a note about session security links through to the Customer Support page for anyone who suspects unauthorized access. Nothing here is a dead end — every exit from this page leads somewhere useful, which is a small detail that matters more than it looks once real traffic starts arriving from a dozen different search queries.",
      ],
      features: {
        eyebrow: "Login Page Features",
        title: "What This Template Demonstrates",
        text: "Four interface patterns worth reusing on any account-access page.",
        cols: 4,
        items: [
          { icon: "lock", title: "Two-Field Simplicity", text: "Identifier and password only — no extra fields competing for attention on the primary action." },
          { icon: "shield", title: "Clear Error States", text: "Specific, actionable error messages instead of generic \"something went wrong\" text." },
          { icon: "bolt", title: "Fast Load", text: "No render-blocking scripts — the form is interactive the moment the page paints." },
          { icon: "device", title: "Mobile-First Layout", text: "The card scales from a full-width mobile sheet to a centered desktop panel." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Session Security",
          title: "How the Layout Communicates Trust",
          paragraphs: [
            "Trust on a login page isn't a badge in the corner — it's the sum of small choices. This template shows a visible \"last login\" style note pattern, a session-timeout explanation in the support content, and a password field that never silently fails without explanation.",
            "If you're adapting this for a live product, pair it with real transport security (HTTPS, HSTS) and a rate-limiting strategy on the backend. The frontend can only communicate trust; the infrastructure has to earn it.",
          ],
          sideList: {
            title: "Checklist for a Production Login Page",
            items: [
              "HTTPS enforced everywhere, no mixed content",
              "Rate limiting on repeated failed attempts",
              "Clear account-recovery path",
              "No sensitive data in the URL",
              "Session timeout communicated to the user",
            ],
          },
        },
        {
          eyebrow: "Login vs. Official Website",
          title: "Two Related Pages, Two Different Jobs",
          reverse: true,
          paragraphs: [
            "It's worth separating this page's job from the Official Website template's job, since the two are easy to conflate. The Login page assumes the visitor already has an account and wants the shortest possible path to their dashboard — it minimizes reading and maximizes the size of the primary button.",
            "The Official Website page, by contrast, is written for someone still deciding whether to trust the brand at all. It carries more explanatory copy, more trust signals, and links out to Login and Register rather than embedding the forms directly. Keeping these jobs separate is what keeps both pages fast and focused instead of trying to be everything at once.",
          ],
          asideTitle: "Why This Split Matters for SEO",
          asideText: "Search engines reward pages that match a single, clear intent. A login page trying to also rank for broad brand-discovery terms tends to dilute both — separating the two keeps each page's structured data and internal links focused on what it actually answers.",
        },
      ],
      extraSection: {
        eyebrow: "Common Issues",
        title: "Designing Around the Ways Sign-In Usually Breaks",
        paragraphs: [
          "Most login friction on real platforms comes down to a handful of repeat offenders: a caps-lock typo on the password, an outdated saved password after a reset, or a session that expired silently in the background. This template's copy anticipates each one — the password field label mentions case sensitivity, the error state distinguishes between \"wrong password\" and \"account not found,\" and a session-expiry note appears near the support link rather than leaving users to guess why they were logged out.",
          "Another common source of frustration is switching between devices — someone logs in on desktop, then can't remember which email or username they used on mobile. The Official Website and Download App pages both link back here with consistent copy, so the entry point never changes shape depending on where someone arrives from.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Register", href: "/register/" },
          { label: "Official Website", href: "/official-website/" },
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Download App", href: "/download/" },
          { label: "VIP Club", href: "/vip-club/" },
        ],
      },
      faq: {
        items: [
          { q: "What fields does the login form require?", a: "Just an identifier (username or email pattern) and a password. Keeping it to two fields reduces friction and mirrors how most gaming platforms structure their sign-in page." },
          { q: "What happens if I forget my password?", a: "The layout includes a visible recovery link directly beneath the password field, leading to a reset flow — this template shows the entry point, not a live reset backend." },
          { q: "Is this login page connected to a real account system?", a: "No. This is a static template demonstrating layout, copy and interface patterns. It does not authenticate real accounts or store credentials." },
          { q: "Can I reuse this login layout for another brand?", a: "Yes — swap the brand name, colors and copy in the shared design tokens, and the same component structure carries over cleanly." },
          { q: "How does this page handle mobile screens?", a: "The card layout collapses to a full-width sheet below 720px, and the sticky mobile action bar at the bottom offers quick access to Login and Register from anywhere on the site." },
          { q: "Why does the login page link to the Official Website page?", a: "Some visitors land on Login directly from a bookmark or search result without ever seeing the brand's main introduction. Linking to the Official Website page gives them a way to verify they're in the right place before entering credentials." },
        ],
      },
      cta: {
        title: "Explore the Rest of the Template",
        text: "See how the Register and Official Website pages continue the same account-access pattern.",
        primary: { label: "Go to Register", href: "/register/" },
        secondary: { label: "Official Website", href: "/official-website/" },
      },
    });
  },
};
