import test,{ expect } from '../fixtures/basePages';

test.describe('Tabs', () => {
  
    test.only('Multi tabs', async ({ page, context }) => {
        await page.goto('https://demoqa.com');

        // Vytvoření druhého panelu
        const newTab = await context.newPage();
        await newTab.goto('http://saucedemo.com');

        // Dej demoqa do popředí
        await page.bringToFront();

        await newTab.locator('#login-button').click();
        await page.pause();
    });
})