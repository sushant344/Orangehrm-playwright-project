export class LoginPage{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.usernamedropdown = "//img[@class='oxd-userdropdown-img']";
    }

    // go to login page --
    async gotoLoginpage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.expect(this.page.locator("//h5[text()='Login']")).toBeVisible()
    }

    // login with account --
    async logintoyourAccount(LoginCredentials){
        for(let creds of LoginCredentials){
            let { user, pass } = creds;
            await this.page.getByPlaceholder('Username').fill(user);
            await this.page.getByPlaceholder('Password').fill(pass);
            await this.page.getByRole('button', {type: 'submit'}).click();
            if(user === "Admin" && pass === "admin123"){
                await this.page.locator("//img[@class='oxd-userdropdown-img']").click();
                await this.expect.soft(this.page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();
            }
            else{
                await this.expect.soft(this.page.locator("//img[@class='oxd-userdropdown-img']")).not.toBeVisible();
            }
        }
    }
    
    // logout account --
    async logoutAccount(){
        await this.page.locator(this.usernamedropdown).click();
        await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    }
}