
let Page = require("./page");

class Home extends Page {
  load() {
    super.load("/index.html");
  }

  getTitle() {
    return browser.driver.getTitle();
  }
  getHeadLine (){
		element(by.css('a.right')).click();//click  carusel buttton to move
		browser.sleep(1000);
    return element(by.css('div.active h1')).getText(); //return ative header element
  }
  getDropDownMenuWorks(){
    element(by.xpath("//a[contains(text(), 'About')]")).click();
    return element.all(by.xpath("//*[contains(@class, 'dropdown-menu')]/li/a")).map((el) => {
      return el.getText();
    });
  }
}

module.exports = new Home();