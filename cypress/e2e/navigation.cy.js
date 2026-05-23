describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Card Set page", () => {
    cy.get('[data-cy="nav-card-sets"]').click();
    cy.get('form').should("be.visible");
  });

  it("navigates to About page", () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.contains("About").should("be.visible");  
  });

  it("navigates to Home page", () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.get('[data-cy="header"]').should("be.visible"); 
  });
});