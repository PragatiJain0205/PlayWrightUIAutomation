//@ts-check
const{test,expect}=require('@playwright/test')

test.describe("Test", async()=>{
    test("g",async({page,browser})=>{
        page.goto("")
        page.locator("").fill("")
        page.on('dialog', async dialog=>{
            dialog.accept("")
            dialog.message()
        const options=page.locator('#dropdown .option')
        for(let i=0;i< await options.count();i++){
            console.log(options.nth(i).textContent())
 

        }
        await page.locator('#input').setInputFiles('filepath')
        const context=await browser.newContext()
        const page1=await context.newPage()
        page1.goto("")
        const [newPage]=await Promise.all([
            context.waitForEvent('page'),
            page.click("//button[text()='New Tab']") 

        ])
        await newPage.waitForLoadState(); // ensure the new tab is loaded

  console.log('window2:', await newPage.title());

  const allPages = context.pages();

  await page.route('**/api/users',async route =>{
    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{ id: 1, name: 'Mock User' }]),
    });

  })





        })


    })
    
})