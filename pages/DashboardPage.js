// pages/DashboardPage.js
export class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Heading that proves login succeeded
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });

    // Top-right user dropdown and Logout
    // Using stable CSS + ARIA roles seen on the OrangeHRM demo
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutLink = page.getByRole('menuitem', { name: 'Logout' });

    // Elements on the login page to confirm logout worked
    this.username = page.getByPlaceholder('Username');
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutLink.click();
  }
}
