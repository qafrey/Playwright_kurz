import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { HomePage } from '../page-objects/HomePage';


test('Ověření home title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(homePage.title).toBeVisible();
});

test('Ověření funkcionality přidání položky do košíku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homePage.clickOnAddToCart();
    await expect(homePage.cartBadge).toHaveText("1");
  });

  test('Ověření funkcionality odstranění položky z košíku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homePage.clickOnAddToCart();
    await expect(homePage.cartBadge).toHaveText("1");
    await homePage.clickOnCartContainer();
    await homePage.clickOnremoveitem();
  });
  