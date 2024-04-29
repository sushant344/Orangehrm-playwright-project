export class AddVacancy {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.recruitmenu ="//ul[@class='oxd-main-menu']//li//span[text()='Recruitment']";
    this.vacanciesHeaderbtn = "//a[normalize-space()='Vacancies']";
    this.addbtn = "//button[normalize-space()='Add']";
    this.VacancyNameInput ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Vacancy Name']/../..//input";
    this.JobTitleInput ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Job Title']/../..//div[@class='oxd-select-wrapper']";
    this.JobQAoption ="//div[@class='oxd-select-option']//span[text()='QA Engineer']";
    this.HiringInput ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Hiring Manager']/../..//input";
    this.positionsInput ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Number of Positions']/../..//input";
    this.savebtn = "//button[normalize-space()='Save']";
    this.vacancyNamedropdown ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Vacancy']/../..//div[@class='oxd-select-wrapper']";
    this.Hiringdropdown ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Hiring Manager']/../..//div[@class='oxd-select-wrapper']";
    this.statusInput ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Status']/../..//div[@class='oxd-select-wrapper']";
    this.statusActiveoption ="//div[@class='oxd-select-option']//span[text()='Active']";
    this.searchbtn = "//button[normalize-space()='Search']";
    this.resultText ="//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//span[@class='oxd-text oxd-text--span']";
    this.deletebtn = "//i[@class='oxd-icon bi-trash']";
    this.confirmdeletebtn = "//button[normalize-space()='Yes, Delete']";
  }

  //! Hiring manager can be changed
  async addVacancy(vacancyName, hiringManager) {
    await this.page.click(this.recruitmenu);
    await this.page.waitForSelector("//h5[normalize-space()='Candidates']");
    await this.page.click(this.vacanciesHeaderbtn);
    await this.page.waitForSelector(this.addbtn);
    await this.page.click(this.addbtn);
    await this.page.waitForSelector("//h6[normalize-space()='Add Vacancy']");
    await this.page.locator(this.VacancyNameInput).fill(vacancyName);
    await this.page.click(this.JobTitleInput);
    await this.page.click(this.JobQAoption);
    await this.page.locator(this.HiringInput).fill(hiringManager);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
    await this.page.locator(this.positionsInput).fill("1");
    await this.page.click(this.savebtn);
    await this.page.waitForSelector("//h6[normalize-space()='Edit Vacancy']");
  }

  async searchVacancy(vacancyName, hiringManager) {
    await this.page.click(this.vacanciesHeaderbtn);
    await this.page.waitForSelector("//h5[normalize-space()='Vacancies']");
    await this.page.click(this.JobTitleInput);
    await this.page.click(this.JobQAoption);
    await this.page.click(this.vacancyNamedropdown);
    await this.page.click(`//div[@class='oxd-select-option']//span[text()='${vacancyName}']`);
    await this.page.click(this.Hiringdropdown);
    await this.page.click(`//div[@class='oxd-select-option']//span[text()='${hiringManager}']`);
    await this.page.click(this.statusInput);
    await this.page.click(this.statusActiveoption);
    await this.page.click(this.searchbtn);
    await this.page.waitForTimeout(2000);
    const result = await this.page.locator(this.resultText).textContent();
    this.expect(result.match(/\d/g).toLocaleString()).toBe("1");
    await this.page.click(this.deletebtn);
    await this.page.click(this.confirmdeletebtn);
    await this.expect(this.page.locator("//span[normalize-space()='No Records Found']")).toBeVisible();
  }
}
