//@js-check
const{test,expect}=require('@playwright/test')

test.describe('Scenario',()=>{
    test('First Test',async({page})=>{
        await page.goto('url')
        await page.click('button')
        await expect(page).toHaveTitle('xyz')
        const links= await page.$$('loactor')
        for(const link of links){
            const linktext= link.textContent()
        
        }
        await page.fill('key',value)
        await page.$(lacator).fill('xyz')
//Assertions hard and soft
await expect.soft(page).toHaveURL('xyz')
await expect(page).toHaveTitle('xyz')
//Drop down selection
await page.selectOption('#country',"india")
await page.locator('#contry').selectOption('value','india')
const option=await page.$$('#country','option')
// select multiple options
await page.selectOption('#colors',['red','blue'])
//alert and prompt
page.on("Alert",async dialog =>{
     expect(dialog.type()).toContain('alert')
     expect(dialog.message().toContain("hi"))
     await dialog.accept()
})
//prompt
page.on("prompt", async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message().toContain("hi"))
    await dialog.accept('hi')

})

//right click and dbl click
const button=await page.locator("#id")
await button.click({button:'right'})
await button.dblclick()

//drag and srop
rome=await page.locator("#rome")
italy=await page.locator("#italy")
rome.dragTo(italy)
//keyboard actions
await page.keyboard.press("Meta+A") //to select all

//upload file
await page.locator('#input').setInputFiles('filepath')
await page.locator('#input').setInputFiles(['file1','file2'])
//screenshot
await page.screenshot({path:'path of file'})
    })
})
