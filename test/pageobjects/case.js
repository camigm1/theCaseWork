import { $ } from "@wdio/globals";
import Page from "./page.js";
import Menu from "./task.js";
import Helpers from "./helpers.js";

class Case extends Page {
  //Main Selectors


  get casePageBtn(){
    return $('[data-testid="cases-page-create-case-button"]')
  }
  get title() {
    return $(".fui-Title2");
  }

  get saveCaseBtn() {
    return $('[data-testid="add-case-create-button"]');
  }
  get createCaseBtn() {
    return $('[data-testid="link-button-Create Case"]').click();
  }

  get caseName() {
    return $('[data-testid="case-info-card-name-input"]');
  }

  get retainedDatePicker() {
    return $('[data-testid="case-retained-date-picker"]');
  }

  get caseType() {
    return $('[data-testid="case-type-combobox"]');
  }

  get retainedBy() {
    return $('[data-testid="client-party-dropdown"]');
  }

  get caseStatus() {
    return $('[data-testid="case-status-dropdown"]');
  }

  get billingToggle() {
    return $('[data-testid="case-info-card-fixed-fee-switch"]');
  }
  get fixedFeeInput() {
    return $('[data-testid="case-info-card-fixed-fee-input"]');
  }

  get estHours() {
    return $('[data-testid="case-info-card-estimated-hours-input"]');
  }
  get descriptionTextbox() {
    return $('[data-testid="case-info-card-short-description-input"]');
  }

  get overviewTextbox() {
    return $('[data-testid="case-info-card-overview-input"]');
  }

  //Assign To Section
  get assignTo() {
    return $('[data-testid="link-button-Assign Case"]');
  }
  get selectUser() {
    return $('[data-testid="select-users-dialog-submit"]');
  }

  get deleteAssignedUser() {
    return $('[data-testid="person-control-delete-button"]');
  }

  get checkAssignedTo() {
    return $('[data-testid="case-assigned-to-content"]');
  }
  //Add Events section
  get addEvent() {
    return $('[data-testid="case-events-add-event-btn"]');
  }

  get eventInput() {
    return $('[data-testid="event-input"]');
  }
  get eventDate() {
    return $('[data-testid="event-date-picker"]');
  }

  get eventTodayMarker() {
    return $(
      '[class="fui-CalendarDayGrid__dayTodayMarker ___1u195hy f22iagw f4d9j23 f122n59 ffp7eso f1qtlz2s f64fuq3 fjamq6b f1n95isl fg374yq fx4t0an f1bd7qk0 fgxnpfp fk5vpic f1yig07e fkc42ay"]',
    );
  }

  get eventSave() {
    return $('[data-testid="event-save-button"]');
  }
  get eventParentEl() {
    return $('[data-testid^="case-event-"]');
  }
  get eventDelete() {
    return $('[data-testid^="case-event-delete-"]');
  }
  get noEventsText() {
    return $("=No Events Scheduled yet");
  }
  get confirmDelete() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
  }

  // Affiliated Parties section
  get addAffiliated() {
    return $('[data-testid="link-button-Add Affiliated Party"]');
  }

  get confirmAffiliated() {
    return $('[data-testid="affiliated-party-dialog-add-party-button"]');
  }

  get affiliatedCard() {
    return $('[data-testid="case-affiliated-parties-card"]');
  }

  get deleteAffiliatedCard() {
    return $('[data-testid="party-control-dismiss-button"]');
  }

  // get confirmCardDeletion(){
  //   return $('[data-testid="confirmation-dialog-confirm-button"]')
  // }

  //Notes
  get notesTextbox() {
    return $('[data-testid="case-note-input"]');
  }

  //Secondary Selectors

  //////////////// All Items Selectors

  get caseSelectors() {
    return [
      {
        name: "caseName",
        selector: '[data-testid="case-info-card-name-input"]',
      },
      { name: "datePicker", selector: '[id="datePicker-inputrgh"]' },
      { name: "caseType", selector: '[data-testid="case-type-combobox"]' },
      { name: "retainedBy", selector: '[data-testid="party-combobox"]' },
      { name: "caseStatus", selector: '[data-testid="case-status-combobox"]' },
      {
        name: "billingToggle",
        selector: '[data-testid="case-info-card-fixed-fee-switch"]',
      },
      {
        name: "estHours",
        selector: '[data-testid="case-info-card-estimated-hours-input"]',
      },
      {
        name: "descriptionTextbox",
        selector: '[data-testid="case-info-card-short-description-input"]',
      },
      {
        name: "overviewTextbox",
        selector: '[data-testid="case-info-card-overview-input"]',
      },
      { name: "assignTo", selector: '[data-testid="link-button-Assign Case"]' },
      {
        name: "addAffiliated",
        selector: '[data-testid="link-button-Add Affiliated Party"]',
      },
      { name: "notesTextbox", selector: '[data-testid="case-note-input"]' },
      {
        name: "addEvent",
        selector: '[data-testid="case-events-add-event-btn"]',
      },
    ];
  }

  async clickRandomUser() {
    const checkboxes = await $$(".fui-Checkbox__input");
    const random = Math.floor(Math.random() * checkboxes.length);
    await browser.execute((el) => el.click(), checkboxes[random]);
  }

  async selectAllUsers() {
    const checkboxes = await $$(".fui-Checkbox__input");

    for (const checkbox of checkboxes) {
      await browser.execute((el) => el.click(), checkbox);
    }

    await $('[data-testid="select-users-dialog-submit"]').click();
  }

  async removeAllUsers() {
    let deleteButtons = await $$(
      '[data-testid="person-control-delete-button"]',
    );

    while (deleteButtons.length > 0) {
      await deleteButtons[0].click();
      deleteButtons = await $$('[data-testid="person-control-delete-button"]');
    }
  }

  async selectAllAffiliatedParties() {
    const checkboxes = await $$(".fui-Checkbox__input");

    for (const checkbox of checkboxes) {
      await browser.execute((el) => el.click(), checkbox);
    }

    await this.confirmAffiliated.click();
  }

  async removeAllAffiliatedParties() {
    let dismissButtons = await $$(
      '[data-testid="party-control-dismiss-button"]',
    );

    while (dismissButtons.length > 0) {
      await browser.execute((el) => el.click(), dismissButtons[0]);
      await this.confirmDelete.click();
      await browser.pause(500);
      dismissButtons = await $$('[data-testid="party-control-dismiss-button"]');
    }
  }

  async selectRandomOption() {
    const listbox = await $('[role="listbox"]');
    await listbox.waitForExist({ timeout: 5000 });
    const options = await listbox.$$('[role="option"]');

    if (options.length === 0) {
      throw new Error("No options found in dropdown");
    }

    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await options[random].click();

    return selectedText; 
  }

  async selectRandomClient() {
    const menu = await $('[role="menu"]');
    await menu.waitForExist({ timeout: 5000 });
    const options = await menu.$$('[role="menuitemradio"]');

    if (options.length === 0) {
      await browser.keys("Escape");
      return null;
    }
    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await browser.execute((el) => el.click(), options[random]);

    return selectedText;
  }

  //EVENTS
  async selectDateTest() {
    await this.eventTodayMarker.click();
  }

  
  async deleteFirstEvent() {
  const eventCard = $(".___asxt7x0");

  await eventCard.moveTo();
  const deleteBtn = $('[data-testid^="case-event-delete-"]');
  await deleteBtn.waitForDisplayed({ timeout: 5000 });
  await deleteBtn.click();
  await this.confirmDelete.waitForDisplayed({ timeout: 5000 });
  await this.confirmDelete.click();
}
}

export default new Case();
