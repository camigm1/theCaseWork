import { $ } from "@wdio/globals";
import Page from "./page.js";

class Template extends Page {
  get dinamicName() {
    return "Template was made today";
  }

  get statusdropdownBtn() {
    return $('//button[contains(., "New")]');
  }

  get templateDashboardBtn() {
    return $('[data-testid="vert-nav-templates"]');
  }

  get editDots() {
    return $('[aria-label="More items"]');
  }

  get edit() {
    return $('[data-testid="custom-data-table-context-menu-item-Edit"]');
  }

  get saveTemplate() {
    return $('[data-testid="edit-case-template-save-button"]');
  }

  get backToTemplates() {
    return $('[data-testid="link-button-Back to Case Templates"]');
  }

  get cancel() {
    return $('[data-testid="edit-case-template-cancel-button"]');
  }

  get name() {
    return $('[data-testid="edit-case-template-name-input"]');
  }

  get caseType() {
    return $('[data-testid="case-type-combobox"]');
  }

  get templateDescription() {
    return $('[data-testid="edit-case-template-description-input"]');
  }
  get templateFieldName() {
    return $(
      '[data-testid="edit-case-template-short-description-field-name-input"]',
    );
  }

  get templateDefaultText() {
    return $(
      '[data-testid="edit-case-template-short-description-field-value-input"]',
    );
  }
  get engagement() {
    return $('[data-testid="edit-case-template-engagement-template-dropdown"]');
  }
  get notes() {
    return $('[data-testid="edit-case-template-initial-note-input"]');
  }

  get milestones() {
    return $('[data-testid="link-button-Add Milestone"]');
  }

  get milestoneName() {
    return $('[data-testid="milestone-template-name-input"]');
  }

  get milestoneSubmit() {
    return $('[data-testid="milestone-template-submit-button"]');
  }

  get milestoneDots() {
    return $('[aria-label="More items"]');
  }

  get milestoneRemove() {
    return $('[data-testid="custom-data-table-context-menu-item-Remove"]');
  }

  get milestoneConfirmDelete() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
  }

  get addEvent() {
    return $('[data-testid="link-button-Add Event"]');
  }

  get eventName() {
    //change id format?
    return $('[name="eventName"]');
  }

  get eventSave() {
    //change id format?
    return $('[data-testid="event-template-dialog-save"]');
  }

  get eventRemoveDots() {
    return $('[aria-label="More items"]');
  }

  get eventRemove() {
    return $('[data-testid="custom-data-table-context-menu-item-Remove"]');
  }

  get checkboxes() {
    return $$(".fui-Checkbox__input");
  }

  get milestoneRows() {
    return $$('.fui-DataGridBody [role="row"]');
  }

  // async selectRandomEngagement() {
  //   await browser.execute(
  //     (el) => el.click(),
  //     await $(
  //       '[data-testid="edit-case-template-engagement-template-dropdown"]',
  //     ),
  //   );
  //   await browser.pause(500);

  //   const menu = await $('[role="menu"]');
  //   await menu.waitForExist({ timeout: 5000 });

  //   const options = await menu.$$('[role="menuitemradio"]');

  //   if (options.length === 0) {
  //     await browser.keys("Escape");
  //     return null;
  //   }

  //   const random = Math.floor(Math.random() * options.length);
  //   const selectedText = await options[random].getText();
  //   await browser.execute((el) => el.click(), options[random]);

  //   return selectedText;
  // }
}

export default new Template();
