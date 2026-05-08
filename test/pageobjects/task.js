import { $ } from "@wdio/globals";
import Page from "./page.js";

class AddTask extends Page {
  get addTaskBtn() {
    return $('[data-testid="link-button-Add Task"]');
  }

  get caseInput() {
    return $('[data-testid="case-filter-menu"]');
  }

  get control() {
    return $('[data-testid*="case-control-"]');
  }

  get milestone() {
    return $('[data-testid="milestone-dropdown-menu"]');
  }

  get assignTo() {
    return $('[data-testid="user-filter-menu"]');
  }

  get eeveeCase() {
    return $(
      '[data-testid="case-filter-menu-9b907304-b1d1-4625-b2fc-b9d5daa43328-option"]',
    );
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

  async selectRandomOptionTest() {
    const listbox = await $('[role="listbox"]');
    await listbox.waitForExist({ timeout: 5000 });
    const options = await listbox.$$('[role="option"]');

    if (options.length === 0) {
      throw new Error("No options found in dropdown");
    }

    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await options[random].click();

    return selectedText; // 👈 return the selected name
  }

  async selectRandomCase() {
    const items = await $$('[role="menuitemradio"]');
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    const name = await selectedItem.$(".fui-Persona__primaryText").getText();
    console.log(`Clicking: ${name}`);
    await selectedItem.click();
    return name;
  }

  // async selectFirstCase() {
  //   await $('[data-testid="case-filter-menu"]').waitForDisplayed({
  //     timeout: 5000,
  //   });
  //   await $('[data-testid="case-filter-menu"]').click();

  //   const firstControl = $('[data-testid*="case-control-"]');
  //   await firstControl.waitForExist({ timeout: 10000 });
  //   await firstControl.waitForDisplayed({ timeout: 5000 });
  //   await firstControl.click();
  // }

  async selectFirstCase() {
    await $('[data-testid="case-filter-menu"]').waitForDisplayed({
      timeout: 5000,
    });
    await $('[data-testid="case-filter-menu"]').click();

    const firstControl = $('[data-testid*="case-control-"]');
    await firstControl.waitForExist({ timeout: 10000 });
    await firstControl.waitForDisplayed({ timeout: 5000 });

    const selectedText = await firstControl
      .$(".fui-Persona__primaryText")
      .getText();
    console.log("Selected case:", selectedText);

    await firstControl.click();
    return selectedText;
  }

  // async selectRandomUserOption() {
  //   const items = await $$('[data-testid^="user-filter-menu-"]');
  //   console.log("User items found:", items.length);

  //   const random = Math.floor(Math.random() * items.length);
  //   const selectedText = await browser.execute(
  //     (el) => el.innerText.trim(),
  //     items[random],
  //   );
  //   console.log("Selected user:", selectedText);

  //   await browser.execute((el) => el.click(), items[random]);

  //   return selectedText;
  // }

  // async selectRandomUserOption() {
  //   const items = await $$('[data-testid^="user-filter-menu-"]');
  //   console.log("User items found:", items.length);

  //   const random = Math.floor(Math.random() * items.length);
  //   const selectedText = await items[random]
  //     .$(".fui-Persona__primaryText")
  //     .getText();
  //   console.log("Selected user:", selectedText);

  //   await browser.execute((el) => el.click(), items[random]);

  //   return selectedText;
  // }

  async selectRandomUserOption() {
    await $('[data-testid="user-filter-menu"]').waitForDisplayed({
      timeout: 5000,
    });
    await $('[data-testid="user-filter-menu"]').click();

    const firstUser = $('[data-testid^="user-filter-menu-"]');
    await firstUser.waitForExist({ timeout: 10000 });
    await firstUser.waitForDisplayed({ timeout: 5000 });

    const selectedText = await firstUser
      .$(".fui-Persona__primaryText")
      .getText();
    console.log("Selected user:", selectedText);

    await firstUser.click();
    return selectedText;
  }

  async selectRandomOption() {
    await browser.pause(500);

    const menu = await $('[role="menu"]');
    await menu.waitForExist({ timeout: 5000 });

    const options = await menu.$$('[role="menuitemradio"]');
    console.log("Options found:", options.length);

    if (options.length === 0) {
      console.log("No options available, skipping");
      await browser.keys("Escape");
      return null;
    }

    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await browser.execute((el) => el.click(), options[random]);

    return selectedText;
  }

  // async selectRandomOption() {
  //   await browser.pause(500);

  //   const menu = await $('[role="menu"]');
  //   await menu.waitForExist({ timeout: 5000 });

  //   const options = await menu.$$('[role="menuitemradio"]');
  //   console.log("Options found:", options.length);

  //   if (options.length === 0) {
  //     console.log("No options available, skipping");
  //     return null;
  //   }

  //   const random = Math.floor(Math.random() * options.length);
  //   const selectedText = await options[random]
  //     .$(".fui-MenuItem__content")
  //     .getText();
  //   console.log("Selected option:", selectedText);
  //   await browser.execute((el) => el.click(), options[random]);

  //   return selectedText;
  // }

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

  //   async selectRandomMilestone() {
  //   await this.milestone.click()
  //   const selector = '[data-testid*="milestone-dropdown-menu-"]'

  //   await $(selector).waitForExist({ timeout: 30000 });
  //   await $(selector).waitForDisplayed({ timeout: 10000 });
  //   await $(selector).waitForStable({ timeout: 5000 });

  //   const items = await $$(selector);
  //   const randomIndex = Math.floor(Math.random() * items.length);
  //   const selectedItem = items[randomIndex];

  //   await selectedItem.waitForDisplayed({ timeout: 5000 });
  //   await selectedItem.waitForStable({ timeout: 5000 });

  //   const itemText = await selectedItem.$(".fui-MenuItem__content").getText();
  //   await selectedItem.click();
  //   return itemText;
  // }

  async selectFirstMilestone() {
    const selector = '[data-testid*="milestone-dropdown-menu-"]';

    await $(selector).waitForExist({ timeout: 30000 });
    await $(selector).waitForDisplayed({ timeout: 10000 });

    const firstItem = $$(selector)[0];
    await firstItem.waitForDisplayed({ timeout: 5000 });
    await firstItem.waitForStable({ timeout: 5000 });
    await firstItem.click();
  }
}

export default new AddTask();
