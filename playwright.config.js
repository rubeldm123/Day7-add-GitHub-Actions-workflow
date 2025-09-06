// playwright.config.js (CommonJS)
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',          // 🎯 collect trace only when a retry happens
    screenshot: 'only-on-failure',    // 🎯 take screenshots on failure
    video: 'retain-on-failure',       // 🎯 keep videos only for failed tests
  },
  projects: [
    { name: 'chromium',      use: { ...devices['Desktop Chrome'], headless: true } },
    { name: 'Google Chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome', headless: false } },
    { name: 'firefox',       use: { ...devices['Desktop Firefox'], headless: true } },
    { name: 'webkit',        use: { ...devices['Desktop Safari'], headless: true } },
  ],
  // (optional) retry once so trace/video can kick in on the retry
  retries: 1,
});
