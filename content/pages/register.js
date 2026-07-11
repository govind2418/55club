"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/register/",
  title: "55 Club Register — Create an Account Page Template",
  metaDescription:
    "A walkthrough of the 55 Club registration page template: a short sign-up flow, clear verification steps and a welcome-state pattern.",
  build() {
    return renderStandardPage({
      slug: "/register/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Register" }],
      hero: {
        eyebrow: "Create an Account",
        h1: "55 Club Register",
        lead: "A short, guided sign-up layout — username, password, verification — built to feel like three quick steps instead of one long form.",
        primary: { label: "Already Have an Account? Login", href: "/login/" },
        secondary: { label: "Download App", href: "/download/" },
      },
      intro: [
        "Registration pages lose people at every extra field, which is why this template treats sign-up as a short sequence rather than a single dense form. The first screen asks for the minimum needed to create an account; anything optional — profile details, preferences — is deferred to after the account exists, when the user has already committed and is far less likely to abandon the process.",
        "The layout also separates validation from submission. Instead of waiting for a full-page reload to tell someone their username is taken, this pattern shows inline feedback the moment a field loses focus, so mistakes get caught before the final click rather than after. A visible password-strength indicator gives real-time guidance without lecturing the user with a wall of requirement text.",
        "Once the form is complete, the page transitions to a clear welcome state rather than dumping the new user straight into a dashboard with no orientation. That welcome moment is where a first link to the Rewards and VIP Club pages naturally belongs, since it's the point where someone is most curious about what comes next.",
      ],
      features: {
        eyebrow: "Registration Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns that keep sign-up short without cutting corners on clarity.",
        cols: 4,
        items: [
          { icon: "check", title: "Inline Validation", text: "Field-level feedback the moment a user moves on, not after a full submission." },
          { icon: "lock", title: "Password Strength Cue", text: "A simple visual indicator instead of a paragraph of rules." },
          { icon: "gift", title: "Welcome State", text: "A clear post-signup screen that orients new users toward next steps." },
          { icon: "device", title: "Single-Column Flow", text: "One field per row keeps the form scannable on any screen width." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Verification",
          title: "Where Account Verification Fits",
          paragraphs: [
            "A verification step (email or phone) sits between account creation and full access in this template's flow, shown as a lightweight confirmation card rather than a separate page. Keeping it inline reduces the number of full navigations a new user has to make.",
            "This template presents that step purely as an interface pattern. A production system would connect it to an actual verification service and enforce it server-side, not just in the UI.",
          ],
          sideList: {
            title: "What the Sign-Up Form Collects",
            items: [
              "Username (checked for availability inline)",
              "Password (with strength indicator)",
              "Contact method for verification",
              "Agreement to Terms and Privacy Policy",
              "Optional invite code field",
            ],
          },
        },
        {
          eyebrow: "Invite Codes",
          title: "How the Invite Code Field Is Handled",
          reverse: true,
          paragraphs: [
            "Many gaming platforms use invite codes as a referral mechanism, so this template includes an optional field for one during sign-up — clearly marked optional, positioned last, and never blocking submission if left empty.",
            "For the full pattern around how invite codes are generated, shared and tracked, see the dedicated Invite Code page, which covers that flow in more depth than a single form field reasonably can.",
          ],
          asideTitle: "Related Reward Pages",
          asideText: "Invite Code and Gift Code are treated as separate templates because they solve different problems — one is about referral growth, the other about promotional redemption. Keeping them apart keeps each page's content focused.",
        },
      ],
      extraSection: {
        eyebrow: "Form Design Notes",
        title: "Why Shorter Forms Convert Better",
        paragraphs: [
          "Every additional required field on a registration form is a small tax on completion, and that tax compounds fast on mobile where typing is slower and error correction is more annoying. This template's form asks for three required inputs and nothing else, deferring anything non-essential to a post-signup profile step that users reach once they're already invested in the account.",
          "The same logic shapes error handling: instead of a single \"form submission failed\" banner at the top of the page, each field owns its own error message positioned directly beneath it, so users don't have to hunt for what went wrong. That pattern alone accounts for a meaningful share of the drop-off difference between well- and poorly-designed sign-up flows.",
          "Field order matters too. This template asks for the username first, since that's the choice most likely to trigger an availability conflict, and resolving that early avoids the frustration of filling out an entire form only to be told at the very end that the desired name is taken. Password comes second, contact verification last — a sequence chosen to front-load the fields most likely to need correction.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Login", href: "/login/" },
          { label: "Invite Code", href: "/invite-code/" },
          { label: "Gift Code", href: "/gift-code/" },
          { label: "Rewards", href: "/rewards/" },
          { label: "VIP Club", href: "/vip-club/" },
        ],
      },
      faq: {
        items: [
          { q: "What information does the registration form require?", a: "A username, a password and a contact method for verification. An invite code field is present but optional." },
          { q: "Is there an age requirement to register?", a: "The template includes a Terms of Service and age-confirmation checkbox pattern, reflecting the age restrictions that apply to real-money gaming platforms in most jurisdictions." },
          { q: "Can I register without an invite code?", a: "Yes. The invite code field is optional and never blocks account creation if left blank." },
          { q: "What happens after I submit the form?", a: "The layout transitions to a welcome screen with a verification prompt and links toward Rewards and VIP Club, rather than dropping the user into an unexplained dashboard." },
          { q: "Does this page actually create accounts?", a: "No. This is a static template demonstrating layout and copy patterns; it does not process real registrations or store any user data." },
          { q: "How is this different from the Login page?", a: "Login assumes an existing account and optimizes for speed. Register assumes a new visitor and optimizes for clarity — more explanatory copy, more guidance, fewer assumptions about what the user already knows." },
          { q: "Why does the username field come before the password field?", a: "Username availability is the most likely field to trigger a conflict, so checking it first avoids the frustration of completing an entire form only to be told the name is taken at the very last step." },
          { q: "Can I change my username after registering?", a: "This template shows that as an account-settings action rather than something handled on the registration page itself, keeping the sign-up flow focused on getting the account created." },
          { q: "What if the verification step fails?", a: "The welcome-state pattern includes a visible retry option and a link to Customer Support, so a failed verification attempt doesn't leave a new user stuck without a next step." },
        ],
      },
      cta: {
        title: "See the Full Account Journey",
        text: "From Register through Login to Rewards — explore how the templates connect.",
        primary: { label: "View Rewards Page", href: "/rewards/" },
        secondary: { label: "Go to Login", href: "/login/" },
      },
    });
  },
};
