"use strict";

function renderNewsletter() {
  return `
<section class="section" style="padding-top:0;">
  <div class="container">
    <div class="newsletter">
      <div>
        <h3>Get product updates</h3>
        <p class="text-secondary" style="font-size:var(--fs-200);">New game categories, promotions and VIP updates — no spam.</p>
      </div>
      <form action="#" method="post" onsubmit="return false;">
        <label class="visually-hidden" for="newsletterEmail">Email address</label>
        <input type="email" id="newsletterEmail" name="email" placeholder="you@example.com" required>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </div>
</section>`;
}

module.exports = { renderNewsletter };
