"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/invite-code/",
  title: "55 Club Invite Code — Referral Page Template",
  metaDescription:
    "The 55 Club Invite Code page template: a referral-sharing layout, code-generation pattern and a plain explanation of how referral tracking works.",
  build() {
    return renderStandardPage({
      slug: "/invite-code/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Invite Code" }],
      hero: {
        eyebrow: "Referral Program",
        h1: "55 Club Invite Code",
        lead: "A referral-sharing page template covering code generation, share-link patterns, one-click copy actions and a transparent explanation of how referral tracking typically works.",
        primary: { label: "Register", href: "/register/" },
        secondary: { label: "See Gift Code", href: "/gift-code/" },
      },
      intro: [
        "Referral programs run on trust — a user sharing their code needs confidence it'll actually be tracked and credited, and the person redeeming it needs confidence they're not being tricked into something opaque. This template's Invite Code page addresses both sides directly: a clear explanation of how a personal code is generated, how it's shared, and how tracking works once someone uses it.",
        "The page shows a single generated code prominently, alongside share-friendly formatting (a copy button, a shareable link pattern) rather than expecting users to manually format their own referral message. Reducing friction on the sharing side is often the single biggest lever in whether a referral program actually gets used.",
        "On the redemption side, this template explains what happens when someone signs up using a shared code — the connection between the two accounts, and what, if anything, each party might see reflected in their own account as a result. Vague referral programs where neither party can verify anything happened are a common source of user frustration on real platforms.",
        "As with Gift Code, this page is careful to define itself against its closest sibling rather than blur the distinction: invite codes are user-generated and referral-focused, gift codes are platform-issued and promotion-focused.",
      ],
      features: {
        eyebrow: "Invite Code Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a referral flow people can trust, on both the sharing and redeeming side.",
        cols: 4,
        items: [
          { icon: "spark", title: "One-Click Copy", text: "A share-ready code and link, copyable without manual formatting." },
          { icon: "check", title: "Tracking Transparency", text: "A plain explanation of how a redeemed code connects two accounts." },
          { icon: "gift", title: "Referral Visibility", text: "A pattern for showing referral activity back to the sharer." },
          { icon: "shield", title: "Clear Distinction from Gift Code", text: "Explicit copy separating this from the platform-issued code mechanic." },
        ],
      },
      infoSections: [
        {
          eyebrow: "How Codes Are Generated",
          title: "One Code Per Account, Clearly Displayed",
          paragraphs: [
            "This template assumes each account is assigned one referral code automatically upon registration, shown prominently on this page alongside a one-click copy action and a pre-formatted shareable link.",
            "Keeping the code visible and easy to copy — rather than buried in an account settings sub-menu — reflects the reality that most referral sharing happens in a spontaneous moment, not a planned session.",
          ],
          sideList: {
            title: "What This Page Shows",
            items: [
              "Your personal invite code",
              "A pre-formatted shareable link",
              "A one-click copy action",
              "A basic referral activity summary",
            ],
          },
        },
        {
          eyebrow: "How Tracking Works",
          title: "Explaining the Connection Plainly",
          reverse: true,
          paragraphs: [
            "When someone registers using a shared invite code, this template describes a straightforward link being recorded between the referring account and the new account. What happens next — any recognition, tracking or reward — is left as a pattern for a real implementation to define, rather than this static template inventing specific numbers.",
            "The point of explaining this at all is trust: a referral program that doesn't explain its own mechanics, even at a high level, tends to leave users assuming the worst about whether it works as claimed.",
          ],
          asideTitle: "A Note on Privacy",
          asideText: "Any real referral system should be explicit about what information, if any, is shared between the referring and referred accounts — a detail this template flags without prescribing a specific policy.",
        },
      ],
      extraSection: {
        eyebrow: "Invite Code vs. Gift Code",
        title: "Keeping Two Similar-Sounding Mechanics Distinct",
        paragraphs: [
          "Because \"invite code\" and \"gift code\" sound similar and are sometimes used loosely on real platforms, this template treats the distinction as worth stating plainly rather than assuming visitors already know it. An invite code is generated by a user and used for referrals; a gift code is issued by the platform and used for promotional redemption. They can coexist in the same account without being the same feature.",
          "Search behavior around these two terms also differs meaningfully — someone searching \"invite code\" is often trying to find or share their own referral link, while someone searching \"gift code\" is usually trying to redeem something they already received. Writing to that different intent, rather than merging both into one page, is what keeps each page relevant to what its visitors actually came to do.",
          "There's also a tone difference worth preserving between the two pages. The Invite Code page speaks to the sharer — encouraging, action-oriented, focused on making sharing effortless. The Gift Code page speaks to the redeemer — reassuring, precise, focused on making a single input succeed or fail clearly. Collapsing both into one page would muddy both voices.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Gift Code", href: "/gift-code/" },
          { label: "Rewards", href: "/rewards/" },
          { label: "VIP Club", href: "/vip-club/" },
          { label: "Register", href: "/register/" },
          { label: "Promotions", href: "/promotions/" },
        ],
      },
      faq: {
        items: [
          { q: "How do I get my invite code?", a: "This template assumes one is generated automatically upon registration and displayed prominently on this page with a one-click copy action." },
          { q: "How does referral tracking work?", a: "A link is recorded between the referring account and the new account when someone registers using a shared code, as explained in the tracking section above." },
          { q: "How is Invite Code different from Gift Code?", a: "Invite codes are user-generated for referrals; gift codes are platform-issued for promotional redemption. The two pages explain this distinction directly." },
          { q: "Can I share my invite code on social media?", a: "The page includes a pre-formatted shareable link designed for exactly that kind of sharing, alongside the raw code itself." },
          { q: "Is my referral activity visible to me?", a: "This template includes a basic referral activity summary pattern on the page, though specific detail depends on how a real implementation configures it." },
          { q: "Is this referral system live?", a: "No — this is a static content template demonstrating layout and copy, not a functioning referral or tracking system." },
          { q: "What information is shared when someone uses my code?", a: "This template flags that a real implementation should be explicit about this rather than prescribing a specific privacy policy itself." },
          { q: "Why does this page read differently from the Gift Code page?", a: "Invite Code speaks to the person sharing a code, while Gift Code speaks to the person redeeming one — two different tones for two different tasks." },
          { q: "Can I have more than one invite code?", a: "This template assumes a single persistent code per account for simplicity, though some real referral systems do support multiple or campaign-specific codes." },
        ],
      },
      cta: {
        title: "See the Full Reward Ecosystem",
        text: "Gift Code, Rewards and VIP Club all connect to this referral mechanic in different, complementary ways.",
        primary: { label: "View Rewards", href: "/rewards/" },
        secondary: { label: "View VIP Club", href: "/vip-club/" },
      },
    });
  },
};
