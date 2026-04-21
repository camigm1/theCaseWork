import Menu from '../pageobjects/menu.js'
import Case from '../pageobjects/case.js'
import SecureCart from '../pageobjects/SecureCart.js'
import LoginPage from '../pageobjects/login.js'
import Helpers from '../pageobjects/helpers.js';




describe('Tests Create New Case Functionality', () => {
   before(async () => {
        await LoginPage.openLogin();
        await LoginPage.login('CAMILA.GALLEGOS9317@STU.MTEC.EDU', 'SoftwareQA!');
    });
    it('Positive Test: Assign A user, then remove- GOOD', async () => {
       await Case.button.click()
       await Case.assignTo.click()
       await Case.clickRandomUser()
       await Case.selectUser.click()
       await Case.deleteAssignedUser.click()
       await Helpers.assertsExistText(Case.checkAssignedTo,'')
       
       })
    // it('Positive Test: Add an Event, then remove- GOOD but BUGGY', async () => {
    //     //  await Case.button.click()
    //      await Case.addEvent.click();
    //      await Case.eventInput.setValue('example input')
    //      await Case.eventDate.click();
    //      await Case.selectRandomFutureDate()
    //      await Case.eventSave.click();
    //      await Case.deleteFirstEvent();
    //      await Helpers.assertsExistText(Case.noEventsText,'No Events Scheduled yet')
    // })
//    it('Negative Test: Input all required fields, then save- GOOD', async () => {
//         await browser.refresh();
//        await Case.assignTo.click()
//        await Case.clickRandomUser()
//        await Case.selectUser.click()
//         await Case.caseType.click();
//         await Case.selectRandomOption()
//         await Case.caseStatus.waitForDisplayed({ timeout: 5000 });
//         await Case.caseStatus.click();
//         await Case.selectRandomOption();
//         await Case.billingToggle.click();
//         await Case.fixedFeeInput.waitForDisplayed({ timeout: 5000 });
//         await Case.fixedFeeInput.setValue('100.00');
//         await Case.descriptionTextbox.setValue('Just description');
//         await Case.overviewTextbox.setValue('just a value');
//          await Case.addEvent.click();
//          await Case.eventInput.setValue('example input')
//          await Case.eventDate.click();
//         await browser.pause(2000);
//         await Case.selectRandomFutureDate();
//         await Case.eventSave.click();
//         await Case.addAffiliated.click();
//         await Case.clickRandomUser();
//         await Case.confirmAffiliated.click();
//         await Case.notesTextbox.setValue('notessss')
//         await expect(Case.createCaseBtn).toBeDisabled();
//     })
//    it('Positive Test: Test Only Required Fields- GOOD', async () => {
//         await browser.refresh();
//         const thingy = 'This Case Name'
//         await Case.caseName.setValue(thingy)
//         await Case.retainedDatePicker.click();
//         await Case.selectRandomFutureDate();
//         await Case.retainedBy.click();
//         await Case.selectRandomOption();
//         await Case.createCaseBtn.click();
//         await expect($(`=${thingy}`)).toBeDisplayed();
//     })
     it('Positive Test: Checks for Retained By dropdown election', async () => {
        await browser.refresh()
        await Case.retainedBy.click();
       const selectedName = await Case.selectRandomOption();

// assert it appears in the card
await expect($(`[aria-label="${selectedName}"]`)).toBeDisplayed();
    })
//     it('Positive Test: Checks functionality of continue shopping button', async () => {
//         await Helpers.toClick(Cart.continueShopping)
//         await Helpers.asserts(SecureCart.getContinueShopping,'Products')
//     })
//     it('Positive Test: Clicks on item inside the Cart to expand detail', async () => {
//         await Cart.addAndNavigateToCart()
//         await Helpers.toClick(Cart.itemInCartClick)
//         await Helpers.asserts(SecureCart.inventoryName,'Sauce Labs Bike Light')
//     })
//     it('Positive Test: Clicks on Random Item to add to Cart', async () => {
//         await Cart.resetCart()
//         await Cart.addItemToCart(Cart.allAddToCartButtons)
//         await Helpers.toClick(Cart.shoppingCart)
//         await Helpers.asserts(Cart.itemInCart,'1')
//     })
//     it('Positive Test: Adds a random number of items to cart, then deletes', async () => {
//         await Cart.resetCart()
//         const itemsAdded = await Cart.grabRandNumArr()
//         await Helpers.toClick(Cart.shoppingCart)
//         await Helpers.asserts(Cart.itemInCart,String(itemsAdded))
//         await Helpers.toClick(Cart.shoppingCart)
//         await Cart.removeRandNumArr(itemsAdded)
//         await expect(Cart.itemInCart).not.toBeExisting()
//     })
//     it('Positive Test: Clicks on All items and adds them to Cart', async () => {
//         await Cart.resetCart();
//         await Cart.addAllToCart()
//         await Helpers.asserts(Cart.itemInCart,Cart.allAddToCartButtons.length.toString())
//     })
//     it('Positive Test: Adds and Checks for correct added item inside Cart Dinamically', async () => {
//         await Cart.resetCart()
//         const itemName = await Cart.dinamicAdd()
//         await Helpers.toClick(Cart.shoppingCart)
//         const cartItemNames = await Cart.cartMap()
//         await Helpers.assertItemInCart(itemName,cartItemNames)
        
//     })
//     it('Negative Test: Add items to Cart then navigate back and forth with browser', async () => {
//         await Cart.resetCart();
//         await Cart.addAndNavigateToCart();
//         await browser.back();
//         await browser.forward();
//         await Helpers.asserts(SecureCart.sameItemCart, "Remove")
//     })
//     it('Negative Test: Add items to Cart then logout and log back in then check cart if item still there', async () => {
//         await Cart.resetCart();
//         await Cart.addItemToCart(Cart.allAddToCartButtons);
//         await Cart.logoutFromPage()
//         await LoginPage.openLogin()
//         await LoginPage.login('standard_user', 'secret_sauce')
//         await Helpers.asserts(Cart.shoppingCart, "1")
//     })
//     it('Negative Test: Attempt to access /cart.html while logged out', async () => {
//         await Cart.resetCart();
//         await Cart.logoutFromPage()
//         await Cart.openCart()
//         await Helpers.asserts(Cart.errorBtn,"Epic sadface: You can only access '/cart.html' when you are logged in.")
//     })
})

  