// tests/day4-invalid-login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

// Table of invalid cases (simple & readable)
const invalidCases = [
  { name: 'wrong password', username: 'Admin',   password: 'wrongpass' },
  { name: 'wrong username', username: 'BadUser', password: 'admin123' },
  { name: 'both wrong',     username: 'user1',   password: 'pass1' },
];

test.describe('Day4: Invalid login (data-driven)', () => {
  for (const c of invalidCases) {
    test(`shows "Invalid credentials" for ${c.name}`, async ({ page }) => {
      const login = new LoginPage(page);

      await login.goto();
      await login.loginAs(c.username, c.password);

      // Assert error banner/text appears
      await login.expectInvalidCredentials();

      // Also confirm we are still on the login URL
      await expect(page).toHaveURL(/auth\/login/);
    });
  }

  test('shows "Required" when fields are empty', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    // Click login without typing anything
    await login.loginBtn.click();

    // Expect the "Required" validation under fields
    await login.expectRequiredValidation();

    // Still on login page
    await expect(page).toHaveURL(/auth\/login/);
  });
});
