//ts-@check

const{expect,test}=require('@playwright/test')

test("Dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await page.waitForSelector('#comboBox');
    await page.click('#comboBox'); // Click to expand the custom dropdown

    const options = page.locator('#dropdown .option');

     console.log(await options.count());

     for(let i=0; i< await options.count();i++){
        console.log(await options.nth(i).textContent());
     }


})