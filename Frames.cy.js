import "cypress-iframe";

describe("handling frames", () => {
  it("handling iframes ", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");
    //the-internet.herokuapp.com/iframe

    cy.iframe("#mce_0_ifr").clear().type("Welcome");
  });
});
