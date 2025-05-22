import { $ } from '@wdio/globals'

class SubmitModal {
    public get content(): ChainablePromiseElement {
        return $('.modal-content');
    }

    public get tableContent(): ChainablePromiseElement {
        return $('.table');
    }

    public async waitForDisplay(): Promise<void> {
        await this.content.waitForDisplayed();
    }
}

export default new SubmitModal();
