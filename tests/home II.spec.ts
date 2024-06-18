import test, { expect } from '../fixtures/basePages';

test.describe('Home page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
  })

  test('Ověření home title', async ({ page, loginPage, homePage }) => {
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
  });

  test('Ověření funkcionality přidání položky do košíku', async ({ page, loginPage, homePage }) => {
      await loginPage.login();
      await homePage.clickOnAddToCart();
      await expect(homePage.cartBadge).toHaveText("1");
    });

    test('Ověření funkcionality odstranění položky z košíku', async ({ page, loginPage, homePage }) => {
      await loginPage.login();
      await homePage.clickOnAddToCart();
      await expect(homePage.cartBadge).toHaveText("1");
      await homePage.clickOnCartContainer();
      await homePage.clickOnremoveitem();
    });
})