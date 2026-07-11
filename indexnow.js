#!/usr/bin/env node
"use strict";
// Pings IndexNow (Bing, Yandex) with every URL in the sitemap so those
// engines can crawl the site within hours instead of waiting for discovery.
// Run this after the site is live: node indexnow.js
const fs = require("fs");
const https = require("https");
const path = require("path");
const site = require("./content/site.config");

const KEY = "32e65575bcaaf20c9308548660812db5";
const host = new URL(site.siteUrl).host;

const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const payload = JSON.stringify({
  host,
  key: KEY,
  keyLocation: `${site.siteUrl.replace(/\/$/, "")}/${KEY}.txt`,
  urlList,
});

const req = https.request(
  "https://api.indexnow.org/indexnow",
  { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" } },
  (res) => {
    console.log(`IndexNow responded ${res.statusCode} for ${urlList.length} URLs`);
    res.on("data", () => {});
  }
);
req.on("error", (e) => console.error("IndexNow request failed:", e.message));
req.write(payload);
req.end();
