describe("handling mouse events", () => {
  it("handling mouse hover action", () => {
    cy.visit("https://demo.opencart.com/");

    cy.get(
      ".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']"
    )
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });

  //Handling RightClick Action

  it("mouse right click action", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Approch 1

    //cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    //cy.get(".context-menu-icon-copy>span").should("be.visible");

    // Approch 2

    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-copy>span").should("be.visible");
  });

  //Handling DoubleClick Action

  it.only("mouse double click action", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );

    cy.frameLoaded("#iframeResult"); //Load the frame
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });
});
