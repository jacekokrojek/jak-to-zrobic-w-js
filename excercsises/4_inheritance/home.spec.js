let homePage = require("./pages/home");

describe("Protractor Workshop app", function () {
  beforeEach(function () {
    homePage.load();
  });

  it('should have home page with title "Protractor workshop | Home"', function () {
    expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
  });

  it('should have "Example headline 2" carousel item after clicking on next arrow', function () {
    let  headLine = "Example Headline 2";
    expect(homePage.checkHeadLine()).toEqual(headLine);
  });

  it("should display drop down after clicking on About menu item", function () {
    homePage.checkDropDownMenuWorks()
    expect(browser.getCurrentUrl()).toEqual(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/about.html"
    );
  });
});
