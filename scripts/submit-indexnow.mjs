#!/usr/bin/env node

/**
 * IndexNow URL Submission Script
 * Submits all site URLs to search engines via the IndexNow protocol.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                  # Submit all URLs
 *   node scripts/submit-indexnow.mjs /about /contact   # Submit specific paths
 */

import "dotenv/config";

const HOST = "www.starlighttubes.com";
const KEY = process.env.INDEXNOW_KEY;

if (!KEY) {
  console.error("Error: INDEXNOW_KEY not found in .env");
  process.exit(1);
}

const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const ALL_URLS = [
  "https://www.starlighttubes.com/",
  "https://www.starlighttubes.com/about",
  "https://www.starlighttubes.com/contact",
  "https://www.starlighttubes.com/product",
  "https://www.starlighttubes.com/certificates",
  "https://www.starlighttubes.com/technical-info",
  "https://www.starlighttubes.com/materials",
  "https://www.starlighttubes.com/coating",
  "https://www.starlighttubes.com/stainless-steel",
  "https://www.starlighttubes.com/aluminium",
  "https://www.starlighttubes.com/copper",
  "https://www.starlighttubes.com/fittings",
  "https://www.starlighttubes.com/carbon-steel",
  "https://www.starlighttubes.com/nickel-alloys",
  "https://www.starlighttubes.com/inconel",
  "https://www.starlighttubes.com/stainless-steel-pipe",
  "https://www.starlighttubes.com/stainless-steel-tube",
  "https://www.starlighttubes.com/stainless-steel-sheet",
  "https://www.starlighttubes.com/stainless-steel-bar",
  "https://www.starlighttubes.com/stainless-steel-fasteners",
  "https://www.starlighttubes.com/stainless-steel-wire",
  "https://www.starlighttubes.com/stainless-steel-304-pipe",
  "https://www.starlighttubes.com/stainless-steel-304-plate",
  "https://www.starlighttubes.com/stainless-steel-316-tube",
  "https://www.starlighttubes.com/stainless-steel-316-plate",
  "https://www.starlighttubes.com/stainless-steel-316l-pipe",
  "https://www.starlighttubes.com/nickel-pipe",
  "https://www.starlighttubes.com/nickel-sheet",
  "https://www.starlighttubes.com/inconel-pipe",
  "https://www.starlighttubes.com/inconel-plate",
  "https://www.starlighttubes.com/inconel-bar",
  "https://www.starlighttubes.com/inconel-bolts",
  "https://www.starlighttubes.com/inconel-600-pipe",
  "https://www.starlighttubes.com/inconel-600-plate",
  "https://www.starlighttubes.com/inconel-625-pipe",
  "https://www.starlighttubes.com/inconel-625-plate",
  "https://www.starlighttubes.com/inconel-625-tubing",
  "https://www.starlighttubes.com/carbon-steel-pipe",
  "https://www.starlighttubes.com/astm-a106-pipe",
  "https://www.starlighttubes.com/astm-a53-pipe",
  "https://www.starlighttubes.com/astm-a333-pipe",
  "https://www.starlighttubes.com/api-5l-grade-b-pipe",
  "https://www.starlighttubes.com/api-5l-x42-pipe",
  "https://www.starlighttubes.com/api-5l-x52-pipe",
  "https://www.starlighttubes.com/api-5l-x65-pipe",
  "https://www.starlighttubes.com/a671-pipe",
  "https://www.starlighttubes.com/a672-pipe",
  "https://www.starlighttubes.com/copper-pipe",
  "https://www.starlighttubes.com/copper-tube",
  "https://www.starlighttubes.com/copper-sheet",
  "https://www.starlighttubes.com/copper-bar",
  "https://www.starlighttubes.com/copper-fittings",
  "https://www.starlighttubes.com/copper-nickel-pipe",
  "https://www.starlighttubes.com/copper-nickel-tube",
  "https://www.starlighttubes.com/cupro-nickel-90-10",
  "https://www.starlighttubes.com/cupro-nickel-70-30",
  "https://www.starlighttubes.com/aluminium-pipe",
  "https://www.starlighttubes.com/aluminium-sheet",
  "https://www.starlighttubes.com/aluminium-bar",
  "https://www.starlighttubes.com/aluminium-coil",
  "https://www.starlighttubes.com/aluminium-5052",
  "https://www.starlighttubes.com/aluminium-6061",
  "https://www.starlighttubes.com/aluminium-6063",
  "https://www.starlighttubes.com/aluminium-7075",
  "https://www.starlighttubes.com/pipe-fittings",
  "https://www.starlighttubes.com/butt-weld-fittings",
  "https://www.starlighttubes.com/socket-weld-fittings",
  "https://www.starlighttubes.com/threaded-fittings",
  "https://www.starlighttubes.com/flanges",
  "https://www.starlighttubes.com/elbow-fittings",
  "https://www.starlighttubes.com/tee-fittings",
  "https://www.starlighttubes.com/reducer-fittings",
  "https://www.starlighttubes.com/cap-fittings",
  "https://www.starlighttubes.com/coupling-fittings",
  "https://www.starlighttubes.com/union-fittings",
];

async function submitToIndexNow(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log(
      `✅ Success (${response.status}): ${urls.length} URLs submitted`,
    );
  } else {
    const body = await response.text().catch(() => "");
    console.error(
      `❌ Failed (${response.status}): ${body || response.statusText}`,
    );
    process.exit(1);
  }
}

// Allow submitting specific paths via CLI args
const args = process.argv.slice(2);
const urls =
  args.length > 0
    ? args.map(
        (path) => `https://${HOST}${path.startsWith("/") ? path : "/" + path}`,
      )
    : ALL_URLS;

submitToIndexNow(urls);
