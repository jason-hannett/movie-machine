describe("User interaction with nav", () => {
  it("page successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  it("search bar takes input", () => {
    cy.get(".search-field").type("batman").should("have.value", "batman");
  });

  it("menu button displays menu", () => {
    cy.get(".menu").click();
  });

  it("close button closes menu", () => {
    cy.get(".close-button").click();
  });

  it("login routes user to component", () => {
    cy.get(".login").click();
    cy.url().should("include", "/auth");
  });
});
