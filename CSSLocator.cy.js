describe("CSSLocator", () => {
  it("csslocator", () => {
    cy.visit("http://automationpractice.pl/index.php");

    cy.get("#search_query_top").type("T-Shirts"); // id
    cy.get("button[name='submit_search']").click(); //  attribute
    cy.get(".lighter").contains("T-Shirts"); // class
  });
});
