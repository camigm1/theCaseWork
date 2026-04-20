import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './menu.js';
import Helpers from './helpers.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Case extends Page {
    /**
     * define selectors using getter methods
     */
    //Main Selectors
get button(){
    return $('[data-testid="link-button-Create Case"]')
}

    get caseName(){
        return $('[data-testid="case-info-card-name-input"]')
    }
   
    get datePicker () { 
        return $('[id="datePicker-inputrgh"]');
    }

    get caseType(){
        return $('[data-testid="case-type-combobox"]')
    }

    get retainedBy(){
        return $('[data-testid="party-combobox"]')
    }
    
    get caseStatus(){
        return $('[data-testid="case-status-combobox"]')
    }

    get billingToggle(){
        return $('[data-testid="case-info-card-fixed-fee-switch"]')
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
        return $('')
    }
    get eventDelete(){
        return $('[data-testid="case-event-delete-f2e0cd0f-982b-43cb-a123-03b048cefe89"]')
    }




    // Affiliated Parties section
     get addAffiliated(){
        return $('[data-testid="link-button-Add Affiliated Party"]')
    }

    get notesTextbox(){
        return $('[data-testid="case-note-input"]')
    }

    get addEvent(){
        return $('[data-testid="case-events-add-event-btn"]')
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

async selectRandomFutureDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await $('.fui-CalendarDayGrid__dayButton').waitForExist({ timeout: 5000 });

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

    await selectedBtn.waitForClickable({ timeout: 3000 });
    await browser.execute((el) => el.click(), selectedBtn);
}

// async addAllToCart() {
//         for (const btn of this.allAddToCartButtons) {
//             await btn.click()
//         }
//     }

    
    // New random function to add item to Cart
    async addItemToCart(arr){
        const randomNum = Math.floor(Math.random() * arr.length);
        let randItem = await arr[randomNum].click();
        return randItem
    }

    async grabRandNumArr(){
        const randomCount = Math.floor(Math.random() * this.allAddToCartButtons.length) + 1;
        const shuffled = [...this.allAddToCartButtons
        ].sort(() => 0.5 - Math.random());
        const randomSubset = shuffled.slice(0, randomCount);
        for (const btn of randomSubset) {
            await btn.click()
        }
         return randomSubset.length;   
        }
    
    async removeRandNumArr(itemsAdded) {
    const removeButtons = await $$('.cart_item .btn_secondary');
    for (let i = 0; i < itemsAdded; i++) {
        await removeButtons[i].click();
    }
}

    async resetCart(){
        await Menu.openHomepage()
        await Helpers.toClick(Menu.hamMenu)
        await Helpers.toClick(Menu.resetAppState)
        await browser.refresh()
    }

    async addAndNavigateToCart(){
        await Helpers.toClick(this.addToCartCart)
        await Helpers.toClick(this.shoppingCart)
    }

    async dinamicAdd(){
        const items = await $$('.inventory_item');
        const randomItem = items[Math.floor(Math.random() * items.length)];
    
        const itemName = await randomItem.$('.inventory_item_name').getText();
        await randomItem.$('.btn_primary').click();
        return itemName
    }

    async cartMap(){
        const cartItemNames = await $$('.cart_item .inventory_item_name')
        .map(el => el.getText());
        return cartItemNames
    }

    async logoutFromPage(){
        await Helpers.toClick(Menu.hamMenu);
        await Helpers.toClick(Menu.logout);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openNewCase () {
        return super.openNewCase('case/new');
    }


    openHomepage () {
        return super.openHomepage('')
    }
}

export default new Case();



