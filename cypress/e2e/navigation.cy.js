describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Card Set page", () => {
   
    cy.contains("Card Sets").click();
    cy.contains("Create Set").should("be.visible");
  });

  it("navigates to About page", () => {
    cy.contains("About").click();
    cy.contains("About Quizlet").should("be.visible");  
  });

  it("navigates to Home page", () => {
    cy.contains("Home").click();
    cy.contains("Flashcard App").should("be.visible"); 
  });
});