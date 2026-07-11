"use strict";
const { renderHomeHero } = require("../../components/hero");
const { renderFeatureGrid, renderStats, renderGameGrid, renderSteps, renderArticleGrid } = require("../../components/cards");
const { renderFaq, faqSchema } = require("../../components/faq");
const { renderCta } = require("../../components/cta");
const { renderNewsletter } = require("../../components/newsletter");

const faqItems = [
  {
    q: "What is 55 Club?",
    a: "55 Club is a premium gaming entertainment template — a dark-luxury interface layout built around fast navigation, clear game categories and a reward-driven layout pattern that modern gaming brands use. It demonstrates page structure, component design and content architecture rather than operating as a live platform.",
  },
  {
    q: "How do I create an account?",
    a: "The Register page walks through the sign-up layout: enter a username, set a password, verify your details and land on a welcome screen. The flow is designed to take under a minute, with clear steps and no confusing fields.",
  },
  {
    q: "Is the platform mobile-friendly?",
    a: "Yes. Every layout in this template is built mobile-first with an 8px spacing grid, so it scales cleanly from small phones to widescreen desktops without separate breakpoints breaking the design.",
  },
  {
    q: "What game categories are covered?",
    a: "The template covers ten category patterns commonly used in gaming apps: Lottery, Win Go, Slots, Casino, Mini Games, Fishing, Sports, Aviator, Card Games and Crash Games. Each has its own dedicated page layout with unique content and structure.",
  },
  {
    q: "How does the rewards and VIP structure work?",
    a: "The Daily Rewards and VIP Club pages outline a tiered structure: entry-level daily check-ins, milestone-based unlocks, and a VIP ladder with escalating perks. It's a common pattern in loyalty-driven products, shown here purely as an interface and content example.",
  },
  {
    q: "Can I use this template for a real product?",
    a: "The component system, design tokens and SEO structure are reusable for any gaming, rewards or subscription-style brand. If you're building something in the regulated real-money gaming space, make sure the underlying business holds verifiable licensing before any live launch.",
  },
  {
    q: "Why does the design avoid heavy animation and effects?",
    a: "Core Web Vitals and readability both suffer when a page leans on constant motion. This template limits animation to small, purposeful touches — a hover lift on cards, a slow coin float in the hero — so nothing distracts from the information itself or drags down Interaction to Next Paint scores.",
  },
  {
    q: "How is the content structured for SEO across all 24 pages?",
    a: "Every page follows the same skeleton: a unique H1 and meta title, a short direct introduction, a feature or informational section, a related-links block pointing to five relevant pages, an FAQ block with matching schema, and a closing call to action. That consistency helps search engines understand the site's topical structure quickly.",
  },
];

const popularGames = [
  { name: "Lottery", tag: "Popular", icon: "ticket", href: "/lottery/", desc: "Numbered draws with clean result tracking." },
  { name: "Win Go", tag: "Trending", icon: "ball", href: "/win-go/", desc: "Fast-paced colour and number prediction rounds." },
  { name: "Aviator", tag: "Hot", icon: "plane", href: "/aviator/", desc: "Rising-curve crash-style entertainment." },
  { name: "Slots", tag: "New", icon: "dice", href: "/slots/", desc: "Reel-based games with themed visuals." },
  { name: "Casino", tag: "Classic", icon: "cards", href: "/casino/", desc: "Table-style classics in a modern shell." },
  { name: "Colour Prediction", tag: "Popular", icon: "spark", href: "/colour-prediction/", desc: "Simple pick-and-track prediction rounds." },
  { name: "Fishing", tag: "Arcade", icon: "fish", href: "/casino/", desc: "Arcade-style target and reward mechanics." },
  { name: "Card Games", tag: "Classic", icon: "cards", href: "/casino/", desc: "Traditional card formats, reimagined." },
];

const featureItems = [
  { icon: "bolt", title: "Fast Access", text: "Pages load instantly thanks to a zero-framework static build with no render-blocking scripts." },
  { icon: "shield", title: "Secure by Design", text: "Security-first UI patterns — clear session states, verification flows and privacy-respecting forms." },
  { icon: "gift", title: "Daily Rewards", text: "A structured daily check-in and milestone system keeps the rewards page focused and easy to scan." },
  { icon: "device", title: "Responsive Everywhere", text: "One codebase, every screen size — from a compact phone to an ultrawide monitor." },
  { icon: "headset", title: "Support-Ready Layout", text: "A dedicated support page pattern for FAQs, contact channels and response-time expectations." },
  { icon: "crown", title: "VIP Structure", text: "A tiered VIP page layout that scales from entry perks to top-tier recognition." },
];

const steps = [
  { title: "Create an Account", text: "Follow the Register page layout to see a clean, minimal-field sign-up pattern." },
  { title: "Explore Categories", text: "Browse ten game category templates, each with its own content structure and visuals." },
  { title: "Check Daily Rewards", text: "See how a check-in and milestone system is laid out for daily engagement." },
  { title: "Review VIP Tiers", text: "Walk through a tiered loyalty ladder from entry level to top-tier status." },
];

const stats = [
  { value: "24", label: "Page Templates" },
  { value: "10", label: "Game Categories" },
  { value: "100%", label: "Original Content" },
  { value: "<1.8s", label: "Target LCP" },
];

const articles = [
  { tag: "Guide", date: "Overview", title: "Getting Started with 55 Club", excerpt: "A walkthrough of the account, login and navigation patterns used across the template.", href: "/about/" },
  { tag: "Guide", date: "Access", title: "How to Access Your Account", excerpt: "Comparing the Login, Register and Official Website page layouts side by side.", href: "/official-website/" },
  { tag: "Games", date: "Deep Dive", title: "Understanding Win Go Layouts", excerpt: "How a colour-and-number prediction page is structured for clarity and speed.", href: "/win-go/" },
  { tag: "Games", date: "Deep Dive", title: "Lottery Page Anatomy", excerpt: "Breaking down the Lottery template's information hierarchy and FAQ block.", href: "/lottery/" },
  { tag: "Rewards", date: "Loyalty", title: "VIP Tier Structures Explained", excerpt: "A look at how the VIP Club page communicates tier progression visually.", href: "/vip-club/" },
  { tag: "Trust", date: "Policy", title: "Why Responsible Gaming Pages Matter", excerpt: "How the Responsible Gaming template balances tone, clarity and required disclosures.", href: "/responsible-gaming/" },
];

module.exports = {
  slug: "/",
  title: "55 Club — Premium Gaming Platform Template | Fast, Secure, Rewarding",
  metaDescription:
    "55 Club is a premium dark-luxury gaming platform template with fast access, clean navigation, daily rewards and a full VIP structure across 24 page layouts.",
  build() {
    const bodyHtml = `
${renderHomeHero()}

<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    <p class="text-secondary" style="font-size:var(--fs-400);">
      55 Club is built around one idea: a gaming platform's interface should feel as premium as the
      experience it represents. Instead of the cluttered, ad-heavy layouts common across the affiliate
      web, this template uses a dark-luxury palette, soft red neon accents and generous spacing to keep
      every page calm, legible and fast. Whether someone lands on the homepage looking for an overview,
      or arrives directly on a category page like Win Go or Aviator through search, the structure stays
      consistent — a clear heading, a short answer up top, supporting detail below, and an obvious next
      step. That consistency is what search engines and real visitors both respond to: pages that answer
      the question they were clicked for, quickly.
    </p>
    <p class="text-secondary" style="font-size:var(--fs-400);margin-top:var(--sp-3);">
      Every section on this page links through to a fully built interior page — not a placeholder anchor.
      The Popular Games grid below leads to dedicated Lottery, Win Go, Aviator, Slots, Casino and Colour
      Prediction templates, each with its own introduction, feature breakdown and FAQ. The Rewards and VIP
      sections connect to a matching pair of loyalty pages. And the account-related buttons in the hero —
      Register, Login and Download App — point to templates that walk through those specific flows step by
      step, so nothing on this site is a dead end.
    </p>
  </div>
</section>

${renderStats(stats)}

${renderGameGrid(popularGames, {
  eyebrow: "Popular Games",
  title: "Explore Popular Game Categories",
  text: "Eight of the most-requested category layouts, each linking through to a fully built template page with its own heading, FAQ and related links.",
  href: "/casino/",
})}

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Game Categories</p>
      <h2>Ten Categories, One Consistent System</h2>
      <p class="text-secondary">
        Rather than treating each category as a one-off page, every template below shares the same content
        skeleton — an introduction, a feature breakdown, a short how-it-works block and a FAQ — so visitors
        always know where to find the information they need, and search engines can crawl the pattern
        predictably across the whole site.
      </p>
    </div>
    <div class="grid grid-2">
      <div class="feature-card">
        <h3>Lottery</h3>
        <p class="text-secondary">Numbered draw formats presented with a simple results table and a clear explanation of how each round is structured.</p>
      </div>
      <div class="feature-card">
        <h3>Win Go</h3>
        <p class="text-secondary">A colour-and-number prediction layout, broken into round timing, result history and a plain-language rules panel.</p>
      </div>
      <div class="feature-card">
        <h3>Slots</h3>
        <p class="text-secondary">Reel-based game cards grouped by theme, with a short feature comparison block for paylines and bonus rounds.</p>
      </div>
      <div class="feature-card">
        <h3>Casino</h3>
        <p class="text-secondary">A hub-style page for table classics — organized by category with a consistent card layout throughout.</p>
      </div>
      <div class="feature-card">
        <h3>Mini Games</h3>
        <p class="text-secondary">Short-session arcade formats, presented as quick-play cards with lightweight rule summaries.</p>
      </div>
      <div class="feature-card">
        <h3>Fishing</h3>
        <p class="text-secondary">Target-and-reward arcade mechanics, described through a simple objective-and-scoring breakdown.</p>
      </div>
      <div class="feature-card">
        <h3>Sports</h3>
        <p class="text-secondary">A sports-entertainment category pattern with event-style cards and a schedule-oriented layout.</p>
      </div>
      <div class="feature-card">
        <h3>Aviator</h3>
        <p class="text-secondary">A rising-curve crash-style format, explained through a timeline graphic and a concise rules FAQ.</p>
      </div>
      <div class="feature-card">
        <h3>Card Games</h3>
        <p class="text-secondary">Traditional card formats reimagined with modern card-style thumbnails and a rules-at-a-glance panel.</p>
      </div>
      <div class="feature-card">
        <h3>Crash Games</h3>
        <p class="text-secondary">Multiplier-curve formats presented with a clean chart visual and a short risk-and-reward explainer.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;">
      <div>
        <p class="eyebrow">Security &amp; Trust</p>
        <h2>Interface Patterns Built Around Clarity</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          Trust on a gaming-style platform is communicated as much through interface choices as through
          any single security claim. This template favors visible session states over hidden ones, plain
          confirmation screens instead of ambiguous toasts, and a Security page pattern that explains
          account protection in plain language rather than vague marketing copy. Forms only ask for what's
          needed, error states are specific rather than generic, and every account-related page — Login,
          Register, Customer Support — links back to the same policy pages so nothing feels orphaned.
        </p>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The Responsible Gaming and Privacy Policy templates are written in full, not stubbed out, because
          a trust page that reads like an afterthought undermines everything else on the site. If you adapt
          this template for a live product, treat those two pages as seriously as the homepage.
        </p>
      </div>
      <div>
        <p class="eyebrow">Every Device</p>
        <h2>One Layout System, No Breakpoints Breaking Down</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The entire component library is built on an 8px spacing grid with fluid type scales, so cards,
          buttons and navigation reflow predictably from a 360px phone up to a 1440px desktop without a
          patchwork of one-off media queries. The sticky mobile action bar replaces the floating download
          button below 720px, the header collapses into a full-screen mobile menu, and grids step down from
          four columns to two to one as the viewport narrows — all handled by a small, shared set of CSS
          rules rather than page-specific overrides.
        </p>
      </div>
    </div>
  </div>
</section>

${renderSteps(steps, {
  eyebrow: "How 55 Club Works",
  title: "From Sign-Up to Rewards in Four Steps",
  text: "The onboarding path is intentionally short. Here's the layout pattern each step follows across the Login, Register and Rewards pages.",
})}

${renderFeatureGrid(featureItems, {
  eyebrow: "Why Choose 55 Club",
  title: "Designed Around Speed, Clarity and Trust",
  text: "Every component in this system was built to load fast and read clearly — no heavy shadows, no autoplay video, no dark patterns.",
  center: true,
})}

<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;">
      <div>
        <p class="eyebrow">Daily Rewards</p>
        <h2>A Rewards Page That Respects Your Time</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The Daily Rewards template lays out a simple check-in structure: a visible streak counter, a
          short list of milestone unlocks, and a plain-language explanation of how each tier is reached.
          The goal is legibility over gimmicks — no spinning wheels or countdown pressure tactics, just a
          clear table of what's available and when. Pair this with the Gift Code and Invite Code page
          patterns, and you have a complete loyalty-content section that's easy to update as the reward
          structure changes, without touching the surrounding layout.
        </p>
        <a href="/rewards/" class="btn btn-outline" style="margin-top:var(--sp-3);">See the Rewards Page</a>
      </div>
      <div>
        <p class="eyebrow">VIP Benefits</p>
        <h2>A VIP Ladder Built for Long-Term Engagement</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The VIP Club template demonstrates a tiered structure — from an entry tier with light perks up
          to a top tier with priority support and exclusive access framing. Each tier card follows the
          same anatomy: a name, a short description, and three to five concrete benefits, so the page
          scans well even for visitors comparing tiers quickly on a phone.
        </p>
        <a href="/vip-club/" class="btn btn-outline" style="margin-top:var(--sp-3);">See the VIP Page</a>
      </div>
    </div>
  </div>
</section>

${renderGameGrid(
  [
    { name: "Aviator", tag: "Featured", icon: "plane", href: "/aviator/", desc: "A rising-curve layout with a clear rules explainer and FAQ." },
    { name: "Win Go", tag: "Featured", icon: "ball", href: "/win-go/", desc: "Colour-and-number round structure with a step-by-step guide." },
    { name: "Casino", tag: "Featured", icon: "cards", href: "/casino/", desc: "Table-game category page with a categorized game list." },
    { name: "Slots", tag: "Featured", icon: "dice", href: "/slots/", desc: "Themed reel-game layout with a feature comparison block." },
  ],
  { eyebrow: "Featured Games", title: "A Closer Look at Four Category Pages", cols: 4 }
)}

${renderArticleGrid(articles)}

<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    <p class="eyebrow">Under the Hood</p>
    <h2>Built for Search, Not Just Screenshots</h2>
    <p class="text-secondary" style="margin-top:var(--sp-2);">
      A premium interface only matters if it's actually reachable. Every page in this template ships as
      pre-rendered static HTML with no client-side routing, so there's nothing for a crawler to wait on.
      Each page carries its own canonical tag, Open Graph and Twitter card metadata, and JSON-LD structured
      data — Organization and WebSite schema site-wide, plus FAQPage and BreadcrumbList schema on every
      interior page where they apply. Images are inline SVG rather than large raster files, which removes
      an entire category of layout-shift and lazy-loading complexity while keeping every visual asset sharp
      at any pixel density. The result is a site built to score well on Core Web Vitals without workarounds
      — because there's very little to work around in the first place.
    </p>
  </div>
</section>

${renderNewsletter()}

${renderFaq(faqItems)}

${renderCta({
  title: "See the Full Page System",
  text: "24 unique templates, one consistent component library, and a content structure built for real search visibility.",
  primary: { label: "Explore Games", href: "/casino/" },
  secondary: { label: "About 55 Club", href: "/about/" },
})}
`;

    return {
      bodyHtml,
      schemas: [faqSchema(faqItems)],
    };
  },
};
