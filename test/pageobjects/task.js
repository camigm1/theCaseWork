import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddTask extends Page {
    /**
     * define selectors using getter methods
     */
    get addTaskBtn(){
        return $('[data-testid="link-button-Add Task"]')
    }

    get caseInput(){
        return $('[data-testid="case-filter-menu"]')
    }

    get milestone(){
        return $('[data-testid="milestone-combobox"]')
    }

    get assignTo(){
        return $('[data-testid="user-filter-menu"]')
    }

    get taskToComplete(){
        return $('[data-testid="task-dialog-textarea"]')
    }

    get billable(){
        return $('[data-testid="task-dialog-billable-button"]')
    }

    get dueBy(){
        return $('[data-testid="task-dialog-dueby-checkbox"]')
    }

    get datePicker(){
        return $('[data-testid="task-dialog-datepicker"]')
    }

    get saveBtn(){
        return $('[data-testid="task-dialog-save-button"]')
    }

    get cancelBtn(){
        return $('[data-testid="task-dialog-cancel-button"]')
    }
    /**
     * overwrite specific options to adapt it to page object
     */

    async selectRandomCaseOption() {
    await browser.pause(500);
    await $('.fui-MenuList').waitForExist({ timeout: 5000 });
    
    const items = await $$('[data-testid^="case-filter-menu-"]');
    console.log('Case items found:', items.length);

    if (items.length === 0) {
        throw new Error('No case options found');
    }

    const random = Math.floor(Math.random() * items.length);
    const selectedText = await browser.execute((el) => el.innerText.trim(), items[random]);
    console.log('Selected case:', selectedText);
    
    await browser.execute((el) => el.click(), items[random]);

    return selectedText;
}
    openHomepage () {
        return super.openHomepage('inventory.html');
    }
    
}

export default new AddTask();
