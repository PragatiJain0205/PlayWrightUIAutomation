import { test, expect } from '@playwright/test';
import LearnPlaywright from './pages/LearnPlaywright.js';

test.describe("Scenario1", () => {
  test("Has Title", async ({ page }) => {
    const learnPlaywright = new LearnPlaywright(page);

    await learnPlaywright.url();
    await expect(page).toHaveTitle("Automation Testing Practice");

    const femaleRadio = await learnPlaywright.fillForm();
    await expect(femaleRadio).toBeChecked();

    await learnPlaywright.checkDays();
    await learnPlaywright.selectCountry();
    await learnPlaywright.uploadFiles();

    await learnPlaywright.readTableData();
    const firstRowFirstCell = await learnPlaywright.readDynamicTableData();
    // await expect(firstRowFirstCell).toHaveText('Firefox');  // ✅ Assert first cell text

    await learnPlaywright.pagination();
    await learnPlaywright.clickStartButton();
  });
});
