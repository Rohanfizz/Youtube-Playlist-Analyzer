let puppeteer = require(`puppeteer`);

let scroll = require(`./scrollToBottom.js`);
let timeGetter = require(`./timeGetter.js`);
let conversions = require(`./conversions.js`);

// let url = `https://www.youtube.com/playlist?list=PLRBp0Fe2GpglTnOLbhyrHAVaWsCIEX53Y`;   //long
// let url = `https://www.youtube.com/playlist?list=PL-Jc9J83PIiHQauwBZgwHtUwtwwofqU6Z`;
// let url = `https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V`;
let url = `https://www.youtube.com/playlist?list=PL-Jc9J83PIiFRR58Ezyy2z3gYhPA0lKmt`;
// let url = `https://www.youtube.com/playlist?list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4`;
let tab;

async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

(async function fn(){
    let browserOpenPromise = puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: [`--incognito`]
    });
    
    let browser = await browserOpenPromise;

    let tabs = await browser.pages();
    tab = tabs[0];

    await tab.goto(url);
    await tab.waitForSelector(`body`);

    await scroll.fn(tab);

    let totalTimeInSeconds = await timeGetter.fn(tab);

    console.log(conversions.notation(totalTimeInSeconds));
    console.log(totalTimeInSeconds);
})();
