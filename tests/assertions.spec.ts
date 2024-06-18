import { test, expect } from '@playwright/test';

test.only('Assertions', async ({ page }) => {
// přejít na požadovaný web
    await page.goto('http://saucedemo.com');
// Zkontrolovat zda je viditelný políčko username
    await expect(page.locator('#user-name')).toBeVisible();
// Zkontrolovat zda není políčko password editovatelné a vpřípadě chyby pokračovat s dalšími testy
    await expect.soft(page.locator('#password')).not.toBeEditable();
// Zkontrolovat zda je přihlašovací tlačítko přítomné pouze 1x
    await expect(page.locator('#login-button')).toHaveCount(1);
// Zkontrolovat zda se na webu nenachází fráze "StrýčekBob"
    await expect(page.locator('#StrýčekBob')).not.toBeVisible();
});