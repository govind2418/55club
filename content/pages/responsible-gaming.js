"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/responsible-gaming/",
  title: "55 Club Responsible Gaming & Disclaimer",
  metaDescription:
    "55 Club's Responsible Gaming page: plain-language guidance on healthy play habits, warning signs, self-exclusion tools and where to find real help.",
  build() {
    return renderStandardPage({
      slug: "/responsible-gaming/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Responsible Gaming" }],
      hero: {
        eyebrow: "Play Responsibly",
        h1: "Responsible Gaming & Disclaimer",
        lead: "Genuine guidance on healthy play habits, warning signs worth taking seriously, and where to find real support if gaming stops feeling like entertainment.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "About", href: "/about/" },
      },
      intro: [
        "Gaming and gambling-style entertainment should stay entertainment. If it stops feeling like a choice and starts feeling like something harder to control, that's worth taking seriously and acting on, not minimizing.",
        "The sections below cover what healthy play generally looks like, warning signs that are worth paying attention to, tools like deposit limits and self-exclusion that platforms typically offer, and where to look for actual professional support.",
        "Important disclaimer: this site is a design and content showcase built to demonstrate a gaming-platform layout — it does not operate as a live gaming platform and does not process real registrations, deposits or withdrawals. If you are engaging with any real-money gaming platform, verify it holds legitimate licensing for your jurisdiction, and hold it to the standard of transparency this page describes.",
        "Age restrictions apply to all real-money gaming without exception. This content is not directed at, and should not be accessed by, anyone under the legal age for gaming activity in their jurisdiction.",
      ],
      features: {
        eyebrow: "What This Page Covers",
        title: "Four Areas of Genuine Guidance",
        text: "Not legal boilerplate — actual information worth reading.",
        cols: 4,
        items: [
          { icon: "check", title: "Healthy Play Habits", text: "What balanced, entertainment-focused play generally looks like." },
          { icon: "shield", title: "Warning Signs", text: "Behavior patterns worth noticing in yourself or someone you know." },
          { icon: "lock", title: "Limit-Setting Tools", text: "Deposit limits and self-exclusion patterns real platforms typically offer." },
          { icon: "headset", title: "Where to Find Help", text: "Pointers toward real, professional support resources." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Healthy Play Habits",
          title: "What Balanced Play Generally Looks Like",
          paragraphs: [
            "Healthy engagement with gaming-style entertainment generally shares a few traits: it's planned rather than impulsive, it uses money that was already budgeted for entertainment rather than money needed elsewhere, it doesn't interfere with sleep, work or relationships, and it stops being appealing to chase losses rather than to enjoy the activity itself.",
            "None of that requires abstaining entirely — for most people, entertainment-focused play stays exactly that. The guidance here is about noticing when the pattern shifts, not treating all play as inherently risky.",
          ],
          sideList: {
            title: "Signs Play Is Staying Healthy",
            items: [
              "Time and spending are decided in advance",
              "Losses are accepted as the cost of entertainment",
              "Play doesn't interfere with sleep or responsibilities",
              "Stopping after a loss feels easy, not forced",
            ],
          },
        },
        {
          eyebrow: "Warning Signs",
          title: "Patterns Worth Taking Seriously",
          reverse: true,
          paragraphs: [
            "Some patterns are worth paying close attention to: spending more time or money than intended on a regular basis, chasing losses with the belief that the next round will fix things, hiding play from people close to you, or feeling irritable or anxious when not playing. Any one of these on its own isn't necessarily a crisis, but a cluster of them, especially if it's getting worse over time, is a real signal.",
            "If any of that sounds familiar — about your own play or someone else's — the most useful next step is usually talking to a real, qualified support resource, not trying to white-knuckle through it alone or waiting for it to resolve on its own.",
          ],
          asideTitle: "This Is Not a Diagnostic Tool",
          asideText: "This page offers general awareness, not a clinical assessment. If you're concerned about your own or someone else's gaming habits, a licensed professional or dedicated problem-gambling support service is the right next step.",
        },
      ],
      extraSection: {
        eyebrow: "Tools & Where to Get Help",
        title: "Limit-Setting and Real Support Resources",
        paragraphs: [
          "Most licensed real-money gaming platforms offer account-level tools worth knowing about: deposit limits that cap spending over a set period, session time reminders, cooling-off periods that temporarily restrict access, and full self-exclusion for longer-term breaks. Look for these tools in account settings — a legitimate operator makes them easy to find, not buried.",
          "For actual support beyond what any single platform offers, national and regional problem-gambling helplines and support organizations exist in most countries and are typically free, confidential, and independent of any gaming company. A quick search for your country's official problem-gambling support service — for example, national helplines or gambling-specific charities operating where you live — is the most reliable way to find a real, verified contact rather than trusting a number on any single website, including this one.",
          "If gaming is affecting your finances, relationships or wellbeing, reaching out to one of those independent resources is a stronger first step than trying to manage it through willpower alone.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Customer Support", href: "/customer-support/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "About", href: "/about/" },
          { label: "Contact", href: "/contact/" },
          { label: "VIP Club", href: "/vip-club/" },
        ],
      },
      faq: {
        items: [
          { q: "Is this page just legal boilerplate?", a: "No — this is written as genuine guidance, covering healthy play habits, real warning signs, limit-setting tools and where to find actual professional support." },
          { q: "What are signs that play might not be staying healthy?", a: "Spending more time or money than intended regularly, chasing losses, hiding play from others, or feeling anxious when not playing — a cluster of these is worth taking seriously." },
          { q: "What tools do real platforms typically offer for limit-setting?", a: "Deposit limits, session reminders, cooling-off periods and full self-exclusion — legitimate operators make these easy to find in account settings." },
          { q: "Where can I find real help if I'm concerned about my play?", a: "Search for your country's official, independent problem-gambling support service or national helpline rather than relying on a number from any single gaming website." },
          { q: "Is 55 Club a live real-money gaming platform?", a: "No — this site is a design and content showcase and does not process real registrations, deposits or withdrawals." },
          { q: "Is there an age requirement for this content?", a: "Yes — real-money gaming activity requires meeting the legal age in your jurisdiction without exception, and this content is not directed at anyone under that age." },
          { q: "Does self-exclusion mean permanently closing an account?", a: "Not necessarily — real platforms typically offer both temporary cooling-off periods and longer-term self-exclusion, giving people options depending on their situation." },
        ],
      },
      cta: {
        title: "This Page Matters More Than Most",
        text: "If anything here felt relevant to you or someone you know, reaching out to a real support resource is worth doing today, not eventually.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "About 55 Club", href: "/about/" },
      },
    });
  },
};
