//ts-@check

const{test,expect}=require('@playwright/test')

test.describe("Window Handles", ()=>{
    test("Check window handles" , async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();
      
        await page.goto('https://testautomationpractice.blogspot.com');
        console.log('window1:', await page.title());

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click("//button[text()='New Tab']") 
        ] );

  await newPage.waitForLoadState(); // ensure the new tab is loaded

  console.log('window2:', await newPage.title());

  const allPages = context.pages();
  expect(allPages.length).toBe(2);

    })
})


