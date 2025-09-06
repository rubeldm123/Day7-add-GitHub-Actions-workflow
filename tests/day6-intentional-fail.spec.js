import { test, expect } from '@playwright/test';

test('Day6: Intentional fail to see artifacts', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  // Intentionally wrong text to force a failure:
  await expect(page.getByRole('heading', { name: 'Definitely Not Here' }))
    .toBeVisible({ timeout: 2000 });
});
