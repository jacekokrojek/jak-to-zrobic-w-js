let Page = require("./page");

class Home extends Page {
  load() {
    super.load("/index.html");
  }

  getTitle() {
    return browser.driver.getTitle();
  }
  caruselButton() {
    element(by.css("a.right")).click();
    browser.sleep(1000);
  }

  getHeadline() {
    return element(by.css("div.active h1")).getText();
  }

  dropdownMenu() {
    element.all(by.css("ul.nav > li > a")).get(1).click();
    element.all(by.css("ul.dropdown-menu > li > a")).get(2).click();
    return element(by.css(".dropdown-menu"));
  }
}

module.exports = new Home();
