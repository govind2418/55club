"use strict";

// Hand-drawn hero illustration: faceted gem centerpiece + orbiting game glyphs.
// Pure inline SVG so it ships with zero image requests and no external art.
function renderHeroArt() {
  return `
<div class="hero-art">
  <div class="glow-ring" aria-hidden="true"></div>
  <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a glowing gem surrounded by game icons representing lottery, cards and slots">
    <defs>
      <radialGradient id="gemGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FF7466" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#FF5A4E" stop-opacity="0.15"/>
      </radialGradient>
      <linearGradient id="facet1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF5A4E"/>
        <stop offset="100%" stop-color="#c23a30"/>
      </linearGradient>
    </defs>

    <circle cx="240" cy="230" r="150" fill="url(#gemGlow)" opacity="0.25"/>

    <!-- orbit ring -->
    <circle cx="240" cy="230" r="170" fill="none" stroke="#FF5A4E" stroke-opacity="0.18" stroke-width="1.5" stroke-dasharray="4 8"/>

    <!-- central faceted gem -->
    <g transform="translate(240,230)">
      <path d="M0 -95 62 -55 82 15 40 90 -40 90 -82 15 -62 -55Z" fill="#151515" stroke="#FF5A4E" stroke-width="2"/>
      <path d="M0 -95 62 -55 0 -20 -62 -55Z" fill="url(#facet1)"/>
      <path d="M62 -55 82 15 0 -20Z" fill="#FF7466" fill-opacity="0.55"/>
      <path d="M82 15 40 90 0 -20Z" fill="#1E1E1E"/>
      <path d="M40 90 -40 90 0 -20Z" fill="#151515"/>
      <path d="M-40 90 -82 15 0 -20Z" fill="#1E1E1E"/>
      <path d="M-82 15 -62 -55 0 -20Z" fill="#FF7466" fill-opacity="0.3"/>
      <circle cx="0" cy="-20" r="4" fill="#fff"/>
    </g>

    <!-- floating coin: lottery ball -->
    <g transform="translate(90,110)">
      <g class="floating-coin c1">
        <circle r="30" fill="#151515" stroke="#FF5A4E" stroke-width="2"/>
        <text x="0" y="7" text-anchor="middle" font-family="Sora, sans-serif" font-weight="700" font-size="22" fill="#FF5A4E">7</text>
      </g>
    </g>

    <!-- floating coin: playing card -->
    <g transform="translate(380,150)">
      <g class="floating-coin c2">
        <rect x="-22" y="-30" width="44" height="60" rx="6" fill="#1E1E1E" stroke="#FF5A4E" stroke-width="2"/>
        <text x="0" y="6" text-anchor="middle" font-family="Sora, sans-serif" font-weight="700" font-size="20" fill="#FF7466">A</text>
      </g>
    </g>

    <!-- floating coin: coin stack -->
    <g transform="translate(350,360)">
      <g class="floating-coin c3">
        <circle r="26" fill="#151515" stroke="#FF5A4E" stroke-width="2"/>
        <path d="M-10 0h20M0 -10v20" stroke="#FF5A4E" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </g>

    <g transform="translate(110,370)">
      <g class="floating-coin c2">
        <circle r="22" fill="#1E1E1E" stroke="#FF5A4E" stroke-width="2"/>
        <path d="m-8 2 5 6 11-13" stroke="#FF7466" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
    </g>
  </svg>
</div>`;
}

module.exports = { renderHeroArt };
