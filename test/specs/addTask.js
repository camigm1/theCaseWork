// import { expect } from "@wdio/globals";
// import { browser } from "@wdio/globals";
// import AddTask from "../pageobjects/task.js";
// import TaskProcedures from "../pageobjects/addTaskProcedures";
// import Case from "../pageobjects/case.js";
// import LoginPage from "../pageobjects/login.js";
// import Helpers from "../pageobjects/helpers.js";

// describe("Add Task Functionality", () => {
//   before(async () => {
//     await LoginPage.openLogin();
//     await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
//   });
//   it("Positive Test: Task without choosing a Milestone- button not turning blue ", async () => {
//     await AddTask.addTaskBtn.click();
//     await TaskProcedures.taskTextbox();
//     await TaskProcedures.specificCase();
//     await TaskProcedures.firsttaskTextbox();
//     await browser.pause(2000);
//     await AddTask.saveBtn.click();
//    await expect(AddTask.saveBtn).toBeDisabled();
//   });
// //   it("Positive Test: Task with all required Info except Assign To- BUG ", async () => {
// //     await AddTask.addTaskBtn.click();
// //     await TaskProcedures.firsttaskTextbox();
// //     // await TaskProcedures.taskTextbox();
// //     await TaskProcedures.eeveeCase();
// //     // await TaskProcedures.milestonesTask();
// //     await browser.pause(2000);
// //     await AddTask.saveBtn.click();
// //     // assert the alert appears
// //     await expect(AddTask.saveBtn).toBeDisabled();
// //   });
// //   it("Positive Test: Input only required information with available Milestones and AssignTo", async () => {
// //     const taskName = "AUTOTEST Task " + Date.now();
// //     // await AddTask.addTaskBtn.click();
// //     await browser.pause(1000);
// //     await AddTask.taskToComplete.setValue(taskName);
// //     await browser.pause(1000);
// //     await TaskProcedures.specificCase();
// //     await browser.pause(2000);
// //     await TaskProcedures.assignToTask();
// //     await TaskProcedures.milestonesTask();
// //     await AddTask.saveBtn.click();
// //     await browser.pause(1000);
// //     await expect($(`span=${taskName}`)).toBeDisplayed();
// //   });
// //   it("Positive Test: Should click on Due By Functionality and Save", async () => {
// //     await browser.refresh();
// //     const taskName = "AUTOTEST Task " + Date.now();
// //     await AddTask.addTaskBtn.click();
    
// //     await AddTask.taskToComplete.setValue(taskName);
    
// //     await TaskProcedures.specificCase();
    
// //     await TaskProcedures.assignToTask();
// //     // await TaskProcedures.milestonesTask();
// //     await TaskProcedures.dueByDate();
// //     // wait for save button to be enabled then save
// //     // await browser.waitUntil(async () => await task.saveBtn.isEnabled(), {
// //     //   timeout: 50000,
// //     //   timeoutMsg: "Save button never became enabled",
// //     // });
// //     // await AddTask.saveBtn.click();
// //     // await browser.pause(1000);
// //     // // assert task appears in dashboard
// //     // await expect($(".fui-Badge*=Due by")).toBeDisplayed();
// //     // await expect($(`span=${taskName}`)).toBeDisplayed();
// //   });
// //   it("Positive Test: Case Dropdown functionality", async () => {
// //     await browser.refresh();
// //     await AddTask.addTaskBtn.click();
// //     await AddTask.caseInput.click();
// //     const dropdownWord = await AddTask.selectRandomDropdownOption();
// //     await expect(AddTask.caseInput).toHaveText(dropdownWord);
// //   });
//   // it("Positive Test: Test the Assign to dropdown functionality", async () => {
//   //   const word = await addTaskProcedures.assignToTask();
//   //   //make sure that what's in the input is the same as word?
//   // });
//   // it("Positive Test: Test milestone dropdown functionality", async () => {
//   //   await TaskProcedures.specificCase();
//   //   await TaskProcedures.milestonesTask();
//   //   //asserting that the milestone is in the dropdown field
//   // });
//   // it("Positive Test: Add Mores than 500 words to the Task to Complete TextBox", async () => {
//   //   const over500chars = "a".repeat(501);
//   //   await Case.descriptionTextbox.setValue(over500chars);

//   //   const actualValue = await Case.descriptionTextbox.getValue();
//   //   await expect(actualValue.length).toBeLessThanOrEqual(500);
//   // });
//   // it("Positive Test: Input Non-required fields, then try to Save", async () => {
//   //   await AddTask.billable.click();
//   //   await AddTask.dueBy.click();
//   //   //assert savebtn not enabled
//   // });
//   // it("Positive Test: Click on Cancel Button", async () => {
//   //   await AddTask.addTaskBtn.click();
//   //   await AddTask.cancelBtn.click();
//   //   //assert that window is closed
//   // });
//   // it("Positive Test: Reload while filling out task form", async () => {
//   //   await browser.refresh();
//   //   await TaskProcedures.specificCase();
//   //   await browser.refresh();
//   //   //expect task window to close and not save
//   // });
// });
