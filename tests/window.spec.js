const { test, expect } = require('@playwright/test');

test('Switch windows using context.pages()', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto('https://example.com');

    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev/');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  // Wait for new tab
        page1.evaluate(() => window.open('https://google.com')) 
    ]);

    await newPage.waitForLoadState();
    console.log('Switched to New Window:', await newPage.url());

    // Get all open windows (tabs)
    const pages = context.pages();
    console.log('Total Open Windows:', pages.length);

    

    // Switch to second window dynamically
    await pages[1].bringToFront();
    console.log('Switched to Second Window:', await pages[1].url());

    // Switch back to first window dynamically
    await pages[0].bringToFront();
    console.log('Switched Back to First Window:', await pages[0].url());
    await pages[2].bringToFront();
    
    console.log('Switched Back to Third Window:', await pages[2].url());
});
