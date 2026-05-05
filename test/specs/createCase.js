
// import CaseProcedures from "../pageobjects/caseProcedures.js";
// import Case from "../pageobjects/case.js";
// import { privateInfo } from "../../privateInfo.js"
// import LoginPage from "../pageobjects/login.js";
// import Helpers from "../pageobjects/helpers.js";

// describe("Tests Create New Case Functionality", () => {
//   before(async () => {
//     await LoginPage.openLogin();
//     await LoginPage.login(privateInfo.username, privateInfo.password);
//   });
//   it("Positive Test: Create Case Button working", async () => {
//     await Case.button.click();
//     await Helpers.assertsExistText(Case.title, "New Case");
//   });
//   it("Positive Test: Billing Toggle to Fixed Rate", async () => {
//     // await Case.button.click();
//     await Case.billingToggle.click()
//     await browser.pause(3000)
//     await expect(Case.fixedFeeInput).toExist()
//   });
//   it("Positive Test: Billing Toggle to Estimated Hours", async () => {
//     // await Case.button.click();
//     await Case.billingToggle.click()
//     await browser.pause(3000)
//     await expect(Case.estHours).toExist()
//   });
// //   it("Positive Test: Assign A user, then remove- GOOD", async () => {
// //     // await Case.button.click();
// //     await CaseProcedures.assignUser();
// //     await Case.deleteAssignedUser.click();
// //     await Helpers.assertsExistText(Case.checkAssignedTo, "");
// //   });
//     // it("Positive Test: Fills out everything in the form", async () => {
//     //   await browser.refresh();
//     //   await CaseProcedures.assignUser();
//     //   await CaseProcedures.caseType();
//     //   await CaseProcedures.caseStatus();
//     //   await Case.descriptionTextbox.setValue("Just description");
//     //   await Case.overviewTextbox.setValue("just a value");
//     //   await Case.notesTextbox.setValue("notessss");
//     //   await CaseProcedures.createEvent();
//     //   await CaseProcedures.affiliatedUser();
//     //   await browser.refresh();
//     //   // const thingy = "This Case Name is a Test";
//     //   await Case.caseName.setValue(CaseProcedures.caseName);
//     //   await CaseProcedures.chooseDate();
//     //   await Case.retainedBy.click();
//     //   await Case.selectRandomOption();
//     //   await Case.createCaseBtn.click();
//     //   await expect($(`=${CaseProcedures.caseName}`)).toBeDisplayed();
//     // });
// //   it("Positive Test: Add an Event, then remove- GOOD", async () => {
// //     await CaseProcedures.createEvent();
// //     await Case.deleteFirstEvent();
// //     await Helpers.assertsExistText(
// //       Case.noEventsText,
// //       "No Events Scheduled yet",
// //     );
// //   });
//     // it("Negative Test: Input unrequired fields, then save- GOOD", async () => {
//     //   await browser.refresh();
//     //   await CaseProcedures.assignUser();
//     //   await CaseProcedures.caseType();
//     //   await CaseProcedures.caseStatus();
//     //   await Case.descriptionTextbox.setValue("Just description");
//     //   await Case.overviewTextbox.setValue("just a value");
//     //   await Case.notesTextbox.setValue("notessss");
//     //   await CaseProcedures.createEvent();
//     //   await CaseProcedures.affiliatedUser();
//     //   await expect(Case.createCaseBtn).toBeDisabled();
//     // });
// //   it("Positive Test: Test Only Required Fields", async () => {
// //     await browser.refresh();
// //     const thingy = "This Case Name is a Test";
// //     await Case.caseName.setValue(thingy);
// //     await Case.retainedDatePicker.click();
// //     await Case.selectDateTest();
// //     await Case.retainedBy.click();
// //     await Case.selectRandomOption();
// //     await Case.createCaseBtn.click();
// //     await expect($(`=${thingy}`)).toBeDisplayed();
// //   });
// //   it("Positive Test: Checks for Retained By dropdown election-DONE", async () => {
// //     //   await browser.refresh();
// //     await Case.retainedBy.click();
// //     const selectedText = await Case.selectRandomOption()
// //     const cleanedText = selectedText.split('\n').pop().trim();
// //     const cardLabel = await $('[data-testid="client-party-dropdown"]').getText();
// //     expect(cardLabel).toEqual(cleanedText);
// //   });
// //   it("Positive Test: Checks for Retained By dropdown CARD-MANUAL?", async () => {
// //     //   await browser.refresh();
// //     await Case.retainedBy.click();
// //     const selectedText = await Case.selectRandomOption()
// //     const cleanedText = selectedText.split('\n').pop().trim();
// //     const cardLabel = await $('[id^="infolabel"]').getText();
// //     expect(cardLabel).toEqual(cleanedText);
// //   });
//   // it("Positive Test: Check for Adding all Affiliated users and removing", async () => {
//   //   await Case.addAffiliated.click();
//   //   await Case.selectAllAffiliatedParties();
//   //   await Case.removeAllAffiliatedParties();

//   //   const remainingParties = await $$(
//   //     '[data-testid="party-control-dismiss-button"]',
//   //   );
//   //   await expect(remainingParties.length).toBe(0);
//   // });
// //   it("Negative Test: Input more than 2000 characters in notes textbox", async () => {
// //     const over2000chars = "a".repeat(2001);
// //     await Case.notesTextbox.setValue(over2000chars);
// //     const actualValue = await Case.notesTextbox.getValue();
// //     await expect(actualValue.length).toBeLessThanOrEqual(2000);
// //   });
// //     it("Positive Test: Input more than 200 characters in description textbox", async () => {
// //       const over200chars = "a".repeat(201);
// //       await Case.descriptionTextbox.setValue(over200chars);

// //       const actualValue = await Case.descriptionTextbox.getValue();
// //       await expect(actualValue.length).toBeLessThanOrEqual(200);
// //     });
//     // it("Positive Test: Inputs more than 2000 charachters into the Overview textbox", async () => {
//     //   const over2000chars = "a".repeat(2001);
//     //   await Case.overviewTextbox.setValue(over2000chars);

//     //   const actualValue = await Case.overviewTextbox.getValue();
//     //   await expect(actualValue.length).toBeLessThanOrEqual(2000);
//     // });
// //   it("Positive Test: Assign All users, then remove- GOOD- rewrite test case", async () => {
// //     await Case.assignTo.click();
// //     await Case.selectAllUsers();
// //     await Case.removeAllUsers();
// //     const assignedToContent = await $(
// //       '[data-testid="case-assigned-to-content"]',
// //     );
// //     const remainingUsers = await assignedToContent.$$(
// //       '[data-testid="person-control-delete-button"]',
// //     );
// //     await expect(remainingUsers.length).toBe(0);
// //   });
// //   it("Positive Test: Reload browser", async () => {
// //     await browser.refresh();
// //     const thingy = "This Case Name";
// //     await Case.caseName.setValue(thingy);
// //     await browser.refresh();
// //     await expect($(`=${thingy}`)).not.toExist();
// //   });
// });