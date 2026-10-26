const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  // Reader: go to last scene + finish screen
  await page.goto("http://localhost:3001/historia/a2-nino-hora-de-dormir", { waitUntil: "networkidle" });
  for (let i = 0; i < 20; i++) {
    const btn = page.locator(".control-btn").last();
    const text = await btn.textContent();
    if (text && text.includes("Terminar")) {
      await btn.click();
      break;
    }
    await btn.click();
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(300);
  await page.screenshot({ path: "/tmp/pc-finished.png", fullPage: true });

  // Parent area: create PIN flow
  await page.goto("http://localhost:3001/responsaveis", { waitUntil: "networkidle" });
  await page.fill('input[type="password"] >> nth=0', "1234");
  await page.fill('input[type="password"] >> nth=1', "1234");
  await page.click('button:has-text("Criar PIN e entrar")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "/tmp/pc-parent-settings.png", fullPage: true });

  await page.click('button:has-text("Criar história")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: "/tmp/pc-parent-create.png", fullPage: true });

  // Tablet width check
  const page2 = await browser.newPage({ viewport: { width: 820, height: 1100 } });
  await page2.goto("http://localhost:3001/", { waitUntil: "networkidle" });
  await page2.screenshot({ path: "/tmp/pc-tablet-home.png", fullPage: false });

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
