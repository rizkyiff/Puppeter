const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Google Search', function() {

  let browser;
  let page;

  before(async function() {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  after(async function() {
    await browser.close();
  });

  it('should show "Google" as the title', async function() {
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).to.equal('Google');
  });
});
