let Page = require("./page");

class Home extends Page {
  load() {
    super.load("/index.html");
  }

  getTitle() {
    return browser.driver.getTitle();
  }
  checkHeadLine (){
		element(by.css('a.right')).click();//click  carusel buttton to move
		browser.sleep(1000);
    return element(by.css('div.active h1')).getText(); //return ative header element
  }
  checkDropDownMenuWorks (){
    element(by.xpath("//a[contains(text(), 'About')]")).click();
    element(by.xpath("//a[contains(text(), 'History')]")).click();
  }
}

module.exports = new Home();
