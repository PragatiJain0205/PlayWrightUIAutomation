class LearnPlaywright {
  constructor(page) {
    this.page = page;
  }

  async url() {
    await this.page.goto("https://testautomationpractice.blogspot.com") // Replace with the actual URL
  }

  async fillForm() {
    await this.page.locator("//*[@id='name']").fill("Pragati");
    await this.page.getByPlaceholder("Enter EMail").fill("abc@gmail.com");
    await this.page.getByPlaceholder("Enter Phone").fill("8962667177");
    await this.page.locator('textarea#textarea').fill("banda");

    const femaleRadio = await this.page.locator("//*[@type='radio' and @value='female']");
    await femaleRadio.check();
    return femaleRadio;
  }

  async checkDays() {
    const days = ["#sunday", "#monday", "#tuesday", "#wednesday", "#thursday", "#friday", "#saturday"];
    for (const day of days) {
      const data = await this.page.locator(day);
      await data.check();
    }
  }

  async selectCountry() {
    await this.page.selectOption('#country', "canada");
  }

  async uploadFiles() {
    await this.page.locator('#singleFileInput').setInputFiles("tests/pragati.txt");
    await this.page.locator('#multipleFilesInput').setInputFiles(["tests/pragati.txt", "tests/pragati2.txt"]);
  }

  async readTableData() {
    const table = await this.page.locator('table[name="BookTable"]');
    const rows = await table.locator("tr");
    const columns = await table.locator("tr td");

    console.log("Number of rows:", await rows.count());
    console.log("Number of columns:", await columns.count());

    const matchedRow = await rows.filter({
      has: this.page.locator("td"),
      hasText: "Master In Selenium"
    });

    console.log("Matched Row Found:", await matchedRow.textContent());
  }

  async readDynamicTableData() {
    const dynamicTable = await this.page.locator('table[id="taskTable"]');
    const rows = await dynamicTable.locator('tr');
    const columns = await dynamicTable.locator('tr td');

    console.log("Number of rows:", await rows.count());
    console.log("Number of columns:", await columns.count());

    const firstRowFirstCell = await this.page.locator('#rows tr:nth-of-type(1) td:nth-of-type(1)');
    return firstRowFirstCell;
  }

  async pagination() {
    const pages = await this.page.locator('.pagination');
    const pageCount = await pages.locator('li');

    console.log("Total pages:", await pageCount.count());

    for (let i = 1; i <= await pageCount.count(); i++) {
      console.log(`Page ${i} data:`, await this.page.locator('#productTable').innerText());
    }
  }

  async clickStartButton() {
    await this.page.getByRole("button", { name: "Start" }).click();
  }
}


export default LearnPlaywright;
