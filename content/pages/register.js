"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/register/",
  title: "55 Club Register — Create Your Account",
  metaDescription:
    "Create a 55 Club account in under a minute: choose a username, set a password, confirm your details and land straight on your welcome rewards.",
  build() {
    return renderStandardPage({
      slug: "/register/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Register" }],
      hero: {
        eyebrow: "Create an Account",
        h1: "55 Club Register",
        lead: "Choose a username, set a password, confirm your details — under a minute from start to your welcome rewards screen.",
        primary: { label: "Already Have an Account? Login", href: "/login/" },
        secondary: { label: "Download App", href: "/download/" },
      },
      intro: [
        "Signing up asks for the minimum needed to get your account running: a username, a password, and a contact method to confirm it's really you. Everything else — profile details, preferences — can wait until after your account exists.",
        "As you type, you'll see inline feedback right away — whether your username is available, and how strong your password is — so any issues get caught before you hit submit, not after.",
        "Once you're done, you'll land on a welcome screen rather than being dropped straight into an empty dashboard. That's where you'll see your first rewards and a quick look at the Rewards and VIP Club programs, right when you're most curious about what comes next.",
        "Have an invite code from a friend? There's an optional field for it during sign-up — enter it and you'll both get a referral reward once your account is active.",
      ],
      features: {
        eyebrow: "Registration Page Features",
        title: "Signing Up, Start to Finish",
        text: "Four things that keep registration quick without cutting corners.",
        cols: 4,
        items: [
          { icon: "check", title: "Inline Validation", text: "Know instantly if your username is available or a field needs fixing." },
          { icon: "lock", title: "Password Strength Cue", text: "A simple visual indicator so you know your password is solid." },
          { icon: "gift", title: "Welcome Rewards", text: "Land on a welcome screen with your first rewards, not an empty dashboard." },
          { icon: "device", title: "One Field at a Time", text: "A clean, single-column form that's easy to fill out on any screen." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Verification",
          title: "Confirming It's Really You",
          paragraphs: [
            "After you set your username and password, you'll confirm your account through your email or phone contact method. It's a quick step shown right inline rather than a separate page, so you're not bounced around during sign-up.",
            "Once verified, your account is fully active — you can deposit, play across all ten game categories, and start earning toward your VIP tier immediately.",
          ],
          sideList: {
            title: "What Sign-Up Collects",
            items: [
              "Username (checked for availability instantly)",
              "Password (with strength indicator)",
              "Contact method for verification",
              "Agreement to Terms and Privacy Policy",
              "Optional invite code field",
            ],
          },
        },
        {
          eyebrow: "Invite Codes",
          title: "Signing Up With a Friend's Code",
          reverse: true,
          paragraphs: [
            "If someone sent you an invite code, there's an optional field for it near the end of the sign-up form — clearly marked optional, and it never blocks your registration if you leave it blank.",
            "For the full picture on how invite codes work, how to get your own, and what the referral reward looks like, see the Invite Code page.",
          ],
          asideTitle: "Invite Code vs. Gift Code",
          asideText: "Invite Code rewards you for bringing a friend to 55 Club. Gift Code redeems a specific promotional code for bonus balance. Check both pages if you're not sure which applies.",
        },
      ],
      extraSection: {
        eyebrow: "Sign-Up Tips",
        title: "Getting Through Registration Quickly",
        paragraphs: [
          "The username field comes first because availability is the thing most likely to need a second try — better to resolve that up front than discover it after filling out the rest of the form. Password comes next, with your contact method for verification last.",
          "If a field needs correction, you'll see the message right next to that specific field rather than a single vague error banner at the top of the page, so it's obvious exactly what to fix.",
          "Once you're verified, take a look at Rewards and VIP Club — both are live from the moment your account is active, and consistent play from day one adds up toward your VIP tier faster than you might expect.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club Login", href: "/login/" },
          { label: "55 Club Invite Code", href: "/invite-code/" },
          { label: "55 Club Gift Code", href: "/gift-code/" },
          { label: "55 Club Rewards", href: "/rewards/" },
          { label: "55 Club VIP Club", href: "/vip-club/" },
        ],
      },
      faq: {
        items: [
          { q: "Is 55club register the same as 55 Club register?", a: "Yes — however you type it (55club, 55 Club or 55Club), this is the same sign-up form for the same account." },
          { q: "What information do I need to register?", a: "A username, a password and a contact method for verification. An invite code field is available but optional." },
          { q: "Is there an age requirement to register?", a: "Yes — you'll need to confirm you meet the applicable age requirement as part of agreeing to the Terms of Service during sign-up." },
          { q: "Can I register without an invite code?", a: "Yes. The invite code field is optional and never blocks account creation if left blank." },
          { q: "What happens after I submit the form?", a: "You'll land on a welcome screen with a verification prompt and a look at your first rewards, plus links to Rewards and VIP Club." },
          { q: "How is this different from the Login page?", a: "Login is for existing accounts and optimized for speed. Register walks new users through account creation with more guidance along the way." },
          { q: "Why does the username field come before the password field?", a: "Username availability is the most likely thing to need a second try, so checking it first avoids filling out the whole form only to be told the name is taken at the end." },
          { q: "Can I change my username after registering?", a: "Yes — that's handled from your account settings once you're signed in, keeping the sign-up flow itself focused on getting your account created." },
          { q: "What if verification fails?", a: "The welcome screen includes a retry option and a link to Customer Support, so a failed verification attempt doesn't leave you stuck." },
        ],
      },
      cta: {
        title: "See the Full Account Journey",
        text: "From Register through Login to Rewards — see how your account grows from day one.",
        primary: { label: "View Rewards Page", href: "/rewards/" },
        secondary: { label: "Go to Login", href: "/login/" },
      },
    });
  },
};
