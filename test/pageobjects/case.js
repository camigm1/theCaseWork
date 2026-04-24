import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './task.js';
import Helpers from './helpers.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Case extends Page {
    /**
     * define selectors using getter methods
     */
    //Main Selectors
    get createCaseBtn(){
    return $('[data-testid="add-case-create-button"]')
}
    get button(){
    return $('[data-testid="link-button-Create Case"]')
}

    get caseName(){
        return $('[data-testid="case-info-card-name-input"]')
    }
   
    get retainedDatePicker() {
    return $('[name="retainedDate"]');
}

    get caseType(){
        return $('[data-testid="case-type-combobox"]')
    }

   get retainedBy() {
    return $('[id="menur17"]')
    // return $('button=Select Client');
    //changed data testid?
}
    
    get caseStatus(){
        return $('[data-testid="case-status-combobox"]')
    }

    get billingToggle(){
        return $('[data-testid="case-info-card-fixed-fee-switch"]')
    }
    get fixedFeeInput() {
    return $('[data-testid="case-info-card-fixed-fee-input"]');
    }   
    
    get estHours(){
        return $('[data-testid="case-info-card-estimated-hours-input"]')
    }
    get descriptionTextbox(){
        return $('[data-testid="case-info-card-short-description-input"]')
    }

    get overviewTextbox(){
        return $('[data-testid="case-info-card-overview-input"]')
    }


    //Assign To Section
    get assignTo(){
        return $('[data-testid="link-button-Assign Case"]')
    }
    get selectUser(){
        return $('[data-testid="select-users-dialog-submit"]')
    }

    get deleteAssignedUser(){
        return $('[data-testid="person-control-delete-button"]')
    }

    get checkAssignedTo(){
        return $('[data-testid="case-assigned-to-content"]')
    }
    //Add Events section
    get addEvent(){
    return $('[data-testid="case-events-add-event-btn"]')
    }

    get eventInput(){
        return $('[data-testid="event-input"]')
    }
    get eventDate(){
        return $('[data-testid="event-date-picker"]')
    }

    get eventSave(){
        return $('[data-testid="event-save-button"]')
    }
    get eventParentEl(){
        return $('[data-testid^="case-event-"]')
    }
    get eventDelete(){
        return $('[data-testid^="case-event-delete-"]')
    }
    get noEventsText() {
    return $('=No Events Scheduled yet');
    }
    get confirmDelete() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
    }


    // Affiliated Parties section
     get addAffiliated(){
        return $('[data-testid="link-button-Add Affiliated Party"]')
    }

    get confirmAffiliated(){
        return $('[data-testid="affiliated-party-dialog-add-party-button"]')
    }

    get notesTextbox(){
        return $('[data-testid="case-note-input"]')
    }

   
    //Secondary Selectors
    

    //////////////// All Items Selectors
    
    get caseSelectors() {
    return [
        { name: 'caseName',           selector: '[data-testid="case-info-card-name-input"]' },
        { name: 'datePicker',         selector: '[id="datePicker-inputrgh"]' },
        { name: 'caseType',           selector: '[data-testid="case-type-combobox"]' },
        { name: 'retainedBy',         selector: '[data-testid="party-combobox"]' },
        { name: 'caseStatus',         selector: '[data-testid="case-status-combobox"]' },
        { name: 'billingToggle',      selector: '[data-testid="case-info-card-fixed-fee-switch"]' },
        { name: 'estHours',           selector: '[data-testid="case-info-card-estimated-hours-input"]' },
        { name: 'descriptionTextbox', selector: '[data-testid="case-info-card-short-description-input"]' },
        { name: 'overviewTextbox',    selector: '[data-testid="case-info-card-overview-input"]' },
        { name: 'assignTo',           selector: '[data-testid="link-button-Assign Case"]' },
        { name: 'addAffiliated',      selector: '[data-testid="link-button-Add Affiliated Party"]' },
        { name: 'notesTextbox',       selector: '[data-testid="case-note-input"]' },
        { name: 'addEvent',           selector: '[data-testid="case-events-add-event-btn"]' },
    ];
    }
    


    async clickRandomUser() {
    const checkboxes = await $$('.fui-Checkbox__input');
    const random = Math.floor(Math.random() * checkboxes.length);
    await browser.execute((el) => el.click(), checkboxes[random]);
    }

    async selectAllUsers() {
    const checkboxes = await $$('.fui-Checkbox__input');
    
    for (const checkbox of checkboxes) {
        await browser.execute((el) => el.click(), checkbox);
    }
    
    await $('[data-testid="select-users-dialog-submit"]').click();
}

async removeAllUsers() {
    let deleteButtons = await $$('[data-testid="person-control-delete-button"]');
    
    while (deleteButtons.length > 0) {
        await deleteButtons[0].click();
        await browser.pause(500);
        deleteButtons = await $$('[data-testid="person-control-delete-button"]');
    }
}


    async selectAllAffiliatedParties() {
    const checkboxes = await $$('.fui-Checkbox__input');
    
    for (const checkbox of checkboxes) {
        await browser.execute((el) => el.click(), checkbox);
    }
    
    await $('[data-testid="affiliated-party-dialog-add-party-button"]').click();
}

    async removeAllAffiliatedParties() {
    let dismissButtons = await $$('[data-testid="party-control-dismiss-button"]');
    
    while (dismissButtons.length > 0) {
        await browser.execute((el) => el.click(), dismissButtons[0]);
        
        // confirm the delete popup
        await $('[data-testid="confirmation-dialog-confirm-button"]').waitForDisplayed({ timeout: 5000 });
        await $('[data-testid="confirmation-dialog-confirm-button"]').click();
        
        await browser.pause(500);
        dismissButtons = await $$('[data-testid="party-control-dismiss-button"]');
    }
}
//Dropdown Selection
// async selectRandomOption() {
//     const listbox = await $('[role="listbox"]');
//     await listbox.waitForDisplayed({ timeout: 5000 });
//     const options = await listbox.$$('[role="option"]');
//     const random = Math.floor(Math.random() * options.length);
//     await options[random].click();
// }

async selectRandomOption() {
    const listbox = await $('[role="listbox"]');
    await listbox.waitForExist({ timeout: 5000 });
    const options = await listbox.$$('[role="option"]');

    if (options.length === 0) {
        throw new Error('No options found in dropdown');
    }

    const random = Math.floor(Math.random() * options.length);
    const selectedText = await options[random].getText();
    await options[random].click();

    return selectedText; // 👈 return the selected name
}

async selectRandomMenuOption() {
    await browser.pause(500);
    
    await $('.fui-MenuList').waitForExist({ timeout: 5000 });
    
    const items = await $$('.fui-MenuItemRadio');
    console.log('Menu items found:', items.length);

    if (items.length === 0) {
        throw new Error('No menu items found');
    }

    const random = Math.floor(Math.random() * items.length);
    
    const selectedText = await browser.execute((el) => el.innerText.trim(), items[random]);
    console.log('Selected text:', selectedText);

    await browser.execute((el) => el.click(), items[random]);

    return selectedText;
}


//EVENTS
async selectRandomFutureDate() {
    await browser.pause(5000);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await browser.pause(1000);
    await $('.fui-CalendarDayGrid__dayButton').waitForExist({ timeout: 10000 });
    // await $('.fui-CalendarDayGrid__table').waitForExist({ timeout: 10000 });

    const allDayButtons = await $$('.fui-CalendarDayGrid__dayButton');

    const futureDays = [];
    for (const btn of allDayButtons) {
        const label = await btn.getAttribute('aria-label');
        console.log('Label:', label);
        if (!label) continue;

        // aria-label format: "21, April, 2026"
        const parts = label.match(/(\d+), (\w+), (\d+)/);
        if (!parts) continue;

        const date = new Date(`${parts[2]} ${parts[1]}, ${parts[3]}`);
        date.setHours(0, 0, 0, 0);

        if (date > today) {
            futureDays.push(btn);
        }
    }

    console.log('Future days found:', futureDays.length); // helpful for debugging

    if (futureDays.length === 0) {
        throw new Error('No future dates found in calendar');
    }

    const random = Math.floor(Math.random() * futureDays.length);
    const selectedBtn = futureDays[random];

    await selectedBtn.waitForClickable({ timeout: 30000 });
    await browser.execute((el) => el.click(), selectedBtn);
}



async deleteFirstEvent() {
    const eventCard = await $('.___1i2sot1');
    
    // trigger hover via JS
    await browser.execute((el) => {
        el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    }, eventCard);

    await browser.pause(1000);

    // click delete via JS
    const deleteBtn = await $('[data-testid^="case-event-delete-"]');
    await browser.execute((el) => el.click(), deleteBtn);

    await this.confirmDelete.waitForDisplayed({ timeout: 5000 });
    await this.confirmDelete.click();
}


    
    async logoutFromPage(){
        await Helpers.toClick(Menu.hamMenu);
        await Helpers.toClick(Menu.logout);
    }

    

    openNewCase () {
        return super.openNewCase('case/new');
    }


    openHomepage () {
        return super.openHomepage('')
    }
}

export default new Case();



