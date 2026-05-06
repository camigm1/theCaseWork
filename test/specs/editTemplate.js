// import Template from "../pageobjects/template.js";
// import TemplateProcedures from "../pageobjects/templateProcedures.js";
// import LoginPage from "../pageobjects/login.js";
// import Helpers from "../pageobjects/helpers.js";
// import Case from "../pageobjects/case.js";
// import { privateInfo } from "../../privateInfo.js";

// describe("Edit Template Functionality", () => {
//   before(async () => {
//     await LoginPage.openLogin();
//     await LoginPage.login(privateInfo.username, privateInfo.password);
//   });
//   it("Positive Test: Input Status Checkbox", async () => {
//     await Template.templateDashboardBtn.click();
//     await TemplateProcedures.navigateAndOpen();
//     await Template.statusdropdownBtn.click();
//     const checkboxes = await insights.checkboxes;
//     const randomIndex = Math.floor(Math.random() * checkboxes.length);
//     await checkboxes[randomIndex].click();
//     await expect(checkboxes).toBeChecked();
//   });
//   it("Positive Test: Input required Information and Check Back to Templates functionality", async () => {
//     await Template.templateDashboardBtn.click();
//     await TemplateProcedures.navigateAndOpen();
//     await Template.name.setValue("Pikachu version");
//     await Template.templateDescription.setValue("description");
//     await Template.saveTemplate.click();
//     await Template.backToTemplates.click();
//     await expect($("span=Pikachu version")).toBeDisplayed();
//   });
//   it("Positive Test: Three dots Pencil", async () => {
//     await TemplateProcedures.navigateAndOpen();
//     //    await Helpers.assertsExistText(Template.caseType(),'Select Case Type')
//   });
//   it("Positive Test: click on cancel button functionality", async () => {
//     await TemplateProcedures.navigateAndOpen();
//     const templateName = "AUTOTEST Task " + Date.now();
//     await Template.templateFieldName.setValue(templateName);
//     await Template.cancel.click();
//     await expect($(`span=${templateName}`)).not.toBeDisplayed();
//   });
//   it("Positive Test: Erase both required fields", async () => {
//     await TemplateProcedures.navigateAndOpen();
//     await Template.templateFieldName.setValue("");
//     await Template.templateDescription.setValue("");
//     await Template.saveTemplate.click();
//     await expect(Template.saveTemplate).toBeDisabled();
//   });
//   it("Positive Test: Add a Milestone", async () => {
//     await TemplateProcedures.navigateAndOpen();
//     await TemplateProcedures.createMilestone(TemplateProcedures.mileName);
//     await expect($(`span=${TemplateProcedures.mileName}`)).toBeDisplayed();
//   });
//   it("Positive Test: Remove Milestone", async () => {
//     const beforeRows = await Template.milestoneRowsBefore;
//     const beforeCount = beforeRows.length;
//     //   await TemplateProcedures.navigateAndOpen();
//     await Template.milestoneDots.click();
//     await Template.milestoneRemove.click();
//     await Template.milestoneConfirmDelete.click();
//     await browser.pause(1500);
//     // wait for dialog to fully close
//     //assert that the milestone is not showing- one less in the list? or name removed?
//     const afterRows = await Template.milestoneRows;
//     const afterCount = afterRows.length;
//     expect(afterCount).toBe(beforeCount - 1);
//   });
//   it("Positive Test: Edit case template description with more than 200 words", async () => {
//     const over200chars = "a".repeat(201);
//     await Template.templateDescription.setValue(over200chars);
//     const actualValue = await Template.templateDescription.getValue();
//     await expect(actualValue.length).toBeLessThanOrEqual(200);
//   });
//   it("Positive Test: Test default text with more than 200 words", async () => {
//     const over200chars = "a".repeat(201);
//     await Template.templateDefaultText.setValue(over200chars);
//     const actualValue = await Template.templateDefaultText.getValue();
//     await expect(actualValue.length).toBeLessThanOrEqual(200);
//   });
//   it("Positive Test: Initial notes word limit SHOULD be 2000-REPORTED BUG", async () => {
//     const over2000chars = "a".repeat(2001);
//     await Template.notes.setValue(over2000chars);
//     const actualValue = await Template.notes.getValue();
//     await expect(actualValue.length).toBeLessThanOrEqual(2000);
//   });
//   it("Positive Test: Add an Event ", async () => {
//     const eventName = "this event name";
//     await TemplateProcedures.addEvent(eventName);
//     await Template.saveTemplate.click();
//     await expect($(`span=${eventName}`)).toBeDisplayed();
//   });
//   it("Positive Test: Remove an Event- NEEDS recheck ", async () => {
//     const eventName2 = "another";
//     await TemplateProcedures.addEvent(eventName2);
//     await TemplateProcedures.removeEvent();
//     await expect($(`span=${eventName2}`)).not.toBeDisplayed();
//   });
//   it("Positive Test: Engagement Template Dropdown", async () => {
//     await TemplateProcedures.navigateAndOpen();
//     await Template.engagement.click();
//     await browser.pause(3000);
//     const selected = await Case.selectRandomOption();
//     await expect(Template.engagement).toHaveText(selected);
//   });
//   it("Positive Test: Reload Template", async () => {
//     await Template.name.setValue(Template.dinamicName);
//     await browser.refresh();
//     await expect($(`=${Template.dinamicName}`)).not.toExist();
//   });
// });
