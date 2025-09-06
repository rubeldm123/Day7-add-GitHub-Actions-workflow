// tests/day3-login-logout.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

test('Day3: Login then Logout (OrangeHRM demo)', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  // 1) Go to login and sign in
  await login.goto();
  await login.loginAs('Admin', 'admin123');

  // 2) Verify Dashboard
  await expect(dashboard.dashboardHeading).toBeVisible();

  // 3) Logout
  await dashboard.logout();

  // 4) Verify we are back on the login page
  await expect(dashboard.username).toBeVisible();          // username field present
  await expect(page).toHaveURL(/auth\/login/);             // URL contains /auth/login
});
