// tests/day2-login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Day2: Login using POM (OrangeHRM demo)', async ({ page }) => {
  // Create LoginPage object
  const login = new LoginPage(page);

  // Step 1: Navigate to login page
  await login.goto();

  // Step 2: Login with Admin credentials
  await login.loginAs('Admin', 'admin123');

  // Step 3: Verify Dashboard appears
  await expect(login.dashboardHeading).toBeVisible();
});
