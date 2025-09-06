// tests/day5-login-using-fixture.spec.js
import { test, expect } from '../fixtures/test-fixtures.js';

test('Day5: Login using fixture and verify My Info menu visible', async ({ loggedInPage, dashboardPage }) => {
  // At this point, we're already logged in (thanks to the fixture)

  // Basic post-login assertion from previous days
  await expect(dashboardPage.dashboardHeading).toBeVisible();

  // One extra check: confirm top nav includes "My Info"
  // This text exists in the OrangeHRM demo top menu after login.
  const myInfoMenu = loggedInPage.getByRole('link', { name: 'My Info' });
  await expect(myInfoMenu).toBeVisible();

  // (Optional) Click it and confirm the "Personal Details" heading appears
  await myInfoMenu.click();
  await expect(loggedInPage.getByRole('heading', { name: /Personal Details/i })).toBeVisible();
});
