"use strict";
const { renderHomeHero } = require("../../components/hero");
const { renderFeatureGrid, renderStats, renderGameGrid, renderSteps, renderArticleGrid } = require("../../components/cards");
const { renderFaq, faqSchema } = require("../../components/faq");
const { renderCta } = require("../../components/cta");
const { renderNewsletter } = require("../../components/newsletter");

const faqItems = [
  {
    q: "What is 55 Club?",
    a: "55 Club is a gaming entertainment hub bringing together prediction games, Lottery, Aviator, Slots and Casino tables under one account, along with daily check-in rewards, gift codes and a tiered VIP program.",
  },
  {
    q: "How do I create an account?",
    a: "Tap Register, pick a username, set a password and confirm your details. The whole flow takes under a minute — no long forms, no unnecessary fields.",
  },
  {
    q: "Is 55 Club mobile-friendly?",
    a: "Yes. Every page is built mobile-first, so it works smoothly on any phone, tablet or desktop browser without a separate app being required — though a lightweight APK is also available on the Download page.",
  },
  {
    q: "What games are available?",
    a: "Ten categories: Lottery, Win Go, Colour Prediction, Slots, Casino, Mini Games, Fishing, Sports, Aviator, Card Games and Crash Games. Each has its own page with round rules, timing and a results history.",
  },
  {
    q: "How do rewards and VIP levels work?",
    a: "Daily Rewards gives you a check-in streak with milestone unlocks. The VIP Club layers on top of that with tiers that unlock as you play — higher tiers get faster support, better bonuses and higher withdrawal limits.",
  },
  {
    q: "Do I need to download anything to play?",
    a: "No — everything works directly in your mobile or desktop browser. The APK download is there for players who prefer a dedicated app icon and slightly faster load times on Android.",
  },
  {
    q: "Is my account and payment information safe?",
    a: "Account pages use clear session states, straightforward verification steps and privacy-respecting forms — see the Privacy Policy for how information is handled.",
  },
  {
    q: "Where do I go if I have a problem with my account?",
    a: "Customer Support is available around the clock through live chat and the Telegram community, with a dedicated page covering common questions and response times.",
  },
];

const popularGames = [
  { name: "Lottery", tag: "Popular", icon: "ticket", href: "/lottery/", desc: "Pick your numbers, catch the scheduled draw, check the result table." },
  { name: "Win Go", tag: "Trending", icon: "ball", href: "/win-go/", desc: "Predict the colour and number before the round locks." },
  { name: "Aviator", tag: "Hot", icon: "plane", href: "/aviator/", desc: "Cash out before the multiplier curve flies away." },
  { name: "Slots", tag: "New", icon: "dice", href: "/slots/", desc: "Themed reels with bonus rounds and free spins." },
  { name: "Casino", tag: "Classic", icon: "cards", href: "/casino/", desc: "Table classics — cards, wheels and live-style formats." },
  { name: "Colour Prediction", tag: "Popular", icon: "spark", href: "/colour-prediction/", desc: "The simplest round format — pick a colour, wait for the reveal." },
  { name: "Fishing", tag: "Arcade", icon: "fish", href: "/casino/", desc: "Target-based arcade rounds with scaling rewards." },
  { name: "Card Games", tag: "Classic", icon: "cards", href: "/casino/", desc: "Traditional card formats with a modern table." },
];

const featureItems = [
  { icon: "bolt", title: "Fast Access", text: "Pages load instantly, so you're placing a round or checking a result in seconds, not waiting on spinners." },
  { icon: "shield", title: "Secure by Design", text: "Clear session states, straightforward verification and privacy-respecting forms across every account page." },
  { icon: "gift", title: "Daily Rewards", text: "A visible check-in streak and milestone system — log in, claim, come back tomorrow." },
  { icon: "device", title: "Play on Any Device", text: "One account, every screen — phone, tablet or desktop, no separate versions to keep track of." },
  { icon: "headset", title: "Support-Ready", text: "Live chat and a Telegram community for account, payment and gameplay questions." },
  { icon: "crown", title: "VIP Structure", text: "A tiered ladder that scales from your first deposit up to top-tier perks and priority support." },
];

const steps = [
  { title: "Create an Account", text: "Register with a username and password — verified and ready in under a minute." },
  { title: "Explore the Games", text: "Browse ten categories, from quick prediction rounds to slots and table games." },
  { title: "Claim Daily Rewards", text: "Check in for streak bonuses, redeem gift codes and track your milestones." },
  { title: "Climb the VIP Ladder", text: "Move up through VIP tiers as you play, unlocking better perks at each level." },
];

const stats = [
  { value: "24/7", label: "Support Coverage" },
  { value: "10", label: "Game Categories" },
  { value: "10", label: "VIP Tiers" },
  { value: "<1.8s", label: "Average Page Load" },
];

const articles = [
  { tag: "Guide", date: "Overview", title: "Getting Started with 55 Club", excerpt: "A walkthrough of account setup, login and the games menu for first-time players.", href: "/about/" },
  { tag: "Guide", date: "Access", title: "How to Access Your Account", excerpt: "Login, Register and Official Website — the three ways back into your account.", href: "/official-website/" },
  { tag: "Games", date: "Deep Dive", title: "How Win Go Rounds Work", excerpt: "Colour, number and timing — a full breakdown of a Win Go round from open to result.", href: "/win-go/" },
  { tag: "Games", date: "Deep Dive", title: "Reading the Lottery Results Table", excerpt: "How draws are scheduled and how prize tiers are matched to your numbers.", href: "/lottery/" },
  { tag: "Rewards", date: "Loyalty", title: "How VIP Tiers Are Unlocked", excerpt: "What changes as you move up the VIP ladder, from entry perks to top-tier benefits.", href: "/vip-club/" },
  { tag: "Trust", date: "Policy", title: "Play Responsibly, Every Session", excerpt: "Healthy play habits, warning signs and where to find real support if you need it.", href: "/responsible-gaming/" },
];

module.exports = {
  slug: "/",
  title: "55 Club — Play Lottery, Win Go, Aviator, Slots & Casino Online",
  metaDescription:
    "55 Club brings Lottery, Win Go, Colour Prediction, Aviator, Slots and Casino together with daily rewards, gift codes and a 10-tier VIP program.",
  build() {
    const bodyHtml = `
${renderHomeHero()}

<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    <p class="text-secondary" style="font-size:var(--fs-400);">
      55 Club puts ten game categories, daily rewards and a full VIP program behind a single account. Whether
      you're here for a quick Win Go round between commitments, chasing a Lottery draw, watching the multiplier
      climb in Aviator, or spinning through themed Slots, everything sits behind the same fast, uncluttered
      interface — no ad-heavy pages, no confusing menus, just the game you came for and a clear way to get
      to it.
    </p>
    <p class="text-secondary" style="font-size:var(--fs-400);margin-top:var(--sp-3);">
      Every card on this page links to a fully built-out game page with its own round rules, timing and results
      history. The Popular Games grid below leads into Lottery, Win Go, Aviator, Slots, Casino and Colour
      Prediction. The Rewards and VIP sections connect to a matching pair of loyalty pages. And the account
      buttons in the hero — Register, Login and Download App — take you straight into those flows, step by
      step.
    </p>
  </div>
</section>

${renderStats(stats)}

${renderGameGrid(popularGames, {
  eyebrow: "Popular Games",
  title: "Explore Popular Game Categories",
  text: "Eight of the most-played categories on 55 Club, each with its own round rules, timing and results history.",
  href: "/casino/",
})}

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Game Categories</p>
      <h2>Ten Categories, One Account</h2>
      <p class="text-secondary">
        Every category below runs on the same account and the same wallet, so switching between a quick
        Colour Prediction round and a Slots session takes one tap — no separate sign-ups, no juggling
        balances across different apps.
      </p>
    </div>
    <div class="grid grid-2">
      <div class="feature-card">
        <h3>Lottery</h3>
        <p class="text-secondary">Numbered draws on a fixed schedule, with a live results table and clear prize tiers for each match level.</p>
      </div>
      <div class="feature-card">
        <h3>Win Go</h3>
        <p class="text-secondary">Predict a colour and a number before the round locks — fast cycles with a full results history.</p>
      </div>
      <div class="feature-card">
        <h3>Slots</h3>
        <p class="text-secondary">Themed reel games grouped by style, each with its own paylines, bonus rounds and free-spin features.</p>
      </div>
      <div class="feature-card">
        <h3>Casino</h3>
        <p class="text-secondary">A hub for table classics — cards, wheels and live-style formats, organized by category.</p>
      </div>
      <div class="feature-card">
        <h3>Mini Games</h3>
        <p class="text-secondary">Short, quick-play rounds for whenever you've only got a couple of minutes to spare.</p>
      </div>
      <div class="feature-card">
        <h3>Fishing</h3>
        <p class="text-secondary">Target-and-reward arcade rounds where accuracy and timing decide the payout.</p>
      </div>
      <div class="feature-card">
        <h3>Sports</h3>
        <p class="text-secondary">Event-style entertainment cards with a schedule view for what's coming up.</p>
      </div>
      <div class="feature-card">
        <h3>Aviator</h3>
        <p class="text-secondary">Watch the multiplier climb and cash out before the curve crashes — full round history included.</p>
      </div>
      <div class="feature-card">
        <h3>Card Games</h3>
        <p class="text-secondary">Traditional card formats with a modern table and a quick rules-at-a-glance panel.</p>
      </div>
      <div class="feature-card">
        <h3>Crash Games</h3>
        <p class="text-secondary">Multiplier-curve rounds with a clean live chart and a straightforward cash-out control.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;">
      <div>
        <p class="eyebrow">Security &amp; Trust</p>
        <h2>Built Around Clear, Honest Interfaces</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          Trust here is built through interface choices as much as any single claim: visible session states
          instead of hidden ones, plain confirmation screens instead of ambiguous toasts, and forms that only
          ask for what's actually needed. Error states are specific rather than generic, and every
          account-related page — Login, Register, Customer Support — links back to the same policy pages so
          nothing feels orphaned.
        </p>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The Responsible Gaming and Privacy Policy pages are written in full, not stubbed out. If something
          feels unclear on either page, Customer Support is one tap away.
        </p>
      </div>
      <div>
        <p class="eyebrow">Every Device</p>
        <h2>One Account, Every Screen</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          55 Club reflows cleanly from a compact phone up to a widescreen desktop — the sticky mobile action
          bar replaces the floating download button on smaller screens, the header collapses into a
          full-screen mobile menu, and game grids step down from four columns to two to one as the viewport
          narrows. Same account, same balance, same history, wherever you're playing from.
        </p>
      </div>
    </div>
  </div>
</section>

${renderSteps(steps, {
  eyebrow: "How 55 Club Works",
  title: "From Sign-Up to Rewards in Four Steps",
  text: "Getting started takes minutes, not forms. Here's the path from a new account to your first VIP milestone.",
})}

${renderFeatureGrid(featureItems, {
  eyebrow: "Why Players Choose 55 Club",
  title: "Built for Speed, Clarity and Trust",
  text: "No heavy load times, no confusing menus, no dark patterns — just the games and rewards you're here for.",
  center: true,
})}

<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;">
      <div>
        <p class="eyebrow">Daily Rewards</p>
        <h2>Rewards That Don't Waste Your Time</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          Daily Rewards runs on a simple check-in structure: a visible streak counter, a short list of
          milestone unlocks, and a plain table of what's available and when — no spinning wheels or
          countdown pressure. Pair it with Gift Codes and your Invite Code to build up bonus balance without
          extra deposits.
        </p>
        <a href="/rewards/" class="btn btn-outline" style="margin-top:var(--sp-3);">See the Rewards Page</a>
      </div>
      <div>
        <p class="eyebrow">VIP Benefits</p>
        <h2>A VIP Ladder Worth Climbing</h2>
        <p class="text-secondary" style="margin-top:var(--sp-2);">
          The VIP Club runs ten tiers, from an entry level with light perks up to a top tier with priority
          support and exclusive access. Each tier is straightforward — a name, what it takes to reach it, and
          three to five concrete benefits, so you always know what's next.
        </p>
        <a href="/vip-club/" class="btn btn-outline" style="margin-top:var(--sp-3);">See the VIP Page</a>
      </div>
    </div>
  </div>
</section>

${renderGameGrid(
  [
    { name: "Aviator", tag: "Featured", icon: "plane", href: "/aviator/", desc: "A rising-curve format with a clear rules explainer and FAQ." },
    { name: "Win Go", tag: "Featured", icon: "ball", href: "/win-go/", desc: "Colour-and-number rounds with a step-by-step guide." },
    { name: "Casino", tag: "Featured", icon: "cards", href: "/casino/", desc: "Table-game hub with a categorized game list." },
    { name: "Slots", tag: "Featured", icon: "dice", href: "/slots/", desc: "Themed reel games with a feature comparison block." },
  ],
  { eyebrow: "Featured Games", title: "A Closer Look at Four Categories", cols: 4 }
)}

${renderArticleGrid(articles)}

<section class="section" style="padding-top:0;">
  <div class="container" style="max-width:820px;">
    <p class="eyebrow">Under the Hood</p>
    <h2>Built for Speed, Not Just Looks</h2>
    <p class="text-secondary" style="margin-top:var(--sp-2);">
      Every page on 55 Club ships as pre-rendered static HTML with no client-side routing, so there's nothing
      for a page to wait on before it's usable. Images are inline SVG rather than large raster files, which
      keeps every visual sharp at any pixel density while avoiding layout shift entirely. The result is a
      site that stays fast whether you're on a flagship phone or a budget connection.
    </p>
  </div>
</section>

${renderNewsletter()}

${renderFaq(faqItems)}

${renderCta({
  title: "Ready to Play?",
  text: "Ten game categories, daily rewards and a VIP ladder — all behind one account.",
  primary: { label: "Register Now", href: "/register/" },
  secondary: { label: "About 55 Club", href: "/about/" },
})}
`;

    return {
      bodyHtml,
      schemas: [faqSchema(faqItems)],
    };
  },
};
