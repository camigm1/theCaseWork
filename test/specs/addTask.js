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
    it('Positive Test: Input only required information ', async () => {
       await AddTask.addTaskBtn.click();
       await AddTask.caseInput.click();
       await browser.pause(3000);
       await AddTask.selectRandomCaseOption();
        await browser.pause(3000);
        await AddTask.assignTo.click();
        await browser.pause(3000);
        await Case.selectRandomMenuOption();
        await browser.pause(3000);
        await AddTask.milestone.click();
        await browser.pause(3000);
        await Case.selectRandomMenuOption();
    })
    // it('Positive Test: Should Open the Hamburger Menu', async () => {
    //     await Helpers.asserts(SecureMenu.getMenu,'All Items')
    // })
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
    
   })

  