export class AddEmployee{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.PIMselector = "//ul[@class='oxd-main-menu']//li//span[text()='PIM']";
        this.addempbtn = "//button[normalize-space()='Add']";
        this.empidInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
        this.empSavebtn = "//button[normalize-space()='Save']";
        this.empListbtn = "//a[normalize-space()='Employee List']";
        this.empidSearchInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
        this.empSearchbtn = "//button[normalize-space()='Search']";
        this.resultText = "//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//span[@class='oxd-text oxd-text--span']";
        this.deletebtn = "//i[@class='oxd-icon bi-trash']";
        this.confirmdeletebtn = "//button[normalize-space()='Yes, Delete']";
    }

    async addEmployee(fname, lname){
        await this.page.locator(this.PIMselector).click();
        await this.page.waitForSelector(this.addempbtn);
        await this.page.locator(this.addempbtn).click();
        await this.page.getByPlaceholder("First Name").fill(fname);
        await this.page.getByPlaceholder("Last Name").fill(lname);
        const empidInput = this.page.locator(this.empidInput);
        let empid = await empidInput.inputValue();
        console.log(empid);
        empid = "0"+(Number(empid)+1).toLocaleString();
        await empidInput.fill(empid);
        console.log(empid);
        await this.page.locator(this.empSavebtn).click();
        await this.page.waitForSelector("//div[@class='orangehrm-edit-employee-name']");

        // Search and delete employee ---
        await this.page.locator(this.empListbtn).click();
        await this.page.locator(this.empidSearchInput).fill(empid);
        await this.page.locator(this.empSearchbtn).click();
        await this.page.waitForSelector(this.resultText);
        const result = await this.page.locator(this.resultText).textContent();
        this.expect.soft(result.match(/\d/g).toLocaleString()).toBe("1");
        await this.page.click(this.deletebtn);
        await this.page.click(this.confirmdeletebtn);
        await this.expect.soft(this.page.locator("//span[normalize-space()='No Records Found']")).toBeVisible();
    }
}