//@ts-check
const{test,expect}=require('@playwright/test')

test("table",async({page})=>{
await page.goto('url')
const table=await page.locator("")
const rows= await page.locator('tbody tr')
const columns= await page.locator('tbody th td')
})