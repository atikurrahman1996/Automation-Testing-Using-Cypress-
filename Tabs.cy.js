describe("handling tabs", () => {
  it("new tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //Parent Window

    // delete target attribute with invoke for link

    cy.get(".example>a").invoke("removeAttr", "target").click(); //Remove target attribute & click

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    ); //Child Window

    cy.wait(5000);

    cy.go("back"); // shift to parent window
  });
});
