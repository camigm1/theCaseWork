// import AddTask from '../pageobjects/task.js'
// import Case from '../pageobjects/case.js'
// import SecureCart from '../pageobjects/SecureCart.js'
// import LoginPage from '../pageobjects/login.js'
// import Helpers from '../pageobjects/helpers.js';




// describe('Tests Create New Case Functionality', () => {
//    before(async () => {
//         await LoginPage.openLogin();
//         await LoginPage.login('CAMILA.GALLEGOS9317@STU.MTEC.EDU', 'SoftwareQA!');
//     });
//     it('Positive Test: Assign A user, then remove- GOOD', async () => {
//        await Case.button.click()
//        await Case.assignTo.click()
//        await Case.clickRandomUser()
//        await Case.selectUser.click()
//        await Case.deleteAssignedUser.click()
//        await Helpers.assertsExistText(Case.checkAssignedTo,'')
//     })
//     // it('Positive Test: Add an Event, then remove- GOOD- BUG', async () => {
//     //     //  await Case.button.click()
//     //      await Case.addEvent.click();
//     //      await Case.eventInput.setValue('example input')
//     //      await Case.eventDate.click();
//     //      await Case.selectRandomFutureDate()
//     //      await Case.eventSave.click();
//     //      await Case.deleteFirstEvent();
//     //      await Helpers.assertsExistText(Case.noEventsText,'No Events Scheduled yet')
//     // })
// //    it('Negative Test: Input unrequired fields, then save- GOOD', async () => {
// //         await browser.refresh();
// //        await Case.assignTo.click()
// //        await Case.clickRandomUser()
// //        await Case.selectUser.click()
// //         await Case.caseType.click();
// //         await Case.selectRandomOption()
// //         await Case.caseStatus.waitForDisplayed({ timeout: 5000 });
// //         await Case.caseStatus.click();
// //         await Case.selectRandomOption();
// //         await Case.billingToggle.click();
// //         await Case.fixedFeeInput.waitForDisplayed({ timeout: 5000 });
// //         await Case.fixedFeeInput.setValue('100.00');
// //         await Case.descriptionTextbox.setValue('Just description');
// //         await Case.overviewTextbox.setValue('just a value');
// //          await Case.addEvent.click();
// //          await Case.eventInput.setValue('example input')
// //          await Case.eventDate.click();
// //         await browser.pause(2000);
// //         await Case.selectRandomFutureDate();
// //         await Case.eventSave.click();
// //         await Case.addAffiliated.click();
// //         await Case.clickRandomUser();
// //         await Case.confirmAffiliated.click();
// //         await Case.notesTextbox.setValue('notessss')
// //         await expect(Case.createCaseBtn).toBeDisabled();
// //     })
// //    it('Positive Test: Test Only Required Fields- GOOD-NEEDS RECHECK NOW', async () => {
// //         await browser.refresh();
// //         const thingy = 'This Case Name'
// //         await Case.caseName.setValue(thingy)
// //         await Case.retainedDatePicker.click();
// //         await Case.selectRandomFutureDate();
// //         await Case.retainedBy.click();
// //         await Case.selectRandomOption();
// //         await Case.createCaseBtn.click();
// //         await expect($(`=${thingy}`)).toBeDisplayed();
// //     })
//     //  it('Positive Test: Checks for Retained By dropdown election-PROGRESS', async () => {
//     //     await browser.refresh()
//     //     await Case.retainedBy.click();
//     //     const selectedName = await Case.selectRandomMenuOption();
//     //     await expect($(`[aria-label="${selectedName}"]`)).toBeDisplayed();
//     // })
//     // it('Positive Test: Check for Adding all Affiliated users and removing', async () => {
//     //     await Case.addAffiliated.click();
//     //     await Case.selectAllAffiliatedParties();
//     //     await Case.removeAllAffiliatedParties();
//     //     const affiliatedCard = await $('[data-testid="case-affiliated-parties-card"]');
//     //     const remainingParties = await affiliatedCard.$$('[data-testid="party-control-dismiss-button"]');
//     //     await expect(remainingParties.length).toBe(0);
//     // })
//    it('Negative Test: Input more than 2000 characters in notes textbox', async () => {
//         const over2000chars = 'a'.repeat(2001);
//         await Case.notesTextbox.setValue(over2000chars);
    
//         const actualValue = await Case.notesTextbox.getValue();
//         await expect(actualValue.length).toBeLessThanOrEqual(2000);
// });
//     it('Positive Test: Input more than 200 characters in description textbox', async () => {
//        const over200chars = 'a'.repeat(201);
//         await Case.descriptionTextbox.setValue(over200chars);
    
//         const actualValue = await Case.descriptionTextbox.getValue();
//         await expect(actualValue.length).toBeLessThanOrEqual(200);
//     })
//     it('Positive Test: Inputs more than 2000 charachters into the Overview textbox', async () => {
//         const over2000chars = 'a'.repeat(2001);
//         await Case.overviewTextbox.setValue(over2000chars);
    
//         const actualValue = await Case.overviewTextbox.getValue();
//         await expect(actualValue.length).toBeLessThanOrEqual(2000);
//     })
//     it('Positive Test: Assign All users, then remove- GOOD- rewrite test case', async () => {
//         await Case.assignTo.click();
//         await Case.selectAllUsers();
//         await Case.removeAllUsers();
//         const assignedToContent = await $('[data-testid="case-assigned-to-content"]');
//         const remainingUsers = await assignedToContent.$$('[data-testid="person-control-delete-button"]');
//         await expect(remainingUsers.length).toBe(0);
//     })
//     it('Positive Test: Reload browser', async () => {
//         await browser.refresh();
//         const thingy = 'This Case Name'
//         await Case.caseName.setValue(thingy)
//         await browser.refresh();
//         await expect($(`=${thingy}`)).not.toExist();
// })
// })

  