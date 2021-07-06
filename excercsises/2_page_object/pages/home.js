var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };
  this.getItemsFromContactPage = ()=>{
    return element(by.xpath('//*/span/h3')),element(by.xpath('//*/fieldset/h3'));
  }
  this.getContactText = () => {
    return element(by.xpath("//a[contains(text(), 'Contact')]")).getText();
  };
  this.getContactClick = () => {
    element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  };
  
};

module.exports = new HomePage();
