import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
   
    get gettingUsername () {
        return $('[data-testid="login-username"]');
    }

    get gettingPassword () {
        return $('[data-testid="login-password"]');
    }

    get SubmitBtn () {
        return $('[data-testid="login-submit"]');
    }

   
   
    async login (username, password) {
        await this.gettingUsername.setValue(username);
        await this.gettingPassword.setValue(password);
        await this.SubmitBtn.click();
    }

    
    openLogin () {
        return super.openLogin();
    }
}

export default new LoginPage();
