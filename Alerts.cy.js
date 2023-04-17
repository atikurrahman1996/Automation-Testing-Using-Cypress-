describe("javascript alerts", () => {
  //Js alert

  it("Js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });

    //alert window automatically closed by cypress

    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  //Js confirmation alert, it will comes with OK & Cancel Button

  it("Js confirm alert-Clicked Ok ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.get("#result").should("have.text", "You Clicked: OK");
  });

  it("Js confirm alert-Clicked Cancel ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); //cyress close alert window using cancel button

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //Js prompt alert, it will comes with input box and OK & Cancel Button

  it("Js prompt alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome atik");
    });

    cy.get("button[onclick='jsPrompt()']").click();

    //cypress will automatically closed prompt alert, it will use OK button by default

    cy.get("#result").should("have.text", "You entered: welcome atik");
  });

  //Authenticated alert

  it.only("Authenticated alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    cy.get("div[class='example'] p").should("have.contain", "Congratulations!");
  });
});
