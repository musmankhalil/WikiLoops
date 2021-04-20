const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    // await page.goto("https://en.wikipedia.org/wiki/Special:Random");
    // await page.goto("https://en.wikipedia.org/wiki/2005_WGC-World_Cup");
    await page.goto("https://en.wikipedia.org/wiki/Nikolay_Khondzinsky");
    // await page.screenshot({ path: "corona-wiki.png" });
    var result = await Evaluate(page);
    // console.log(result);
    await browser.close();
})();


async function Evaluate(page) {
    const result = await page.evaluate(() => {
        // let contentText = document.querySelectorAll(".mw-parser-output p");
        // console.log(contentText);
        let contentSentences = document.querySelectorAll(".mw-parser-output p");
        // const headingList = [...headingFromWeb];
        let ps = contentSentences[0].innerText.indexOf('(');
        let pe = contentSentences[0].innerText.indexOf(')');

        let contentSentences = document.querySelectorAll(".mw-parser-output p");

        return { ps, pe };
        // let headingFromWeb = document.querySelectorAll(".mw-parser-output p a");
        // const headingList = [...headingFromWeb];
        // return headingList.map((h) => h.innerText);
        // return contentText;
    });
    console.log(result);
    return result;
}