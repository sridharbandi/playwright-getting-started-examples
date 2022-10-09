import { Page } from '@playwright/test'

class HomePage {

    constructor(public page: Page) { }

    get btnLogout() { return this.page.locator('text="Logout"') }

    async logout() {
        await this.btnLogout.click()
    }
}
export default HomePage