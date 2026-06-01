import { test, expect } from '@playwright/test';

test('application loads successfully', async ({ page }) => {
  await page.goto('/'); // Assuming your application is served at the root path
  await expect(page).toHaveTitle(/Vite \+ React/); // Check if the title is as expected
  // You can add more assertions here to check for specific elements or content
  // that indicate the application has loaded successfully.
  // For example, to check if a specific div with id "root" is present:
  await expect(page.locator('#root')).toBeVisible();
});
