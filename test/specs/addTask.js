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
  // it("Positive Test:  Add Task Button ", async () => {
  //   await AddTask.addTaskBtn.click();
  //   await Helpers.assertsExistText($("div=Add Task"), "Add Task");
  // });
  // it("Positive Test: Task without choosing a Milestone- button not turning blue ", async () => {
  //   await TaskProcedures.firsttaskTextbox();
  //   // await TaskProcedures.assignToTask();
  //   await TaskProcedures.specificCase();
  //   await AddTask.saveBtn.click();
  //   await expect(AddTask.saveBtn).toBeDisabled();
  // });
  // it("Positive Test: Task with all required Info except Assign To-(specific case gives me an Assign To) BUG?", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await TaskProcedures.firsttaskTextbox();
  //   await TaskProcedures.specificCase();
  //   await TaskProcedures.milestonesTask();
  //   await AddTask.saveBtn.click();
  //   await expect(AddTask.saveBtn).toBeDisabled();
  // });
  // it("Positive Test: Task with all required Info except Assign To-(specific case gives me an Assign To) BUG?", async () => {
  //   await AddTask.addTaskBtn.waitForDisplayed({ timeout: 5000 });
  //   await TaskProcedures.firsttaskTextbox();
  //   await AddTask.caseInput.waitForDisplayed({ timeout: 5000 });
  //   await AddTask.selectFirstCase();
  //   await AddTask.milestone.waitForDisplayed({ timeout: 5000 });
  //   await TaskProcedures.milestonesTask();
  //   await AddTask.saveBtn.waitForDisplayed({ timeout: 5000 });
  //   // await AddTask.saveBtn.click();
  //   // await expect(AddTask.saveBtn).toBeDisabled();
  //   await expect(AddTask.saveBtn).toBeEnabled();
  // });
  // it("Positive Test: Input only required information with available Milestones and AssignTo", async () => {
  //   const taskName = "AUTOTEST Task " + Date.now();
  //   // await browser.refresh();//only if this is first
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.taskToComplete.setValue(taskName);
  //   await AddTask.selectFirstCase();
  //   // await TaskProcedures.assignToTask();
  //   await TaskProcedures.milestonesTask();
  //   await AddTask.saveBtn.click();
  //   await expect($(`span=${taskName}`)).toBeDisplayed();
  // });
  // it("Positive Test: Should click on Due By Functionality and Save", async () => {
  //   await browser.refresh();
  //   const taskName = "AUTOTEST Task " + Date.now();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.taskToComplete.setValue(taskName);
  //   await AddTask.selectFirstCase();
  //   // await TaskProcedures.assignToTask();
  //   await TaskProcedures.milestonesTask();
  //   await TaskProcedures.dueByDate();
  //   await AddTask.saveBtn.click();
  //   await expect($(".fui-Badge*=Due by")).toBeDisplayed();
  //   await expect($(`span=${taskName}`)).toBeDisplayed();
  // });
  it("Positive Test: Case Dropdown functionality", async () => {
    // await browser.refresh();
    await AddTask.addTaskBtn.click();
    // await AddTask.caseInput.click();
    const dropdownWordTest = await AddTask.selectFirstCase();
    // const dropdownWord = await AddTask.selectRandomCase();
    await expect(AddTask.caseInput).toHaveText(dropdownWordTest);
  });
  it("Positive Test: Test the Assign to dropdown functionality", async () => {
    await browser.refresh();
    await AddTask.addTaskBtn.click();
    const word = await TaskProcedures.assignToTask();
    console.log("word:", word);
    // await expect(AddTask.assignTo).toHaveText(word);
    await expect($('[data-testid="user-filter-menu"]')).toHaveText(word, {
      trim: true,
    });
  });
  // it("Positive Test: Test milestone dropdown functionality", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await TaskProcedures.specificCase();
  //   const miles = await TaskProcedures.milestonesTask();
  //   await expect(AddTask.milestone).toHaveText(miles);
  // });
  // it("Negative Test: Add More than 500 words to the Task to Complete TextBox", async () => {
  //   const over500chars = "a".repeat(501);
  //   await Case.descriptionTextbox.setValue(over500chars);
  //   const actualValue = await Case.descriptionTextbox.getValue();
  //   await expect(actualValue.length).toBeLessThanOrEqual(500);
  // });
  // it("Negative Test: Input Non-required fields, then try to Save", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.billable.click();
  //   await TaskProcedures.dueByDate();
  //   await expect(AddTask.saveBtn).toBeDisabled();
  // });
  // it("Positive Test: Click on Cancel Button", async () => {
  //   await browser.refresh();
  //   await AddTask.addTaskBtn.click();
  //   await AddTask.cancelBtn.click();

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
