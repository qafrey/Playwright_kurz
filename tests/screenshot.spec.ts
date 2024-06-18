import test,{ expect } from '../fixtures/basePages';

test.describe('Screenshots', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
  })


  test.only('Viewport screenshot', async ({ page }) => {
    await page.screenshot ({ path: 'screenshots/viewport.png'})
  });

  test.only('Full page screenshot', async ({ page }) => {
    await page.screenshot ({ path: 'screenshots/fullpage.png', fullPage: true})
  });
  test.only('Element screenshot', async ({ page }) => {
    await page.locator('#item_4_img_link').screenshot({ path: 'screenshots/element.png'})
  });
})