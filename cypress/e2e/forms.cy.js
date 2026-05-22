describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("submits Create Set form successfully", () => {
    cy.get('input[name="titleInput"]').type("Study Set");
    cy.get('[data-cy="set_form"]').submit();
  });

  it("shows error on empty Create Set form submission", () => {
    cy.get('[data-cy="set_form"]').submit();
    cy.contains("TITLE CANNOT BE EMPTY").should("be.visible");
  });

  it("submits Add Card form successfully", () => {
    cy.get('input[name="termInput"]').type("Question");
    cy.get('input[name="descriptionInput"]').type("Answer");
    cy.get('[data-cy="card_form"]').submit();
  });

  it("shows error on empty Add Card form submission", () => {
    cy.get('[data-cy="card_form"]').submit();
    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("be.visible");
  });
});