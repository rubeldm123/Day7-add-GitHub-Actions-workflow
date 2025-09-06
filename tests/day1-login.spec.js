import { test, expect } from '@playwright/test';

test('Day1: Login and Logout in OrangeHRM demo site', async ({ page }) => {
  // Open login page (uses baseURL from config)
  await page.goto('/web/index.php/auth/login');

  // Fill username & password
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert Dashboard loaded
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Logout
  await page.getByRole('listitem', { hasText: 'FirstName LastName' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // Back to login page
  await expect(page).toHaveURL(/auth\/login/);
});
