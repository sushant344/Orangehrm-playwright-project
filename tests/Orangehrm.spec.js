import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ElementsValidation } from '../Pages/ElementsValidation';
import { AddEmployee } from '../Pages/AddEmployee';
import { AddAdmin } from '../Pages/AddAdmin';
import { AddVacancy } from '../Pages/AddVacancy';

// Login Account --
let page;
test.beforeEach('Login account', async ({ browser, browserName }) => {
  page = await browser.newPage();
  if(browserName === "firefox"){
    test.setTimeout(35000);
  }else{
    test.slow();
  }

  // login to account --
  const login = new LoginPage(page, expect);
  await login.gotoLoginpage();
  const loginCreds = [ {user: "Amin", pass: "admin123"}, 
  {user: "Admin", pass: "admin124"},
  {user: "", pass: ""}, 
  {user: "Admin", pass: "admin123"} ];
  await login.logintoyourAccount(loginCreds);
  
});

// Logout Account --
test.afterEach("Logout", async()=>{

  // logout account --
  const login = new LoginPage(page, expect);
  await login.logoutAccount();

})


test("Verify visibility and count of main menu list", async()=>{

  const elements = new ElementsValidation(page, expect);
  await elements.checkmainmenuList();

})

test("Verify elements and navigation of each main menu list", async()=>{

  const elements = new ElementsValidation(page, expect);
  await elements.checkNavigationofMenulist()
  
})

test("Verify if able to Add Admin", async()=>{

  const Admin = new AddAdmin(page, expect);
  await Admin.AddAdmindetails("rama kumar Rao", "admin123");
  await Admin.searchAdmin("rama kumar Rao");

})

test("Verify if able to Add employee in PIM", async()=>{

  const addEmp = new AddEmployee(page, expect);
  await addEmp.addEmployee("Test", "User");

})

test("Verify if able to add job recruitment", async()=>{

  const vacancy = new AddVacancy(page, expect);
  await vacancy.addVacancy("Test Engineer", "Orange Test")
  await vacancy.searchVacancy("Test Engineer", "Orange Test")
  
})
