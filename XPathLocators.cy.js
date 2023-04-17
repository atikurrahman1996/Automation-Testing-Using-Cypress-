describe("XPathLocators", () => {
  it("find number of products", () => {
    cy.visit("http://automationpractice.pl/index.php#blockbestsellers");
    cy.xpath("//ul[@id='blockbestsellers']/li").should("have.length", 6);
  });

  //Chained xpath

  it("chained xpath", () => {
    cy.visit("http://automationpractice.pl/index.php#blockbestsellers");
    cy.xpath("//ul[@id='blockbestsellers']")
      .xpath("./li")
      .should("have.length", 6);
  });
});
