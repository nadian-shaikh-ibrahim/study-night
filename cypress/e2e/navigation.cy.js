describe("Navigation Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:1234");
    });
  
    it("navigates to Card Set page", () => {
      cy.contains("Card Set").click();
  
      cy.url().should("include", "card");
    });
  
    it("navigates to About page", () => {
      cy.contains("About").click();
  
      cy.url().should("include", "about");
    });
  
    it("navigates to Home page", () => {
      cy.contains("Home").click();
  
      cy.url().should("include", "/");
    });
  });