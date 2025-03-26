//ts-@check
const{page,expect}=require('@playwright/test')
 
test.describe('Scenario',async()=>{
    test("Has Title",async()=>{
       await page.goto('url')
       await page.locator('xyz').click()
       await page.locator('xya').fill()
       const links= page.$$('')
       for(const link of links){
        const linktext= link.getContent()
        console.log(linktext)
       }
       //assertion hard and soft
       await expect(page.locator('')).toHaveTitle('xyz')
       await expect(page.locator('')).toBeVisible()
       await expect.soft(page.locator('')).toBeVisible()

       //Drop down selection
       await page.locator('').selectOption('value','india')
       await page.locator('').selectOption('value',['india','pakistan'])
       await page.$$('#country','option')
       //alert and prompt
       page.on("Alert",async dialog =>{
        expect(dialog.type()).toContain("Alert")
        expect(dialog.message().toContain("hi"))
        await dialog.accept()
       }) 
       page.on("Prompt",async dialog =>{
        expect(dialog.type().toContain("prompt"))
        expect(dialog.message().toContain("prompt"))
        await dialog.accept()
       })
       //right click and dbl click
       const button=page.locator("")
       await button.dblclick()
       await button({button:'right'})
       //drag and srop
        rome=await page.locator("#rome")
        italy=await page.locator("#italy")
        rome.dragTo(italy)
        //file upload
        await page.locator('').setInputFile('')
        await page.locator('').setInputFile(['',''])
        //sceenshot
        await page.screenshot({path:''})

    })
})