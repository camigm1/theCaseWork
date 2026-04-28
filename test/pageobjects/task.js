import { $ } from "@wdio/globals";
import Page from "./page.js";

class AddTask extends Page {
  /**
   * define selectors using getter methods
   */
  get addTaskBtn() {
    return $('[data-testid="link-button-Add Task"]');
  }

  get caseInput() {
    return $('[data-testid="case-filter-menu"]');
  }

  get milestone() {
    return $('[data-testid="milestone-combobox"]');
  }

  get assignTo() {
    return $('[data-testid="user-filter-menu"]');
  }

  get taskToComplete() {
    return $('[data-testid="task-dialog-textarea"]');
  }

  get billable() {
    return $('[data-testid="task-dialog-billable-button"]');
  }

  get dueBy() {
    return $('[data-testid="task-dialog-dueby-checkbox"]');
  }

  get datePicker() {
    return $('[data-testid="task-dialog-datepicker"]');
  }

  get saveBtn() {
    return $('[data-testid="task-dialog-save-button"]');
  }

  get cancelBtn() {
    return $('[data-testid="task-dialog-cancel-button"]');
  }
  /**
   * overwrite specific options to adapt it to page object
   */

  // }
  async selectRandomUserOption() {
    await browser.pause(500);

    try {
      await $(".fui-MenuList").waitForExist({ timeout: 3000 });
    } catch (e) {
      console.log("No user menu appeared, skipping");
      await browser.keys("Escape");
      return null;
    }

    const items = await $$('[data-testid^="user-filter-menu-"]');
    console.log("User items found:", items.length);

    if (items.length === 0) {
      console.log("No users found, skipping");
      await browser.keys("Escape");
      return null;
    }

    const random = Math.floor(Math.random() * items.length);
    const selectedText = await browser.execute(
      (el) => el.innerText.trim(),
      items[random],
    );
    console.log("Selected user:", selectedText);

    await browser.execute((el) => el.click(), items[random]);

    return selectedText;
  }

  async selectRandomOption() {
    await browser.pause(500);

    const listbox = await $('[role="listbox"]');
    await listbox.waitForExist({ timeout: 5000 });

    const options = await listbox.$$('[role="option"]');
    console.log("Options found:", options.length);

    if (options.length === 0) {
      console.log("No options available, skipping");
      await browser.keys("Escape");
      return null;
    }

    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await options[random].click();

    return selectedText;
  }

  async selectRandomDropdownOption() {
    await browser.pause(500);
    await $(".fui-MenuList").waitForExist({ timeout: 5000 });

    const items = await $$('[data-testid^="case-filter-menu-"]');
    console.log("Case items found:", items.length);

    if (items.length === 0) {
      console.log("Dropdown is empty, pressing Escape and skipping");
      await browser.keys("Escape");
      return null;
    }

    const random = Math.floor(Math.random() * items.length);
    const selectedText = await browser.execute(
      (el) => el.innerText.trim(),
      items[random],
    );
    console.log("Selected case:", selectedText);

    await browser.execute((el) => el.click(), items[random]);

    return selectedText;
  }
}

export default new AddTask();
