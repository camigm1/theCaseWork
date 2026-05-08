import { expect } from "@wdio/globals";
import { browser } from "@wdio/globals";
import { privateInfo } from "../../privateInfo.js";
import AddTask from "../pageobjects/task.js";
import TaskProcedures from "../pageobjects/addTaskProcedures";
import Case from "../pageobjects/case.js";
import LoginPage from "../pageobjects/login.js";
import Helpers from "../pageobjects/helpers.js";

describe("Add Task Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login(privateInfo.username, privateInfo.password);
  });
  it("Positive Test:  Add Task Button ", async () => {
    await AddTask.addTaskBtn.click();
    await Helpers.assertsExistText($("div=Add Task"), "Add Task");
  });
  it("Positive Test: Task without choosing a Milestone- button not turning blue ", async () => {
    await TaskProcedures.firsttaskTextbox();
    // await TaskProcedures.assignToTask();
    await TaskProcedures.specificCase();
    await AddTask.saveBtn.click();
    await expect(AddTask.saveBtn).toBeDisabled();
  });
  it("Positive Test: Input only required information with available Milestones and AssignTo", async () => {
    const taskName = "AUTOTEST Task " + Date.now();
    await browser.refresh();
    await AddTask.addTaskBtn.click();
    await AddTask.title.click();
    await AddTask.title.setValue(taskName)
    await browser.pause(1000);
    await AddTask.taskDescription.setValue(taskName);
    await AddTask.selectFirstCase();
    await TaskProcedures.makeNote();
    await TaskProcedures.assignToTask();
    await TaskProcedures.milestonesTask();
    await AddTask.saveBtn.click();
    await expect($('.fui-Toast')).toBeDisplayed({ timeout: 30000 });

  });
  it("Positive Test: Should click on Due By Functionality and Save", async () => {
    await browser.refresh();
    const taskName = "AUTOTEST Task " + Date.now();
    await AddTask.addTaskBtn.click();
    await AddTask.title.click()
    await AddTask.title.setValue(taskName)
    await AddTask.taskDescription.setValue(taskName);
    await TaskProcedures.makeNote()
    await AddTask.selectFirstCase()
   await browser.waitUntil(
         async () => await AddTask.milestone.isDisplayed(),
         {
           timeout: 30000,
           timeoutMsg: "Milestone dropdown failed to display after 30s",
           interval: 500,
         }
       );
    
    await TaskProcedures.dueByDate();
    await TaskProcedures.milestonesTask();
    await AddTask.saveBtn.click();
    await expect($(".fui-Badge*=Due by")).toBeDisplayed();
    await expect($(`span=${taskName}`)).toBeDisplayed();
  });
  // it("Positive Test: Case Dropdown functionality", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   // await AddTask.caseInput.click();
  //   const dropdownWordTest = await AddTask.selectFirstCase()
  //   // const dropdownWord = await AddTask.selectRandomCase();
  //   await expect(AddTask.caseInput).toHaveText(dropdownWordTest);
  // });
  // it("Positive Test: Test the Assign to dropdown functionality", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   const word = await TaskProcedures.assignToTask();
  //   await expect(AddTask.assignTo).toHaveText(word);
  // });
  // it("Positive Test: Test milestone dropdown functionality", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await TaskProcedures.specificCase();
  //   const miles = await TaskProcedures.milestonesTask();
  //   await expect(AddTask.milestone).toHaveText(miles);
  // });
  // it("Negative Test: Add More than 500 words to the Description TextBox", async () => {
  //   await AddTask.addTaskBtn.click();
  //   const over500chars = "a".repeat(501);
  //   await AddTask.taskDescription.setValue(over500chars);
  //   const actualValue = await AddTask.taskDescription.getValue();
  //   await expect(actualValue.length).toBeLessThanOrEqual(500);
  // });
  // it("Negative Test: Add More than 800 words to the Results TextBox", async () => {
  //   // await AddTask.addTaskBtn.click();
  //   const over800chars = "a".repeat(801);
  //   await AddTask.results.setValue(over800chars);
  //   const actualValue = await AddTask.taskDescription.getValue();
  //   await expect(actualValue.length).toBeLessThanOrEqual(800);
  // });
  // it("Negative Test: Input Non-required fields, then try to Save", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.results.setValue('Adding results')
  //   await AddTask.category.setValue('Categoriess')
  //   await AddTask.effort.setValue(123)
  //   await AddTask.billable.click();
  //   await TaskProcedures.dueByDate();
  //   await expect(AddTask.saveBtn).toBeDisabled();
  // });
  // it("Positive Test: Click on Cancel Button without input", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.cancelBtn.click();
  //   const dialog = await $('[role="dialog"]');
  //   await expect(dialog).not.toBeDisplayed();
  // });
  // it("Positive Test: Click on Cancel Button After adding Title", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.title.setValue('A Title')
  //   await AddTask.cancelBtn.click();
  //   await AddTask.confirmationCancelYes.click();
  //   const dialog = await $('[role="dialog"]');
  //   await expect(dialog).not.toBeDisplayed();
  // });
  // it("Positive Test: Reload while filling out task form", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await TaskProcedures.specificCase();
  //   await browser.refresh();
  //   const dialog = await $('[role="dialog"]');
  //   await expect(dialog).not.toBeDisplayed();
  // });
});
