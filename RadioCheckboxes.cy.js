describe("Check UI Elements", () => {
  it("Check Radio Button Elements", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //Check Visibility

    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    //Selecting Radio Button

    cy.get("#male").check().should("be.checked");
    cy.get("#female").should("not.be.checked");

    cy.get("#female").check().should("be.checked");
    cy.get("#male").should("not.be.checked");

    //Selecting checkbox Button

    cy.get("#monday").should("be.visible"); //Visibility of the element

    //Selecting Single check box monday

    cy.get("#monday").check().should("be.checked");

    //Un Selecting Single check box monday

    cy.get("#monday").uncheck().should("not.be.checked");

    //Selecting all the  check box

    cy.get(".form-check-input[type='checkbox']").check().should("be.checked");
    cy.get(".form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    //Selecting first & last check box

    cy.get(".form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get(".form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});
