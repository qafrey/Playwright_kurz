import test,{ expect } from '../fixtures/basePages';
import { LoginPage } from '../page-objects/LoginPage';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
  })
  test.only('Jednoduchý alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.accept();
    })
    await page.locator('#alertButton').click();
  });
  test.only('Potvrzovací alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.dismiss();
    })
    await page.locator('#confirmButton').click();
    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  });
  test.only('Prompt alert', async ({ page }) => {
    page.on("dialog", async dialog => {
        await dialog.accept('Skiller');
    })
    await page.locator('#promtButton').click();
    await expect(page.locator('#promptResult')).toHaveText('You entered Skiller');
  });
})