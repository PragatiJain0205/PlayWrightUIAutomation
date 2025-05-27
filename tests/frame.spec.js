const { test, expect } = require('@playwright/test');

test('Interact with an iframe using name', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/iframe');

    const frames = page.frames();  // No need for `await`

    console.log(`Total Frames: ${frames.length}`);
    for (const frame of frames) {
        console.log(`Frame URL: ${frame.url()}`);
    }



});
