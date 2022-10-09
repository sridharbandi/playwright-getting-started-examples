import { test, expect } from '@playwright/test'
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  let loginpage  = new LoginPage(page)
  let homepage = new HomePage(page)

  await loginpage.openUrl()
  await loginpage.login()
  await expect(homepage.btnLogout).toBeVisible()
  await homepage.logout()
  await expect(loginpage.txtEmail).toBeVisible()


/*
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  */
});
