import { expect } from '@wdio/globals'
import FormPage from '../pageobjects/form.page.js'
import SubmitModal from '../pageobjects/submit.modal.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await FormPage.open();
        await FormPage.waitForDisplay();
        await FormPage.fillForm('Samuel', 'Salas', 1234567890);
        await FormPage.submitForm();

        await SubmitModal.waitForDisplay();
        const elems = await SubmitModal.tableContent;
        await expect(elems).toHaveText(expect.stringContaining('Samuel'));
        await expect(elems).toHaveText(expect.stringContaining('Salas'));
        await expect(elems).toHaveText(expect.stringContaining('1234567890'));
        await expect(elems).toHaveText(expect.stringContaining('Female'));
    })
})

