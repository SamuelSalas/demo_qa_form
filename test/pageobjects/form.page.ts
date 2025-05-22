import { $, browser } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    public get inputFirstName(): ChainablePromiseElement {
        return $('#firstName');
    }

    public get inputLastName(): ChainablePromiseElement {
        return $('#lastName');
    }

    public get radioBtnMale(): ChainablePromiseElement {
        return $('label[for="gender-radio-2"]');
    }

    public get inputPhoneNumber(): ChainablePromiseElement {
        return $('#userNumber');
    }

    public get btnSubmit(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    public async waitForDisplay(): Promise<void> {
        await this.inputFirstName.waitForDisplayed();
    }

    public async fillForm(firstName: string, lastName: string, phoneNumber: number): Promise<void> {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.radioBtnMale.click();
        await this.inputPhoneNumber.setValue(phoneNumber);
    }

    public async submitForm(): Promise<void> {
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
        await browser.pause(1000);
    }
}

export default new LoginPage();
