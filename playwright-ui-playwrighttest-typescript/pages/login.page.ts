import { Page } from '@playwright/test'

class LoginPage {

    constructor(public page: Page) { }

    get txtEmail() { return this.page.locator('#email') }
    get txtPassword() { return this.page.locator('#password') }
    get btnLogin() { return this.page.locator('text="Login"') }

    async openUrl() {
        await this.page.goto('/forms/')
    }

    async login() {
        await this.txtEmail.type('test@test.com')
        await this.txtPassword.type('Test@123')
        await this.btnLogin.click()
    }

}
export default LoginPage