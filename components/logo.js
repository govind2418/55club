"use strict";

// Badge brand mark — ring + flame + "55", no stock assets.
let instance = 0;
const brandMark = () => {
  const gradId = `logoGrad${instance++}`;
  return `
<svg class="brand-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="55 Club logo">
  <defs>
    <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FF7A5C"/>
      <stop offset="1" stop-color="#FF4B4B"/>
    </linearGradient>
  </defs>
  <path d="M20 1.6c1.9 2.3 2.9 4 2.9 5.6 0 1.7-1.3 2.9-2.9 2.9s-2.9-1.2-2.9-2.9c0-1.6 1-3.3 2.9-5.6Z" fill="url(#${gradId})"/>
  <path d="M20 3.4c1.1 1.5 1.6 2.6 1.6 3.5 0 1-.6 1.6-1.6 1.6" fill="none" stroke="#1A1A1A" stroke-width="0.6" stroke-linecap="round" opacity="0.35"/>
  <circle cx="20" cy="22" r="15.5" fill="none" stroke="url(#${gradId})" stroke-width="2"/>
  <circle cx="20" cy="22" r="13.6" fill="#1A1A1A"/>
  <text x="20" y="27.5" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="url(#${gradId})">55</text>
</svg>`;
};

module.exports = { brandMark };
