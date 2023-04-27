describe("MyTestSuit", () => {
  // when our test result was failed cypress will take screenshoot autometically
  // for intentionally taking screenshoot we can use these below method

  it.skip("Captured ScreenShoot and Videos", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.screenshot("Homepage"); // this will take home page screenshoot
    cy.wait(5000);
    cy.get("img[title='Your Store']").screenshot("Logo"); // this will take screenshoot for specific element
  });

  // automatically captured screenshoot and videos for failure test or error test

  it("Captured ScreenShoot and Videos", () => {
    cy.visit("https://demo.opencart.com/"); //  Lunch URL
    cy.wait(5000);
    cy.get("li:nth-child(7) a:nth-child(1)").click(); // Click on Camera section
    cy.get("div[id='content'] h2").should("have.text", "Tablets"); // Validation Camera, but we put Tablets for  failure testing purose
  });
});
