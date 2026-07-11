"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/contact/",
  title: "Contact 55 Club — Get in Touch Page Template",
  metaDescription:
    "The 55 Club Contact page template: a structured contact-form layout, category routing pattern and clear expectations for what happens after submission.",
  build() {
    return renderStandardPage({
      slug: "/contact/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
      hero: {
        eyebrow: "Get in Touch",
        h1: "Contact 55 Club",
        lead: "A structured contact-form template with category routing and a clear explanation of what happens after you hit submit — no black-box silence.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "About", href: "/about/" },
      },
      intro: [
        "A contact form is a small piece of interface with an outsized trust responsibility — it's often the last resort after someone couldn't find an answer elsewhere, which means the stakes for getting it right are higher than the simple field count suggests. This template's form starts with a category selector (account, billing, technical, general), because routing a message correctly the first time is faster for everyone than a generic inbox someone has to manually triage.",
        "Beyond the category field, the form asks for only what's needed to respond: a way to reach the sender back, and the message itself. No unnecessary fields, no CAPTCHA friction unless abuse patterns actually warrant it, and clear, specific validation messages if something's missing.",
        "What happens after submission matters as much as the form itself, so this template includes a confirmation state that sets concrete expectations — what was received, roughly when to expect a response, and where to look (Customer Support) for topics that might already be answered without waiting at all.",
        "This page is deliberately narrower in scope than Customer Support, which covers the full channel breakdown. Contact's job is just the form itself, done well, with Customer Support as the broader hub it sits inside.",
        "That narrow scope is also why this page's copy stays focused entirely on the form experience — no marketing detours, no unrelated promotional banners competing for space with what's meant to be a straightforward, low-stress interaction for someone who may already be a little frustrated by the time they arrive here.",
      ],
      features: {
        eyebrow: "Contact Page Features",
        title: "What This Template Demonstrates",
        text: "Four patterns for a contact form people actually trust.",
        cols: 4,
        items: [
          { icon: "mail", title: "Category Routing", text: "A selector that routes messages correctly instead of one shared inbox." },
          { icon: "check", title: "Minimal Required Fields", text: "Only what's needed to respond, nothing collected for its own sake." },
          { icon: "clock", title: "Clear Confirmation State", text: "A specific post-submit message, not a vague \"thanks, we'll be in touch.\"" },
          { icon: "shield", title: "Specific Validation", text: "Field-level error messages instead of one generic failure banner." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Form Structure",
          title: "What the Contact Form Collects",
          paragraphs: [
            "This template's form includes four fields: a category selector, a name or identifier, a way to respond (email), and the message itself. That's the complete set — no phone number requirement, no account number field unless the category specifically calls for it.",
            "The category selector doubles as a light self-serve nudge: selecting \"account access,\" for instance, could surface a link to relevant Customer Support content before the user even finishes typing their message.",
          ],
          sideList: {
            title: "Contact Form Fields",
            items: [
              "Category (account, billing, technical, general)",
              "Name or identifier",
              "Email for response",
              "Message",
            ],
          },
        },
        {
          eyebrow: "After Submission",
          title: "Setting Concrete Expectations",
          reverse: true,
          paragraphs: [
            "Rather than a generic \"thanks, we'll be in touch,\" this template's confirmation state restates the category selected, gives an illustrative response-time range matching what's described on Customer Support, and links back to relevant self-serve content in case the answer turns out to already exist.",
            "That specificity turns a moment of uncertainty (did this actually go through? when will I hear back?) into a moment of clarity, which is exactly what a contact form's confirmation screen should do.",
            "The confirmation state also includes a reference number pattern in this template — a small detail, but one that matters if a follow-up message is ever needed, since referencing a specific submission is far more useful for both sides than re-explaining the entire issue from scratch.",
          ],
          asideTitle: "A Note on This Template",
          asideText: "This form is a static layout and copy demonstration — it doesn't actually submit messages anywhere. A real implementation needs a working backend and spam protection appropriate to actual traffic patterns.",
        },
      ],
      extraSection: {
        eyebrow: "Contact vs. Customer Support",
        title: "Why These Are Two Separate Pages",
        paragraphs: [
          "Customer Support is the hub — it explains all available channels, response-time expectations, and a self-serve topic list. Contact is one specific tool within that hub — the structured form itself, given room to be explained and presented well without competing for attention with everything else Customer Support covers.",
          "Splitting these two also serves a practical SEO purpose: \"contact [brand]\" is a distinct, common search query in its own right, deserving of a page that answers it directly rather than requiring a visitor to find the form buried partway down a longer support page.",
          "The two pages also cross-link generously rather than assuming a visitor found the right one on the first try. Landing on Contact when you actually wanted the broader topic list, or landing on Customer Support when you just wanted to send a quick message, both resolve in one click rather than a dead end.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "Customer Support", href: "/customer-support/" },
          { label: "About", href: "/about/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "Responsible Gaming", href: "/responsible-gaming/" },
          { label: "Login", href: "/login/" },
        ],
      },
      faq: {
        items: [
          { q: "What fields does the contact form require?", a: "Four: a category selector, a name or identifier, an email for response, and the message itself — no unnecessary fields." },
          { q: "What happens after I submit the form?", a: "This template's confirmation state restates the category, gives an illustrative response-time range, and links to relevant self-serve content." },
          { q: "How is Contact different from Customer Support?", a: "Contact is the structured form itself; Customer Support is the broader hub covering all channels, response times and a self-serve topic list." },
          { q: "Does this form actually send messages?", a: "No — it's a static layout and copy template. A real implementation needs a working backend and its own spam protection." },
          { q: "Why does the form include a category selector?", a: "Routing messages correctly the first time is faster for everyone than sorting a single generic inbox by hand." },
          { q: "Is there a way to get help without submitting the form?", a: "Yes — the Customer Support page's self-serve topic list resolves many common questions without needing to wait for a reply at all." },
          { q: "How long until I get a response?", a: "This template shows an illustrative time range matching what's described on Customer Support, rather than a vague, unspecific promise." },
          { q: "What if I land on the wrong page for what I need?", a: "Contact and Customer Support cross-link generously, so getting to the right one from either page takes a single click rather than a dead end." },
        ],
      },
      cta: {
        title: "Check Customer Support First",
        text: "Your question might already be answered in the self-serve topic list.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "About 55 Club", href: "/about/" },
      },
    });
  },
};
