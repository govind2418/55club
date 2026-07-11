"use strict";
const { renderStandardPage } = require("../../components/pageBuilder");

module.exports = {
  slug: "/contact/",
  title: "Contact 55 Club — Get in Touch",
  metaDescription:
    "Contact 55 Club: reach the team by live chat, email or Telegram, with a structured form for account, billing and technical questions.",
  build() {
    return renderStandardPage({
      slug: "/contact/",
      breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
      hero: {
        eyebrow: "Get in Touch",
        h1: "Contact 55 Club",
        lead: "Send a message through the form below and it's routed straight to the right team — account, billing, technical or general — with a clear idea of when to expect a reply.",
        primary: { label: "Customer Support", href: "/customer-support/" },
        secondary: { label: "About", href: "/about/" },
      },
      intro: [
        "The contact form is the place to go for anything that needs a written record or doesn't need an instant answer — account questions, billing details, technical issues, or general feedback. It starts with a category selector, because routing your message to the right team the first time gets you a faster, more accurate answer than a single shared inbox.",
        "Beyond the category, the form only asks for what's needed to get back to you: a way to reach you, and the message itself. No unnecessary fields and no extra friction unless something's clearly missing.",
        "Once you submit, you'll see a confirmation with a reference number — worth keeping if you need to follow up, since referencing a specific submission gets you a faster answer than re-explaining the issue from scratch. Email responses typically land within a few hours.",
        "If you need an answer faster than that, Customer Support covers live chat and Telegram as well, both of which are quicker for anything urgent. This page is specifically about the written contact form; Customer Support is the full picture of every channel available.",
        "Whichever way you reach out, nothing here is a dead end — every response points you to the next step, whether that's a direct answer or a link to more detail on Customer Support.",
      ],
      features: {
        eyebrow: "Contact Page Features",
        title: "How Getting in Touch Works",
        text: "Four things that make the contact form worth using.",
        cols: 4,
        items: [
          { icon: "mail", title: "Category Routing", text: "Your message goes straight to the right team instead of a shared inbox." },
          { icon: "check", title: "Minimal Required Fields", text: "Only what's needed to respond, nothing collected for its own sake." },
          { icon: "clock", title: "Clear Confirmation", text: "A specific reference number and response-time estimate, not a vague \"we'll be in touch.\"" },
          { icon: "shield", title: "Specific Validation", text: "Field-level messages if something's missing, instead of one generic error." },
        ],
      },
      infoSections: [
        {
          eyebrow: "Form Structure",
          title: "What the Contact Form Collects",
          paragraphs: [
            "The form asks for four things: a category (account, billing, technical or general), a name or identifier, an email to respond to, and your message. That's the whole list — no phone number requirement, no account number unless the category you pick calls for it.",
            "Picking a category like \"account access\" can also surface a relevant link from Customer Support before you've even finished typing, in case your answer is already sitting there.",
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
          eyebrow: "After You Submit",
          title: "What Happens Next",
          reverse: true,
          paragraphs: [
            "Once you submit, you'll see a confirmation that restates your selected category, gives a response-time estimate, and links to relevant self-serve content in case the answer's already covered on Customer Support.",
            "That confirmation also includes a reference number, which is worth saving — if you need to follow up, quoting it gets your message matched to the original thread instantly instead of starting over.",
            "Live chat, covered on Customer Support, is the faster option if your question is urgent. The contact form here is best suited to anything that benefits from a written record or doesn't need an answer within minutes.",
          ],
          asideTitle: "Fastest Way to Reach Us",
          asideText: "For anything urgent, live chat on Customer Support gets you a near-instant response. The form on this page is best for detailed or written-record requests.",
        },
      ],
      extraSection: {
        eyebrow: "Contact vs. Customer Support",
        title: "Two Pages, Two Jobs",
        paragraphs: [
          "Customer Support is the hub — it covers every channel, including live chat and Telegram, response-time expectations for each, and a categorized topic list you can scan before reaching out at all. Contact is the specific tool for sending a written message through the structured form on this page.",
          "The two pages link to each other generously. If you landed here wanting the full channel list, or landed on Customer Support wanting to jump straight to the form, either takes one click to get where you actually need to be.",
        ],
      },
      relatedLinks: {
        title: "Related Pages",
        links: [
          { label: "55 Club Customer Support", href: "/customer-support/" },
          { label: "55 Club About", href: "/about/" },
          { label: "55 Club Privacy Policy", href: "/privacy-policy/" },
          { label: "55 Club Responsible Gaming", href: "/responsible-gaming/" },
          { label: "55 Club Login", href: "/login/" },
        ],
      },
      faq: {
        items: [
          { q: "Does 55club contact go to the same team as 55 Club contact?", a: "Yes — 55club, 55 Club and 55Club all reach the same support team through the form on this page, regardless of how you searched for it." },
          { q: "What fields does the contact form require?", a: "Four: a category selector, a name or identifier, an email for response, and the message itself — no unnecessary fields." },
          { q: "What happens after I submit the form?", a: "You'll get a confirmation with a reference number, a response-time estimate, and links to relevant self-serve content on Customer Support." },
          { q: "How is Contact different from Customer Support?", a: "Contact is the written form itself; Customer Support is the full hub covering live chat, email, Telegram, response times and a self-serve topic list." },
          { q: "How long until I get a response?", a: "Email-style contact form submissions typically get a response within a few hours. For anything urgent, live chat on Customer Support is faster." },
          { q: "Why does the form include a category selector?", a: "Routing your message to the right team the first time gets you a faster, more accurate answer than a single shared inbox." },
          { q: "Is there a way to get help without submitting the form?", a: "Yes — Customer Support's self-serve topic list resolves many common questions without needing to wait for a reply." },
          { q: "Should I keep my reference number?", a: "Yes — quoting it in any follow-up gets your message matched to the original thread instantly." },
          { q: "What if I land on the wrong page for what I need?", a: "Contact and Customer Support link to each other, so getting to the right one takes a single click." },
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
