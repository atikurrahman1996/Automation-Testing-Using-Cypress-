describe("handling tables", () => {
  beforeEach("Login", () => {});

  it("new tabs", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");

    cy.get("#input-username").type("demo");

    cy.get("#input-password").type("demo");

    cy.get("button[type='submit']").click();

    cy.get(".btn-close").click();

    cy.get("#menu-customer").click();

    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("Check number of Rows & Columns", () => {
    cy.get(".table.table-bordered.table-hover>tbody>tr").should(
      "have.length",
      "10"
    );

    cy.get(".table.table-bordered.table-hover>thead>tr>td").should(
      "have.length",
      "7"
    );
  });

  it("Check cell data from specific row and column", () => {
    cy.get(
      ".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("liudehua123@qq.com");
  });
});
