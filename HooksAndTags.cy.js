//Hooks:/before/after/beforeEach/afterEach
//Tags:/skipp/only

describe("MyTestSuit", () => {
  before(() => {
    cy.log("***** Launch the Application******");
  });

  after(() => {
    cy.log("***** Closed the  Application******");
  });

  beforeEach(() => {
    cy.log("***** Login the Application******");
  });

  afterEach(() => {
    cy.log("***** Logout the Application******");
  });

  it("search", () => {
    cy.log("***** searching******");
  });

  it("advanced search", () => {
    cy.log("***** advance searching******");
  });

  it("listing items", () => {
    cy.log("***** listing items******");
  });
});
