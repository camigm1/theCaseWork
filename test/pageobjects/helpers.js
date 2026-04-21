import { $ } from '@wdio/globals'
import Page from './page.js';
import Menu from './menu.js';
import Cart from './case.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Helpers extends Page {
    
     async assertsExistText(existing,text){//Text Assertions
        await expect(existing).toBeExisting()
        await expect(existing).toHaveText(
            expect.stringContaining(text))
    }

    async assertItemInCart(itemName, cartItemNames) {
        await expect(cartItemNames).toContain(itemName);
}

    async toClick(selector) {// Adds click function to selectors
            await selector.waitForClickable({ timeout: 5000 });
            await selector.click();
    }
    
 
 }

export default new Helpers();
