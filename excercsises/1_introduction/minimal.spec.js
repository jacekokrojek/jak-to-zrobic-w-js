describe("Protractor workshop app", function () {
  it("should have home page with title Protractor workshop | Home", function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
    let pageTitle = browser.driver.getTitle();
    expect(pageTitle).toEqual("Protractor workshop | Home");
  });

  it("should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved", function () {
    let footerCopyright = element(by.xpath("//footer/div/div"));
    let expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved";
    expect(footerCopyright.getText()).toContain(expectedHTML);
  });

  it('should have "Example headline 1" carousel item after entering site', function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
    let pageH1Carusel = element(by.css(".active  div.carousel-caption > h1"));
    expect(pageH1Carusel.getText()).toEqual("Example Headline 1");
  });

  it("should have correct feature header", function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
    let title = element(by.css("div.span12.cnt-title > h1"));
    expect(title.getText()).toEqual(
      "At vero eos et accusamus et iusto odio dignissimos"
    );
  });

  it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', function () {
    let menuItems = ["Home", "About", "Services", "Blog", "Contact"];
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
    let menuElements = element(by.css("ul.nav"))
      .getText()
      .then((el) => {
        return el.split("\n");
      });
    expect(menuItems).toEqual(menuElements);
  });

  it("should have Feature A, Feature B, Feature C sections ...", function () {
    let FeatureArray = ["Feature A", "Feature B", "Feature C"];
    let featureElements = element.all(by.xpath("//h2")).map((el) => {
      return el.getText();
    });
    expect(featureElements).toEqual(FeatureArray);
  });

  it('should route to "Blog" pages after selecting link', function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
    element(by.xpath("//a[contains(text(), 'Blog')]")).click();
    expect(browser.getCurrentUrl()).toEqual(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/blog.html"
    );
  });
});
