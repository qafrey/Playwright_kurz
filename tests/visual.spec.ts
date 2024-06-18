import test,{ expect } from '../fixtures/basePages';

test.describe('Vizuální testování', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();  
  })


  test.only('Vizuální test - login page', async ({ page }) => {
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100} );
  });

})