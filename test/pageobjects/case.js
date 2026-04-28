// import { $ } from "@wdio/globals";
// import Page from "./page.js";
// import Menu from "./task.js";
// import Helpers from "./helpers.js";

// class Case extends Page {
//   //Main Selectors
//   get createCaseBtn() {
//     return $('[data-testid="add-case-create-button"]');
//   }
//   get button() {
//     return $('[data-testid="link-button-Create Case"]');
//   }

//   get caseName() {
//     return $('[data-testid="case-info-card-name-input"]');
//   }

//   get retainedDatePicker() {
//     return $('[name="retainedDate"]');
//   }

//   get caseType() {
//     return $('[data-testid="case-type-combobox"]');
//   }

//   get retainedBy() {
//     // return $('[id="menur17"]');
//     // return $('button=Select Client');
//     //changed data testid?
//     // return $('#menurq3');
//     return $("button=Select Client");
//   }

//   get caseStatus() {
//     // return $('[data-testid="case-status-combobox"]');
//     // return $("#menur1jq");
//     return $('button[id="menurpo"]');
//   }

//   get billingToggle() {
//     return $('[data-testid="case-info-card-fixed-fee-switch"]');
//   }
//   get fixedFeeInput() {
//     return $('[data-testid="case-info-card-fixed-fee-input"]');
//   }

//   get estHours() {
//     return $('[data-testid="case-info-card-estimated-hours-input"]');
//   }
//   get descriptionTextbox() {
//     return $('[data-testid="case-info-card-short-description-input"]');
//   }

//   get overviewTextbox() {
//     return $('[data-testid="case-info-card-overview-input"]');
//   }

//   //Assign To Section
//   get assignTo() {
//     return $('[data-testid="link-button-Assign Case"]');
//   }
//   get selectUser() {
//     return $('[data-testid="select-users-dialog-submit"]');
//   }

//   get deleteAssignedUser() {
//     return $('[data-testid="person-control-delete-button"]');
//   }

//   get checkAssignedTo() {
//     return $('[data-testid="case-assigned-to-content"]');
//   }
//   //Add Events section
//   get addEvent() {
//     return $('[data-testid="case-events-add-event-btn"]');
//   }

//   get eventInput() {
//     return $('[data-testid="event-input"]');
//   }
//   get eventDate() {
//     return $('[data-testid="event-date-picker"]');
//   }

//   get eventTodayMarker() {
//     return $(
//       '[class="fui-CalendarDayGrid__dayTodayMarker ___1u195hy f22iagw f4d9j23 f122n59 ffp7eso f1qtlz2s f64fuq3 fjamq6b f1n95isl fg374yq fx4t0an f1bd7qk0 fgxnpfp fk5vpic f1yig07e fkc42ay"]',
//     );
//   }

//   get eventSave() {
//     return $('[data-testid="event-save-button"]');
//   }
//   get eventParentEl() {
//     return $('[data-testid^="case-event-"]');
//   }
//   get eventDelete() {
//     return $('[data-testid^="case-event-delete-"]');
//   }
//   get noEventsText() {
//     return $("=No Events Scheduled yet");
//   }
//   get confirmDelete() {
//     return $('[data-testid="confirmation-dialog-confirm-button"]');
//   }

//   // Affiliated Parties section
//   get addAffiliated() {
//     return $('[data-testid="link-button-Add Affiliated Party"]');
//   }

//   get confirmAffiliated() {
//     return $('[data-testid="affiliated-party-dialog-add-party-button"]');
//   }

//   get affiliatedCard() {
//     return $('[data-testid="case-affiliated-parties-card"]');
//   }

//   get deleteAffiliatedCard() {
//     return $('[data-testid="party-control-dismiss-button"]');
//   }

//   // get confirmCardDeletion(){
//   //   return $('[data-testid="confirmation-dialog-confirm-button"]')
//   // }

//   //Notes
//   get notesTextbox() {
//     return $('[data-testid="case-note-input"]');
//   }

//   //Secondary Selectors

//   //////////////// All Items Selectors

//   get caseSelectors() {
//     return [
//       {
//         name: "caseName",
//         selector: '[data-testid="case-info-card-name-input"]',
//       },
//       { name: "datePicker", selector: '[id="datePicker-inputrgh"]' },
//       { name: "caseType", selector: '[data-testid="case-type-combobox"]' },
//       { name: "retainedBy", selector: '[data-testid="party-combobox"]' },
//       { name: "caseStatus", selector: '[data-testid="case-status-combobox"]' },
//       {
//         name: "billingToggle",
//         selector: '[data-testid="case-info-card-fixed-fee-switch"]',
//       },
//       {
//         name: "estHours",
//         selector: '[data-testid="case-info-card-estimated-hours-input"]',
//       },
//       {
//         name: "descriptionTextbox",
//         selector: '[data-testid="case-info-card-short-description-input"]',
//       },
//       {
//         name: "overviewTextbox",
//         selector: '[data-testid="case-info-card-overview-input"]',
//       },
//       { name: "assignTo", selector: '[data-testid="link-button-Assign Case"]' },
//       {
//         name: "addAffiliated",
//         selector: '[data-testid="link-button-Add Affiliated Party"]',
//       },
//       { name: "notesTextbox", selector: '[data-testid="case-note-input"]' },
//       {
//         name: "addEvent",
//         selector: '[data-testid="case-events-add-event-btn"]',
//       },
//     ];
//   }

//   async clickRandomUser() {
//     const checkboxes = await $$(".fui-Checkbox__input");
//     const random = Math.floor(Math.random() * checkboxes.length);
//     await browser.execute((el) => el.click(), checkboxes[random]);
//   }

//   async selectAllUsers() {
//     const checkboxes = await $$(".fui-Checkbox__input");

//     for (const checkbox of checkboxes) {
//       await browser.execute((el) => el.click(), checkbox);
//     }

//     await $('[data-testid="select-users-dialog-submit"]').click();
//   }

//   async removeAllUsers() {
//     let deleteButtons = await $$(
//       '[data-testid="person-control-delete-button"]',
//     );

//     while (deleteButtons.length > 0) {
//       await deleteButtons[0].click();
//       await browser.pause(500);
//       deleteButtons = await $$('[data-testid="person-control-delete-button"]');
//     }
//   }

//   async selectAllAffiliatedParties() {
//     const checkboxes = await $$(".fui-Checkbox__input");

//     for (const checkbox of checkboxes) {
//       await browser.execute((el) => el.click(), checkbox);
//     }

//     await this.confirmAffiliated.click();
//   }

//   async removeAllAffiliatedParties() {
//     let dismissButtons = await $$(
//       '[data-testid="party-control-dismiss-button"]',
//     );

//     while (dismissButtons.length > 0) {
//       await browser.execute((el) => el.click(), dismissButtons[0]);
//       await this.confirmDelete.click();
//       await browser.pause(500);
//       dismissButtons = await $$('[data-testid="party-control-dismiss-button"]');
//     }
//   }

//   async selectRandomOption() {
//     const listbox = await $('[role="listbox"]');
//     await listbox.waitForExist({ timeout: 5000 });
//     const options = await listbox.$$('[role="option"]');

//     if (options.length === 0) {
//       throw new Error("No options found in dropdown");
//     }

//     const random = Math.floor(Math.random() * options.length);
//     const selectedText = await options[random].getText();
//     await options[random].click();

//     return selectedText; // 👈 return the selected name
//   }

//   //   async selectRandomOption() {
//   //     await $(
//   //       '[data-testid="undefined-03d38225-16c2-43a5-8659-37c9aab02dce-option"]',
//   //     ).click();
//   //   }

//   async selectRandomMenuOption() {
//     await browser.pause(500);
//     await $(".fui-MenuList").waitForExist({ timeout: 5000 });
//     const items = await $$(".fui-MenuItemRadio");
//     console.log("Menu items found:", items.length);

//     if (items.length === 0) {
//       throw new Error("No menu items found");
//     }

//     const random = Math.floor(Math.random() * items.length);
//     const selectedText = await browser.execute(
//       (el) => el.innerText.trim(),
//       items[random],
//     );
//     console.log("Selected text:", selectedText);
//     await browser.execute((el) => el.click(), items[random]);
//     return selectedText;
//   }

//   //EVENTS
//   async selectDateTest() {
//     await browser.pause(1000);
//     // await $(".fui-CalendarDayGrid__table").waitForExist({ timeout: 10000 });
//     await this.eventTodayMarker.click();
//   }

//   async deleteFirstEvent() {
//     const eventCard = await $(".___1i2sot1");

//     // trigger hover via JS
//     await browser.execute((el) => {
//       el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
//       el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
//     }, eventCard);

//     await browser.pause(1000);

//     // click delete via JS
//     const deleteBtn = await $('[data-testid^="case-event-delete-"]');
//     await browser.execute((el) => el.click(), deleteBtn);

//     await this.confirmDelete.waitForDisplayed({ timeout: 5000 });
//     await this.confirmDelete.click();
//   }
// }

// export default new Case();
