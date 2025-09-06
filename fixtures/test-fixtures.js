// fixtures/test-fixtures.js
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

// Tiny, beginner-friendly fixture that logs you in and
// hands back { page, loginPage, dashboardPage, creds } to tests.
export const test = base.extend({
  creds: async ({}, use) => {
    // Keep demo creds here (easy to change later)
    await use({ username: 'Admin', password: 'admin123' });
  },

  // Provide ready-to-use page objects
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  // Optionally, provide a logged-in page as a ready state
  loggedInPage: async ({ page, loginPage, creds }, use) => {
    await loginPage.goto();
    await loginPage.loginAs(creds.username, creds.password);
    await use(page); // give the logged-in page to the test
  },
});

// Re-export expect for convenience
export { expect } from '@playwright/test';
