import { browser } from '@wdio/globals'

export default class Page {
    public async open (): Promise<void | WebdriverIO.Request> {
        await browser.url('https://demoqa.com/automation-practice-form');
        await browser.maximizeWindow();
    }

    public async maxScreen(): Promise<void> {
        await browser.maximizeWindow();
    }
}
