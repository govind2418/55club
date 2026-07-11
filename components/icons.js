// Hand-crafted inline SVG icon set — no external icon fonts/libraries.
"use strict";

const wrap = (paths, viewBox = "0 0 24 24") =>
  `<svg class="icon-glyph" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${paths}</svg>`;

const icons = {
  bolt: wrap(`<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor"/>`),
  shield: wrap(`<path d="M12 2 4 5v6c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V5l-8-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`),
  gift: wrap(`<rect x="3" y="8" width="18" height="13" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M3 12h18M12 8v13" stroke="currentColor" stroke-width="1.6"/><path d="M12 8c-1.8 0-4-1-4-3.2C8 3 9.2 2 10.4 2c1.6 0 1.6 2 1.6 3v3Zm0 0c1.8 0 4-1 4-3.2C16 3 14.8 2 13.6 2c-1.6 0-1.6 2-1.6 3v3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`),
  device: wrap(`<rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M10 18h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`),
  crown: wrap(`<path d="m3 8 4 3 5-6 5 6 4-3-2 10H5L3 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 21h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`),
  coin: wrap(`<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`),
  headset: wrap(`<path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M19 19v1a2 2 0 0 1-2 2h-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`),
  check: wrap(`<path d="m5 12 5 5 9-10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`),
  plus: wrap(`<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`),
  menu: wrap(`<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`),
  close: wrap(`<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`),
  download: wrap(`<path d="M12 3v12m0 0 5-5m-5 5-5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`),
  chevronRight: wrap(`<path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`),
  lock: wrap(`<rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.6"/>`),
  ticket: wrap(`<path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 6v12" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 3"/>`),
  spark: wrap(`<path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>`),
  plane: wrap(`<path d="M3 12 21 4l-6 17-3-8-8-1Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`),
  dice: wrap(`<rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.6"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>`),
  fish: wrap(`<path d="M3 12s4-5 10-5 8 5 8 5-2 5-8 5-10-5-10-5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="11" r="0.8" fill="currentColor"/><path d="M21 12s-2-3-2-3 0 3 0 3 0 3 2 3" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>`),
  ball: wrap(`<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="1.2"/>`),
  cards: wrap(`<rect x="3" y="6" width="12" height="15" rx="2" transform="rotate(-8 9 13.5)" stroke="currentColor" stroke-width="1.5"/><rect x="8" y="4" width="12" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/>`),
  mail: wrap(`<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`),
  mapPin: wrap(`<path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.6"/>`),
  phone: wrap(`<path d="M4 5c0-1 1-2 2-2h2l2 5-2 1a10 10 0 0 0 5 5l1-2 5 2v2c0 1-1 2-2 2C9.6 21 3 14.4 3 7a3 3 0 0 1 1-2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`),
  clock: wrap(`<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l4 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`),
};

const social = {
  twitter: wrap(`<path d="M20 6.6c-.6.3-1.3.5-2 .6a3.5 3.5 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.9a3.4 3.4 0 0 0-5.9 3.1A9.8 9.8 0 0 1 4.3 6a3.4 3.4 0 0 0 1.1 4.6c-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.5.1-1 .2-1.6.1.4 1.4 1.7 2.4 3.3 2.4A6.9 6.9 0 0 1 3 17.5 9.7 9.7 0 0 0 8.3 19c6.4 0 9.9-5.3 9.9-9.9v-.4c.7-.5 1.3-1.1 1.8-1.9Z" fill="currentColor"/>`),
  instagram: wrap(`<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>`),
  telegram: wrap(`<path d="m3 11.5 17-7-3 16-6-4.5-3 3-.5-5L3 11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`),
  youtube: wrap(`<rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="currentColor"/>`),
};

module.exports = { icons, social };
