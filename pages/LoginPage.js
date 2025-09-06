// pages/LoginPage.js
export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });

    // Common error texts on OrangeHRM demo
    this.invalidCredsText = page.getByText('Invalid credentials');
    this.requiredText = page.getByText('Required');
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async loginAs(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async expectInvalidCredentials() {
    // OrangeHRM shows a banner with this text
    await this.invalidCredsText.waitFor();
  }

  async expectRequiredValidation() {
    // OrangeHRM shows "Required" under empty fields
    await this.requiredText.first().waitFor(); // at least one appears
  }
}
