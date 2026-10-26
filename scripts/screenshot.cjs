const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "/tmp/pc-home.png", fullPage: true });

  await page.goto("http://localhost:3001/biblioteca", { waitUntil: "networkidle" });
  await page.screenshot({ path: "/tmp/pc-library.png", fullPage: true });

  const firstCover = page.locator(".story-card-cover").first();
  await firstCover.click();
  await page.waitForURL(/\/historia\//);
  await page.waitForTimeout(300);
  await page.screenshot({ path: "/tmp/pc-reader.png", fullPage: true });

  await page.goto("http://localhost:3001/responsaveis", { waitUntil: "networkidle" });
  await page.screenshot({ path: "/tmp/pc-parent-pin.png", fullPage: true });

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
