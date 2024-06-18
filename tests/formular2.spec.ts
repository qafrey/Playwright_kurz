import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://testovani.kitner.cz/');
  await page.getByRole('link', { name: 'NextDate' }).click();
  await page.locator('input[name="day"]').click();
  await page.locator('input[name="day"]').fill('31');
  await page.locator('input[name="month"]').click();
  await page.locator('input[name="month"]').fill('12');
  await page.locator('input[name="year"]').click();
  await page.locator('input[name="year"]').fill('2004');
  await page.getByRole('button', { name: 'Následující den' }).click();
});