class NotesPage {
  clickHomeCategory() {
    cy.get('[data-testid="category-home"]').click();
  }

  clickWorkCategory() {
    cy.get('[data-testid="category-work"]').click();
  }

  clickAddNote() {
    cy.get('[data-testid="add-new-note"]').click();
  }

  selectCategoryCheckbox() {
    cy.get('.form-check-label').click();
  }

  enterTitle(title) {
    cy.get('[data-testid="note-title"]').type(title);
  }

  enterDescription(description) {
    cy.get('[data-testid="note-description"]').type(description);
  }

  submitNote() {
    cy.get('[data-testid="note-submit"]').click();
  }
}

export default NotesPage;
