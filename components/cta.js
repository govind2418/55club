"use strict";

function renderCta({
  title = "Ready to explore 55 Club?",
  text = "Create your account and see the interface, rewards structure and game categories for yourself.",
  primary = { label: "Register", href: "/register/" },
  secondary = { label: "Login", href: "/login/" },
} = {}) {
  return `
<section class="section cta-section">
  <div class="container">
    <div class="cta-banner">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="cta-actions">
        <a href="${primary.href}" class="btn btn-primary">${primary.label}</a>
        <a href="${secondary.href}" class="btn btn-outline">${secondary.label}</a>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { renderCta };
