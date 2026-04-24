import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import AddTask from '../pageobjects/task.js'
import Case from '../pageobjects/case.js'
import SecureMenu from '../pageobjects/SecureMenu.js'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/secure.page.js'
import Helpers from '../pageobjects/helpers.js';


describe('Add Task Functionality', () => {
       before(async () => {
        await LoginPage.openLogin();
        await LoginPage.login('CAMILA.GALLEGOS9317@STU.MTEC.EDU', 'SoftwareQA!');
         });
    // it('Positive Test: Task without a Milestone in file ', async () => {
    //    await AddTask.addTaskBtn.click();
    //    await browser.pause(1000);
    //    await AddTask.taskToComplete.click();
    //     await browser.pause(500);
    //     await AddTask.taskToComplete.clearValue();
    //     await browser.keys('AUTOTEST Negative Task ' + Date.now());
    //     await browser.pause(500);

    // // select Eevee case which has no assign to or milestones
    //     await AddTask.caseInput.click();
    //     await browser.pause(1000);
    //     await browser.execute((el) => el.click(),
    //     await $('[data-testid="case-filter-menu-9b907304-b1d1-4625-b2fc-b9d5daa43328-option"]')
    // );
    //     await browser.pause(1000);
    // // wait for save button to be enabled then save
    //     await browser.waitUntil(
    //     async () => await AddTask.saveBtn.isEnabled(),
    //     { timeout: 5000, timeoutMsg: 'Save button never became enabled' }
    // );
    //     await AddTask.saveBtn.click();
    //     await browser.pause(2000);


    //     const isEnabled = await $('[data-testid="task-dialog-save-button"]').isEnabled();
    //     console.log('Save button enabled:', isEnabled);
    // // assert the alert appears
    //     await Helpers.assertsExistText(
    //     $('.fui-MessageBarTitle'),
    //     'Missing Required Information'
    // );   
    // })
//     it('Positive Test: Input only required information with available Milestones and AssignTo-BUG', async () => {
//     const taskName = 'AUTOTEST Task ' + Date.now();
//     await AddTask.addTaskBtn.click();
//     await browser.pause(1000);

//     // type task name
//     await AddTask.taskToComplete.setValue(taskName);
//     await browser.pause(1000);

//     // select John doe case specifically
//     await AddTask.caseInput.click();
//     await browser.pause(1000);
//     await browser.execute((el) => el.click(),
//         await $('[data-testid="case-filter-menu-4ee4d161-1c99-4a1e-8730-59e8d951de1f-option"]')
//     );
//     await browser.pause(2000);

//     // select assign to
//     await browser.execute((el) => el.click(), await AddTask.assignTo);
//     await browser.pause(1000);
//     await AddTask.selectRandomUserOption();
//     await browser.pause(1000);

//     // select milestone
//     await AddTask.milestone.click();
//     await browser.pause(1000);
//     await AddTask.selectRandomOption();
//     await browser.pause(1000);

//     // wait for save button to be enabled then save
//     await browser.waitUntil(
//         async () => await $('[data-testid="task-dialog-save-button"]').isEnabled(),
//         { timeout: 50000, timeoutMsg: 'Save button never became enabled' }
//     );
//     await $('[data-testid="task-dialog-save-button"]').click();
//     await browser.pause(1000);

//     // assert task appears in dashboard
//     await expect($(`span=${taskName}`)).toBeDisplayed();
// });

    it('Positive Test: Should click on Due By Functionality and Save', async () => {
       const taskName = 'AUTOTEST Task ' + Date.now();
        await AddTask.addTaskBtn.click();
        await browser.pause(1000);

        // type task name
        await AddTask.taskToComplete.setValue(taskName);
        await browser.pause(1000);
    // select John doe case specifically
        await AddTask.caseInput.click();
        await browser.pause(1000);
        await browser.execute((el) => el.click(),
        await $('[data-testid="case-filter-menu-4ee4d161-1c99-4a1e-8730-59e8d951de1f-option"]')
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
        // Click on Due By
        await AddTask.dueBy.click();
        await AddTask.datePicker.click();
        await browser.pause(9000);
        await Case.selectRandomFutureDate();

        // wait for save button to be enabled then save
        await browser.waitUntil(
        async () => await $('[data-testid="task-dialog-save-button"]').isEnabled(),
        { timeout: 50000, timeoutMsg: 'Save button never became enabled' }
        );
        await AddTask.saveBtn.click();
        await browser.pause(1000);

        // assert task appears in dashboard
        await expect($('.fui-Badge*=Due by')).toBeDisplayed();
        await expect($(`span=${taskName}`)).toBeDisplayed();


    })
    it('Positive Test: Case Dropdown functionality', async () => {
        await browser.refresh();
        await AddTask.addTaskBtn.click();
        await AddTask.caseInput.click();
        const dropdownWord = await AddTask.selectRandomDropdownOption();
        await expect(AddTask.caseInput).toHaveText(dropdownWord);
           
    })
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
    
   })

  