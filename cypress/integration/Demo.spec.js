describe("Demo", () => {
  it("should run through the entire application", () => {
    cy.visit("/");
    cy.get('.app-top-half').scrollTo(0, 500, {duration: 1400});
    cy.get('.app-top-half').scrollTo(0, -500, {duration: 2500});
    cy.wait(3000);
    cy.contains("CLX").click();
    cy.wait(3000);
  });
});