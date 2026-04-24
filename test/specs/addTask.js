import { expect } from "@wdio/globals";
import { browser } from "@wdio/globals";
import AddTask from "../pageobjects/task.js";
import Case from "../pageobjects/case.js";
import SecureMenu from "../pageobjects/SecureMenu.js";
import LoginPage from "../pageobjects/login.js";
import SecurePage from "../pageobjects/secure.page.js";
import Helpers from "../pageobjects/helpers.js";

//Worked on my lenove
describe("Add Task Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
  });
  //   it("Positive Test: Task without a Milestone in file ", async () => {
  //     const taskName = "AUTOTEST Negative Task " + Date.now();

  //     await AddTask.addTaskBtn.click();
  //     await browser.pause(1000);

  //     // type task name
  //     await AddTask.taskToComplete.click();
  //     await browser.pause(500);
  //     await AddTask.taskToComplete.clearValue();
  //     await browser.keys(taskName);
  //     await browser.pause(500);

  //     // select Eevee case which has no assign to or milestones
  //     await AddTask.caseInput.click();
  //     await browser.pause(1000);
  //     await browser.execute(
  //       (el) => el.click(),
  //       await $(
  //         '[data-testid="case-filter-menu-9b907304-b1d1-4625-b2fc-b9d5daa43328-option"]',
  //       ),
  //     );
  //     await browser.pause(1000);

  //     // wait for save button to be enabled then save
  //     await browser.waitUntil(
  //       async () =>
  //         await $('[data-testid="task-dialog-save-button"]').isEnabled(),
  //       { timeout: 5000, timeoutMsg: "Save button never became enabled" },
  //     );
  //     await $('[data-testid="task-dialog-save-button"]').click();
  //     await browser.pause(1000);

  //     // assert the alert appears
  //     await Case.assertsExistText(
  //       $(".fui-MessageBarTitle"),
  //       "Missing Required Information",
  //     );
  //   });

  it("Positive Test: Input only required information with available Milestones and AssignTo-BUG", async () => {
    const taskName = "AUTOTEST Task " + Date.now();
    await AddTask.addTaskBtn.click();
    await browser.pause(1000);

    // type task name
    await AddTask.taskToComplete.setValue(taskName);
    await browser.pause(1000);

    // select John doe case specifically
    await AddTask.caseInput.click();
    await browser.pause(1000);
    await browser.execute(
      (el) => el.click(),
      await $(
        '[data-testid="case-filter-menu-e3eba00b-1d70-4a5e-92a4-61111f5521f8-option"]',
      ),
    );
    await browser.pause(2000);

    // select assign to
    await browser.execute((el) => el.click(), await AddTask.assignTo);
    await browser.pause(1000);
    await AddTask.selectRandomUserOption();
    await browser.pause(1000);

    // select milestone
    await AddTask.milestone.click();
    await browser.pause(1000);
    await AddTask.selectRandomOption();
    await browser.pause(1000);

    // wait for save button to be enabled then save
    await browser.waitUntil(
      async () =>
        await $('[data-testid="task-dialog-save-button"]').isEnabled(),
      { timeout: 5000, timeoutMsg: "Save button never became enabled" },
    );
    await $('[data-testid="task-dialog-save-button"]').click();
    await browser.pause(1000);

    // assert task appears in dashboard
    await expect($(`span=${taskName}`)).toBeDisplayed();
  });

  // it('Positive Test: Should click on "All Items" link taking you to homepage where "All Items" reside', async () => {
  //     await Helpers.toClick(Cart.shoppingCart)
  //     await Helpers.toClick(Menu.hamMenu);
  //     await Helpers.toClick(Menu.allItems)
  //     await Helpers.asserts(SecureMenu.getAllItems,'Products')
  // })
  // it('Positive Test: Reset Sidebar empties cart', async () => {
  //     await Helpers.toClick(Menu.addToCart)
  //     await Helpers.toClick(Menu.resetAppState)
  //     await Helpers.asserts(SecureMenu.getReset,'')
  // })
  // it('Positive Test: Checks hover state for all the Links in the Ham Menu', async () => {
  //     await Helpers.checkHoverAllAssertion(Menu.allHamLinkBtns)
  // })
  // it('Positive Test: Clicks on Delete Button in Hamburger Menu', async () => {
  //     await Helpers.toClick(Menu.deleteBtn)
  //     await Helpers.asserts(SecurePage.homePage,'Open Menu')
  // })
  // it('Positive Test: Clicks on Logout Button', async () => {
  //     await Helpers.toClick(Menu.logout)
  //     await Helpers.asserts(SecureMenu.getLogout,'')
  // })
  //  it('Positive Test: Clicks on About Link and checks for new browser to open', async () => {
  //     await Helpers.toClick(Menu.about)
  //     await expect(browser).toHaveUrl('https://saucelabs.com/');
  //     await browser.back();
  // })
});
