describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get('[data-cy="nav-card-sets"]').click();
  });

  it("submits Create Set form successfully", () => {
    cy.get('input[name="titleInput"]').type("Study Set");
    cy.get('form').first().submit(); 
  });

  it("shows error on empty Create Set form submission", () => {
    cy.get('form').first().submit();
    cy.contains("CANNOT BE EMPTY", { matchCase: false }).should("be.visible");
  });

  it("submits Add Card form successfully", () => {
    cy.get('input[name="termInput"]').type("Question");
    cy.get('input[name="descriptionInput"]').type("Answer");
    cy.get('form').last().submit();
  });

  it("shows error on empty Add Card form submission", () => {
    cy.get('form').last().submit();
    cy.contains("CANNOT BE EMPTY", { matchCase: false }).should("be.visible");
  });
});