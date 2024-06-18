import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('/úpěšné přihlášení', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});