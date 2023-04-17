describe("handle dropdowns", () => {
  it("dropdowns with select option", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Finland")
      .should("have.value", "Finland");
  });

  //it.skip means this test will not run

  it.skip("dropdowns without select option", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Bangladesh").type("{enter}");

    cy.get("#select2-billing_country-container").should(
      "have.text",
      "Bangladesh"
    );
  });

  it.skip("auto suggestion dropdowns ", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi University").click();
  });

  it("dynamic dropdowns ", () => {
    cy.visit("https://www.google.com/");

    cy.get("#APjFqb").type("cypress automation");

    cy.get(".wM6W7d").contains("cypress automation tutorial").click();
  });
});
