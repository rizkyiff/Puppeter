import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();

  await page.goto('https://zzzscore.com/1to50/en/');


await page.waitForXPath(`//*[@id="grid"]//*[text() = "1"]`);
let i= 1;
while (i <= 50){ 
    const [element] = await page.$x(`//*[@id="grid"]//*[text() = "${i}"]`);
    if (element) {
        await element.click();
    } else {
        console.log(i);
        console.error('Element not found');
        await page.waitForTimeout(20000);
    }
    i++
}
  await page.screenshot({ path: './screens/search-results.jpg' });
  await browser.close();
})();
