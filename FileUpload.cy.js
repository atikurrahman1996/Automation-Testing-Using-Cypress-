import "cypress-file-upload";
describe("handling file upload", () => {
  it("Single file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("Git.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("drag-n-drop file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("Git.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span"
    ).contains("Git.pdf");
  });

  it.only("Multiple file upload ", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    cy.get("#filesToUpload").attachFile(["Git.pdf", "cypress.pdf"]);
    cy.wait(5000);

    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
  });
});
