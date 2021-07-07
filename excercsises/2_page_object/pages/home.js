var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };
  this.findAdressAndgetInTouch=  async ()=>{
    let array = [];
    element(by.xpath('//fieldset/h3')).getText().then((function(el) {
      array.push(el);
  }))
  element(by.xpath('//span[2]/h3')).getText().then((function(el) {
      array.push(el);
  }))
    return array;
    }
  this.findContactBtnText = () => {
    return element(by.xpath("//a[contains(text(), 'Contact')]")).getText();
  };
  this.findContactBtn = () => {
    element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  };
  
};

module.exports = new HomePage();
