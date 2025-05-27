import { test, expect } from '@playwright/test';

test('mock API response', async ({ page }) => {
    await page.route('**/api/users', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([{ id: 1, name: 'Mock User' }]),
        });
    });

    await page.goto('https://your-app-url.com');
    
    // Your test logic here
    const user = await page.locator('text=Mock User');
    await expect(user).toBeVisible();
});
