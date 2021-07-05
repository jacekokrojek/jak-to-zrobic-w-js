let clc = require('cli-color');

class Page{
    constructor(){
        this.logEnabled = true;
    }
    load(url){
        this.log("load", url);
        browser.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js" + url);
    }
    log(){
        if (this.logEnabled) {
            console.error.apply(console, [clc.cyan("DEBUG|")].concat(Array.prototype.slice.call(arguments)));
        }
    }
    waitForElements(el, time){
        let ec = protractor.ExpectedConditions;
        browser.wait(ec.visibilityOf(el), time, "Element still not exists");
    }
}
module.exports = Page;