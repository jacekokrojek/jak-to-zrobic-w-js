var homePage = require(browser.__pagesDir + "/home");
var speakers = require(browser.__dataDir + "/speakers.json");

describe("How to do it in JS homepage", function () {
  beforeEach(function () {
    homePage.get();
  });

  it("should have Agile & Automation Days", function () {
    expect(homePage.getTitle()).toEqual(
      "Agile & Automation Days | Conference & Workshops"
    );
  });

  it("should contain correct speakers", function () {
    homePage.menuAboutButton();
    let list = homePage.getSpeakers();
    expect(list).toEqual(speakers.data);
  });
});
