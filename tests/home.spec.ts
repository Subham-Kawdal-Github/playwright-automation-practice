import { test, expect } from '@playwright/test';


test('Open homepage and verify title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en');

  await expect(page).toHaveTitle(/FIFA | The Home of Football/);
});

test('Verify logo is visibe and has alt title', async ({ page }) => {

  await page.goto('https://www.fifa.com/en');

  const logo = page.locator('header img[alt="FIFA"]').first();
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('title', 'FIFA')
});

test('Multiple', async ({page}) => {

  // await page.goto('https://www.fifa.com/en');



await page.goto("https://www.fifa.com/en");
await page.waitForSelector('#mainLinksID');

const expectedLinks = [ 'TOURNAMENTS', 'WATCH ON FIFA+', 'PLAY', 'SHOP', 'INSIDE FIFA' ]
const navLabels = page.locator('#mainLinksID div[class*="label"]');

const texts = await navLabels.allInnerTexts();
console.log(texts);

await expect(navLabels).toHaveText(expectedLinks);

  // await expect(navLabels).toContainText([
  // "TOURNAMENTS",
  // "MATCH CENTRE",])
});


