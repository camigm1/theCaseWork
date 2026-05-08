import { $ } from "@wdio/globals";
import AddTask from "./task.js";
import Case from "./case.js";
import Page from "./page.js";
import Menu from "./task.js";
import Helpers from "./helpers.js";

class TaskProcedures extends Page {
  async caseName() {}

  async assignToTask() {
    await AddTask.assignTo.click();
    await AddTask.selectRandomOptionTest();
  }

  async milestonesTask() {
    await browser.waitUntil(
         async () => await AddTask.milestone.isDisplayed(),
         {
           timeout: 30000,
           timeoutMsg: "Milestone dropdown failed to display after 30s",
           interval: 500,
         }
       );
    await AddTask.milestone.click();
    await AddTask.selectFirstMilestone();
  }

<<<<<<< HEAD
  //   async milestonesTask() {
  //   // await browser.execute((el) => el.click(), await AddTask.milestone);
  //   await AddTask.milestone.click();
  //   await $('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]').waitForExist({ timeout: 10000 });
  //   await $('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]').waitForStable({ timeout: 5000 });

  //   await AddTask.selectRandomMilestone();
  // }
=======
  async makeNote(){
    await AddTask.discussionTab.click();
    await AddTask.caseNoteInput.setValue('Leaving a note')
    await AddTask.saveNote.click();
    await AddTask.detailsTab.click();
  }

//   async milestonesTask() {
//   // await browser.execute((el) => el.click(), await AddTask.milestone);
//   await AddTask.milestone.click();
//   await $('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]').waitForExist({ timeout: 10000 });
//   await $('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]').waitForStable({ timeout: 5000 });
  
//   await AddTask.selectRandomMilestone();
// }
>>>>>>> 2b9f189 (add task working-changes)

  //Testing Case
  async specificCase() {
    await AddTask.caseInput.click();

    const caseOption = $(
      '[data-testid="case-filter-menu-4ee4d161-1c99-4a1e-8730-59e8d951de1f-option"]',
    );
    await caseOption.waitForDisplayed({ timeout: 5000 });
    await caseOption.click();
  }

  async eeveeCase() {
    await AddTask.caseInput.click();
    await browser.execute(
      (el) => el.click(),
      await $(
        '[data-testid="case-filter-menu-9b907304-b1d1-4625-b2fc-b9d5daa43328-option"]',
      ),
    );
  }

  async dueByDate() {
    // await AddTask.dueBy.click();
    await AddTask.datePicker.click();
    await Case.selectDateTest();
  }

  async firsttaskTextbox() {
    await AddTask.taskDescription.click();
    await AddTask.taskDescription.setValue("Hellooooo");
    await AddTask.taskDescription.setValue("Testing");
    // await browser.keys("AUTOTEST Negative Task " + Date.now());
    await AddTask.taskDescription.click();
  }

  async taskTextbox() {
    await AddTask.taskToComplete.click();
    await AddTask.taskToComplete.clearValue();
    await browser.keys("AUTOTEST Negative Task " + Date.now());
    await AddTask.taskToComplete.click();
  }
}

export default new TaskProcedures();
