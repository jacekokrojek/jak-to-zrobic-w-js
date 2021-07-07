var HomePage = function() {

  this.get =  () => {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = () => {
    return browser.driver.getTitle();
  };
  this.checkHeadLine = ()=>{
		element(by.css('a.right')).click();//click  carusel buttton to move
		browser.sleep(1000);
    return element(by.css('div.active h1')).getText(); //return ative header element
  }
  this.checkItemsFromDropDown = ()=>{
    element(by.xpath("//a[contains(text(), 'About')]")).click();
    return element.all(by.xpath("//*[contains(@class, 'dropdown-menu')]/li/a")).map((el) => {
      return el.getText();
    });
      
  }
}
module.exports = new HomePage();