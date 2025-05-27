//ts-@check

const{expect,test}=require('@playwright/test')

test("Alert", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async dialog =>{
         console.log(await dialog.message());
         expect(dialog.message()).toBe('I am a JS Alert');

        await dialog.accept()

    }) 
    await page.click('text=Click for JS Alert');

})