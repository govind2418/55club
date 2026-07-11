"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/login/",
  title: "55 Club Login — Access Your Account",
  metaDescription:
    "Log in to 55 Club with your username and password. Use \"remember me\" for faster access, or reset your password if you're locked out.",
  build() {
    return renderStandardPage({
      slug: "/login/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Login" }],
      hero: {
        eyebrow: "Account Access",
        h1: "55 Club Login",
        lead: "Enter your username and password to get straight to your balance, your VIP tier and every game category — no clutter between you and your account.",
        primary: { label: "Register Instead", href: "/register/" },
        secondary: { label: "Download App", href: "/download/" },
      },
      intro: [
        "The login page is the most-visited page on 55 Club, which is exactly why it stays this simple: a username field, a password field, and a button that's impossible to miss even on a small screen. Everything non-essential is kept out of the way so you can get in and start playing.",
        "Check \"remember me\" if you're on a personal device, and you won't need to re-enter your password each time you come back. The password field also includes a visibility toggle, so you can confirm what you've typed before submitting instead of guessing.",
        "If you've forgotten your password, the \"forgot password\" link sits directly under the form. It walks you through a reset via your registered email or, if you no longer have access to that, through Customer Support directly.",
        "If you landed here without an account yet, Register is one click away and takes under a minute. And if you're not sure you're on the right site at all, Official Website covers how to confirm that before you enter anything.",
      ],
      features: {
        eyebrow: "Login Page Features",
        title: "Signing In, Made Simple",
        text: "Four things that keep account access fast and clear.",
        cols: 4,
        items: [
          { icon: "lock", title: "Two-Field Sign-In", text: "Username and password only — nothing else competing for your attention." },
          { icon: "shield", title: "Remember Me", text: "Stay signed in on your own device without re-entering your password each visit." },
          { icon: "bolt", title: "Fast Load", text: "The form is interactive the instant the page loads — no waiting around." },
          { icon: "device", title: "Works on Any Screen", text: "The same clean layout on mobile and desktop alike." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Locked Out?",
          title: "Resetting Your Password",
          paragraphs: [
            "If you can't remember your password, use the reset link directly beneath the password field. You'll get a reset link sent to your registered email — follow it to set a new password and you're back in.",
            "If you no longer have access to that email or the reset link isn't working, Customer Support can verify your account and help you regain access through live chat, available 24/7.",
          ],
          sideList: {
            title: "If You're Locked Out",
            items: [
              "Click \"forgot password\" beneath the login form",
              "Check your registered email for the reset link",
              "Set a new password and log back in",
              "No email access? Contact Customer Support",
              "Live chat is available 24/7 for account recovery",
            ],
          },
        },
        {
          eyebrow: "Login vs. Official Website",
          title: "Two Pages, Two Jobs",
          reverse: true,
          paragraphs: [
            "This page assumes you already have an account and want the shortest path to your dashboard — that's why it's just two fields and one button.",
            "If you're not sure you're on the right site at all, Official Website is the page to check first — it explains how to confirm the correct domain before you enter any credentials here.",
          ],
          asideTitle: "New Here?",
          asideText: "If you don't have an account yet, Register takes under a minute — choose a username, set a password, and you're in.",
        },
      ],
      extraSection: {
        eyebrow: "Common Issues",
        title: "If Sign-In Isn't Working",
        paragraphs: [
          "Most login trouble comes down to a handful of common causes: a caps-lock typo on the password, an outdated saved password after a reset, or a session that quietly expired in the background. Double-check the password field for case sensitivity first — it's the most common culprit.",
          "If you're switching between devices and can't remember which username or email you registered with, Customer Support can look up your account details once you verify your identity.",
          "If your password is correct but the login still fails, it's worth trying the password reset flow directly rather than repeating the same attempt — it's often the fastest way back into your account.",
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
          { q: "What do I need to log in?", a: "Just your username and password. Check \"remember me\" on a personal device to stay signed in between visits." },
          { q: "What happens if I forget my password?", a: "Use the \"forgot password\" link beneath the form to get a reset link sent to your registered email." },
          { q: "What if I can't access my registered email?", a: "Contact Customer Support through 24/7 live chat — the team can help verify your identity and restore access." },
          { q: "Does \"remember me\" work on shared devices?", a: "It's meant for personal devices. Avoid using it on a shared or public computer, and log out manually when you're done." },
          { q: "How does this page handle mobile screens?", a: "The layout adapts to a full-width card on smaller screens, with quick access to Login and Register from the mobile menu." },
          { q: "Why does the login page link to the Official Website page?", a: "If you arrived here from a bookmark or search result without seeing the site's homepage, Official Website helps you confirm you're in the right place before entering credentials." },
        ],
      },
      cta: {
        title: "Not Registered Yet?",
        text: "Create your account in under a minute and start exploring the game categories.",
        primary: { label: "Go to Register", href: "/register/" },
        secondary: { label: "Official Website", href: "/official-website/" },
      },
    });
  },
};
