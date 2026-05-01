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
    return $('[data-testid="milestone-dropdown-menu"]');
  }

  get assignTo() {
    return $('[data-testid="user-filter-menu"]');
  }


  get eeveeCase(){
    return $('[data-testid="case-filter-menu-9b907304-b1d1-4625-b2fc-b9d5daa43328-option"]')
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
  

async selectRandomCase() {
  const items = await $$('[role="menuitemradio"]');
  const randomIndex = Math.floor(Math.random() * items.length);
  const selectedItem = items[randomIndex];
  const name = await selectedItem.$('.fui-Persona__primaryText').getText();
  console.log(`Clicking: ${name}`);
  await selectedItem.click();
  return name;
}


  
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



async selectRandomMilestone() {
  await $('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]').waitForDisplayed({ timeout: 30000 });
  const items = await $$('[data-testid^="milestone-dropdown-menu-"][data-testid$="-option"]');
  const randomIndex = Math.floor(Math.random() * items.length);
  const selectedItem = items[randomIndex];
  const itemText = await selectedItem.$('.fui-MenuItem__content').getText();
  await selectedItem.click();
  return itemText;
}


}

export default new AddTask();
