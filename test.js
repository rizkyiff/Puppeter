/*
test interactions with a form and ui elements
https://youtube.com/
Get a screenshot and a blurred screenshot
Complete and submit the search form with value from cli or env
'#search-input #search' and '#search-icon-legacy'
screenshot of search results
output text from firstMatch 'ytd-video-renderer h3 a#video-title'
click on firstMatch, navigate
click on dismiss button for login '#dismiss-button'
wait for and check number of comments `ytd-comments-header-renderer h2`
screenshot of video playing
get text for first suggested 'ytd-compact-video-renderer'
output comment count and first suggested video title
*/

import puppeteer from 'puppeteer';
const log = console.log;
const username = process.argv.length >= 3 ? process.argv[2] : 'Volbeat';
const searchTermENV = process.env.SEARCHTXT ?? 'Volbeat';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 1000,
    deviceScaleFactor: 1,
  });

  await page.goto('https://web-berijalan-stg.berijalan.id/h4l4m4nl0g1ns14dm1n8er1j4l4n');
  // await page.waitForSelector('#search-input #search');
  await page.type('#email', process.env.name, { delay: 100 });
  await page.type('#password', process.env.password, { delay: 100 });
  await browser.close();
})();
