describe("Forms Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:1234");
    });
  
    it("submits Create Set form successfully", () => {
      cy.get('input[name="title"]').type("Study Set");
  
      cy.get('input[type="submit"]').first().click();
    });
  
    it("shows error on empty Create Set form submission", () => {
      cy.get('input[type="submit"]').first().click();
  
      cy.contains("error").should("exist");
    });
  
    it("submits Add Card form successfully", () => {
      cy.get('input[name="question"]').type("Question");
  
      cy.get('input[name="answer"]').type("Answer");
  
      cy.get('input[type="submit"]').last().click();
    });
  
    it("shows error on empty Add Card form submission", () => {
      cy.get('input[type="submit"]').last().click();
  
      cy.contains("error").should("exist");
    });
  });